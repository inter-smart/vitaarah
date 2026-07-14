import { fetchAPI } from "@/lib/strapi";
import { getAboutPageQuery } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export async function getAboutPage() {
  const res = await fetchAPI(`/api/about-page?${getAboutPageQuery()}`);
  return res?.data;
}

export async function getAboutMetadata() {
  const data = await getAboutPage();
  return buildMetadata(data?.seo, {
    title: data?.hero?.title || "About Us",
    description: data?.hero?.description || "Learn more about Vitaarah",
    image: data?.hero?.hero_media?.url,
  });
}
