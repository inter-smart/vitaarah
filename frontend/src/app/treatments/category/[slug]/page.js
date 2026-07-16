import {
  getTreatmentPageQuery,
  getTreatmentCategoryBySlugQuery,
} from "@/lib/queries";
import { fetchAPI } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import InnerHero from "@/components/common/InnerHero";
import TreatmentComplementary from "@/components/blocks/treatment/treatment-complementary";
import TreatmentRitual from "@/components/blocks/treatment/treatment-ritual";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const [pageRes, categoryRes] = await Promise.all([
    fetchAPI(`/api/treatment-page?${getTreatmentPageQuery()}`),
    fetchAPI(`/api/treatment-categories?filters[slug][$eq]=${slug}&${getTreatmentCategoryBySlugQuery()}`),
  ]);

  const pageData = pageRes?.data;
  const categoryData = categoryRes?.data?.[0];

  return buildMetadata(pageData?.seo, {
    title: categoryData?.title || pageData?.hero?.title || "Treatment Category",
    description: categoryData?.short_description || pageData?.hero?.description,
    image: categoryData?.featured_image?.url || pageData?.hero?.hero_media?.url,
  });
}

export default async function TreatmentCategoryDetailPage({ params }) {
  const { slug } = await params;

  const [pageRes, categoryRes] = await Promise.all([
    fetchAPI(`/api/treatment-page?${getTreatmentPageQuery()}`),
    fetchAPI(`/api/treatment-categories?filters[slug][$eq]=${slug}&${getTreatmentCategoryBySlugQuery()}`),
  ]);

  const pageData = pageRes?.data;
  const categoryData = categoryRes?.data?.[0];

  if (!categoryData) {
    notFound();
  }

  const { hero, treatment_cta_section } = pageData || {};

  return (
    <>
      {hero && <InnerHero data={hero} />}
      
      <div className="container pt-[20px]">
        <div className="text_3 font-helvetica-light text-[#7C7C7C] flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/treatments" className="hover:text-black transition-colors">Treatments</Link>
          <span>/</span>
          <span className="text-black">{categoryData.title}</span>
        </div>
      </div>

      <TreatmentComplementary data={categoryData} />
      
      {treatment_cta_section && (
        <TreatmentRitual data={treatment_cta_section} />
      )}
    </>
  );
}
