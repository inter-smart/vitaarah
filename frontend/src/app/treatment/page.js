import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import TreatmentPathway from "@/components/blocks/treatment/treatment-pathway";
import TreatmentRitual from "@/components/blocks/treatment/treatment-ritual";
import InnerHero from "@/components/common/InnerHero";

const pageQuery = buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  treatment_listing_section: true,
  treatment_cta_section: true,
  seo: {
    populate: {
      og_image: true,
    },
  },
});

const categoriesQuery = buildQuery({
  featured_image: true,
  treatments: true,
});

export async function generateMetadata() {
  const res = await fetchAPI(`/api/treatment-page?${pageQuery}`).catch(
    () => null
  );

  const page = res?.data;

  if (!page) {
    return {};
  }

  const seo = page?.seo || {};
  const metaTitle = seo?.meta_title || "Treatments";
  const metaDescription =
    seo?.meta_description || "Discover our dedicated treatment pathways.";
  const ogImage = seo?.og_image
    ? getStrapiMediaUrl(seo.og_image)
    : page?.hero?.hero_media
      ? getStrapiMediaUrl(page.hero.hero_media)
      : "/images/placeholder.jpg";

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImage }],
    },
  };
}

export default async function TreatmentPage() {
  const endpoint = "/api/treatment-page";
  const query = pageQuery;
  const url = `${endpoint}?${query}`;
  
  console.log("Treatment endpoint:", endpoint);
  console.log("Treatment query:", query);
  console.log("Final URL:", url);

  const [pageRes, categoriesRes] = await Promise.all([
    fetchAPI(url).catch(() => null),
    fetchAPI(`/api/treatment-categories?${categoriesQuery}`).catch(() => null),
  ]);

  const pageData = pageRes?.data ?? null;
  const treatmentCategoriesData = categoriesRes?.data ?? [];

  if (!pageData) return null;

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
