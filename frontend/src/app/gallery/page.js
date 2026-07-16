import { getGalleryPage, getGalleryMetadata } from "@/lib/api/gallery";
import Herosection from "@/components/common/InnerHero";
import GalleryListing from "@/components/blocks/gallery/gallery-listing";
import GalleryTreatmentVideos from "@/components/blocks/gallery/gallery-treatment-videos";
import { notFound } from "next/navigation";
import BreadcrumbNav from "@/components/common/breadcrumb";

export async function generateMetadata() {
  return getGalleryMetadata();
}

export default async function GalleryPage() {
  const pageData = await getGalleryPage();

  if (!pageData) {
    notFound();
  }

  return (
    <>
      {pageData?.hero && <Herosection data={pageData.hero} />}
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      {pageData?.galleryListSection?.gallery_media?.length > 0 && (
        <GalleryListing images={pageData.galleryListSection.gallery_media} />
      )}

      {pageData?.treatment_video && (
        <GalleryTreatmentVideos data={{
          ...pageData.treatment_video,
          gallery_video: pageData.treatment_video.gallery_videos
        }} />
      )}
    </>
  );
}
