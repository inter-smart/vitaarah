import LegalContent from "@/components/blocks/legal/legal-content";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import { notFound } from "next/navigation";

const termsPageQuery = buildQuery({
  seo: { populate: { og_image: true } },
  termsSection: true,
});

export async function generateMetadata() {
  const res = await fetchAPI(`/api/terms-page?${termsPageQuery}`).catch(
    () => null,
  );
  const pageData = res?.data || {};
  const seo = pageData?.seo || {};

  const metaTitle = seo?.meta_title || "Terms & Conditions | Vitaarah";
  const metaDescription = seo?.meta_description || "";
  const ogImage = seo?.og_image
    ? getStrapiMediaUrl(seo.og_image)
    : "/images/placeholder.jpg";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seo?.keywords || "",
    alternates: {
      canonical: seo?.canonical_url || "",
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImage }],
    },
  };
}

export default async function TermsAndConditionsPage() {
  const pageRes = await fetchAPI(`/api/terms-page?${termsPageQuery}`);
  const pageData = pageRes?.data ?? null;

  if (!pageData) return notFound();

  console.log(pageData);

  return (
    <>
      {pageData.termsSection && <LegalContent data={pageData.termsSection} />}
    </>
  );
}
