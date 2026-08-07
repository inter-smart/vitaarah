import { brevoService } from "../../../../services/brevo";

declare const strapi: any;

export default {
  async afterCreate(event: any) {
    const { result } = event;
    if (!result || !result.documentId) return;

    // Prevent duplicate emails in Strapi 5 Draft & Publish architecture
    // by only triggering on the published version (or draft if publishedAt is not used, but forms usually publish instantly).
    if (result.publishedAt === null) return;

    try {
      // Query the full entry
      const entry = await strapi.documents("api::contact-enquiry.contact-enquiry").findOne({
        documentId: result.documentId,
      });

      if (!entry) return;

      const dateStr = new Date(entry.createdAt).toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      });

      const isQuote = entry.page_title?.toLowerCase().includes("quote") || entry.page_url?.toLowerCase().includes("quote");
      const title = isQuote ? "New Quote Request" : "New Contact Enquiry";
      const customerSubject = isQuote ? "Quote Request Received" : "Thank you for contacting us";
      
      const frontendUrl = process.env.FRONTEND_URL || "https://vitaarah.ae";

      // 1. Send Admin Email Notification (Asynchronous & Safe)
      brevoService.sendAdminNotification(title, [
        { label: "Name", value: entry.name },
        { label: "Email", value: entry.email },
        { label: "Phone", value: entry.phone },
        { label: "Subject", value: entry.page_title || (isQuote ? "Quote Request" : "Contact Enquiry") },
        { label: "Message", value: entry.message },
        { label: "Submission Date", value: dateStr },
      ]);

      // 2. Send Customer Confirmation Email (Asynchronous & Safe)
      const customerMsg = isQuote
        ? `Thank you for requesting a quote from Vitaarah.\n\n` +
          `We have successfully received your quote request. Our expert team will review the details and get back to you with custom options shortly.\n\n` +
          `For immediate assistance, please reply directly to this email or visit our website at ${frontendUrl}.`
        : `Thank you for contacting Vitaarah.\n\n` +
          `We have successfully received your enquiry. Our team is reviewing it and will get back to you shortly.\n\n` +
          `For any immediate questions, feel free to reply to this email or visit our website at ${frontendUrl}.`;

      brevoService.sendCustomerConfirmation(
        entry.email,
        entry.name,
        customerSubject,
        customerMsg
      );
    } catch (err: any) {
      strapi.log.error(`Error in contact-enquiry afterCreate lifecycle: ${err?.message || err}`);
    }
  },
};
