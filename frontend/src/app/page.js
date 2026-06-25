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

// [local-data-start] Set to true to use local mock data instead of API
const USE_LOCAL_DATA = true;
// [local-data-end]

// [local-data-start]
const LOCAL_DATA = {
  "id": 28,
  "documentId": "a67zp5r21a35cb8qlzrjp54s",
  "createdAt": "2026-06-05T05:56:45.609Z",
  "updatedAt": "2026-06-12T12:22:11.759Z",
  "publishedAt": "2026-06-12T12:22:11.820Z",
  "seo": {
    "id": 25,
    "metaTitle": "home page title",
    "metaDescription": "home page description ",
    "canonicalUrl": null,
    "ogImage": null
  },
  "hero": {
    "id": 29,
    "smallHeading": "Discover a digital sanctuary where heritage meets luxury.",
    "title": "The Ancient Path to Modern Harmony",
    "description": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "Discover a digital sanctuary where heritage meets luxury. Vitaarah invites you to experience 'The Art of Living Well' through personalized Ayurvedic wisdom."
          }
        ]
      }
    ],
    "heroMedia": {
      "id": 3,
      "documentId": "ts5kx92pi67zm450cxg0rxkc",
      "name": "health-relax-and-woman-getting-back-massage-at-lu-2025-12-17-22-58-49-utc (1).mp4",
      "alternativeText": "hero banner",
      "caption": null,
      "focalPoint": null,
      "width": null,
      "height": null,
      "formats": null,
      "hash": "health_relax_and_woman_getting_back_massage_at_lu_2025_12_17_22_58_49_utc_1_12fc5096ef",
      "ext": ".mp4",
      "mime": "video/mp4",
      "size": 3561.11,
      "url": "/uploads/health_relax_and_woman_getting_back_massage_at_lu_2025_12_17_22_58_49_utc_1_12fc5096ef.mp4",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2026-06-05T06:51:45.924Z",
      "updatedAt": "2026-06-09T06:24:25.371Z",
      "publishedAt": "2026-06-05T06:51:45.925Z"
    },
    "primaryButton": {
      "id": 90,
      "label": "Book Consultation",
      "url": null,
      "icon": null
    },
    "secondaryButton": {
      "id": 91,
      "label": "Explore Treatments",
      "url": "/treatments",
      "icon": null
    }
  },
  "about": {
    "id": 29,
    "title": "A Sanctuary for  Sustainable Wellness",
    "description": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "Our approach to wellness is rooted in holistic healing, where the mind, body, and spirit are nurtured as one. We believe true health comes from achieving a natural balance within, aligning mental clarity with physical vitality.  "
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": ""
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "Inspired by the timeless wisdom of Ayurveda, our practices are designed to restore harmony, promote inner peace, and support sustainable well-being in everyday life."
          }
        ]
      }
    ],
    "mainImage": {
      "id": 24,
      "documentId": "traplxv13lefmfu4752oqihq",
      "name": "home-about-2.jpg",
      "alternativeText": null,
      "caption": null,
      "focalPoint": null,
      "width": 383,
      "height": 364,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_home-about-2.jpg",
          "hash": "thumbnail_home_about_2_95d5b5afc5",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 164,
          "height": 156,
          "size": 7.56,
          "sizeInBytes": 7563,
          "url": "/uploads/thumbnail_home_about_2_95d5b5afc5.jpg"
        }
      },
      "hash": "home_about_2_95d5b5afc5",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 28.45,
      "url": "/uploads/home_about_2_95d5b5afc5.jpg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2026-06-11T06:25:04.594Z",
      "updatedAt": "2026-06-11T06:25:04.594Z",
      "publishedAt": "2026-06-11T06:25:04.595Z"
    },
    "secondaryImage": {
      "id": 25,
      "documentId": "nzdedgq11p0kh7eppzxioqd2",
      "name": "home-about-1.png",
      "alternativeText": null,
      "caption": null,
      "focalPoint": null,
      "width": 408,
      "height": 442,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_home-about-1.png",
          "hash": "thumbnail_home_about_1_c163665392",
          "ext": ".png",
          "mime": "image/png",
          "path": null,
          "width": 144,
          "height": 156,
          "size": 51.1,
          "sizeInBytes": 51099,
          "url": "/uploads/thumbnail_home_about_1_c163665392.png"
        }
      },
      "hash": "home_about_1_c163665392",
      "ext": ".png",
      "mime": "image/png",
      "size": 104.5,
      "url": "/uploads/home_about_1_c163665392.png",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "createdAt": "2026-06-11T06:25:04.944Z",
      "updatedAt": "2026-06-11T06:25:04.944Z",
      "publishedAt": "2026-06-11T06:25:04.944Z"
    },
    "aboutStatistic": [
      {
        "id": 105,
        "valueCount": "5",
        "valueSuffix": "k+",
        "label": "Lives  Transformed"
      },
      {
        "id": 106,
        "valueCount": "100",
        "valueSuffix": "%",
        "label": "Natural Approach"
      },
      {
        "id": 107,
        "valueCount": "25",
        "valueSuffix": "+",
        "label": "Holistic Therapies"
      },
      {
        "id": 108,
        "valueCount": "1",
        "valueSuffix": "M+",
        "label": "Client Follows"
      }
    ],
    "button": {
      "id": 92,
      "label": "Read More",
      "url": "/about",
      "icon": null
    }
  },
  "specialities": {
    "id": 20,
    "title": "Dedicated Pathways to Balance",
    "description": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "Tailored expertise for the modern soul seeking ancient solutions"
          }
        ]
      }
    ],
    "specialties": [
      {
        "id": 7,
        "documentId": "bsmxpk07sm6mtif1yhov74ci",
        "title": "Pain Management",
        "createdAt": "2026-06-09T11:00:33.709Z",
        "updatedAt": "2026-06-09T11:00:33.709Z",
        "publishedAt": "2026-06-09T11:58:33.745Z",
        "slug": "pain-management",
        "shortDescription": "Natural therapies to reduce pain and improve daily movement.",
        "icon": {
          "id": 9,
          "documentId": "ugly562irbhgy5n9yfbbkiov",
          "name": "specialities-1.gif",
          "alternativeText": "specialities-1",
          "caption": null,
          "focalPoint": null,
          "width": 300,
          "height": 300,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_specialities-1.gif",
              "hash": "thumbnail_specialities_1_9fc6e19105",
              "ext": ".gif",
              "mime": "image/gif",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 2.81,
              "sizeInBytes": 2805,
              "url": "/uploads/thumbnail_specialities_1_9fc6e19105.gif"
            }
          },
          "hash": "specialities_1_9fc6e19105",
          "ext": ".gif",
          "mime": "image/gif",
          "size": 150.42,
          "url": "/uploads/specialities_1_9fc6e19105.gif",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.748Z",
          "updatedAt": "2026-06-09T10:13:03.117Z",
          "publishedAt": "2026-06-09T10:12:30.748Z"
        },
        "featuredImage": {
          "id": 10,
          "documentId": "lcgora9fd584rswy20wpjgj7",
          "name": "specialities-bg-2.mp4",
          "alternativeText": "specialities-bg-video",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "specialities_bg_2_1c3b99ac7c",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 8203.34,
          "url": "/uploads/specialities_bg_2_1c3b99ac7c.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.847Z",
          "updatedAt": "2026-06-09T10:15:28.050Z",
          "publishedAt": "2026-06-09T10:12:30.848Z"
        }
      },
      {
        "id": 3,
        "documentId": "dn4y5813bn76dhodrybl238i",
        "title": "Stress & Anxiety Relief",
        "createdAt": "2026-06-09T11:01:52.372Z",
        "updatedAt": "2026-06-09T11:02:18.125Z",
        "publishedAt": "2026-06-09T11:02:18.146Z",
        "slug": "stress-and-anxiety-relief",
        "shortDescription": "Gentle treatments to calm the mind and ease tension.",
        "icon": {
          "id": 8,
          "documentId": "syog0v0lur7y2redxlinwl2v",
          "name": "specialities-2.gif",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 300,
          "height": 300,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_specialities-2.gif",
              "hash": "thumbnail_specialities_2_ffc71e08b7",
              "ext": ".gif",
              "mime": "image/gif",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 2.44,
              "sizeInBytes": 2436,
              "url": "/uploads/thumbnail_specialities_2_ffc71e08b7.gif"
            }
          },
          "hash": "specialities_2_ffc71e08b7",
          "ext": ".gif",
          "mime": "image/gif",
          "size": 178.36,
          "url": "/uploads/specialities_2_ffc71e08b7.gif",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.722Z",
          "updatedAt": "2026-06-09T10:12:30.722Z",
          "publishedAt": "2026-06-09T10:12:30.722Z"
        },
        "featuredImage": {
          "id": 10,
          "documentId": "lcgora9fd584rswy20wpjgj7",
          "name": "specialities-bg-2.mp4",
          "alternativeText": "specialities-bg-video",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "specialities_bg_2_1c3b99ac7c",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 8203.34,
          "url": "/uploads/specialities_bg_2_1c3b99ac7c.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.847Z",
          "updatedAt": "2026-06-09T10:15:28.050Z",
          "publishedAt": "2026-06-09T10:12:30.848Z"
        }
      },
      {
        "id": 8,
        "documentId": "efa1dcrnvc8j1jnx2vju3sf1",
        "title": "Skin & Hair Care",
        "createdAt": "2026-06-09T11:02:58.723Z",
        "updatedAt": "2026-06-09T11:02:58.723Z",
        "publishedAt": "2026-06-09T11:58:33.745Z",
        "slug": "skin-and-hair-care",
        "shortDescription": "Holistic care to nourish skin and strengthen hair.",
        "icon": {
          "id": 6,
          "documentId": "d78mvq6wsxx8fpntino1bmgi",
          "name": "specialities-3.gif",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 300,
          "height": 300,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_specialities-3.gif",
              "hash": "thumbnail_specialities_3_f683070976",
              "ext": ".gif",
              "mime": "image/gif",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 3.44,
              "sizeInBytes": 3437,
              "url": "/uploads/thumbnail_specialities_3_f683070976.gif"
            }
          },
          "hash": "specialities_3_f683070976",
          "ext": ".gif",
          "mime": "image/gif",
          "size": 672.37,
          "url": "/uploads/specialities_3_f683070976.gif",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.487Z",
          "updatedAt": "2026-06-09T10:12:30.487Z",
          "publishedAt": "2026-06-09T10:12:30.488Z"
        },
        "featuredImage": {
          "id": 10,
          "documentId": "lcgora9fd584rswy20wpjgj7",
          "name": "specialities-bg-2.mp4",
          "alternativeText": "specialities-bg-video",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "specialities_bg_2_1c3b99ac7c",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 8203.34,
          "url": "/uploads/specialities_bg_2_1c3b99ac7c.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.847Z",
          "updatedAt": "2026-06-09T10:15:28.050Z",
          "publishedAt": "2026-06-09T10:12:30.848Z"
        }
      },
      {
        "id": 6,
        "documentId": "u35f1fvklauj1jymoaaqsi39",
        "title": "Lifestyle Disorders",
        "createdAt": "2026-06-09T11:03:46.307Z",
        "updatedAt": "2026-06-09T11:03:46.307Z",
        "publishedAt": "2026-06-09T11:58:33.745Z",
        "slug": "lifestyle-disorders",
        "shortDescription": "Balanced approaches to manage and improve overall health.",
        "icon": {
          "id": 7,
          "documentId": "lregi2menio5ybomvt6v5yoy",
          "name": "specialities-4.gif",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 300,
          "height": 300,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_specialities-4.gif",
              "hash": "thumbnail_specialities_4_2d497b4a15",
              "ext": ".gif",
              "mime": "image/gif",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 3.52,
              "sizeInBytes": 3519,
              "url": "/uploads/thumbnail_specialities_4_2d497b4a15.gif"
            }
          },
          "hash": "specialities_4_2d497b4a15",
          "ext": ".gif",
          "mime": "image/gif",
          "size": 877.94,
          "url": "/uploads/specialities_4_2d497b4a15.gif",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.504Z",
          "updatedAt": "2026-06-09T10:12:30.504Z",
          "publishedAt": "2026-06-09T10:12:30.505Z"
        },
        "featuredImage": {
          "id": 10,
          "documentId": "lcgora9fd584rswy20wpjgj7",
          "name": "specialities-bg-2.mp4",
          "alternativeText": "specialities-bg-video",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "specialities_bg_2_1c3b99ac7c",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 8203.34,
          "url": "/uploads/specialities_bg_2_1c3b99ac7c.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T10:12:30.847Z",
          "updatedAt": "2026-06-09T10:15:28.050Z",
          "publishedAt": "2026-06-09T10:12:30.848Z"
        }
      }
    ]
  },
  "treatments": {
    "id": 14,
    "title": "Healing Arts",
    "description": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "Curated Ayurvedic"
          }
        ]
      }
    ],
    "treatments": [
      {
        "id": 9,
        "documentId": "l7a1dl6zoq335nt5nal31j8o",
        "title": "Panchakarma",
        "slug": "panchakarma",
        "shortDescription": "Natural treatments that eliminate toxins and refresh the body and mind.",
        "createdAt": "2026-06-09T11:07:28.897Z",
        "updatedAt": "2026-06-09T11:07:28.897Z",
        "publishedAt": "2026-06-09T12:04:05.425Z",
        "featuredImage": {
          "id": 11,
          "documentId": "h0izqu6wg7uwvcbtdss1r99x",
          "name": "treatment-bg-2.mp4",
          "alternativeText": "treatment",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "treatment_bg_2_dbaf293102",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 22010.81,
          "url": "/uploads/treatment_bg_2_dbaf293102.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T11:07:23.338Z",
          "updatedAt": "2026-06-09T12:03:38.187Z",
          "publishedAt": "2026-06-09T11:07:23.338Z"
        }
      },
      {
        "id": 8,
        "documentId": "yw37pn5df3smf6jk8iggj2k6",
        "title": "Detox Therapies",
        "slug": "detox-therapies",
        "shortDescription": "Natural treatments that eliminate toxins and refresh the body and mind.",
        "createdAt": "2026-06-09T12:01:27.895Z",
        "updatedAt": "2026-06-09T12:01:27.895Z",
        "publishedAt": "2026-06-09T12:04:05.425Z",
        "featuredImage": {
          "id": 11,
          "documentId": "h0izqu6wg7uwvcbtdss1r99x",
          "name": "treatment-bg-2.mp4",
          "alternativeText": "treatment",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "treatment_bg_2_dbaf293102",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 22010.81,
          "url": "/uploads/treatment_bg_2_dbaf293102.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T11:07:23.338Z",
          "updatedAt": "2026-06-09T12:03:38.187Z",
          "publishedAt": "2026-06-09T11:07:23.338Z"
        }
      },
      {
        "id": 5,
        "documentId": "fp6nwhftug6xc3l2000xkl0t",
        "title": "Rejuvenation ",
        "slug": "rejuvenation",
        "shortDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        "createdAt": "2026-06-09T12:02:33.144Z",
        "updatedAt": "2026-06-09T12:02:40.077Z",
        "publishedAt": "2026-06-09T12:02:40.088Z",
        "featuredImage": {
          "id": 11,
          "documentId": "h0izqu6wg7uwvcbtdss1r99x",
          "name": "treatment-bg-2.mp4",
          "alternativeText": "treatment",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "treatment_bg_2_dbaf293102",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 22010.81,
          "url": "/uploads/treatment_bg_2_dbaf293102.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T11:07:23.338Z",
          "updatedAt": "2026-06-09T12:03:38.187Z",
          "publishedAt": "2026-06-09T11:07:23.338Z"
        }
      },
      {
        "id": 7,
        "documentId": "ca0fhoud48ieoheqb3gvo7wb",
        "title": "Herbal Treatments",
        "slug": "herbal-treatments",
        "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "createdAt": "2026-06-09T12:03:44.846Z",
        "updatedAt": "2026-06-09T12:03:44.846Z",
        "publishedAt": "2026-06-09T12:03:44.855Z",
        "featuredImage": {
          "id": 11,
          "documentId": "h0izqu6wg7uwvcbtdss1r99x",
          "name": "treatment-bg-2.mp4",
          "alternativeText": "treatment",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "treatment_bg_2_dbaf293102",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 22010.81,
          "url": "/uploads/treatment_bg_2_dbaf293102.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T11:07:23.338Z",
          "updatedAt": "2026-06-09T12:03:38.187Z",
          "publishedAt": "2026-06-09T11:07:23.338Z"
        }
      }
    ]
  },
  "testimonials": {
    "id": 16,
    "title": "Healing Journeys",
    "testimonials": [
      {
        "id": 5,
        "documentId": "b26vweerb0yqrxzbbzbl73dp",
        "authorName": "Sania",
        "authorDesignation": "Designer",
        "rating": 5,
        "review": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "What sets this experience apart is how deeply it nurtures both the mind and body. The Ayurvedic practices brought a sense of harmony into my daily life that I didn't know I was missing."
              }
            ]
          }
        ],
        "createdAt": "2026-06-10T06:41:48.668Z",
        "updatedAt": "2026-06-10T06:41:48.668Z",
        "publishedAt": "2026-06-10T06:42:38.570Z",
        "authorImage": {
          "id": 18,
          "documentId": "mr8uy4byxaa7x2j3uco7lf8i",
          "name": "f93265b4227d04d2f1c7be202d56118719847d59.png",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 303,
          "height": 313,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_f93265b4227d04d2f1c7be202d56118719847d59.png",
              "hash": "thumbnail_f93265b4227d04d2f1c7be202d56118719847d59_923930a556",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 151,
              "height": 156,
              "size": 38.94,
              "sizeInBytes": 38943,
              "url": "/uploads/thumbnail_f93265b4227d04d2f1c7be202d56118719847d59_923930a556.png"
            }
          },
          "hash": "f93265b4227d04d2f1c7be202d56118719847d59_923930a556",
          "ext": ".png",
          "mime": "image/png",
          "size": 36,
          "url": "/uploads/f93265b4227d04d2f1c7be202d56118719847d59_923930a556.png",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:40:38.792Z",
          "updatedAt": "2026-06-10T06:40:38.792Z",
          "publishedAt": "2026-06-10T06:40:38.792Z"
        },
        "videoTestimonial": null
      },
      {
        "id": 4,
        "documentId": "db2fotjugixu0z77vwkb6e96",
        "authorName": "Meenakshi",
        "authorDesignation": "Designer",
        "rating": 2,
        "review": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "This isn't just wellness—it's transformation. The focus on inner balance and sustainable well-being has helped me build healthier habits that actually last."
              }
            ]
          }
        ],
        "createdAt": "2026-06-10T06:42:18.750Z",
        "updatedAt": "2026-06-10T06:42:18.750Z",
        "publishedAt": "2026-06-10T06:42:38.570Z",
        "authorImage": {
          "id": 19,
          "documentId": "foh4j1sw0crq0o5nbjqd5mfr",
          "name": "d189d9d91182224e7820c132f8e6989e38869b4b.png",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 303,
          "height": 333,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_d189d9d91182224e7820c132f8e6989e38869b4b.png",
              "hash": "thumbnail_d189d9d91182224e7820c132f8e6989e38869b4b_89d0061b99",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 142,
              "height": 156,
              "size": 50.79,
              "sizeInBytes": 50793,
              "url": "/uploads/thumbnail_d189d9d91182224e7820c132f8e6989e38869b4b_89d0061b99.png"
            }
          },
          "hash": "d189d9d91182224e7820c132f8e6989e38869b4b_89d0061b99",
          "ext": ".png",
          "mime": "image/png",
          "size": 49.18,
          "url": "/uploads/d189d9d91182224e7820c132f8e6989e38869b4b_89d0061b99.png",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:40:38.836Z",
          "updatedAt": "2026-06-10T06:40:38.836Z",
          "publishedAt": "2026-06-10T06:40:38.837Z"
        },
        "videoTestimonial": null
      },
      {
        "id": 6,
        "documentId": "ut6m9btz34udyg4hrh3so6d6",
        "authorName": "Sarah John",
        "authorDesignation": "Designer",
        "rating": 4,
        "review": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "I came here feeling completely drained, both mentally and physically. The holistic approach truly helped me reconnect with myself. I feel more balanced, energized, and at peace than I have in years."
              }
            ]
          }
        ],
        "createdAt": "2026-06-10T06:41:11.221Z",
        "updatedAt": "2026-06-10T06:41:11.221Z",
        "publishedAt": "2026-06-10T06:42:38.570Z",
        "authorImage": {
          "id": 17,
          "documentId": "uk1qvgqof9q8bc6bwv0e2j21",
          "name": "181353512630a3773cb6772db42d0dd1fec5c808.png",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 307,
          "height": 296,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_181353512630a3773cb6772db42d0dd1fec5c808.png",
              "hash": "thumbnail_181353512630a3773cb6772db42d0dd1fec5c808_589ec799b2",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 162,
              "height": 156,
              "size": 44.45,
              "sizeInBytes": 44446,
              "url": "/uploads/thumbnail_181353512630a3773cb6772db42d0dd1fec5c808_589ec799b2.png"
            }
          },
          "hash": "181353512630a3773cb6772db42d0dd1fec5c808_589ec799b2",
          "ext": ".png",
          "mime": "image/png",
          "size": 35.81,
          "url": "/uploads/181353512630a3773cb6772db42d0dd1fec5c808_589ec799b2.png",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:40:38.752Z",
          "updatedAt": "2026-06-10T06:40:38.752Z",
          "publishedAt": "2026-06-10T06:40:38.753Z"
        },
        "videoTestimonial": {
          "id": 11,
          "documentId": "h0izqu6wg7uwvcbtdss1r99x",
          "name": "treatment-bg-2.mp4",
          "alternativeText": "treatment",
          "caption": null,
          "focalPoint": null,
          "width": null,
          "height": null,
          "formats": null,
          "hash": "treatment_bg_2_dbaf293102",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 22010.81,
          "url": "/uploads/treatment_bg_2_dbaf293102.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T11:07:23.338Z",
          "updatedAt": "2026-06-09T12:03:38.187Z",
          "publishedAt": "2026-06-09T11:07:23.338Z"
        }
      }
    ]
  },
  "members": {
    "id": 2,
    "members": [
      {
        "id": 6,
        "documentId": "x7b4dhj2q1xoktmaer8cfnoi",
        "name": "Soumya Satheesh",
        "designation": "Medical Officer",
        "title": "The Visionary",
        "description": "An expert in Ayurveda with advanced degrees including MD and PhD, specializing in holistic healthcare.",
        "createdAt": "2026-06-12T12:16:41.502Z",
        "updatedAt": "2026-06-12T12:16:41.502Z",
        "publishedAt": "2026-06-12T12:19:23.865Z",
        "thumbnailImage": {
          "id": 27,
          "documentId": "wq5w1p8cf1ktzme416dzmuwh",
          "name": "Ellipse 29.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 83,
          "height": 83,
          "formats": null,
          "hash": "Ellipse_29_37dfa35c25",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 2.8,
          "url": "/uploads/Ellipse_29_37dfa35c25.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-12T12:16:32.152Z",
          "updatedAt": "2026-06-12T12:16:32.152Z",
          "publishedAt": "2026-06-12T12:16:32.152Z"
        },
        "featuredImage": {
          "id": 26,
          "documentId": "g2met26mfyl80dqpipqraa5n",
          "name": "male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 552,
          "height": 774,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "thumbnail_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 111,
              "height": 156,
              "size": 30.46,
              "sizeInBytes": 30455,
              "url": "/uploads/thumbnail_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            },
            "small": {
              "name": "small_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "small_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 357,
              "height": 500,
              "size": 246.26,
              "sizeInBytes": 246256,
              "url": "/uploads/small_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            },
            "medium": {
              "name": "medium_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "medium_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 535,
              "height": 750,
              "size": 503.46,
              "sizeInBytes": 503463,
              "url": "/uploads/medium_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            }
          },
          "hash": "male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
          "ext": ".png",
          "mime": "image/png",
          "size": 145.73,
          "url": "/uploads/male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-12T12:14:07.977Z",
          "updatedAt": "2026-06-12T12:14:07.977Z",
          "publishedAt": "2026-06-12T12:14:07.977Z"
        }
      },
      {
        "id": 3,
        "documentId": "k01f1ncaaz3hkbc8gdg22d8g",
        "name": "Soumya Satheesh 2",
        "designation": "Medical Officer",
        "title": "The Visionary 2",
        "description": "An expert in Ayurveda with advanced degrees including MD and PhD, specializing in holistic healthcare.",
        "createdAt": "2026-06-12T12:18:33.564Z",
        "updatedAt": "2026-06-12T12:18:33.564Z",
        "publishedAt": "2026-06-12T12:18:33.576Z",
        "thumbnailImage": {
          "id": 28,
          "documentId": "hwdm4cofq00pq1ci9760x16u",
          "name": "Ellipse 28.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 83,
          "height": 83,
          "formats": null,
          "hash": "Ellipse_28_31042026f0",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 3.07,
          "url": "/uploads/Ellipse_28_31042026f0.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-12T12:16:32.160Z",
          "updatedAt": "2026-06-12T12:16:32.160Z",
          "publishedAt": "2026-06-12T12:16:32.160Z"
        },
        "featuredImage": {
          "id": 26,
          "documentId": "g2met26mfyl80dqpipqraa5n",
          "name": "male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 552,
          "height": 774,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "thumbnail_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 111,
              "height": 156,
              "size": 30.46,
              "sizeInBytes": 30455,
              "url": "/uploads/thumbnail_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            },
            "small": {
              "name": "small_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "small_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 357,
              "height": 500,
              "size": 246.26,
              "sizeInBytes": 246256,
              "url": "/uploads/small_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            },
            "medium": {
              "name": "medium_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "medium_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 535,
              "height": 750,
              "size": 503.46,
              "sizeInBytes": 503463,
              "url": "/uploads/medium_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            }
          },
          "hash": "male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
          "ext": ".png",
          "mime": "image/png",
          "size": 145.73,
          "url": "/uploads/male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-12T12:14:07.977Z",
          "updatedAt": "2026-06-12T12:14:07.977Z",
          "publishedAt": "2026-06-12T12:14:07.977Z"
        }
      },
      {
        "id": 5,
        "documentId": "jzt29nn6bm3i09vqfghv6gge",
        "name": "Soumya Satheesh 3",
        "designation": "Medical Officer",
        "title": "The Visionary 3",
        "description": "An expert in Ayurveda with advanced degrees including MD and PhD, specializing in holistic healthcare.",
        "createdAt": "2026-06-12T12:19:12.242Z",
        "updatedAt": "2026-06-12T12:19:12.242Z",
        "publishedAt": "2026-06-12T12:19:12.249Z",
        "thumbnailImage": {
          "id": 29,
          "documentId": "r1jxtxpb22lze6ffm7or7p4a",
          "name": "Ellipse 27.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 83,
          "height": 83,
          "formats": null,
          "hash": "Ellipse_27_d8cbbc362d",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 2.48,
          "url": "/uploads/Ellipse_27_d8cbbc362d.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-12T12:16:32.168Z",
          "updatedAt": "2026-06-12T12:16:32.168Z",
          "publishedAt": "2026-06-12T12:16:32.168Z"
        },
        "featuredImage": {
          "id": 26,
          "documentId": "g2met26mfyl80dqpipqraa5n",
          "name": "male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 552,
          "height": 774,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "thumbnail_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 111,
              "height": 156,
              "size": 30.46,
              "sizeInBytes": 30455,
              "url": "/uploads/thumbnail_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            },
            "small": {
              "name": "small_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "small_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 357,
              "height": 500,
              "size": 246.26,
              "sizeInBytes": 246256,
              "url": "/uploads/small_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            },
            "medium": {
              "name": "medium_male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait 1.png",
              "hash": "medium_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
              "ext": ".png",
              "mime": "image/png",
              "path": null,
              "width": 535,
              "height": 750,
              "size": 503.46,
              "sizeInBytes": 503463,
              "url": "/uploads/medium_male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png"
            }
          },
          "hash": "male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c",
          "ext": ".png",
          "mime": "image/png",
          "size": 145.73,
          "url": "/uploads/male_female_doctor_portrait_healthcare_medical_staff_concept_confident_doctor_portrait_1_a8585b0f1c.png",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-12T12:14:07.977Z",
          "updatedAt": "2026-06-12T12:14:07.977Z",
          "publishedAt": "2026-06-12T12:14:07.977Z"
        }
      }
    ]
  },
  "blogs": {
    "id": 14,
    "title": "Wisdom & Insights",
    "blogs": [
      {
        "id": 5,
        "documentId": "yfdhu7rh6sz9zmucia8tv9sa",
        "title": "Daily Wellness Guide for Mind and Body",
        "slug": "daily-wellness-guide-for-mind-and-body",
        "description": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Discover routines and habits that promote long-term health and inner balance."
              }
            ]
          }
        ],
        "authorName": "josin",
        "publishedDate": "2026-01-11",
        "category": "events",
        "createdAt": "2026-06-10T07:46:39.362Z",
        "updatedAt": "2026-06-10T07:46:39.362Z",
        "publishedAt": "2026-06-10T07:46:52.289Z",
        "shortDescription": "Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature.",
        "featuredImage": {
          "id": 20,
          "documentId": "rmq4wk7jj0x2ihr36e5y7lpn",
          "name": "eb794ecb3e75d175d53ab660ef14e060e4dc0d91.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 1061,
          "height": 1500,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_eb794ecb3e75d175d53ab660ef14e060e4dc0d91.jpg",
              "hash": "thumbnail_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 110,
              "height": 156,
              "size": 4.86,
              "sizeInBytes": 4858,
              "url": "/uploads/thumbnail_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8.jpg"
            },
            "small": {
              "name": "small_eb794ecb3e75d175d53ab660ef14e060e4dc0d91.jpg",
              "hash": "small_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 353,
              "height": 500,
              "size": 28.69,
              "sizeInBytes": 28692,
              "url": "/uploads/small_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8.jpg"
            },
            "medium": {
              "name": "medium_eb794ecb3e75d175d53ab660ef14e060e4dc0d91.jpg",
              "hash": "medium_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 531,
              "height": 750,
              "size": 55.5,
              "sizeInBytes": 55498,
              "url": "/uploads/medium_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8.jpg"
            },
            "large": {
              "name": "large_eb794ecb3e75d175d53ab660ef14e060e4dc0d91.jpg",
              "hash": "large_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 707,
              "height": 1000,
              "size": 89.77,
              "sizeInBytes": 89767,
              "url": "/uploads/large_eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8.jpg"
            }
          },
          "hash": "eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 174.71,
          "url": "/uploads/eb794ecb3e75d175d53ab660ef14e060e4dc0d91_02ba9f23d8.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:45:32.647Z",
          "updatedAt": "2026-06-10T06:45:32.647Z",
          "publishedAt": "2026-06-10T06:45:32.647Z"
        }
      },
      {
        "id": 7,
        "documentId": "dtamadabwtld4mj0jslf7mc0",
        "title": "Natural Wellness with Ayurveda",
        "slug": "natural-wellness-with-ayurveda",
        "description": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice). Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Modern chronobiology has confirmed what Ayurvedic physicians understood 5,000 years ago: the human body runs on internal clocks — circadian rhythms that govern hormone release, digestion, sleep, immunity, and cellular repair. When our daily schedule aligns with these rhythms, every system in the body functions at its peak. When it doesn't, chronic illness follows."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": ""
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice). Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": ""
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Modern chronobiology has confirmed what Ayurvedic physicians understood 5,000 years ago: the human body runs on internal clocks — circadian rhythms that govern hormone release, digestion, sleep, immunity, and cellular repair. When our daily schedule aligns with these rhythms, every system in the body functions at its peak. When it doesn't, chronic illness follows."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": ""
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice). Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Modern chronobiology has confirmed what Ayurvedic physicians understood 5,000 years ago: the human body runs on internal clocks — circadian rhythms that govern hormone release, digestion, sleep, immunity, and cellular repair. When our daily schedule aligns with these rhythms, every system in the body functions at its peak. When it doesn't, chronic illness follows."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice). Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature."
              }
            ]
          }
        ],
        "authorName": "sreegith",
        "publishedDate": "2026-06-11",
        "category": "treatment",
        "createdAt": "2026-06-10T07:44:48.024Z",
        "updatedAt": "2026-06-10T07:44:48.024Z",
        "publishedAt": "2026-06-10T07:46:52.289Z",
        "shortDescription": "Discover routines and habits that promote long-term health and inner balance.",
        "featuredImage": {
          "id": 21,
          "documentId": "ov7q35l6418klafbo00kjak3",
          "name": "69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 1199,
          "height": 1500,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61.jpg",
              "hash": "thumbnail_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 124,
              "height": 156,
              "size": 4.76,
              "sizeInBytes": 4765,
              "url": "/uploads/thumbnail_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405.jpg"
            },
            "small": {
              "name": "small_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61.jpg",
              "hash": "small_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 399,
              "height": 500,
              "size": 29.55,
              "sizeInBytes": 29548,
              "url": "/uploads/small_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405.jpg"
            },
            "medium": {
              "name": "medium_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61.jpg",
              "hash": "medium_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 600,
              "height": 750,
              "size": 55.3,
              "sizeInBytes": 55302,
              "url": "/uploads/medium_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405.jpg"
            },
            "large": {
              "name": "large_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61.jpg",
              "hash": "large_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 799,
              "height": 1000,
              "size": 85.18,
              "sizeInBytes": 85184,
              "url": "/uploads/large_69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405.jpg"
            }
          },
          "hash": "69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 156.11,
          "url": "/uploads/69e250d2c690ba5bcf78ec67bbe9ccfd1ca57c61_d18e19b405.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:45:32.681Z",
          "updatedAt": "2026-06-10T06:45:32.681Z",
          "publishedAt": "2026-06-10T06:45:32.682Z"
        }
      },
      {
        "id": 6,
        "documentId": "h5ia5fhtawrgl4ve7k2zpehe",
        "title": "Healthy Lifestyle Habits the Ayurvedic Way",
        "slug": "healthy-lifestyle-habits-the-ayurvedic-way",
        "description": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice). Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Modern chronobiology has confirmed what Ayurvedic physicians understood 5,000 years ago: the human body runs on internal clocks — circadian rhythms that govern hormone release, digestion, sleep, immunity, and cellular repair. When our daily schedule aligns with these rhythms, every system in the body functions at its peak. When it doesn't, chronic illness follows."
              }
            ]
          }
        ],
        "authorName": "abish",
        "publishedDate": "2026-06-11",
        "category": "events",
        "createdAt": "2026-06-10T07:42:45.519Z",
        "updatedAt": "2026-06-10T07:42:45.519Z",
        "publishedAt": "2026-06-10T07:46:52.289Z",
        "shortDescription": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice).",
        "featuredImage": {
          "id": 22,
          "documentId": "l2as3rizchadhit0br5khxox",
          "name": "1798c8a4c45aa375973de200e4f4875958b6e2ed.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 1500,
          "height": 1000,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_1798c8a4c45aa375973de200e4f4875958b6e2ed.jpg",
              "hash": "thumbnail_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 234,
              "height": 156,
              "size": 8.03,
              "sizeInBytes": 8029,
              "url": "/uploads/thumbnail_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43.jpg"
            },
            "medium": {
              "name": "medium_1798c8a4c45aa375973de200e4f4875958b6e2ed.jpg",
              "hash": "medium_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 500,
              "size": 46.38,
              "sizeInBytes": 46382,
              "url": "/uploads/medium_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43.jpg"
            },
            "small": {
              "name": "small_1798c8a4c45aa375973de200e4f4875958b6e2ed.jpg",
              "hash": "small_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 333,
              "size": 24.53,
              "sizeInBytes": 24533,
              "url": "/uploads/small_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43.jpg"
            },
            "large": {
              "name": "large_1798c8a4c45aa375973de200e4f4875958b6e2ed.jpg",
              "hash": "large_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 667,
              "size": 73.66,
              "sizeInBytes": 73662,
              "url": "/uploads/large_1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43.jpg"
            }
          },
          "hash": "1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 141.81,
          "url": "/uploads/1798c8a4c45aa375973de200e4f4875958b6e2ed_0f516d4b43.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:45:33.053Z",
          "updatedAt": "2026-06-10T06:45:33.053Z",
          "publishedAt": "2026-06-10T06:45:33.053Z"
        }
      },
      {
        "id": 8,
        "documentId": "jcu2vk0tnx9ihyhv39sz82i0",
        "title": "Ayurveda Tips for Everyday Balance",
        "slug": "ayurveda-tips-for-everyday-balance",
        "description": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice). Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Modern chronobiology has confirmed what Ayurvedic physicians understood 5,000 years ago: the human body runs on internal clocks — circadian rhythms that govern hormone release, digestion, sleep, immunity, and cellular repair. When our daily schedule aligns with these rhythms, every system in the body functions at its peak. When it doesn't, chronic illness follows."
              }
            ]
          },
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "In Ayurveda, the word Dinacharya comes from two Sanskrit roots: dina (day) and acharya (to follow or practice). Together, they describe not merely a morning routine, but a complete science of aligning human biology with the rhythmic intelligence of nature."
              }
            ]
          }
        ],
        "authorName": "ajay",
        "publishedDate": "2026-06-10",
        "category": "treatment",
        "createdAt": "2026-06-10T06:46:37.559Z",
        "updatedAt": "2026-06-10T07:48:09.464Z",
        "publishedAt": "2026-06-10T07:48:09.483Z",
        "shortDescription": null,
        "featuredImage": {
          "id": 23,
          "documentId": "iveyrd2tt8qwyj1igggqheys",
          "name": "39ba4d04628a7c420339ab4fe6c435d7ddd31634.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 1500,
          "height": 1233,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_39ba4d04628a7c420339ab4fe6c435d7ddd31634.jpg",
              "hash": "thumbnail_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 190,
              "height": 156,
              "size": 8.48,
              "sizeInBytes": 8478,
              "url": "/uploads/thumbnail_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3.jpg"
            },
            "small": {
              "name": "small_39ba4d04628a7c420339ab4fe6c435d7ddd31634.jpg",
              "hash": "small_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 411,
              "size": 37.52,
              "sizeInBytes": 37518,
              "url": "/uploads/small_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3.jpg"
            },
            "large": {
              "name": "large_39ba4d04628a7c420339ab4fe6c435d7ddd31634.jpg",
              "hash": "large_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 822,
              "size": 106.22,
              "sizeInBytes": 106224,
              "url": "/uploads/large_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3.jpg"
            },
            "medium": {
              "name": "medium_39ba4d04628a7c420339ab4fe6c435d7ddd31634.jpg",
              "hash": "medium_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 617,
              "size": 69.41,
              "sizeInBytes": 69408,
              "url": "/uploads/medium_39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3.jpg"
            }
          },
          "hash": "39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 189.88,
          "url": "/uploads/39ba4d04628a7c420339ab4fe6c435d7ddd31634_8707fe0fc3.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:45:33.113Z",
          "updatedAt": "2026-06-10T06:45:33.113Z",
          "publishedAt": "2026-06-10T06:45:33.113Z"
        }
      }
    ]
  },
  "packages": {
    "id": 15,
    "title": "Immersive Healing  Journeys",
    "description": [
      {
        "type": "paragraph",
        "children": [
          {
            "type": "text",
            "text": "Extended programs designed for profound transformation"
          }
        ]
      }
    ],
    "packages": [
      {
        "id": 10,
        "documentId": "reybokkktofwwwrg44xqvz2j",
        "title": "Detox Program",
        "slug": "detox-program",
        "shortDescription": "Focusing on cellular renewal through curated nourishment and molecular\ntherapies.",
        "description": null,
        "createdAt": "2026-06-10T06:19:06.298Z",
        "updatedAt": "2026-06-12T07:12:02.296Z",
        "publishedAt": "2026-06-12T07:12:02.310Z",
        "badgeType": null,
        "days": 5,
        "featuredImage": {
          "id": 12,
          "documentId": "qgowjq1upsref0v820c1gvku",
          "name": "packages-1.jpg",
          "alternativeText": "package 1",
          "caption": null,
          "focalPoint": null,
          "width": 337,
          "height": 263,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_packages-1.jpg",
              "hash": "thumbnail_packages_1_0791f84862",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 200,
              "height": 156,
              "size": 9.32,
              "sizeInBytes": 9319,
              "url": "/uploads/thumbnail_packages_1_0791f84862.jpg"
            }
          },
          "hash": "packages_1_0791f84862",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 22,
          "url": "/uploads/packages_1_0791f84862.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-09T13:13:19.067Z",
          "updatedAt": "2026-06-10T13:02:46.295Z",
          "publishedAt": "2026-06-09T13:13:19.069Z"
        },
        "features": [
          {
            "id": 23,
            "title": "Organic Meals",
            "icon": {
              "id": 13,
              "documentId": "zm1ej469tyo94u0y7rre2m5m",
              "name": "packages-bx-1.png",
              "alternativeText": null,
              "caption": null,
              "focalPoint": null,
              "width": 13,
              "height": 13,
              "formats": null,
              "hash": "packages_bx_1_d8ff91d657",
              "ext": ".png",
              "mime": "image/png",
              "size": 0.28,
              "url": "/uploads/packages_bx_1_d8ff91d657.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2026-06-10T06:18:07.873Z",
              "updatedAt": "2026-06-10T06:18:07.873Z",
              "publishedAt": "2026-06-10T06:18:07.874Z"
            }
          },
          {
            "id": 24,
            "title": "Hydro-therapy",
            "icon": {
              "id": 14,
              "documentId": "hj63kr9v3jkmd3pxhe33ifva",
              "name": "packages-bx-2.png",
              "alternativeText": null,
              "caption": null,
              "focalPoint": null,
              "width": 13,
              "height": 16,
              "formats": null,
              "hash": "packages_bx_2_2e28e95110",
              "ext": ".png",
              "mime": "image/png",
              "size": 0.28,
              "url": "/uploads/packages_bx_2_2e28e95110.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2026-06-10T06:18:07.884Z",
              "updatedAt": "2026-06-10T06:18:07.884Z",
              "publishedAt": "2026-06-10T06:18:07.884Z"
            }
          }
        ]
      },
      {
        "id": 9,
        "documentId": "monixjoazsct340y4uzh4wg7",
        "title": "Rejuvenation Package",
        "slug": "rejuvenation-package",
        "shortDescription": "Our flagship program highlighting restorative therapies and neurological reset protocols.",
        "description": null,
        "createdAt": "2026-06-10T06:22:47.937Z",
        "updatedAt": "2026-06-12T07:11:34.780Z",
        "publishedAt": "2026-06-12T07:11:34.802Z",
        "badgeType": "Best Seller",
        "days": 14,
        "featuredImage": {
          "id": 16,
          "documentId": "bikxyqxw73x7w4fp4tm12ck9",
          "name": "44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 1500,
          "height": 1200,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c.jpg",
              "hash": "thumbnail_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 195,
              "height": 156,
              "size": 8.54,
              "sizeInBytes": 8541,
              "url": "/uploads/thumbnail_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a.jpg"
            },
            "small": {
              "name": "small_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c.jpg",
              "hash": "small_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 400,
              "size": 38.75,
              "sizeInBytes": 38751,
              "url": "/uploads/small_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a.jpg"
            },
            "large": {
              "name": "large_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c.jpg",
              "hash": "large_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 800,
              "size": 123.34,
              "sizeInBytes": 123344,
              "url": "/uploads/large_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a.jpg"
            },
            "medium": {
              "name": "medium_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c.jpg",
              "hash": "medium_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 600,
              "size": 76.9,
              "sizeInBytes": 76902,
              "url": "/uploads/medium_44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a.jpg"
            }
          },
          "hash": "44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 239.66,
          "url": "/uploads/44bf243ec1f414fd8bf7b2a8c5b935c7fc756b5c_961cefa38a.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:21:17.655Z",
          "updatedAt": "2026-06-10T06:21:17.655Z",
          "publishedAt": "2026-06-10T06:21:17.656Z"
        },
        "features": [
          {
            "id": 20,
            "title": "Guided Meditation",
            "icon": {
              "id": 14,
              "documentId": "hj63kr9v3jkmd3pxhe33ifva",
              "name": "packages-bx-2.png",
              "alternativeText": null,
              "caption": null,
              "focalPoint": null,
              "width": 13,
              "height": 16,
              "formats": null,
              "hash": "packages_bx_2_2e28e95110",
              "ext": ".png",
              "mime": "image/png",
              "size": 0.28,
              "url": "/uploads/packages_bx_2_2e28e95110.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2026-06-10T06:18:07.884Z",
              "updatedAt": "2026-06-10T06:18:07.884Z",
              "publishedAt": "2026-06-10T06:18:07.884Z"
            }
          },
          {
            "id": 21,
            "title": "Sleep Optimization",
            "icon": null
          },
          {
            "id": 22,
            "title": "Vitality Spa Access",
            "icon": null
          }
        ]
      },
      {
        "id": 11,
        "documentId": "ike88hmstwy0glmi6bo8sdzl",
        "title": "Wellness Retreat",
        "slug": "wellness-retreat",
        "shortDescription": "A holistic escape integrating physical, mental, and spiritual alignment\npractices.",
        "description": null,
        "createdAt": "2026-06-10T06:24:19.819Z",
        "updatedAt": "2026-06-12T07:12:15.699Z",
        "publishedAt": "2026-06-12T07:12:15.720Z",
        "badgeType": null,
        "days": 5,
        "featuredImage": {
          "id": 15,
          "documentId": "lonyrcjzeuf0mk10iwhykrmy",
          "name": "ba021794de724bbccf4f36a74b768aaf790e9aa6.jpg",
          "alternativeText": null,
          "caption": null,
          "focalPoint": null,
          "width": 1500,
          "height": 857,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_ba021794de724bbccf4f36a74b768aaf790e9aa6.jpg",
              "hash": "thumbnail_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 245,
              "height": 140,
              "size": 9.04,
              "sizeInBytes": 9038,
              "url": "/uploads/thumbnail_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc.jpg"
            },
            "medium": {
              "name": "medium_ba021794de724bbccf4f36a74b768aaf790e9aa6.jpg",
              "hash": "medium_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 429,
              "size": 64.95,
              "sizeInBytes": 64954,
              "url": "/uploads/medium_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc.jpg"
            },
            "small": {
              "name": "small_ba021794de724bbccf4f36a74b768aaf790e9aa6.jpg",
              "hash": "small_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 285,
              "size": 31.12,
              "sizeInBytes": 31115,
              "url": "/uploads/small_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc.jpg"
            },
            "large": {
              "name": "large_ba021794de724bbccf4f36a74b768aaf790e9aa6.jpg",
              "hash": "large_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 571,
              "size": 111.05,
              "sizeInBytes": 111054,
              "url": "/uploads/large_ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc.jpg"
            }
          },
          "hash": "ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 234.75,
          "url": "/uploads/ba021794de724bbccf4f36a74b768aaf790e9aa6_04a1528dcc.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "createdAt": "2026-06-10T06:21:17.588Z",
          "updatedAt": "2026-06-10T06:21:17.588Z",
          "publishedAt": "2026-06-10T06:21:17.588Z"
        },
        "features": [
          {
            "id": 25,
            "title": "Cognitive Wellness",
            "icon": {
              "id": 13,
              "documentId": "zm1ej469tyo94u0y7rre2m5m",
              "name": "packages-bx-1.png",
              "alternativeText": null,
              "caption": null,
              "focalPoint": null,
              "width": 13,
              "height": 13,
              "formats": null,
              "hash": "packages_bx_1_d8ff91d657",
              "ext": ".png",
              "mime": "image/png",
              "size": 0.28,
              "url": "/uploads/packages_bx_1_d8ff91d657.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2026-06-10T06:18:07.873Z",
              "updatedAt": "2026-06-10T06:18:07.873Z",
              "publishedAt": "2026-06-10T06:18:07.874Z"
            }
          },
          {
            "id": 26,
            "title": "Forest Bathing",
            "icon": {
              "id": 14,
              "documentId": "hj63kr9v3jkmd3pxhe33ifva",
              "name": "packages-bx-2.png",
              "alternativeText": null,
              "caption": null,
              "focalPoint": null,
              "width": 13,
              "height": 16,
              "formats": null,
              "hash": "packages_bx_2_2e28e95110",
              "ext": ".png",
              "mime": "image/png",
              "size": 0.28,
              "url": "/uploads/packages_bx_2_2e28e95110.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2026-06-10T06:18:07.884Z",
              "updatedAt": "2026-06-10T06:18:07.884Z",
              "publishedAt": "2026-06-10T06:18:07.884Z"
            }
          }
        ]
      }
    ]
  }
};
// [local-data-end]

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
});

