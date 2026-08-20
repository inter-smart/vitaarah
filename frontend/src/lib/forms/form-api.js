/**
 * Core API Layer for Form Submissions to Strapi 5
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// Define allowed fields based on actual Strapi schemas
const SCHEMAS = {
  "/api/appointment-forms": ["name", "email", "phone", "page_url", "page_title", "slug", "page_type", "user_agent"],
  "/api/consultations": ["name", "phone", "email", "requested_treatment", "message", "page_url", "page_title", "slug", "page_type", "user_agent"],
  "/api/contact-enquiries": ["name", "email", "phone", "message", "page_url", "page_title", "slug", "page_type", "user_agent"],
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
    let value = data[key];
    if (typeof value === "string") {
      value = value.trim();
    }
    if (allowedFields.includes(key) && value !== undefined && value !== null && value !== "") {
      cleaned[key] = value;
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
 * @param {Object} data
 */
export async function submitAppointment(data) {
  return postForm("/api/appointment-forms", data);
}

/**
 * Submits the Contact Form
 * @param {Object} data
 */
export async function submitContact(data) {
  return postForm("/api/contact-enquiries", data);
}

/**
 * Submits the Book Consultation Form
 * @param {Object} data
 */
export async function submitConsultation(data) {
  return postForm("/api/consultations", data);
}

/**
 * Fetches dynamic treatments for the consultation form.
 * Only retrieves documentId and title to optimize payload size.
 * @returns {Promise<Array>} Array of treatments
 */
export async function getTreatments() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/treatments?fields[0]=title&fields[1]=documentId&fields[2]=slug`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch treatments: ${response.statusText}`);
      return [];
    }

    const json = await response.json();
    return json?.data || [];
  } catch (error) {
    console.error("Error fetching treatments:", error);
    return [];
  }
}
