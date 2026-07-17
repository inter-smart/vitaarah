// import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }) {
    // Validate SMTP environment variables on startup
    const requiredEnv = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USERNAME",
      "SMTP_PASSWORD",
      "SMTP_FROM",
      "SMTP_FROM_NAME",
      "SMTP_REPLY_TO",
      "ADMIN_NOTIFICATION_EMAIL",
    ];

    const missing = requiredEnv.filter((envName) => !process.env[envName]);
    if (missing.length > 0) {
      strapi.log.warn(
        `[Email Service Warning] The following environment variables are missing: ${missing.join(", ")}. Email notifications may not function correctly.`
      );
    } else {
      strapi.log.info("[Email Service] All required SMTP environment variables are present.");
    }

    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    const actions = [
      'api::footer.footer.find',
      'api::header.header.find',
      'api::home-page.home-page.find',
    ];

    for (const action of actions) {
      const existing = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action, role: publicRole.id } });

      if (!existing) {
        await strapi
          .query('plugin::users-permissions.permission')
          .create({ data: { action, role: publicRole.id } });
      }
    }
  },
};
