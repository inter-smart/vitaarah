import { brevoService } from "../../../../services/brevo";

declare const strapi: any;

export default {
  async afterCreate(event: any) {
    const { result } = event;
    if (!result || !result.documentId) return;

    // Prevent duplicate emails in Strapi 5 Draft & Publish architecture
    if (result.publishedAt === null) return;

    try {
      // Query the full entry populating requested_treatment relation
      const entry = await strapi.documents("api::consultation.consultation").findOne({
        documentId: result.documentId,
        populate: ["requested_treatment"],
      });

      if (!entry) return;

      const dateStr = new Date(entry.createdAt).toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      });

      const treatmentTitle = entry.requested_treatment?.title || "-";

      // 1. Send Admin Email Notification (Asynchronous & Safe)
      brevoService.sendAdminNotification("New Consultation Request", [
        { label: "Name", value: entry.name },
        { label: "Phone", value: entry.phone },
        { label: "Email", value: entry.email },
        { label: "Treatment", value: treatmentTitle },
        { label: "Message", value: entry.message },
        { label: "Source Page", value: entry.page_title },
        { label: "Page URL", value: entry.page_url },
        { label: "Slug", value: entry.slug },
        { label: "Submission Date", value: dateStr },
      ]);

      // 2. Send Customer Confirmation Email (Asynchronous & Safe)
      const frontendUrl = process.env.FRONTEND_URL || "https://beta.vitaarah.intersmart.in";
      brevoService.sendCustomerConfirmation(
        entry.email,
        entry.name,
        "Consultation Request Received",
        `Thank you for contacting Vitaarah.\n\n` +
        `We have received your consultation request for: ${treatmentTitle}.\n\n` +
        `Our medical team will contact you shortly to discuss your consultation needs and outline the next steps.\n\n` +
        `For immediate questions, reply to this email or visit our website at ${frontendUrl}.`
      );
    } catch (err: any) {
      strapi.log.error(`Error in consultation afterCreate lifecycle: ${err?.message || err}`);
    }
  },
};
