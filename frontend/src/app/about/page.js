import { getAboutPageQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import AboutIntelligence from "@/components/blocks/about/about-intelligence";
import AboutGuidence from "@/components/blocks/about/about-guidence";
import AboutClinic from "@/components/blocks/about/about-clinic";
import AboutApproach from "@/components/blocks/about/about-approach";
import AboutCredibility from "@/components/blocks/about/about-credibility";
import AboutMoto from "@/components/blocks/about/about-moto";
import HomeAbout from "@/components/blocks/home/home-about";
import InnerHero from "@/components/common/InnerHero";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/about-page?${getAboutPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: data?.hero?.title,
    description: data?.hero?.description,
  });
}

export default async function AboutPage() {
  const res = await fetchAPI(`/api/about-page?${getAboutPageQuery()}`);
  const data = res?.data;

  if (!data) {
    notFound();
  }

  const {
    hero,
    about_section,
    services_section,
    members_section,
    certifications_section,
    clinic_environment_section,
    healing_approach_section,
  } = data;

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {about_section && <HomeAbout data={about_section} />}
      {about_section && <AboutMoto data={about_section} />}
      {services_section && <AboutIntelligence data={services_section} />}
      {members_section && <AboutGuidence data={members_section} />}
      {certifications_section && (
        <AboutCredibility data={certifications_section} />
      )}
      {clinic_environment_section && (
        <AboutClinic data={clinic_environment_section} />
      )}
      {healing_approach_section && (
        <AboutApproach data={healing_approach_section} />
      )}
    </>
  );
}
