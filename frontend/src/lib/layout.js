import { fetchAPI, buildQuery } from "@/lib/strapi";

const headerQuery = buildQuery({
  logo: true,
  navigation: true,
  ctaButton: { populate: { icon: true } },
});

const footerQuery = buildQuery({
  logo: true,
  quickLinks: true,
  legalLinks: true,
  socialLinks: { populate: { icon: true } },
});

const siteSettingQuery = buildQuery({
  logo: true,
  favicon: true,
  social_share_image: true,
  seo: { populate: { og_image: true } },
});

export async function getLayoutData() {
  const [header, footer, siteSetting] = await Promise.all([
    fetchAPI(`/api/header?${headerQuery}`),
    fetchAPI(`/api/footer?${footerQuery}`),
    fetchAPI(`/api/site-setting?${siteSettingQuery}`),
  ]);

  return {
    header: header?.data ?? null,
    footer: footer?.data ?? null,
    siteSetting: siteSetting?.data ?? null,
  };
}
