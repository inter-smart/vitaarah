import { fetchAPI, buildQuery } from "@/lib/strapi";
import { seoPopulate } from "@/lib/queries";

const headerQuery = buildQuery({
  header_logo: true,
  navigation: true,
  mega_menu_image: true,
  cta_button: { populate: { icon: true } },
});

const footerQuery = buildQuery({
  footer_logo: true,
  quick_links: true,
  legal_links: true,
});

const siteSettingQuery = buildQuery({
  logo: true,
  favicon: true,
  social_share_image: true,
  seo: seoPopulate,
  social_links: { populate: { icon: true } },
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
