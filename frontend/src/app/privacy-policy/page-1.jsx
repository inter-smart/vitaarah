import LegalContent from "@/components/blocks/legal/legal-content";
import { privacyPolicyData } from "./privacy-data";

export default function PrivacyPolicyPage() {
  return <>{privacyPolicyData && <LegalContent data={privacyPolicyData} />}</>;
}
