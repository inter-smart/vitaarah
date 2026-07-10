import { getTreatmentPageQuery, getTreatmentCategoriesQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import TreatmentPathway from "@/components/blocks/treatment/treatment-pathway";
import TreatmentRitual from "@/components/blocks/treatment/treatment-ritual";
import InnerHero from "@/components/common/InnerHero";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/treatment-page?${getTreatmentPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: data?.hero?.title || "Treatments",
    description: data?.hero?.description || "Discover our dedicated treatment pathways.",
    image: data?.hero?.hero_media?.url,
  });
}

export default async function TreatmentPage() {
  const [pageRes, categoriesRes] = await Promise.all([
    fetchAPI(`/api/treatment-page?${getTreatmentPageQuery()}`),
    fetchAPI(`/api/treatment-categories?${getTreatmentCategoriesQuery()}`),
  ]);

  const pageData = pageRes?.data;
  const treatmentCategoriesData = categoriesRes?.data ?? [];

  if (!pageData) {
    notFound();
  }

  const { hero, treatment_listing_section, treatment_cta_section } = pageData;

  const listingData = treatment_listing_section
    ? {
        ...treatment_listing_section,
        categories: treatmentCategoriesData,
      }
    : null;

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {listingData && <TreatmentPathway data={listingData} />}
      {treatment_cta_section && <TreatmentRitual data={treatment_cta_section} />}
    </>
  );
}
