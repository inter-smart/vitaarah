import { getTreatmentDetailQuery } from "@/lib/queries";
import TreatmentAlchemy from "@/components/blocks/treatment/treatment-alchemy";
import TreatmentComplementary from "@/components/blocks/treatment/treatment-complementary";
import TreatmentDetail from "@/components/blocks/treatment/treatment-detail";
import TreatmentFaq from "@/components/blocks/treatment/treatment-faq";
import TreatmentRight from "@/components/blocks/treatment/treatment-right";
import TreatmentRitualExperience from "@/components/blocks/treatment/treatment-ritual-experience";
import TreatmentRythym from "@/components/blocks/treatment/treatment-rythym";
import InnerHero from "@/components/common/InnerHero";
import { notFound } from "next/navigation";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbNav from "@/components/common/breadcrumb";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const url = `/api/treatments?filters[slug][$eq]=${slug}&${getTreatmentDetailQuery()}`;
  const res = await fetchAPI(url);

  const treatment = res?.data?.[0];

  return buildMetadata(treatment?.seo, {
    title: treatment?.title || "Treatment",
    description: treatment?.short_description,
    image: treatment?.hero?.hero_media?.url,
  });
}

export default async function TreatmentDetails({ params }) {
  const { slug } = await params;
  const url = `/api/treatments?filters[slug][$eq]=${slug}&${getTreatmentDetailQuery()}`;

  const res = await fetchAPI(url);
  const treatment = res?.data?.[0];

  if (!treatment) {
    notFound();
  }
  const detailsData = {
    what_is_section: treatment.what_is_section,
    title: treatment.title,
    short_description: treatment.short_description,
    tags: [treatment.duration_info, treatment.best_time_info],
  };

  // extract the root props for commitmentDetails to pass into TreatmentRight
  const commitmentDetails = {
    duration_info: treatment.duration_info,
    sessions_info: treatment.sessions_info,
    fequency_info: treatment.fequency_info, // Note: schema has 'fequency_info'
    best_time_info: treatment.best_time_info,
  };

  console.log("TreatmentDetails treatment:", treatment);

  const category = treatment?.related_treatment_category;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
  ];
  if (category) {
    breadcrumbItems.push({
      label: category.title,
      href: `/treatments/category/${category.slug}`,
    });
  }
  breadcrumbItems.push({ label: treatment.title });

  return (
    <>
      {treatment.hero && <InnerHero data={treatment.hero} />}
      <BreadcrumbNav items={breadcrumbItems} />
      {detailsData && <TreatmentDetail data={detailsData} />}
      {treatment.ritual_experience_section && (
        <TreatmentRitualExperience data={treatment.ritual_experience_section} />
      )}
      {treatment.treatment_benefits_section && (
        <TreatmentAlchemy data={treatment.treatment_benefits_section} />
      )}
      {treatment.right_for_you_section && (
        <TreatmentRight
          data={treatment.right_for_you_section}
          commitmentDetails={commitmentDetails}
        />
      )}
      {treatment.faq_section && <TreatmentFaq data={treatment.faq_section} />}
      {treatment.related_treatments_section && (
        <TreatmentComplementary data={treatment.related_treatments_section} />
      )}
      {treatment.cta_treatment_section && (
        <TreatmentRythym data={treatment.cta_treatment_section} />
      )}
    </>
  );
}
