/**
 * Shared Type Definitions for Vitaarah Forms
 */

/**
 * @typedef {Object} FormMetadata
 * @property {string} page_url - The full URL where the form was submitted.
 * @property {string} page_title - The title of the page where the form was submitted.
 * @property {string} slug - The extracted slug of the current page.
 * @property {string} page_type - The auto-detected type of the page (e.g., "program", "treatment").
 * @property {string} submitted_at - ISO 8601 timestamp of submission.
 * @property {string} user_agent - The browser user agent.
 */

/**
 * @typedef {Object} AppointmentFormData
 * @property {string} name
 * @property {string} [email]
 * @property {string} phone
 * @property {string} date
 * @property {string} time
 * @property {string} [message]
 */

/**
 * @typedef {Object} ContactFormData
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} subject
 * @property {string} message
 */

/**
 * @typedef {Object} QuoteFormData
 * @property {string} name
 * @property {string} [email]
 * @property {string} phone
 * @property {string} [country]
 * @property {string} [preferred_date]
 * @property {string} [program]
 * @property {string} [message]
 */

/**
 * @typedef {Object} ConsultationFormData
 * @property {string} name
 * @property {string} [email]
 * @property {string} phone
 * @property {string} [message]
 * @property {string} [selected_page]
 * @property {string} [selected_slug]
 * @property {string} [page_type]
 */

/**
 * @typedef {Object} NewsletterFormData
 * @property {string} email
 */

module.exports = {}; // Export empty object to make this a module
