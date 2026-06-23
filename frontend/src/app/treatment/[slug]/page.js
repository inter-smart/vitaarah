import TreatmentDetail from '@/components/blocks/treatment/treatment-detail';
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
        </>
    )
}
