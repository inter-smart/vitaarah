import Herosection from "@/components/common/InnerHero";
import ContactInfo from "@/components/blocks/contact/contact-info";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";

const contactPageQuery = buildQuery({
  seo: { populate: { og_image: true } },
  hero: {
    populate: {
      hero_media: true,
      primary_button: { populate: { icon: true } },
    },
  },
  contactSection: true,
});

export async function generateMetadata() {
  const res = await fetchAPI(`/api/contact-page?${contactPageQuery}`).catch(
    () => null,
  );
  const pageData = res?.data || {};
  const seo = pageData?.seo || {};

  const metaTitle =
    seo?.meta_title || pageData?.hero?.title || "Contact Us | Vitaarah";
  const metaDescription = seo?.meta_description || "";
  const ogImage = seo?.og_image
    ? getStrapiMediaUrl(seo.og_image)
    : pageData?.hero?.hero_media
      ? getStrapiMediaUrl(pageData.hero.hero_media)
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

export default async function ContactPage() {
  const pageRes = await fetchAPI(`/api/contact-page?${contactPageQuery}`);
  const pageData = pageRes?.data ?? null;

  if (!pageData) return null;

  return (
    <>
      {pageData.hero && <Herosection data={pageData.hero} />}
      {pageData.contactSection && (
        <ContactInfo data={pageData.contactSection} />
      )}
    </>
  );
}
