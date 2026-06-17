import { fetchAPI, buildQuery } from "@/lib/strapi";
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
      {hero && <HomeHero data={hero} />}
      {about && <HomeAbout data={about} />}
      {specialities && <HomeSpecialities data={specialities} />}
      {treatments && <HomeTreatments data={treatments} />}
      {packages && <HomePackages data={packages} />}
      {testimonials && <HomeTestimonials data={testimonials} />}
      {members && <HomeMembers data={members} />}
      {blogs && <HomeBlogs data={blogs} />}
    </>
  );
}
