import { emailService } from "../../../../services/email";

declare const strapi: any;

export default {
  async afterCreate(event: any) {
    const { result } = event;
    if (!result || !result.documentId) return;

    try {
      // Query the full entry
      const entry = await strapi.documents("api::appointment-form.appointment-form").findOne({
        documentId: result.documentId,
      });

      if (!entry) return;

      const dateStr = new Date(entry.createdAt).toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      });

      // 1. Send Admin Email Notification (Asynchronous & Safe)
      emailService.sendAdminNotification("New Appointment Request", [
        { label: "Name", value: entry.name },
        { label: "Phone", value: entry.phone },
        { label: "Email", value: entry.email },
        { label: "Preferred Treatment", value: "-" },
        { label: "Preferred Date", value: "-" },
        { label: "Preferred Time", value: "-" },
        { label: "Message", value: "-" },
        { label: "Submission Date", value: dateStr },
      ]);

      // 2. Send Customer Confirmation Email (Asynchronous & Safe)
      const frontendUrl = process.env.FRONTEND_URL || "https://beta.vitaarah.intersmart.in";
      emailService.sendCustomerConfirmation(
        entry.email,
        entry.name,
        "Appointment Request Received",
        `Thank you for contacting Vitaarah.\n\n` +
        `We have successfully received your appointment request. Our team will contact you shortly to confirm your booking and coordinate the next steps.\n\n` +
        `For immediate enquiries, you can reply directly to this email or visit our website at ${frontendUrl}.`
      );
    } catch (err: any) {
      strapi.log.error(`Error in appointment-form afterCreate lifecycle: ${err?.message || err}`);
    }
  },
};
