import { getConditionPageQuery, getConditionQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import InnerHero from "@/components/common/InnerHero";
import ConditionTab from "@/components/blocks/condition/condition-tab";
import ConditionSymtoms from "@/components/blocks/condition/condition-symtoms";
import ConditionRootCause from "@/components/blocks/condition/condition-root-cause";
import ConditionTreatment from "@/components/blocks/condition/condition-treatment";
import ConditionLifestyle from "@/components/blocks/condition/condition-lifestyle";
import ConditionExpert from "@/components/blocks/condition/condition-expert";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const [conditionRes, conditionPageRes] = await Promise.all([
    fetchAPI(`/api/conditions?filters[slug][$eq]=${slug}&${getConditionQuery()}`),
    fetchAPI(`/api/condition-page?${getConditionPageQuery()}`),
  ]);

  const condition = conditionRes?.data?.[0];
  const pageData = conditionPageRes?.data;

  return buildMetadata(pageData?.seo, {
    title: `${condition?.title || "Condition"} | Vitaarah`,
    description: condition?.short_description,
    image: condition?.featured_image?.url,
  });
}

export default async function ConditionsPage({ params }) {
  const { slug } = await params;

  // We use Promise.all to fetch page global layout, the specific condition, and the lightweight conditions list for the Tabs.
  const [conditionPageRes, conditionRes, allConditionsRes] = await Promise.all([
    fetchAPI(`/api/condition-page?${getConditionPageQuery()}`),
    fetchAPI(`/api/conditions?filters[slug][$eq]=${slug}&${getConditionQuery()}`),
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
        <ConditionRootCause 
          data={condition.root_cause_section} 
          rootCauses={condition.related_root_causes} 
        />
      )}
      {condition?.recommended_treatments_section && (
        <ConditionTreatment 
          data={condition.recommended_treatments_section} 
          treatments={condition.related_treatments}
        />
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
