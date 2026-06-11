import { fetchAPI, buildQuery } from "@/lib/strapi";

const headerQuery = buildQuery({
  logo: true,
  favicon: true,
  navigation: true,
  ctaButton: { populate: { icon: true } },
});

export async function getLayoutData() {
  const [header] = await Promise.all([
    fetchAPI(`/api/header?${headerQuery}`),
  ]);

  return {
    header: header?.data ?? null,
    footer: null,
  };
}
