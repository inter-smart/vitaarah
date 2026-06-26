import Herosection from "@/components/common/InnerHero";
import GalleryListing from "@/components/blocks/gallery/gallery-listing";
import GalleryTreatmentVideos from "@/components/blocks/gallery/gallery-treatment-videos";

const local_data = {
  id: 24,
  documentId: "a67zp5r21a35cb8qlzrjp54s",
  createdAt: "2026-06-05T05:56:45.609Z",
  updatedAt: "2026-06-11T06:26:08.249Z",
  publishedAt: "2026-06-11T06:26:08.337Z",
  seo: {
    id: 21,
    metaTitle: "gallery page title",
    metaDescription: "gallery page description",
    canonicalUrl: null,
  },
  hero: {
    id: 25,
    heroMedia: {
      alternativeText: "gallery page title",
      mime: "image/jpeg",
      // if video - mime: "video/mp4",
      url: "/images/gallery-hero.jpg",
    },
    title: "Gallery",
  },
  galleryListSection: {
    id: 15,
    title: "",
    galleryList: [
      {
        id: 10,
        galleryMedia: {
          alternativeText: "gallery-1",
          mime: "image/jpeg",
          url: "/images/gallery-1.jpg",
        },
      },
      {
        id: 10,
        galleryMedia: {
          alternativeText: "gallery-2",
          mime: "image/jpeg",
          url: "/images/gallery-2.jpg",
        },
      },
      {
        id: 10,
        galleryMedia: {
          alternativeText: "gallery-3",
          mime: "image/jpeg",
          url: "/images/gallery-3.jpg",
        },
      },
      {
        id: 10,
        galleryMedia: {
          alternativeText: "gallery-4",
          mime: "image/jpeg",
          url: "/images/gallery-4.jpg",
        },
      },
      {
        id: 10,
        galleryMedia: {
          alternativeText: "gallery-5",
          mime: "image/jpeg",
          url: "/images/gallery-5.jpg",
        },
      },
      {
        id: 10,
        galleryMedia: {
          alternativeText: "gallery-6",
          mime: "image/jpeg",
          url: "/images/gallery-6.jpg",
        },
      },
    ],
  },
  treatmentVideosSection: {
    id: 15,
    title: "Treatment Videos",
    description: "Watch on Instagram · Full videos available",
    subTitle: "Explore Our Full Instagram Journey",
    subDescription:
      "Treatment walkthroughs, patient testimonials, daily Ayurvedic wisdom, and behind-the-scenes moments from our healing space",
    instaUrl: "https://www.instagram.com/vitaarah/",
    instaUsername: "@vitaarah.ayurveda",
    treatmentVideos: [
      {
        id: 10,
        slug: "https://www.instagram.com/vitaarah/",
        galleryMedia: {
          alternativeText: "gallery-1",
          mime: "video/mp4",
          url: "/videos/gallery-1.mp4",
        },
      },
      {
        id: 10,
        slug: "https://www.instagram.com/vitaarah/",
        galleryMedia: {
          alternativeText: "gallery-2",
          mime: "video/mp4",
          url: "/videos/gallery-2.mp4",
        },
      },
      {
        id: 10,
        slug: "https://www.instagram.com/vitaarah/",
        galleryMedia: {
          alternativeText: "gallery-3",
          mime: "video/mp4",
          url: "/videos/gallery-1.mp4",
        },
      },
      {
        id: 10,
        slug: "https://www.instagram.com/vitaarah/",
        galleryMedia: {
          alternativeText: "gallery-4",
          mime: "video/mp4",
          url: "/videos/gallery-2.mp4",
        },
      },
      {
        id: 10,
        slug: "https://www.instagram.com/vitaarah/",
        galleryMedia: {
          alternativeText: "gallery-5",
          mime: "video/mp4",
          url: "/videos/gallery-1.mp4",
        },
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      {local_data.hero && <Herosection data={local_data.hero} />}
      {local_data.galleryListSection && (
        <GalleryListing data={local_data.galleryListSection} />
      )}
      {local_data.treatmentVideosSection && (
        <GalleryTreatmentVideos data={local_data.treatmentVideosSection} />
      )}
    </>
  );
}
