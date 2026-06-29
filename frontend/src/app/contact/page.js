import Herosection from "@/components/common/InnerHero";
import ContactInfo from "@/components/blocks/contact/contact-info";
import { contactData } from "./contact-data";

const local_data = contactData;

export default function ContactPage() {
  return (
    <>
      {local_data.hero && <Herosection data={local_data.hero} />}
      {local_data.contactSection && (
        <ContactInfo data={local_data.contactSection} />
      )}
    </>
  );
}
