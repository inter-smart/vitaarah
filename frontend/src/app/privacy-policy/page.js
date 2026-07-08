import LegalContent from "@/components/blocks/legal/legal-content";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import { notFound } from "next/navigation";

const privacyPageQuery = buildQuery({
  seo: { populate: { og_image: true } },
  privacySection: true,
});

export async function generateMetadata() {
  const res = await fetchAPI(`/api/privacy-page?${privacyPageQuery}`).catch(
    () => null,
  );
  const pageData = res?.data || {};
  const seo = pageData?.seo || {};

  const metaTitle = seo?.meta_title || "Privacy Policy | Vitaarah";
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

export default async function PrivacyPolicyPage() {
  const pageRes = await fetchAPI(`/api/privacy-page?${privacyPageQuery}`);
  const pageData = pageRes?.data ?? null;

  if (!pageData) return notFound();

  return (
    <>
      {pageData.privacySection && (
        <LegalContent data={pageData.privacySection} />
      )}
    </>
  );
}
