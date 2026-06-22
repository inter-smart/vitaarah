const local_data = {
    specialitySection: {
        id: 1,
        title: "Dedicated Pathways to Balance",
        subtitle: "Precision care inspired by timeless traditions",

        specialities: [
            {
                id: 1,
                title: "Panchakarma",
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
                    url: "/images/icons/panchakarma.svg"
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
                featured: false
            },

            {
                id: 2,
                title: "Skin Rituals",
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
                    url: "/images/icons/skin-rituals.svg"
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
                featured: false
            },

            {
                id: 3,
                title: "Hair & Scalp Therapy",
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
                    url: "/images/icons/hair-scalp.svg"
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
                featured: false
            },

            {
                id: 4,
                title: "Stress Recovery",
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
                    url: "/images/icons/stress-recovery.svg"
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
                featured: false
            },

            {
                id: 5,
                title: "Metabolic Balance",
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
                    url: "/images/icons/metabolic-balance.svg"
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
                featured: true
            },

            {
                id: 6,
                title: "Women's Wellness",
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
                    url: "/images/icons/womens-wellness.svg"
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
                featured: false
            }
        ],

        footerText:
            "Unsure which path is yours? Speak with a practitioner — we'll guide you to the right protocol.",

        button: {
            label: "Enquiry Form",
            url: "/enquiry"
        }
    }
}

export default function Speciality() {
    return (
        <>

        </>
    )
}
