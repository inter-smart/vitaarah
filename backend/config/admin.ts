import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      accessTokenLifespan: 1800, // 30 minutes
      maxRefreshTokenLifespan: 2592000, // 30 days
      idleRefreshTokenLifespan: 604800, // 7 days
      maxSessionLifespan: 2592000, // 30 days
      idleSessionLifespan: 3600, // 1 hour (requires at least 30 minutes of inactivity)
    },
  },
  watchIgnoreFiles: [
    '**/data.db',
    '**/data.db-journal',
    '**/data.db-shm',
    '**/data.db-wal',
    '**/.tmp/**',
  ],
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    docLinks: env.bool('FLAG_DOC_LINKS', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('FRONTEND_URL', 'https://beta.vitaarah.intersmart.in')],
      async handler(uid, { documentId, locale, status }) {
        let slug = '';
        if (uid.startsWith('api::')) {
          try {
            const document = await strapi.documents(uid as any).findOne({
              documentId,
              fields: ['slug'] as any,
            });
            slug = document?.slug || '';
          } catch (e) {
            // Slug field may not exist on this content type
          }
        }

        const pathMap: Record<string, string> = {
          'api::blog.blog': `/blogs/${slug}`,
          'api::treatment.treatment': `/treatments/${slug}`,
          'api::treatment-category.treatment-category': `/treatments/category/${slug}`,
          'api::program.program': `/programs/${slug}`,
          'api::condition.condition': `/conditions/${slug}`,
          'api::package.package': `/packages/${slug}`,
          'api::specialty.specialty': `/specialties/${slug}`,
          'api::home-page.home-page': '/',
          'api::about-page.about-page': '/about',
          'api::contact-page.contact-page': '/contact',
          'api::treatment-page.treatment-page': '/treatments',
          'api::gallery-page.gallery-page': '/gallery',
          'api::package-page.package-page': '/packages',
          'api::blog-page.blog-page': '/blogs',
          'api::terms-page.terms-page': '/terms-and-conditions',
          'api::privacy-page.privacy-page': '/privacy-policy',
          'api::specialities-page.specialities-page': '/specialities',
          'api::member.member': '/about',
        };

        const path = pathMap[uid];
        if (!path) return null;

        const frontendUrl = env('FRONTEND_URL', 'https://beta.vitaarah.intersmart.in');
        const secret = env('PREVIEW_SECRET', 'vitaarah-preview-secret');

        const params = new URLSearchParams({
          secret,
          url: path,
        });

        return `${frontendUrl}/preview?${params.toString()}`;
      },
    },
  },
});

export default config;
