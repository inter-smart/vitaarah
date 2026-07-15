import { getSpecialityDetailQuery } from "@/lib/queries";
import SpecialityDetail from "@/components/blocks/speciality/speciality-details";
import InnerHero from "@/components/common/InnerHero";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/strapi";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetchAPI(
    `/api/specialities?filters[slug][$eq]=${slug}&${getSpecialityDetailQuery()}`,
  );

  const speciality = res?.data?.[0];

  return buildMetadata(speciality?.seo, {
    title: speciality?.title || "Speciality",
    description: speciality?.detail_section?.subtitle,
    image: speciality?.hero?.hero_media?.url,
  });
}

export default async function TreatmentsDetailPage({ params }) {
  const { slug } = await params;

  const res = await fetchAPI(
    `/api/specialities?filters[slug][$eq]=${slug}&${getSpecialityDetailQuery()}`,
  );

  const speciality = res?.data?.[0];

  if (!speciality) {
    notFound();
  }

  return (
    <>
      <InnerHero data={speciality.hero} />
      <SpecialityDetail data={speciality.detail_section} />
    </>
  );
}
