import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'da',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Vitaarah CMS",
        "Auth.form.welcome.subtitle": "Log in to manage your website content",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
