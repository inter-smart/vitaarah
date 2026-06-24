import TreatmentAlchemy from '@/components/blocks/treatment/treatment-alchemy';
import TreatmentDetail from '@/components/blocks/treatment/treatment-detail';
import TreatmentRitualExperience from '@/components/blocks/treatment/treatment-ritual-experience';
import InnerHero from '@/components/common/InnerHero'
import { notFound } from "next/navigation";

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
    treatments: [
        {
            id: 1,
            slug: "Abhyanga",
            title: "Abhyanga",
            hero: {
                id: 25,
                heroMedia: {
                    alternativeText: "Abhyanga",
                    mime: "image/jpg",
                    url: "/images/treatment.jpg",
                },
                title: "Abhyanga",

            },
            aboutTreatmentSection:
            {
                title: "Abhyanga",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Experience a deeply calming Ayurvedic ritual designed to restore mental clarity, reduce stress, and enhance overall wellbeing"
                            }
                        ]
                    },
                ],
                aboutSection: {
                    title: "What is Abhyanga?",
                    description: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    text: "Shirodhara is among the most revered of all Ayurvedic therapies — a profound ritual in which a continuous, rhythmic stream of warm medicated oil cascades gently across the forehead, falling precisely upon the Ajna marma, the sacred energy gateway between the brows."
                                }
                            ]
                        },
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    text: "Derived from the Sanskrit shiro (head) and dhara (stream), this practice has been refined over five millennia to address the deepest layers of the nervous system — not through force, but through the gentle, unwavering language of rhythm and warmth."
                                }
                            ]
                        }
                    ],
                    image: {
                        alternativeText: "Abhyanga Therapy",
                        mime: "image/jpeg",
                        url: "/images/abhyanga.jpg"
                    },

                    tags: [
                        {
                            id: 1,
                            title: "Body Restoration"
                        },
                        {
                            id: 2,
                            title: "60 Minutes"
                        }
                    ]
                }
            },
            ritualExperienceSection: {
                title: "The Ritual Experience",
                subtitle: "A thoughtfully guided process designed to relax the body and calm the mind",

                steps: [
                    {
                        id: 1,
                        stepNumber: "01",
                        title: "The Need",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "A personalised consultation helps identify your body's current dosha balance. Your therapist selects the ideal medicated oils to restore harmony and calm."
                                    }
                                ]
                            }
                        ],
                        featured: true
                    },

                    {
                        id: 2,
                        stepNumber: "02",
                        title: "Preparation & Anointing",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "Warm herbal oils are gently applied as your body begins to unwind. Slow rhythmic movements awaken vital marma points and deepen relaxation."
                                    }
                                ]
                            }
                        ],
                        featured: false
                    },

                    {
                        id: 3,
                        stepNumber: "03",
                        title: "Synchronised Flow",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "Continuous flowing strokes ease tension and improve energy circulation. The body gradually settles into a deeply restorative, meditative state."
                                    }
                                ]
                            }
                        ],
                        featured: false
                    },

                    {
                        id: 4,
                        stepNumber: "04",
                        title: "The Afterglow",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "A warm herbal finish helps the oils absorb deeply into the body. You leave feeling lighter, calmer, and completely renewed from within."
                                    }
                                ]
                            }
                        ],
                        featured: false
                    }
                ]
            },
            benefitsSection: {
                title: "The Alchemy of Benefits",
                subtitle: "Holistic outcomes that nurture both mind and body",

                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "The benefits of Abhyanga are not merely felt during the session — they accumulate. The oils continue working for up to 12 hours after treatment, the lymphatic system remains activated, and many guests report the deepest sleep of their recent lives in the nights that follow."
                            }
                        ]
                    }
                ],

                image: {
                    alternativeText: "Abhyanga Benefits",
                    mime: "image/jpeg",
                    url: "/images/alchemy.jpg"
                },

                benefits: [
                    {
                        id: 1,
                        icon: {
                            alternativeText: "Deep Muscular Release",
                            mime: "image/svg+xml",
                            url: "/images/benefit_icon1.svg"
                        },
                        title: "Deep Muscular Release",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "Accumulated tension held in the deep myofascial layers dissolves under the sustained, heated strokes — releasing knots that habitual movement patterns have locked in place for years."
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        id: 2,
                        icon: {
                            alternativeText: "Lymphatic Awakening",
                            mime: "image/svg+xml",
                            url: "/images/benefit_icon2.svg"
                        },
                        title: "Lymphatic Awakening",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "The directional strokes stimulate lymphatic circulation — the body's detoxification network — clearing stagnation, reducing puffiness, and supporting the immune system's innate intelligence."
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        id: 3,
                        icon: {
                            alternativeText: "Nervous System Reset",
                            mime: "image/svg+xml",
                            url: "/images/benefit_icon3.svg"
                        },
                        title: "Nervous System Reset",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "Sustained, rhythmic touch activates the parasympathetic nervous system — suspending the fight-or-flight response and coaxing the body into a state of deep biological rest it rarely accesses in daily life."
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        id: 4,
                        icon: {
                            alternativeText: "Skin Nourishment",
                            mime: "image/svg+xml",
                            url: "/images/benefit_icon4.svg"
                        },
                        title: "Skin Nourishment",
                        description: [
                            {
                                type: "paragraph",
                                children: [
                                    {
                                        type: "text",
                                        text: "Herb-infused oils penetrate the seven dhatu layers of skin, restoring elasticity, natural luminosity, and tone — leaving the skin visibly softer and deeply hydrated for several days after treatment."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            id: 2,
            slug: "shirodhara",
            title: "Shirodhara",
            hero: {
                id: 25,
                heroMedia: {
                    alternativeText: "Shirodhara",
                    mime: "image/jpg",
                    url: "/images/treatment.jpg",
                },
                title: "Shirodhara",

            },
        },
        {
            id: 3,
            slug: "nasya",
            title: "Nasya",
            hero: {
                id: 25,
                heroMedia: {
                    alternativeText: "Nasya",
                    mime: "image/jpg",
                    url: "/images/treatment.jpg",
                },
                title: "Nasya",

            },
        },
        {
            id: 4,
            slug: "kizhi",
            title: "Kizhi",
            hero: {
                id: 25,
                heroMedia: {
                    alternativeText: "Kizhi",
                    mime: "image/jpg",
                    url: "/images/treatment.jpg",
                },
                title: "Kizhi",

            },
        },
        {
            id: 5,
            slug: "panchakarma",
            title: "Panchakarma",
            hero: {
                id: 25,
                heroMedia: {
                    alternativeText: "Panchakarma",
                    mime: "image/jpg",
                    url: "/images/treatment.jpg",
                },
                title: "Panchakarma",

            },
        }
    ]
}

export default async function TreatmentDetails({ params }) {
    const { slug } = await params;
    const treatment = local_data.treatments.find(
        (item) => item.slug === slug
    );

    if (!treatment) {
        notFound();
    }
    return (
        <>
            <InnerHero data={treatment.hero} />
            <TreatmentDetail data={treatment.aboutTreatmentSection} />
            <TreatmentRitualExperience data={treatment.ritualExperienceSection} />
            <TreatmentAlchemy data={treatment.benefitsSection} />
        </>
    )
}
