"use client";
import { Suspense } from "react";
import ConditionExpert from '@/components/blocks/condition/condition-expert';
import ConditionLifestyle from '@/components/blocks/condition/condition-lifestyle';
import ConditionRootCause from '@/components/blocks/condition/condition-root-cause';
import ConditionSymtoms from '@/components/blocks/condition/condition-symtoms';
import ConditionTab from '@/components/blocks/condition/condition-tab'
import ConditionTreatment from '@/components/blocks/condition/condition-treatment';
import InnerHero from '@/components/common/InnerHero'
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function ConditionContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "back-pain";
  const currentData =
    local_data?.conditions?.find((item) => item.slug === activeTab) ||
    local_data?.conditions?.[0];

  if (!currentData) return null;

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
      } 
    }
  };

  return (
    <>
      <InnerHero data={local_data.hero} />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}>
        <ConditionTab data={local_data.tabs} />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}>
        <ConditionSymtoms data={currentData.symptomSection} />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}>
        <ConditionRootCause data={currentData.rootcauseSection} />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}>
        <ConditionTreatment data={currentData.recomendedSection} />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}>
        <ConditionLifestyle data={currentData.lifeStyleSection} />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={fadeInUp}>
        <ConditionExpert data={local_data.expertSection} />
      </motion.div>
    </>
  );
}

export default function Condition() {
  return (
    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading...</div>}>
      <ConditionContent />
    </Suspense>
  );
}

