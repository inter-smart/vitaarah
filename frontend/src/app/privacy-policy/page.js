import { getPrivacyPageQuery } from "@/lib/queries";
import LegalContent from "@/components/blocks/legal/legal-content";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbNav from "@/components/common/breadcrumb";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/privacy-page?${getPrivacyPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: "Privacy Policy | Vitaarah",
  });
}

export default async function PrivacyPolicyPage() {
  const pageRes = await fetchAPI(`/api/privacy-page?${getPrivacyPageQuery()}`);
  const pageData = pageRes?.data ?? null;

  if (!pageData) return notFound();

  return (
    <>
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      {pageData.privacySection && (
        <LegalContent data={pageData.privacySection} />
      )}
    </>
  );
}
