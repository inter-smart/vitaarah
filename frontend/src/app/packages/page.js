import { getPackagePageQuery, getPackageQuery } from "@/lib/queries";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import InnerHero from "@/components/common/InnerHero";
import PackagesStatistics from "@/components/blocks/packages/packages-statistics";
import PackagesListing from "@/components/blocks/packages/packages-listing";
import PackagesDurations from "@/components/blocks/packages/packages-durations";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/package-page?${getPackagePageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.seo, {
    title: data?.hero?.title || "Packages | Vitaarah",
    description: data?.hero?.description,
    image: data?.hero?.hero_media?.url,
  });
}

export default async function PackagesPage() {
  const [pageRes, packagesRes, availableDurationsRes] = await Promise.all([
    fetchAPI(`/api/package-page?${getPackagePageQuery()}`),
    fetchAPI(`/api/packages?${getPackageQuery()}`),
    fetchAPI(`/api/available-durations`),
  ]);

  const pageData = pageRes?.data;
  const packagesData = packagesRes?.data ?? [];
  const availableDurationsData = [...(availableDurationsRes?.data || [])].sort(
    (a, b) => {
      const getDays = (label) => Number(label?.match(/\d+/)?.[0] || 0);
      return getDays(a.label) - getDays(b.label);
    },
  );

  if (!pageData) {
    notFound();
  }

  const {
    hero,
    statistics_section,
    package_listing_section,
    package_duration_section,
  } = pageData;

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