const local_data = {
  id: 24,
  documentId: "a67zp5r21a35cb8qlzrjp54s",
  createdAt: "2026-06-05T05:56:45.609Z",
  updatedAt: "2026-06-11T06:26:08.249Z",
  publishedAt: "2026-06-11T06:26:08.337Z",
  seo: {
    id: 21,
    metaTitle: "Condition page title",
    metaDescription: "Condition page description ",
    canonicalUrl: null,
  },
  hero: {
    id: 25,
    heroMedia: {
      alternativeText: "Condition page title",
      mime: "image/jpeg",
      // if video - mime: "video/mp4",
      url: "/images/condition-hero.jpg",
    },
    title: "Restoring Balance Naturally",
    description: "",
    button: {
      slug: "",
      label: "",
    },
  },
  tabs: [
    {
      id: 1,
      label: "Back Pain",
      slug: "back-pain",
    },
    {
      id: 2,
      label: "Arthritis",
      slug: "arthritis",
    },
    {
      id: 3,
      label: "PCOS",
      slug: "pcos",
    },
    {
      id: 4,
      label: "Hair Loss",
      slug: "hair-loss",
    },
    {
      id: 5,
      label: "Insomnia",
      slug: "insomnia",
    },
    {
      id: 6,
      label: "Digestive Issues",
      slug: "digestive-issues",
    }
  ],
  conditions: [
    {
      id: 1,
      slug: "back-pain",
      symptomSection:
      {
        title: "Signs & Symptoms",
        subTitle: "Ayurvedic guidance helps restore balance before discomfort becomes deeper.",
        image: {
          alternativeText: "Condition page title",
          mime: "image/jpeg",
          url: "/images/symtom.jpg",
        },
        symptoms:
        {
          type: "list",
          format: "unordered",
          children: [
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Excessive hair fall on combing or washing",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Thinning at the crown or along the parting",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Receding hairline or widening part",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Dry, brittle, or dull hair texture",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Premature greying of hair",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Itchy, flaky, or inflamed scalp",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Hair loss in patches (alopecia areata pattern",
                },
              ],
            },
            {
              type: "list-item",
              children: [
                {
                  type: "text",
                  text: "Slow or stunted hair regrowth",
                },
              ],
            },
          ],
        },

      },
      rootcauseSection: {
        title: "Ayurvedic Root Causes",
        description: "Understanding the root cause allows the body to heal naturally and deeply.",
        rootCauses: [
          {
            id: "1",
            title: "Pitta Imbalance",
            shortDescription:
              "Excess Pitta — the fire energy — is the most common cause of premature hair loss in Ayurveda. Stress, anger, spicy foods, and excess heat damage the hair follicle and scalp, known as Khalitya in classical texts.",
            icon: {
              alternativeText: "icon",
              mime: "image/jpeg",
              url: "/images/nature_icon2.svg",
            },
          },
          {
            id: "2",
            title: "Vata Imbalance",
            shortDescription:
              "Vata-driven hair loss presents as dry, brittle, slow-growing hair with scalp dryness. Nutritional deficiency, erratic routine, anxiety, and poor circulation to the scalp are key factors.",
            icon: {
              alternativeText: "icon",
              mime: "image/jpeg",
              url: "/images/nature_icon1.svg",
            },
          },
          {
            id: "3",
            title: "Dhatu Depletion",
            shortDescription:
              "When Rasa and Rakta dhatu (plasma and blood) are depleted — through poor digestion, blood deficiency, or exhaustion — the hair follicle receives insufficient nourishment, leading to miniaturisation and loss.",
            icon: {
              alternativeText: "icon",
              mime: "image/jpeg",
              url: "/images/nature_icon3.svg",
            },
          },
        ]
      },
      recomendedSection: {
        title: "Recommended Treatments",
        description: "Understanding the root cause allows the body to heal naturally and deeply.",
        treatments: [
          {
            id: "1",
            tag: "Scalp Therapy",
            title: "Shiro Abhyanga",
            description: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Deep, medicated scalp oil massage using Bhringraj, Brahmi, or Neelibhringadi tailam — stimulating follicle circulation and delivering therapeutic herbs directly to the roots.",
                  },
                ],
              },
            ],
          },
          {
            id: "2",
            tag: "Steam Therapy",
            title: "Shiro Swedana",
            description: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Herbal steam applied to the scalp opens the channels, drives medicated oils deeper into the follicles, and stimulates scalp microcirculation.",
                  },
                ],
              },
            ],
          },
          {
            id: "3",
            tag: "Oil Retention",
            title: "Shirodhara",
            description: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "A continuous warm oil stream over the scalp that reduces cortisol — the primary hormonal driver of stress-related hair loss — while deeply nourishing all scalp tissues.",
                  },
                ],
              },
            ],
          },
        ]
      },
      lifeStyleSection: {
        title: "Lifestyle & Dinacharya",
        description: "Daily rhythm as the foundation of healing",
        cards: [
          {
            id: 1,
            title: "Diet",
            image: {
              alternativeText: "Diet",
              mime: "image/jpeg",
              url: "/images/lifestyle1.jpg"
            }, 
            content: {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Iron-rich foods: sesame seeds, dates, pomegranate, leafy greens"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Protein from lentils, mung beans, soaked almonds"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Amla (Indian gooseberry) daily — richest natural source of Vitamin C and hair-supporting antioxidants"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Avoid: excess spicy food, alcohol, processed food"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Coconut water and soaked black sesame seeds"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Reduce caffeine — known to elevate cortisol and worsen Pitta hair loss"
                    }
                  ]
                }
              ]
            }
          },
          {
            id: 2,
            title: "Daily Routine",
            image: {
              alternativeText: "Daily Routine",
              mime: "image/jpeg",
              url: "/images/lifestyle2.jpg"
            }, 
            content: {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Warm oil scalp massage (Shiro Abhyanga) twice weekly"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Leave oil on for minimum 2 hours before washing"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Wash hair with cool or lukewarm water only"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Avoid heat styling tools and chemical treatments"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Practice Sarvangasana (shoulder stand) and Adho Mukha Svanasana to increase scalp circulation"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Sleep before 10pm — hair grows during deep sleep cycles"
                    }
                  ]
                }
              ]
            }
          },
          {
            id: 3,
            title: "Preventive Care",
            image: {
              alternativeText: "Preventive Care",
              mime: "image/jpeg",
              url: "/images/lifestyle3.jpg"
            }, 
            content: {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Use natural, sulphate-free herbal hair washes"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Avoid tight hairstyles that pull on follicles"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Annual internal detox with Triphala for blood purification"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Bhringraj rasayana course (3 months) each year as preventive care"
                    }
                  ]
                },
                {
                  type: "list-item",
                  children: [
                    {
                      type: "text",
                      text: "Manage stress through regular yoga and pranayama"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },

    },
    {
      id: 2,
      slug: "arthritis",
      title: "Signs & Symptoms",
      rootcauseSection: {
        title: "Ayurvedic Root Causes",
        description: "Understanding the root cause allows the body to heal naturally and deeply.",
        rootCauses: [
          {
            id: "1",
            title: "Pitta Imbalance",
            shortDescription:
              "Excess Pitta — the fire energy — is the most common cause of premature hair loss in Ayurveda. Stress, anger, spicy foods, and excess heat damage the hair follicle and scalp, known as Khalitya in classical texts.",
            icon: {
              alternativeText: "icon",
              mime: "image/jpeg",
              url: "/images/nature_icon2.svg",
            },
          },
          {
            id: "2",
            title: "Vata Imbalance",
            shortDescription:
              "Vata-driven hair loss presents as dry, brittle, slow-growing hair with scalp dryness. Nutritional deficiency, erratic routine, anxiety, and poor circulation to the scalp are key factors.",
            icon: {
              alternativeText: "icon",
              mime: "image/jpeg",
              url: "/images/nature_icon1.svg",
            },
          },
          {
            id: "3",
            title: "Dhatu Depletion",
            shortDescription:
              "When Rasa and Rakta dhatu (plasma and blood) are depleted — through poor digestion, blood deficiency, or exhaustion — the hair follicle receives insufficient nourishment, leading to miniaturisation and loss.",
            icon: {
              alternativeText: "icon",
              mime: "image/jpeg",
              url: "/images/nature_icon3.svg",
            },
          },
        ]
      }

    },
    {
      id: 3,
      slug: "pcos",
      title: "Signs & Symptoms",

    },
    {
      id: 4,
      slug: "hair-loss",
      title: "Signs & Symptoms",

    },
    {
      id: 5,
      slug: "insomnia",
      title: "Signs & Symptoms",

    },
    {
      id: 6,
      slug: "digestive-issues",
      title: "Signs & Symptoms",

    }
  ],

  expertSection:{
    title: "Speak with an Ayurvedic Expert",
    description: "Our practitioners will assess your condition, explain its Ayurvedic root cause, and design a personalised healing programme — at no obligation.",
     whatsappButton: {
        label: "Whats App Now",
        slug: "/"
    },
  }
}

