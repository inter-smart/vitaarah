import TreatmentPathway from "@/components/blocks/treatment/treatment-pathway";
import TreatmentRitual from "@/components/blocks/treatment/treatment-ritual";
import InnerHero from "@/components/common/InnerHero";

const local_data = {
  id: 24,
  documentId: "a67zp5r21a35cb8qlzrjp54s",
  createdAt: "2026-06-05T05:56:45.609Z",
  updatedAt: "2026-06-11T06:26:08.249Z",
  publishedAt: "2026-06-11T06:26:08.337Z",
  seo: {
    id: 21,
    metaTitle: "Treatment page title",
    metaDescription: "Treatment page description ",
    canonicalUrl: null,
  },

  hero: {
    id: 25,
    heroMedia: {
      alternativeText: "The Art of Healing",
      mime: "image/jpg",
      url: "/images/treatment.jpg",
    },
    title: "The Art of Healing",
  },
  treatmentSection: {
    title: "Dedicated Pathways to Balance",
    subtitle: "Precision care inspired by timeless traditions",

    therapies: [
      {
        id: 1,
        title: "Abhyanga",
        duration: "60 min",
        shortDescription: "Warm Oil Massage",
        slug: "Abhyanga",
        image: {
          alternativeText: "Abhyanga Therapy",
          mime: "image/jpeg",
          url: "/images/treatment-1.jpg",
        },
      },

      {
        id: 2,
        title: "Shirodhara",
        duration: "45 min",
        shortDescription: "Stream of Stillness",
        slug: "shirodhara",
        image: {
          alternativeText: "Shirodhara Therapy",
          mime: "image/jpeg",
          url: "/images/treatment-2.jpg",
        },
      },

      {
        id: 3,
        title: "Nasya",
        duration: "30 min",
        shortDescription: "Breath & Clarity",
        slug: "nasya",
        image: {
          alternativeText: "Nasya Therapy",
          mime: "image/jpeg",
          url: "/images/treatment-3.jpg",
        },
      },

      {
        id: 4,
        title: "Kizhi",
        duration: "75 min",
        shortDescription: "Herbal Poultice Therapy",
        slug: "kizhi",
        image: {
          alternativeText: "Kizhi Therapy",
          mime: "image/jpeg",
          url: "/images/treatment-4.jpg",
        },
      },

      {
        id: 5,
        title: "Panchakarma",
        duration: "5 – 21 days",
        shortDescription: "The Five-Fold Detox",
        slug: "panchakarma",
        image: {
          alternativeText: "Panchakarma Therapy",
          mime: "image/jpeg",
          url: "/images/treatment-5.jpg",
        },
      },
    ],
  },
  ctaBanner: {
    title: "A ritual, tailored to you.",
    description:
      "Each journey begins with a private consultation to align your treatment with your dosha and intention.",
    button: {
      label: "Begin your Journey",
      slug: "enquiry",
    },
  },
};
export default function TreatmentPage() {
  return (
    <>
      <InnerHero data={local_data.hero} />
      <TreatmentPathway data={local_data.treatmentSection} />
      <TreatmentRitual data={local_data.ctaBanner} />
    </>
  );
}
