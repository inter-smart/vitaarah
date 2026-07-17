import { AdminNotificationTemplate } from "./templates/admin-template";
import { CustomerConfirmationTemplate } from "./templates/customer-template";

declare const strapi: any;

export const emailService = {
  /**
   * General asynchronous method to send email via Strapi's Email provider.
   */
  async sendEmail(to: string, subject: string, html: string): Promise<boolean> {
    try {
      await strapi.plugin("email").service("email").send({
        to,
        subject,
        html,
      });
      strapi.log.info(`Email sent successfully to ${to} (Subject: "${subject}")`);
      return true;
    } catch (error: any) {
      strapi.log.error(`Email failed to send to ${to}. Error: ${error?.message || error}`);
      return false;
    }
  },

  /**
   * Formulate and asynchronously send an email notification to the Administrator.
   */
  async sendAdminNotification(title: string, fields: { label: string; value: any }[]): Promise<void> {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
    if (!adminEmail) {
      strapi.log.warn("ADMIN_NOTIFICATION_EMAIL is not defined in environment variables. Admin email notification skipped.");
      return;
    }
    const html = AdminNotificationTemplate(title, fields);
    
    // We send this in the background (asynchronous & non-blocking)
    this.sendEmail(adminEmail, title, html).catch((err: any) => {
      strapi.log.error(`SMTP error during admin email sending: ${err?.message || err}`);
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
      strapi.log.warn("Customer email address is blank. Customer confirmation email skipped.");
      return;
    }
    const html = CustomerConfirmationTemplate(name, messageBody);
    
    // We send this in the background (asynchronous & non-blocking)
    this.sendEmail(to, subject, html).catch((err: any) => {
      strapi.log.error(`SMTP error during customer confirmation email sending: ${err?.message || err}`);
    });
  }
};
