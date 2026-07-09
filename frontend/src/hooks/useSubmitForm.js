"use client";

import { useState } from "react";
import { getCurrentPageMeta } from "../utils/getCurrentPageMeta";

/**
 * A reusable hook for handling form submissions to the API.
 * Manages loading state, success/error handling, and auto-injects metadata.
 * 
 * @param {Function} apiSubmitFunction - The specific API function (e.g., submitAppointment)
 * @param {Object} options - Additional options
 * @param {Function} [options.onSuccess] - Callback fired on successful submission
 * @param {Function} [options.onError] - Callback fired on submission error
 * @returns {{ submit: Function, isSubmitting: boolean, isSuccess: boolean, error: string | null, reset: Function }}
 */
export function useSubmitForm(apiSubmitFunction, options = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (formData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Get current page metadata
      const meta = getCurrentPageMeta();

      // 2. Prepare final payload with auto-populated hidden fields
      const payload = {
        ...formData,
        page_url: meta.page_url,
        page_title: meta.page_title,
        slug: formData.selected_slug || meta.slug, // Use formData's slug if provided (for consultation auto-detect)
        page_type: formData.page_type || meta.page_type,
        submitted_at: new Date().toISOString(),
        user_agent: typeof window !== "undefined" ? window.navigator.userAgent : "Unknown",
      };

      // 3. Execute API call
      await apiSubmitFunction(payload);

      // 4. Handle success
      setIsSuccess(true);
      if (options.onSuccess) {
        options.onSuccess();
      }

    } catch (err) {
      // 5. Handle error
      console.error("Form submission error:", err);
      const errorMessage = err.message || "Something went wrong. Please try again.";
      setError(errorMessage);
      
      if (options.onError) {
        options.onError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setError(null);
    setIsSubmitting(false);
  };

  return {
    submit,
    isSubmitting,
    isSuccess,
    error,
    reset
  };
}
