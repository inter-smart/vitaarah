import Herosection from "@/components/common/InnerHero";
import BlogListing from "@/components/blocks/blog/blog-listing";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";

const blogPageQuery = buildQuery({
  Seo: { populate: { ogImage: true } },
  innerHero: {
    populate: {
      heroMedia: true,
      primaryButton: { populate: { icon: true } },
    },
  },
});

const blogsQuery = buildQuery({
  featuredImage: true,
});

function resolveFeaturedImage(blog) {
  if (!blog?.featuredImage?.url) return blog;
  return {
    ...blog,
    featuredImage: {
      ...blog.featuredImage,
      url: getStrapiMediaUrl(blog.featuredImage.url),
    },
  };
}

export default async function BlogPage() {
  const [pageRes, blogsRes] = await Promise.all([
    fetchAPI(`/api/blog-page?${blogPageQuery}`),
    fetchAPI(`/api/blogs?${blogsQuery}`),
  ]);

  const pageData = pageRes?.data ?? null;
  const blogs = (blogsRes?.data ?? []).map(resolveFeaturedImage);

  const innerHero = pageData?.innerHero ?? null;
  const blogListingSection = pageData?.blogListingSection ?? null;

  if (!innerHero && blogs.length === 0) return null;

  const blogListData = blogListingSection
    ? { ...blogListingSection, blogs }
    : { title: "Blogs", blogs };

  return (
    <>
      {innerHero && <Herosection data={innerHero} />}
      <BlogListing data={blogListData} />
    </>
  );
}
