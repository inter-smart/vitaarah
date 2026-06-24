import { fetchAPI, buildQuery } from "@/lib/strapi";
import Reveal from "@/components/ui/reveal";
import HomeHero from "@/components/blocks/home/home-hero";
import HomeAbout from "@/components/blocks/home/home-about";
import HomeSpecialities from "@/components/blocks/home/home-specialities";
import HomeTreatments from "@/components/blocks/home/home-treatments";
import HomePackages from "@/components/blocks/home/home-packages";
import HomeTestimonials from "@/components/blocks/home/home-testimonials";
import HomeBlogs from "@/components/blocks/home/home-blogs";
import HomeMembers from "@/components/blocks/home/home-members";

const homePageQuery = buildQuery({
  seo: { populate: { ogImage: true } },
  hero: {
    populate: {
      heroMedia: true,
      primaryButton: { populate: { icon: true } },
      secondaryButton: { populate: { icon: true } },
    },
  },
  about: {
    populate: {
      mainImage: true,
      secondaryImage: true,
      button: { populate: { icon: true } },
      aboutStatistic: true,
    },
  },
  specialities: {
    populate: {
      specialties: { populate: { icon: true, featuredImage: true } },
    },
  },
  treatments: {
    populate: {
      treatments: { populate: { featuredImage: true } },
    },
  },
  packages: {
    populate: {
      packages: {
        populate: {
          featuredImage: true,
          features: { populate: { icon: true } },
        },
      },
    },
  },
  testimonials: {
    populate: {
      testimonials: { populate: { authorImage: true, videoTestimonial: true } },
    },
  },
  members: {
    populate: {
      members: { populate: { thumbnailImage: true, featuredImage: true } },
    },
  },
  blogs: {
    populate: {
      blogs: { populate: { featuredImage: true } },
    },
  },
  // blogs: {
  //   populate: {
  //     blogs: {
  //       fields: ["title", "slug", "excerpt"],
  //       populate: {
  //         featuredImage: true,
  //       },
  //     },
  //   },
  // },
});

// exambles= http://localhost:1337/api/home-page?populate[seo][populate][ogImage]=true&populate[hero][populate][heroMedia]=true&populate[hero][populate][primaryButton][populate][icon]=true&populate[hero][populate][secondaryButton][populate][icon]=true&populate[about][populate][mainImage]=true&populate[about][populate][secondaryImage]=true&populate[about][populate][button][populate][icon]=true&populate[about][populate][aboutStatistic]=true&populate[specialities][populate][specialties][populate][icon]=true&populate[specialities][populate][specialties][populate][featuredImage]=true&populate[treatments][populate][treatments][populate][featuredImage]=true&populate[packages][populate][packages][populate][featuredImage]=true&populate[packages][populate][packages][populate][features][populate][icon]=true&populate[testimonials][populate][testimonials][populate][authorImage]=true&populate[testimonials][populate][testimonials][populate][videoTestimonial]=true&populate[members][populate][members][populate][thumbnailImage]=true&populate[members][populate][members][populate][featuredImage]=true&populate[blogs][populate][blogs][populate][featuredImage]=true


export default async function Home() {
  const res = await fetchAPI(`/api/home-page?${homePageQuery}`);
  const data = res?.data ?? null;

  if (!data?.hero && !data?.about) return null;

  const {
    hero,
    about,
    specialities,
    treatments,
    packages,
    testimonials,
    blogs,
    members,
  } = data;

  return (
    <>
      {hero && <Reveal><HomeHero data={hero} /></Reveal>}
      {about && <Reveal><HomeAbout data={about} /></Reveal>}
      {specialities && <Reveal><HomeSpecialities data={specialities} /></Reveal>}
      {treatments && <Reveal><HomeTreatments data={treatments} /></Reveal>}
      {packages && <Reveal><HomePackages data={packages} /></Reveal>}
      {testimonials && <Reveal><HomeTestimonials data={testimonials} /></Reveal>}
      {members && <Reveal><HomeMembers data={members} /></Reveal>}
      {blogs && <Reveal><HomeBlogs data={blogs} /></Reveal>}
    </>
  );
}
