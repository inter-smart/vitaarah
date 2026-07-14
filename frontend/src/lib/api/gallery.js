import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import { seoPopulate } from "@/lib/queries";

export const galleryPageQuery = buildQuery({
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
  galleryListSection: {
    populate: {
      gallery_media: true,
    },
  },
  treatment_video: {
    populate: {
      gallery_videos: {
        populate: {
          video: true,
        },
      },
    },
  },
});

export async function getGalleryPage() {
  const res = await fetchAPI(`/api/gallery-page?${galleryPageQuery}`);
  return res?.data;
}

export async function getGalleryMetadata() {
  const page = await getGalleryPage();
  const seo = page?.seo;

  return {
    title: seo?.meta_title || page?.hero?.title || "Gallery | Vitaarah",
    description: seo?.meta_description || page?.hero?.description,
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
