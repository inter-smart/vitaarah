import SpecialityPathway from "@/components/blocks/speciality/speciality-pathway"
import InnerHero from "@/components/common/InnerHero"

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
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Curated Healing Domains",
            mime: "image/jpg",
            url: "/images/specilaity-banner.jpg",
        },
        title: "Curated Healing Domains",

    },

    specialitySection: {
        id: 1,
        title: "Dedicated Pathways to Balance",
        subtitle: "Precision care inspired by timeless traditions",

        specialities: [
            {
                id: 1,
                title: "Panchakarma",
                slug: "panchakarma",
                conditionLabel: "Conditions treated",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Five classical purifications recalibrating body intelligence at its source."
                            }
                        ]
                    }
                ],
                icon: {
                    alternativeText: "Panchakarma",
                    mime: "image/svg+xml",
                    url: "/images/path_icon1.svg"
                },

                conditions: [
                    {
                        id: 1,
                        title: "Chronic fatigue"
                    },
                    {
                        id: 2,
                        title: "Toxin overload"
                    },
                    {
                        id: 3,
                        title: "Joint Stiffness"
                    }
                ],

            },

            {
                id: 2,
                title: "Skin Rituals",
                slug: "skin-rituals",
                conditionLabel: "Conditions treated",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Botanical regimens restoring luminosity through patient, layered care."
                            }
                        ]
                    }
                ],
                icon: {
                    alternativeText: "Skin Rituals",
                    mime: "image/svg+xml",
                    url: "/images/path_icon2.svg"
                },
                conditions: [
                    {
                        id: 1,
                        title: "Pigmentation"
                    },
                    {
                        id: 2,
                        title: "Acne"
                    },
                    {
                        id: 3,
                        title: "Eczema"
                    }
                ], 
            },

            {
                id: 3,
                title: "Hair & Scalp Therapy",
                slug: "hair-scalp-therapy",
                conditionLabel: "Conditions treated",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Root-deep nourishment with medicated oils and lineage techniques."
                            }
                        ]
                    }
                ],
                icon: {
                    alternativeText: "Hair & Scalp Therapy",
                    mime: "image/svg+xml",
                    url: "/images/path_icon3.svg"
                },
                conditions: [
                    {
                        id: 1,
                        title: "Hair Fall"
                    },
                    {
                        id: 2,
                        title: "Premature greying"
                    },
                    {
                        id: 3,
                        title: "Dandruff"
                    }
                ], 
            },

            {
                id: 4,
                title: "Stress Recovery",
                slug: "stress-recovery",
                conditionLabel: "Conditions treated",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Quieting the nervous system through Shirodhara and breath-led therapy."
                            }
                        ]
                    }
                ],
                icon: {
                    alternativeText: "Stress Recovery",
                    mime: "image/svg+xml",
                    url: "/images/path_icon4.svg"
                },
                conditions: [
                    {
                        id: 1,
                        title: "Insomnia"
                    },
                    {
                        id: 2,
                        title: "Anxiety"
                    },
                    {
                        id: 3,
                        title: "Burnout"
                    }
                ], 
            },

            {
                id: 5,
                title: "Metabolic Balance",
                slug: "metabolic-balance",
                conditionLabel: "Conditions treated",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Restoring agni — the digestive fire — for sustained vitality and clarity."
                            }
                        ]
                    }
                ],
                icon: {
                    alternativeText: "Metabolic Balance",
                    mime: "image/svg+xml",
                    url: "/images/path_icon5.svg"
                },
                conditions: [
                    {
                        id: 1,
                        title: "Diabetes"
                    },
                    {
                        id: 2,
                        title: "Obesity"
                    },
                    {
                        id: 3,
                        title: "Thyroid Imbalance"
                    }
                ], 
            },

            {
                id: 6,
                title: "Women's Wellness",
                slug: "womens-wellness",
                conditionLabel: "Conditions treated",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Cycle-aware care across menstruation, fertility and menopausal transitions."
                            }
                        ]
                    }
                ],
                icon: {
                    alternativeText: "Women's Wellness",
                    mime: "image/svg+xml",
                    url: "/images/path_icon6.svg"
                },
                conditions: [
                    {
                        id: 1,
                        title: "PCOS"
                    },
                    {
                        id: 2,
                        title: "Menopause"
                    },
                    {
                        id: 3,
                        title: "Fertility"
                    }
                ], 
            },
        ],

        ctaSection: {
            footerText:
                "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

            button: {
                label: "Enquiry Form",
                slug: "/"
            },
            whatsapp: {
                label: "whtasapp_label",
                Url: "/"
            }
        }
    }
}

export default function Speciality() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <SpecialityPathway data={local_data.specialitySection} />
        </>
    )
}
