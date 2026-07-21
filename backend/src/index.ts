// import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }) {
    // Validate Brevo API Key on startup
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      throw new Error("[Startup Error] BREVO_API_KEY is missing from environment variables.");
    }
    if (!apiKey.startsWith("xkeysib-")) {
      throw new Error("[Startup Error] BREVO_API_KEY is invalid. It must start with 'xkeysib-'. Do not use the MCP Base64 key.");
    }
    strapi.log.info("[Brevo Service] BREVO_API_KEY successfully validated on startup.");

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
