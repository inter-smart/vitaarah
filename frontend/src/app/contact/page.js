import { getContactPage, getContactMetadata } from "@/lib/api/contact";
import Herosection from "@/components/common/InnerHero";
import ContactInfo from "@/components/blocks/contact/contact-info";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  return getContactMetadata();
}

export default async function ContactPage() {
  const pageData = await getContactPage();

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
