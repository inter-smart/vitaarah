import { getTermsPageQuery } from "@/lib/queries";
import LegalContent from "@/components/blocks/legal/legal-content";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbNav from "@/components/common/breadcrumb";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/terms-page?${getTermsPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: "Terms & Conditions | Vitaarah",
  });
}

export default async function TermsAndConditionsPage() {
  const pageRes = await fetchAPI(`/api/terms-page?${getTermsPageQuery()}`);
  const pageData = pageRes?.data ?? null;

  if (!pageData) return notFound();

  return (
    <>
      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      {pageData.termsSection && <LegalContent data={pageData.termsSection} />}
    </>
  );
}
