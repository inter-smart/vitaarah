"use client";
import ConditionRootCause from '@/components/blocks/condition/condition-root-cause';
import ConditionSymtoms from '@/components/blocks/condition/condition-symtoms';
import ConditionTab from '@/components/blocks/condition/condition-tab'
import InnerHero from '@/components/common/InnerHero'
import { useSearchParams } from "next/navigation";

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
            }

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
    ]



}

export default function Condition() {

    const searchParams = useSearchParams();
    const activeTab = searchParams.get("tab") || "back-pain";

    const currentData =
        local_data?.conditions?.find((item) => item.slug === activeTab) ||
        local_data?.conditions?.[0];

    if (!currentData) return null;

    return (
        <>
            <InnerHero data={local_data.hero} />
            <ConditionTab data={local_data.tabs} />
            <ConditionSymtoms data={currentData.symptomSection} />
            <ConditionRootCause data={currentData.rootcauseSection} />

        </>
    )
}

