import { fetchAPI, buildQuery } from "@/lib/strapi";
import InnerHero from "@/components/common/InnerHero";
import PackagesStatistics from "@/components/blocks/packages/packages-statistics";
import PackagesListing from "@/components/blocks/packages/packages-listing";
import PackagesDurations from "@/components/blocks/packages/packages-durations";

const packagePageQuery = buildQuery({
  hero: {
    populate: {
      hero_media: true,
      primary_button: true,
    },
  },
  statistics_section: {
    populate: {
      statistics: true,
    },
  },
  package_listing_section: true,
  package_duration_section: true,
});

const packagesQuery = buildQuery({
  featured_image: true,
  programs: {
    populate: {
      available_durationss: true,
    },
  },
});

export default async function PackagesPage() {
  const [pageRes, packagesRes, availableDurationsRes] = await Promise.all([
    fetchAPI(`/api/package-page?${packagePageQuery}`).catch(() => null),
    fetchAPI(`/api/packages?${packagesQuery}`).catch(() => null),
    fetchAPI(`/api/available-durations`).catch(() => null),
  ]);

  const pageData = pageRes?.data ?? null;
  const packagesData = packagesRes?.data ?? [];
  const availableDurationsData = [...(availableDurationsRes?.data || [])].sort(
    (a, b) => {
      const getDays = (label) => Number(label?.match(/\d+/)?.[0] || 0);
      return getDays(a.label) - getDays(b.label);
    },
  );
  // const fullProgramsData = programsRes?.data ?? [];

  if (!pageData) return null;

  const {
    hero,
    statistics_section,
    package_listing_section,
    package_duration_section,
  } = pageData;

  // Combine package_listing_section title/description with the actual packages
  const listingData = package_listing_section
    ? {
        ...package_listing_section,
        packages: packagesData,
        durations: availableDurationsData,
      }
    : null;

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {statistics_section && <PackagesStatistics data={statistics_section} />}
      {listingData && <PackagesListing data={listingData} />}
      {package_duration_section && (
        <PackagesDurations
          data={package_duration_section}
          packageDetail={packagesData}
          availableDurationsData={availableDurationsData}
        />
      )}
    </>
  );
}
