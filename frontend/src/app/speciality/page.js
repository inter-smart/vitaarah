import { fetchAPI, buildQuery } from "@/lib/strapi";
import InnerHero from "@/components/common/InnerHero";
import SpecialityPathway from "@/components/blocks/speciality/speciality-pathway";

const specialitiesPageQuery = buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  specialities_listing_section: {
    populate: {
      specialities_item: {
        populate: {
          icon: true,
          treatment: {
            populate: {
              conditions_treated: true,
            },
          },
        },
      },
    },
  },
  cta_specialities_section: true,
});

export default async function SpecialityPage() {
  const res = await fetchAPI(`/api/specialities-page?${specialitiesPageQuery}`);
  const data = res?.data ?? null;

  if (!data) return null;

  const { hero, specialities_listing_section, cta_specialities_section } = data;

  console.log("specialities_listing_section", specialities_listing_section);
  

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {specialities_listing_section && (
        <SpecialityPathway
          data={{ specialities_listing_section, cta_specialities_section }}
        />
      )}
    </>
  );
}
