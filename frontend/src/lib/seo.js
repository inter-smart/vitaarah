import { getStrapiMediaUrl } from "@/lib/strapi";

/**
 * Builds standard metadata for Next.js pages from Strapi SEO components
 * 
 * @param {Object} seo - The SEO object from Strapi
 * @param {Object} fallback - Fallback values if SEO properties are missing
 * @returns {Object} Next.js Metadata object
 */
export function buildMetadata(seo, fallback = {}) {
  const title = seo?.meta_title || fallback.title || "Vitaarah";
  const description = seo?.meta_description || fallback.description || "";
  const keywords = seo?.keywords || fallback.keywords || "";
  
  const ogImageUrl = seo?.og_image?.url 
    ? getStrapiMediaUrl(seo.og_image.url) 
    : fallback.image
    ? getStrapiMediaUrl(fallback.image)
    : "/images/placeholder.jpg";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: seo?.canonical_url || fallback.canonical || undefined,
    },
    openGraph: {
      title,
      description,
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
