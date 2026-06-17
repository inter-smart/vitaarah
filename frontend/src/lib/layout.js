import { fetchAPI, buildQuery } from "@/lib/strapi";

const headerQuery = buildQuery({
  logo: true,
  favicon: true,
  navigation: true,
  ctaButton: { populate: { icon: true } },
});

const footerQuery = buildQuery({
  logo: true,
  quickLinks: true,
  legalLinks: true,
});

export async function getLayoutData() {
  const [header, footer] = await Promise.all([
    fetchAPI(`/api/header?${headerQuery}`),
    fetchAPI(`/api/footer?${footerQuery}`),
  ]);

  return {
    header: header?.data ?? null,
    footer: footer?.data ?? null,
  };
}
