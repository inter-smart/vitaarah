import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import { seoPopulate } from "@/lib/queries";

export const contactPageQuery = buildQuery({
  seo: seoPopulate,
  hero: {
    populate: {
      hero_media: true,
      primary_button: {
        populate: {
          icon: true,
        },
      },
    },
  },
  contactSection: {
    populate: {
      working_time_info: true,
    },
  },
});

export async function getContactPage() {
  const res = await fetchAPI(`/api/contact-page?${contactPageQuery}`);
  return res?.data;
}

export async function getContactMetadata() {
  const page = await getContactPage();
  const seo = page?.seo;

  return {
    title: seo?.meta_title || page?.hero?.title || "Contact Us | Vitaarah",
    description: seo?.meta_description || "Contact us to start your healing journey.",
    alternates: {
      canonical: seo?.canonical_url,
    },
    openGraph: {
      title: seo?.meta_title,
      description: seo?.meta_description,
      images: seo?.og_image ? [getStrapiMediaUrl(seo.og_image.url)] : [],
    },
  };
}
