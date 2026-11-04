import { getSpecialitiesPageQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import InnerHero from "@/components/common/InnerHero";
import SpecialityPathway from "@/components/blocks/treatment-category/speciality-pathway";
import BreadcrumbNav from "@/components/common/breadcrumb";

// Falls back to the query without `conditions` if the Strapi backend has not
// been redeployed with that field yet, so the page never 404s during rollout.
async function getSpecialitiesPage() {
  return (
    (await fetchAPI(`/api/specialities-page?${getSpecialitiesPageQuery()}`)) ??
    (await fetchAPI(
      `/api/specialities-page?${getSpecialitiesPageQuery({ withConditions: false })}`,
    ))
  );
}

export async function generateMetadata() {
  const res = await getSpecialitiesPage();
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: data?.hero?.title || "Specialities | Vitaarah",
    description: data?.hero?.description,
    image: data?.hero?.hero_media?.url,
  });
}

export default async function SpecialityPage() {
  const res = await getSpecialitiesPage();
  const data = res?.data;

  if (!data) {
    notFound();
  }

  const { hero, specialities_listing_section, cta_specialities_section } = data;

  return (
    <>
      {hero && <InnerHero data={hero} />}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Specialities" },
        ]}
      />
      {specialities_listing_section && (
        <SpecialityPathway
          data={{ specialities_listing_section, cta_specialities_section }}
        />
      )}
    </>
  );
}
