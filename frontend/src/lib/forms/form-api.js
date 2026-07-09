/**
 * Core API Layer for Form Submissions to Strapi 5
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Generic fetch wrapper for submitting Strapi forms
 * @param {string} endpoint - The API endpoint path (e.g., "/api/appointments")
 * @param {Object} data - The raw form data to submit
 * @returns {Promise<Object>} The JSON response from the server
 */
export async function postForm(endpoint, data) {
  // Wrap data as required by Strapi
  const payload = { data };

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

    const responseText = await response.text();
    let result = null;

    try {
      result = JSON.parse(responseText);
    } catch {
      result = responseText;
    }

    if (!response.ok) {
      const errorText = typeof result === "string" 
        ? result 
        : (result?.error?.message || JSON.stringify(result, null, 2));

      console.error(`Form submission failed (${response.status}):`, errorText);
      throw new Error(errorText || "Request failed");
    }

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
  return postForm("/api/appointments", data);
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
  return postForm("/api/consultations", data); // Endpoint guessed from common pattern, update if needed. Wait, let me check the prompt. The prompt didn't specify endpoint for consultation. I'll use /api/consultation-enquiries just in case, but let's stick to /api/consultations for now.
}

/**
 * Submits the Newsletter Form
 * @param {import('../../types/forms').NewsletterFormData} data
 */
export async function submitNewsletter(data) {
  return postForm("/api/newsletter-subscriptions", data);
}
