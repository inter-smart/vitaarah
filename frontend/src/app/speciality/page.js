import { getSpecialitiesPageQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import InnerHero from "@/components/common/InnerHero";
import SpecialityPathway from "@/components/blocks/speciality/speciality-pathway";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/specialities-page?${getSpecialitiesPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: data?.hero?.title || "Specialities | Vitaarah",
    description: data?.hero?.description,
    image: data?.hero?.hero_media?.url,
  });
}

export default async function SpecialityPage() {
  const res = await fetchAPI(`/api/specialities-page?${getSpecialitiesPageQuery()}`);
  const data = res?.data;

  if (!data) {
    notFound();
  }

  const { hero, specialities_listing_section, cta_specialities_section } = data;

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {specialities_listing_section && (
        <SpecialityPathway
          data={{ specialities_listing_section, cta_specialities_section }}
        />
      )}
    </>
  );
}
