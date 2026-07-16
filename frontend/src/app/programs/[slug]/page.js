import { getProgramQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import InnerHero from "@/components/common/InnerHero";
import TreatmentFaq from "@/components/blocks/treatment/treatment-faq";
import ProgramDetail from "@/components/blocks/program/program-detail";
import BreadcrumbNav from "@/components/common/breadcrumb";

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug;

  const res = await fetchAPI(
    `/api/programs?filters[slug][$eq]=${slug}&${getProgramQuery()}`,
  );

  const program = res?.data?.[0];

  return buildMetadata(program?.seo, {
    title: program?.title || "Program Details",
    description: program?.short_description || "Discover our holistic and comprehensive programs.",
    image: program?.hero_media?.url,
  });
}

export default async function ProgramPage(props) {
  const params = await props.params;
  const slug = params?.slug;

  const res = await fetchAPI(
    `/api/programs?filters[slug][$eq]=${slug}&${getProgramQuery()}`,
  ).catch(() => null);

  const program = res?.data?.[0];

  if (!program) {
    notFound();
  }

  // Use the same numeric sort pattern adopted globally
  const availableDurations = [...(program?.available_durations || [])].sort(
    (a, b) => {
      const getDays = (label) => Number(label?.match(/\d+/)?.[0] || 0);
      return getDays(a.label) - getDays(b.label);
    },
  );

  return (
    <>
      <InnerHero
        data={{
          title: program.title,
          hero_media: program.hero_media,
        }}
      />
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/packages" },
          { label: program.title },
        ]}
      />
      <ProgramDetail data={program} availableDurations={availableDurations} />
      <TreatmentFaq data={program.faq_section} />
    </>
  );
}