// exambles= http://localhost:1337/api/home-page?populate[seo][populate][ogImage]=true&populate[hero][populate][heroMedia]=true&populate[hero][populate][primaryButton][populate][icon]=true&populate[hero][populate][secondaryButton][populate][icon]=true&populate[about][populate][mainImage]=true&populate[about][populate][secondaryImage]=true&populate[about][populate][button][populate][icon]=true&populate[about][populate][aboutStatistic]=true&populate[specialities][populate][specialties][populate][icon]=true&populate[specialities][populate][specialties][populate][featuredImage]=true&populate[treatments][populate][treatments][populate][featuredImage]=true&populate[packages][populate][packages][populate][featuredImage]=true&populate[packages][populate][packages][populate][features][populate][icon]=true&populate[testimonials][populate][testimonials][populate][authorImage]=true&populate[testimonials][populate][testimonials][populate][videoTestimonial]=true&populate[members][populate][members][populate][thumbnailImage]=true&populate[members][populate][members][populate][featuredImage]=true&populate[blogs][populate][blogs][populate][featuredImage]=true


export default async function Home() {
  let data;

  // [local-data-start]
  if (USE_LOCAL_DATA) {
    data = LOCAL_DATA;
  } else {
  // [local-data-end]
    const res = await fetchAPI(`/api/home-page?${homePageQuery}`);
    data = res?.data ?? null;
  // [local-data-start]
  }
  // [local-data-end]

  if (!data?.hero && !data?.about) return null;

  // const res = await fetchAPI(`/api/home-page?${homePageQuery}`);
  // const data = res?.data ?? null;

  // if (!data?.hero && !data?.about) return null;

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
