import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import { notFound } from "next/navigation";
import InnerHero from "@/components/common/InnerHero";
import TreatmentFaq from "@/components/blocks/treatment/treatment-faq";
import ProgramDetail from "@/components/blocks/program/program-detail";

const programQuery = buildQuery({
  hero_media: true,
  available_durationss: true,
  introduction_section: {
    populate: {
      introduction_image: true,
    },
  },
  benefits_section: true,
  Included_treatments_section: true,
  who_is_this_for_section: true,
  duration_info_section: true,
  faq_section: {
    populate: {
      faq_item: true,
    },
  },
});

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params?.slug;

  const res = await fetchAPI(
    `/api/programs?filters[slug][$eq]=${slug}&${programQuery}`
  ).catch(() => null);

  const program = res?.data?.[0];

  if (!program) {
    return {};
  }

  const seo = program?.seo || {};
  const metaTitle = seo?.metaTitle || program?.title || "Program Details";
  const metaDescription =
    seo?.metaDescription ||
    program?.short_description ||
    "Discover our holistic and comprehensive programs.";
  const ogImage = seo?.metaImage
    ? getStrapiMediaUrl(seo.metaImage)
    : program?.hero_media
      ? getStrapiMediaUrl(program.hero_media)
      : "/images/placeholder.jpg";

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImage }],
    },
  };
}

export default async function ProgramPage(props) {
  const params = await props.params;
  const slug = params?.slug;

  const res = await fetchAPI(
    `/api/programs?filters[slug][$eq]=${slug}&${programQuery}`
  ).catch(() => null);

  const program = res?.data?.[0];

  if (!program) {
    notFound();
  }

  // Use the same numeric sort pattern adopted globally
  const availableDurations = [...(program?.available_durationss || [])].sort(
    (a, b) => {
      const getDays = (label) => Number(label?.match(/\d+/)?.[0] || 0);
      return getDays(a.label) - getDays(b.label);
    }
  );

  return (
    <>
      <InnerHero
        data={{
          title: program.title,
          hero_media: program.hero_media,
        }}
      />
      <ProgramDetail
        data={program}
        availableDurations={availableDurations}
      />
      <TreatmentFaq data={program.faq_section} />
    </>
  );
}

