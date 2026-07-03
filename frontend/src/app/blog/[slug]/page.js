import Herosection from "@/components/common/InnerHero";
import BlogDetail from "@/components/blocks/blog/blog-detail";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";
import { blogData } from "../blog-data";

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

export async function generateStaticParams() {
  const res = await fetchAPI(`/api/blogs?${blogsQuery}`);
  const blogs = res?.data ?? blogData.blogListSection.blogs;
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const [pageRes, blogsRes] = await Promise.all([
    fetchAPI(`/api/blog-page?${blogPageQuery}`),
    fetchAPI(`/api/blogs?${blogsQuery}`),
  ]);

  const pageData = pageRes?.data ?? null;
  const apiBlogs = blogsRes?.data ?? null;

  const blogs = apiBlogs
    ? apiBlogs.map(resolveFeaturedImage)
    : blogData.blogListSection.blogs;

  const hero = pageData?.innerHero ?? blogData.hero ?? null;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return null;

  const data = { ...post, blogs };

  return (
    <>
      {hero && <Herosection data={hero} />}
      <BlogDetail data={data} />
    </>
  );
}
