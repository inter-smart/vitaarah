/**
 * Core API Layer for Form Submissions to Strapi 5
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Define allowed fields based on actual Strapi schemas
const SCHEMAS = {
  "/api/appointment-forms": ["name", "email", "phone", "treatment", "date", "time", "message", "page_url", "page_title", "slug", "page_type", "user_agent"],
  "/api/contact-enquiries": ["name", "email", "phone", "subject", "message", "page_url", "page_title", "slug", "page_type", "user_agent"],
  "/api/program-enquiries": ["name", "email", "phone", "country", "preferred_date", "program", "message", "page_url", "page_title", "slug", "page_type", "user_agent"],
  "/api/consultations": ["name", "phone", "email", "treatment", "message", "page_url", "page_title", "slug", "page_type", "user_agent"],
  "/api/newsletter-subscriptions": ["email", "page_url", "user_agent"]
};

/**
 * Cleans the payload to ensure it exactly matches the Strapi schema
 * @param {string} endpoint 
 * @param {Object} data 
 * @returns {Object} cleaned data
 */
function cleanPayload(endpoint, data) {
  const allowedFields = SCHEMAS[endpoint];
  if (!allowedFields) return data; // Fallback if endpoint not in list

  const cleaned = {};
  for (const key of Object.keys(data)) {
    if (allowedFields.includes(key) && data[key] !== undefined && data[key] !== null && data[key] !== "") {
      cleaned[key] = data[key];
    }
  }
  return cleaned;
}

/**
 * Generic fetch wrapper for submitting Strapi forms
 * @param {string} endpoint - The API endpoint path (e.g., "/api/appointments")
 * @param {Object} rawData - The raw form data to submit
 * @returns {Promise<Object>} The JSON response from the server
 */
export async function postForm(endpoint, rawData) {
  // Clean payload to match schema exactly
  const cleanData = cleanPayload(endpoint, rawData);
  
  // Wrap data as required by Strapi
  const payload = { data: cleanData };

  try {
    // Add a reasonable timeout using AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

    console.log("=== FORM SUBMISSION ===");
    console.log("URL:", `${API_BASE_URL}${endpoint}`);
    console.log("METHOD:", "POST");
    console.log("PAYLOAD:", JSON.stringify(payload, null, 2));

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    const responseText = await response.text();
    let result = null;

    try {
      result = JSON.parse(responseText);
    } catch {
      result = responseText;
    }

    if (!response.ok) {
      console.error(`=== Form submission failed (${response.status}) ===`);
      console.error("REQUEST PAYLOAD:", JSON.stringify(payload, null, 2));
      console.error("RESPONSE BODY:", typeof result === "object" ? JSON.stringify(result, null, 2) : result);
      
      const errorText = typeof result === "string" 
        ? result 
        : (result?.error?.message || JSON.stringify(result, null, 2));

      throw new Error(errorText || "Request failed");
    }

    console.log("=== FORM SUBMISSION SUCCESS ===");
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out. Please check your internet connection.");
    }
    // Re-throw known errors (from non-2xx statuses)
    if (error.message !== "fetch failed" && error.message !== "Failed to fetch") {
      throw error;
    }
    throw new Error("Network error. Please check your internet connection and try again.");
  }
}

/**
 * Submits the Appointment Form
 * @param {import('../../types/forms').AppointmentFormData} data
 */
export async function submitAppointment(data) {
  return postForm("/api/appointment-forms", data);
}

/**
 * Submits the Contact Form
 * @param {import('../../types/forms').ContactFormData} data
 */
export async function submitContact(data) {
  return postForm("/api/contact-enquiries", data);
}

/**
 * Submits the Request Quote Form
 * @param {import('../../types/forms').QuoteFormData} data
 */
export async function submitQuote(data) {
  return postForm("/api/program-enquiries", data);
}

/**
 * Submits the Book Consultation Form
 * @param {import('../../types/forms').ConsultationFormData} data
 */
export async function submitConsultation(data) {
  return postForm("/api/consultations", data);
}

/**
 * Submits the Newsletter Form
 * @param {import('../../types/forms').NewsletterFormData} data
 */
export async function submitNewsletter(data) {
  return postForm("/api/newsletter-subscriptions", data);
}
