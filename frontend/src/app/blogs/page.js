import Herosection from "@/components/common/InnerHero";
import BlogListing from "@/components/blocks/blog/blog-listing";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";

const blogPageQuery = buildQuery({
  Seo: { populate: { og_image: true } },
  innerHero: {
    populate: {
      hero_media: true,
      primary_button: { populate: { icon: true } },
    },
  },
  blogListingSection: true,
});

export async function generateMetadata() {
  const res = await fetchAPI(`/api/blog-page?${blogPageQuery}`).catch(
    () => null,
  );
  const pageData = res?.data || {};
  const seo = pageData?.Seo || {};

  const metaTitle =
    seo?.meta_title || pageData?.innerHero?.title || "Blogs | Vitaarah";
  const metaDescription = seo?.meta_description || "";
  const ogImage = seo?.og_image
    ? getStrapiMediaUrl(seo.og_image)
    : pageData?.innerHero?.hero_media
      ? getStrapiMediaUrl(pageData.innerHero.hero_media)
      : "/images/placeholder.jpg";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seo?.keywords || "",
    alternates: {
      canonical: seo?.canonical_url || "",
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImage }],
    },
  };
}

export default async function BlogPage() {
  const [pageRes, blogsRes] = await Promise.all([
    fetchAPI(`/api/blog-page?${blogPageQuery}`),
    fetchAPI(
      `/api/blogs?${buildQuery({ featured_image: true })}&pagination[page]=1&pagination[pageSize]=20&sort=published_date:desc`,
    ),
  ]);

  const pageData = pageRes?.data ?? null;
  const innerHero = pageData?.innerHero ?? null;
  const blogListingSection = pageData?.blogListingSection ?? {};

  return (
    <>
      {innerHero && <Herosection data={innerHero} />}
      <BlogListing data={blogListingSection} blogs={blogsRes?.data || []} />
    </>
  );
}
