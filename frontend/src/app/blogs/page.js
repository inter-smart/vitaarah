import { getBlogPageQuery } from "@/lib/queries";
import Herosection from "@/components/common/InnerHero";
import BlogListing from "@/components/blocks/blog/blog-listing";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const res = await fetchAPI(`/api/blog-page?${getBlogPageQuery()}`);
  const data = res?.data;
  return buildMetadata(data?.Seo, {
    title: data?.innerHero?.title || "Blogs | Vitaarah",
    description: data?.innerHero?.description,
    image: data?.innerHero?.hero_media?.url,
  });
}

export default async function BlogPage() {
  const [pageRes, blogsRes] = await Promise.all([
    fetchAPI(`/api/blog-page?${getBlogPageQuery()}`),
    fetchAPI(
      `/api/blogs?${buildQuery({ featured_image: true })}&pagination[page]=1&pagination[pageSize]=20&sort=published_date:desc`,
    ),
  ]);

  const pageData = pageRes?.data;
  if (!pageData) {
    notFound();
  }

  const innerHero = pageData?.innerHero ?? null;
  const blogListingSection = pageData?.blogListingSection ?? {};

  return (
    <>
      {innerHero && <Herosection data={innerHero} />}
      <BlogListing data={blogListingSection} blogs={blogsRes?.data || []} />
    </>
  );
}
