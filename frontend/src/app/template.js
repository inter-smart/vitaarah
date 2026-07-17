import { PageTransition } from "@/components/common/page-transition/PageTransition";

export default function Template({ children }) {
  return <PageTransition>{children}</PageTransition>;
}
