import { getContactPageQuery } from "@/lib/queries";
import Herosection from "@/components/common/InnerHero";
import ContactInfo from "@/components/blocks/contact/contact-info";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/contact-page?${getContactPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: data?.hero?.title || "Contact Us | Vitaarah",
    description: "Contact us to start your healing journey.",
    image: data?.hero?.hero_media?.url,
  });
}

export default async function ContactPage() {
  const pageRes = await fetchAPI(`/api/contact-page?${getContactPageQuery()}`);
  const pageData = pageRes?.data;

  if (!pageData) {
    notFound();
  }

  return (
    <>
      {pageData.hero && <Herosection data={pageData.hero} />}
      {pageData.contactSection && (
        <ContactInfo data={pageData.contactSection} />
      )}
    </>
  );
}
