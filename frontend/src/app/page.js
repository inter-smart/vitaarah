import { getHomePageQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import Reveal from "@/components/ui/reveal";
import HomeHero from "@/components/blocks/home/home-hero";
import HomeAbout from "@/components/blocks/home/home-about";
import HomeConditions from "@/components/blocks/home/home-conditions";
import HomePackages from "@/components/blocks/home/home-programs";
import HomeTestimonials from "@/components/blocks/home/home-testimonials";
import HomeBlogs from "@/components/blocks/home/home-blogs";
import HomeMembers from "@/components/blocks/home/home-members";
import HomeTreatments from "@/components/blocks/home/home-treatments";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/home-page?${getHomePageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: "Vitaarah | The Art of Living Well",
    description: "Discover a digital sanctuary where heritage meets luxury.",
  });
}

export default async function Home() {
  const res = await fetchAPI(`/api/home-page?${getHomePageQuery()}`);
  const data = res?.data;

  if (!data?.hero && !data?.home_about_section) {
    notFound();
  }

  const {
    hero,
    home_about_section,
    home_conditions_section,
    home_treatments_section,
    home_program_section,
    home_testimonials_section,
    home_blogs_section,
    home_members_section,
  } = data;

  return (
    <>
      {hero && (
        <Reveal>
          <HomeHero data={hero} />
        </Reveal>
      )}
      {home_about_section && (
        <Reveal>
          <HomeAbout data={home_about_section} />
        </Reveal>
      )}
      {home_conditions_section && (
        <Reveal>
          <HomeConditions data={home_conditions_section} />
        </Reveal>
      )}
      {home_treatments_section && (
        <Reveal>
          <HomeTreatments data={home_treatments_section} />
        </Reveal>
      )}
      {home_program_section && (
        <Reveal>
          <HomePackages data={home_program_section} />
        </Reveal>
      )}
      {home_testimonials_section && (
        <Reveal>
          <HomeTestimonials data={home_testimonials_section} />
        </Reveal>
      )}
      {home_members_section && (
        <Reveal>
          <HomeMembers data={home_members_section} />
        </Reveal>
      )}
      {home_blogs_section && (
        <Reveal>
          <HomeBlogs data={home_blogs_section} />
        </Reveal>
      )}
    </>
  );
}
