import { AdminNotificationTemplate } from "../email/templates/admin-template";
import { CustomerConfirmationTemplate } from "../email/templates/customer-template";

declare const strapi: any;

interface BrevoSendEmailResponse {
  messageId?: string;
  messageIds?: string[];
  message?: string;
  code?: string;
}

export const brevoService = {
  /**
   * General asynchronous method to send email via Brevo REST API.
   */
  async sendEmail(to: string, subject: string, html: string): Promise<boolean> {
    const apiKey = process.env.BREVO_API_KEY;
    const fromName = process.env.SMTP_FROM_NAME || "Vitaarah";
    const fromEmail = process.env.SMTP_FROM || "no-reply@vitaarah.com";
    const replyTo = process.env.SMTP_REPLY_TO || "info@vitaarah.com";

    // Startup check in index.ts guarantees this exists, but TypeScript doesn't know that.
    if (!apiKey) {
      throw new Error("BREVO_API_KEY is missing.");
    }

    const payload = {
      sender: { name: fromName, email: fromEmail },
      to: [{ email: to }],
      replyTo: { email: replyTo },
      subject: subject,
      htmlContent: html,
    };

    strapi.log.info(`[Brevo Service] Queuing email... Recipient: ${to}, Subject: "${subject}"`);

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
        "accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      const status = response.status;
      const rateLimitInfo = status === 429 ? " (Rate Limit Exceeded)" : "";
      
      const errorMessage = `[Brevo Service] API request failed. HTTP Status: ${status}${rateLimitInfo}. Recipient: ${to}, Subject: "${subject}". Error Body: ${errorText}`;
      strapi.log.error(errorMessage);
      
      throw new Error(errorMessage);
    }

    const data: BrevoSendEmailResponse = await response.json();
    const messageId = data.messageId ?? data.messageIds?.[0] ?? "N/A";
    
    strapi.log.info(`[Brevo Service] Email sent successfully! HTTP Status: ${response.status}. Recipient: ${to}. MessageId: ${messageId}`);
    return true;
  },

  /**
   * Formulate and asynchronously send an email notification to the Administrator.
   */
  async sendAdminNotification(title: string, fields: { label: string; value: any }[]): Promise<void> {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
    if (!adminEmail) {
      strapi.log.warn("[Brevo Service] ADMIN_NOTIFICATION_EMAIL is not defined in environment variables. Admin email notification skipped.");
      return;
    }
    const html = AdminNotificationTemplate(title, fields);
    
    // We send this in the background (asynchronous & non-blocking)
    this.sendEmail(adminEmail, title, html).catch((err: any) => {
      strapi.log.error(`[Brevo Service] Unhandled error during admin email sending: ${err?.message || err}`);
    });
  },

  /**
   * Formulate and asynchronously send a confirmation email to the Customer.
   */
  async sendCustomerConfirmation(
    to: string,
    name: string,
    subject: string,
    messageBody: string
  ): Promise<void> {
    if (!to) {
      strapi.log.warn("[Brevo Service] Customer email address is blank. Customer confirmation email skipped.");
      return;
    }
    const html = CustomerConfirmationTemplate(name, messageBody);
    
    // We send this in the background (asynchronous & non-blocking)
    this.sendEmail(to, subject, html).catch((err: any) => {
      strapi.log.error(`[Brevo Service] Unhandled error during customer confirmation email sending: ${err?.message || err}`);
    });
  }
};
