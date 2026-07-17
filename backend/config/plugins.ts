import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const fromName = env('SMTP_FROM_NAME');
  const fromEmail = env('SMTP_FROM', 'no-reply@example.com');
  const defaultFrom = fromName ? `"${fromName}" <${fromEmail}>` : fromEmail;

  return {
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env.int('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          secure: env.bool('SMTP_SECURE', false),
          tls: {
            rejectUnauthorized: false,
          },
        },
        settings: {
          defaultFrom,
          defaultReplyTo: env('SMTP_REPLY_TO', defaultFrom),
        },
      },
    },
  };
};

export default config;
