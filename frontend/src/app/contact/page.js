import { getContactPage, getContactMetadata } from "@/lib/api/contact";
import Herosection from "@/components/common/InnerHero";
import ContactInfo from "@/components/blocks/contact/contact-info";
import { notFound } from "next/navigation";
import BreadcrumbNav from "@/components/common/breadcrumb";

export async function generateMetadata() {
  return getContactMetadata();
}

export default async function ContactPage() {
  const [pageData] = await Promise.all([getContactPage()]);

  if (!pageData) {
    notFound();
  }

  return (
    <>
      {pageData.hero && <Herosection data={pageData.hero} />}
      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      {pageData.contactSection && (
        <ContactInfo data={pageData.contactSection} />
      )}
    </>
  );
}
