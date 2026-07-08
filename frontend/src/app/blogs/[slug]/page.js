import { notFound } from "next/navigation";
import Herosection from "@/components/common/InnerHero";
import BlogDetail from "@/components/blocks/blog/blog-detail";
import { fetchAPI, buildQuery, getStrapiMediaUrl } from "@/lib/strapi";

const blogPageQuery = buildQuery({
  innerHero: {
    populate: {
      hero_media: true,
      primary_button: { populate: { icon: true } },
    },
  },
});

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blogRes = await fetchAPI(
    `/api/blogs?filters[slug][$eq]=${slug}&${buildQuery({ featured_image: true })}`,
  ).catch(() => null);

  const blog = blogRes?.data?.[0];

  if (!blog) return { title: "Blog Not Found" };

  const metaTitle = blog.title || "Blog";
  const metaDescription = blog.short_description || "";
  const ogImage = blog.featured_image
    ? getStrapiMediaUrl(blog.featured_image.url)
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

export async function generateStaticParams() {
  const res = await fetchAPI(`/api/blogs?fields[0]=slug`);
  const blogs = res?.data || [];
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const [pageRes, activeBlogRes, recentBlogsRes] = await Promise.all([
    fetchAPI(`/api/blog-page?${blogPageQuery}`),
    fetchAPI(
      `/api/blogs?filters[slug][$eq]=${slug}&${buildQuery({ featured_image: true })}`,
    ),
    fetchAPI(
      `/api/blogs?${buildQuery({ featured_image: true })}&pagination[page]=1&pagination[pageSize]=3&sort=published_date:desc`,
    ),
  ]);

  const pageData = pageRes?.data ?? null;
  const activeBlog = activeBlogRes?.data?.[0];

  if (!activeBlog) {
    notFound();
  }

  const hero = pageData?.innerHero ?? null;
  const relatedBlogs = recentBlogsRes?.data || [];

  return (
    <>
      {hero && <Herosection data={hero} />}
      <BlogDetail data={activeBlog} relatedBlogs={relatedBlogs} />
    </>
  );
}
