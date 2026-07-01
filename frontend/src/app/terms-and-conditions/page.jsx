import LegalContent from "@/components/blocks/legal/legal-content";
import { termsAndConditionsData } from "./terms-data";

export default function TermsAndConditionsPage() {
  return (
    <>
      {termsAndConditionsData && <LegalContent data={termsAndConditionsData} />}
    </>
  );
}
