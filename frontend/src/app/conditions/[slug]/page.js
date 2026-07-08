import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import { notFound } from "next/navigation";
import InnerHero from "@/components/common/InnerHero";
import ConditionTab from "@/components/blocks/condition/condition-tab";
import ConditionSymtoms from "@/components/blocks/condition/condition-symtoms";
import ConditionRootCause from "@/components/blocks/condition/condition-root-cause";
import ConditionTreatment from "@/components/blocks/condition/condition-treatment";
import ConditionLifestyle from "@/components/blocks/condition/condition-lifestyle";
import ConditionExpert from "@/components/blocks/condition/condition-expert";

const conditionPageQuery = buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  expert_cta_section: true,
  seo: {
    populate: {
      og_image: true,
    },
  },
});

const conditionQuery = buildQuery({
  featured_image: true,
  symptoms_section: {
    populate: {
      symptoms_image: true,
    },
  },
  root_cause_section: {
    populate: {
      root_causes: {
        populate: {
          icon: true,
        },
      },
    },
  },
  recommended_treatments_section: {
    populate: {
      treatments: {
        populate: {
          hero: {
            populate: {
              hero_media: true,
            },
          },
        },
      },
    },
  },
  lifestyle_section: {
    populate: {
      lifestyle_card: {
        populate: {
          featured_image: true,
        },
      },
    },
  },
});

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const [conditionRes, conditionPageRes] = await Promise.all([
    fetchAPI(
      `/api/conditions?filters[slug][$eq]=${slug}&${buildQuery({ populate: { featured_image: true } })}`,
    ),
    fetchAPI(`/api/condition-page?${conditionPageQuery}`),
  ]);

  const condition = conditionRes?.data?.[0];
  const pageData = conditionPageRes?.data;

  if (!condition) {
    return {
      title: "Condition Not Found",
    };
  }

  const seo = pageData?.seo || {};
  const fallbackTitle = `${condition.title} | Vitaarah`;

  return {
    title: seo.meta_title || fallbackTitle,
    description: seo.meta_description || condition.short_description || "",
    keywords: seo.keywords || "",
    alternates: {
      canonical: seo.canonical_url || `/conditions/${slug}`,
    },
    openGraph: {
      title: seo.meta_title || fallbackTitle,
      description: seo.meta_description || condition.short_description || "",
      images: [
        seo.og_image?.url
          ? getStrapiMediaUrl(seo.og_image.url)
          : condition?.featured_image?.url
            ? getStrapiMediaUrl(condition.featured_image.url)
            : "/images/placeholder.jpg",
      ],
    },
  };
}

export default async function ConditionsPage({ params }) {
  const { slug } = await params;

  // We use Promise.all to fetch page global layout, the specific condition, and the lightweight conditions list for the Tabs.
  const [conditionPageRes, conditionRes, allConditionsRes] = await Promise.all([
    fetchAPI(`/api/condition-page?${conditionPageQuery}`),
    fetchAPI(`/api/conditions?filters[slug][$eq]=${slug}&${conditionQuery}`),
    fetchAPI(`/api/conditions?${buildQuery({ fields: ["title", "slug"] })}`),
  ]);

  const condition = conditionRes?.data?.[0];
  if (!condition) {
    notFound();
  }

  const pageData = conditionPageRes?.data || {};
  const allConditions = allConditionsRes?.data || [];

  console.log(condition);
  console.log(pageData);
  console.log(allConditions);

  return (
    <>
      {pageData?.hero && <InnerHero data={pageData.hero} />}
      <ConditionTab data={allConditions} />
      {condition?.symptoms_section && (
        <ConditionSymtoms data={condition.symptoms_section} />
      )}
      {condition?.root_cause_section && (
        <ConditionRootCause data={condition.root_cause_section} />
      )}
      {condition?.recommended_treatments_section && (
        <ConditionTreatment data={condition.recommended_treatments_section} />
      )}
      {condition?.lifestyle_section && (
        <ConditionLifestyle data={condition.lifestyle_section} />
      )}
      {pageData?.expert_cta_section && (
        <ConditionExpert data={pageData.expert_cta_section} />
      )}
    </>
  );
}
