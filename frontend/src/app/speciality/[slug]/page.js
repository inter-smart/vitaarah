import SpecialityDetail from "@/components/blocks/speciality/speciality-details";
import InnerHero from "@/components/common/InnerHero";
import { notFound } from "next/navigation";

const local_data = {
  id: 24,
  documentId: "a67zp5r21a35cb8qlzrjp54s",
  createdAt: "2026-06-05T05:56:45.609Z",
  updatedAt: "2026-06-11T06:26:08.249Z",
  publishedAt: "2026-06-11T06:26:08.337Z",
  seo: {
    id: 21,
    metaTitle: "Speciality page title",
    metaDescription: "Speciality page description ",
    canonicalUrl: null,
  },
  specialities: [
    {
      id: 1,
      slug: "panchakarma",
      title: "Panchakarma",
      hero: {
        title: "Panchakarma",
        heroMedia: {
          alternativeText: "Panchakarma Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Panchakarma",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Panchakarma Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
    {
      id: 2,
      slug: "skin-rituals",

      title: "Skin Rituals",

      hero: {
        title: "Skin Rituals",
        heroMedia: {
          alternativeText: "Skin Rituals Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Skin Rituals",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Skin Rituals Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
    {
      id: 3,
      slug: "hair-scalp-therapy",

      title: "Hair & Scalp Therapy",

      hero: {
        title: "Hair & Scalp Therapy",
        heroMedia: {
          alternativeText: "Hair & Scalp Therapy Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Hair & Scalp Therapy",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Panchakarma Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
    {
      id: 4,
      slug: "stress-recovery",

      title: "Stress Recovery",

      hero: {
        title: "Stress Recovery",
        heroMedia: {
          alternativeText: "Stress Recovery Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Stress Recovery",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Panchakarma Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
    {
      id: 5,
      slug: "metabolic-balance",

      title: "Metabolic Balance",

      hero: {
        title: "Metabolic Balance",
        heroMedia: {
          alternativeText: "Metabolic Balance Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Metabolic Balance",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Panchakarma Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
    {
      id: 6,
      slug: "womens-wellness",

      title: "Women's Wellness",

      hero: {
        title: "Women's Wellness",
        heroMedia: {
          alternativeText: "Women's Wellness Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Women's Wellness",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Panchakarma Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
    {
      id: 1,
      slug: "panchakarma",

      title: "Panchakarma",

      hero: {
        title: "Panchakarma",
        heroMedia: {
          alternativeText: "Panchakarma Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Panchakarma",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Panchakarma Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
    {
      id: 1,
      slug: "panchakarma",

      title: "Panchakarma",

      hero: {
        title: "Panchakarma",
        heroMedia: {
          alternativeText: "Panchakarma Banner",
          mime: "image/jpeg",
          url: "/images/specilaity-banner.jpg",
        },
      },
      detailSection: {
        title: "Panchakarma",
        subtitle: "Five-fold purification rooted in classical Ayurveda.",
        description: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "A time-honoured detoxification protocol that gently dislodges toxins, restores agni, and renews the body from within through five sequenced therapies.",
              },
            ],
          },
        ],

        contentSection: {
          title: "Conditions We Address",
          conditions: [
            { id: 1, title: "Chronic fatigue" },
            { id: 2, title: "Joint stiffness" },
            { id: 3, title: "Digestive sluggishness" },
            { id: 4, title: "Skin congestion" },
            { id: 5, title: "Post-illness recovery" },
          ],
          image: {
            alternativeText: "Panchakarma Therapy",
            mime: "image/jpeg",
            url: "/images/panchakarama.jpg",
          },
        },

        ctaSection: {
          footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

          button: {
            label: "Enquiry Form",
            slug: "/",
          },
          whatsapp: {
            label: "whtasapp_label",
            Url: "/",
          },
        },
      },
    },
  ],
};
export default async function SpecialityDetails({ params }) {
  const { slug } = await params;
  const speciality = local_data.specialities.find((item) => item.slug === slug);

  if (!speciality) {
    notFound();
  }

  return (
    <>
      <InnerHero data={speciality.hero} />
      <SpecialityDetail data={speciality.detailSection} />
    </>
  );
}
