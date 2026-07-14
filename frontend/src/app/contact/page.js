import { getContactPage, getContactMetadata } from "@/lib/api/contact";
import Herosection from "@/components/common/InnerHero";
import ContactInfo from "@/components/blocks/contact/contact-info";
import { notFound } from "next/navigation";
import { getLayoutData } from "@/lib/layout";

export async function generateMetadata() {
  return getContactMetadata();
}

export default async function ContactPage() {
  const [pageData, layoutData] = await Promise.all([
    getContactPage(),
    getLayoutData(),
  ]);

  if (!pageData) {
    notFound();
  }

  return (
    <>
      {pageData.hero && <Herosection data={pageData.hero} />}
      {pageData.contactSection && (
        <ContactInfo data={pageData.contactSection} siteSettings={layoutData?.siteSetting} />
      )}
    </>
  );
}
