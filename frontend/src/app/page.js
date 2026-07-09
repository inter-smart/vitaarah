import { fetchAPI, buildQuery } from "@/lib/strapi";
import Reveal from "@/components/ui/reveal";
import HomeHero from "@/components/blocks/home/home-hero";
import HomeAbout from "@/components/blocks/home/home-about";
import HomeConditions from "@/components/blocks/home/home-conditions";
import HomeTreatments from "@/components/blocks/home/home-packages";
import HomePackages from "@/components/blocks/home/home-programs";
import HomeTestimonials from "@/components/blocks/home/home-testimonials";
import HomeBlogs from "@/components/blocks/home/home-blogs";
import HomeMembers from "@/components/blocks/home/home-members";

export async function generateMetadata() {
  try {
    const seoQuery = buildQuery({
      seo: { populate: { og_image: true } },
    });
    const res = await fetchAPI(`/api/home-page?${seoQuery}`);
    const seo = res?.data?.seo;

    if (!seo) {
      return {
        title: "Vitaarah | The Art of Living Well",
        description: "Discover a digital sanctuary where heritage meets luxury.",
      };
    }

    return {
      title: seo.meta_title || "Vitaarah | The Art of Living Well",
      description: seo.meta_description || "Discover a digital sanctuary where heritage meets luxury.",
      alternates: {
        canonical: seo.canonical_url || "/",
      },
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_description,
        images: seo.og_image?.url ? [process.env.NEXT_PUBLIC_STRAPI_API_URL + seo.og_image.url] : [],
      },
    };
  } catch (error) {
    return {
      title: "Vitaarah | The Art of Living Well",
      description: "Discover a digital sanctuary where heritage meets luxury.",
    };
  }
}

const homePageQuery = buildQuery({
  seo: { populate: { og_image: true } },
  hero: {
    populate: {
      hero_media: true,
      primary_button: { populate: { icon: true } },
      secondary_button: { populate: { icon: true } },
    },
  },
  home_about_section: {
    populate: {
      main_image: true,
      secondary_image: true,
      button: { populate: { icon: true } },
      about_statistic: true,
    },
  },
  home_conditions_section: {
    populate: {
      condition_item: { populate: { icon: true, background_video: true, related_condition: true } },
    },
  },
  home_packages_section: {
    populate: {
      home_package_item: { 
        populate: { 
          background_video: true, 
          related_package: { populate: { featured_image: true } } 
        } 
      },
    },
  },
  home_program_section: {
    populate: {
      home_program_item: { 
        populate: { 
          program_attractions: { populate: { icon: true } }, 
          related_program: { populate: { hero_media: true } } 
        } 
      },
    },
  },
  home_testimonials_section: {
    populate: {
      testimonials: { populate: { author_image: true, video_testimonial: true } },
    },
  },
  home_members_section: {
    populate: {
      members: { populate: { thumbnail_image: true, featured_image: true } },
    },
  },
  home_blogs_section: {
    populate: {
      blogs: { populate: { featured_image: true } },
    },
  },
});

export default async function Home() {
  const res = await fetchAPI(`/api/home-page?${homePageQuery}`);
  const data = res?.data ?? null;

  if (!data?.hero && !data?.home_about_section) return null;

  const {
    hero,
    home_about_section,
    home_conditions_section,
    home_packages_section,
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
      {home_packages_section && (
        <Reveal>
          <HomeTreatments data={home_packages_section} />
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
