import Herosection from "@/components/common/InnerHero";
import GalleryListing from "@/components/blocks/gallery/gallery-listing";
import GalleryTreatmentVideos from "@/components/blocks/gallery/gallery-treatment-videos";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";

const galleryPageQuery = buildQuery({
  seo: {
    populate: {
      og_image: true,
    },
  },
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  galleryListSection: true,
  treatment_video: true,
});

export async function generateMetadata() {
  const res = await fetchAPI(`/api/gallery-page?${galleryPageQuery}`).catch(
    () => null,
  );
  const pageData = res?.data || {};
  const seo = pageData?.seo || {};

  const metaTitle =
    seo?.meta_title || pageData?.hero?.title || "Gallery | Vitaarah";
  const metaDescription = seo?.meta_description || "";
  const ogImage = seo?.og_image
    ? getStrapiMediaUrl(seo.og_image)
    : pageData?.hero?.hero_media
      ? getStrapiMediaUrl(pageData.hero.hero_media)
      : "/images/placeholder.jpg";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seo?.keywords || "",
    alternates: {
      canonical: seo?.canonical_url || "",
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImage }],
    },
  };
}

export default async function GalleryPage() {
  const [pageRes, imagesRes, videosRes] = await Promise.all([
    fetchAPI(`/api/gallery-page?${galleryPageQuery}`),
    fetchAPI(
      `/api/gallery-images?${buildQuery({ media: true })}&pagination[page]=1&pagination[pageSize]=100`,
    ),
    fetchAPI(
      `/api/treatment-videos?${buildQuery({ treatment_video: true, thumbnail: true })}&pagination[page]=1&pagination[pageSize]=100`,
    ),
  ]);

  const pageData = pageRes?.data || {};

  return (
    <>
      {pageData?.hero && <Herosection data={pageData.hero} />}
      {imagesRes?.data?.length > 0 && (
        <GalleryListing images={imagesRes.data} />
      )}
      {videosRes?.data?.length > 0 && (
        <GalleryTreatmentVideos
          data={pageData?.treatment_video || {}}
          videos={videosRes.data}
        />
      )}
    </>
  );
}
