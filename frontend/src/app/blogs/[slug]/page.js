import { getBlogDetailQuery, getActiveBlogQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import Herosection from "@/components/common/InnerHero";
import BlogDetail from "@/components/blocks/blog/blog-detail";
import { fetchAPI, buildQuery } from "@/lib/strapi";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbNav from "@/components/common/breadcrumb";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blogRes = await fetchAPI(
    `/api/blogs?filters[slug][$eq]=${slug}&${getActiveBlogQuery()}`,
  );

  const blog = blogRes?.data?.[0];

  return buildMetadata(blog?.seo, {
    title: blog?.title || "Blog",
    description: blog?.short_description,
    image: blog?.featured_image?.url,
  });
}

export async function generateStaticParams() {
  const res = await fetchAPI(`/api/blogs?fields[0]=slug`);
  const blogs = res?.data || [];
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const [pageRes, activeBlogRes, recentBlogsRes] = await Promise.all([
    fetchAPI(`/api/blog-page?${getBlogDetailQuery()}`),
    fetchAPI(
      `/api/blogs?filters[slug][$eq]=${slug}&${getActiveBlogQuery()}`,
    ),
    fetchAPI(
      `/api/blogs?${buildQuery({ featured_image: true, blog_views: { fields: ['id'] } })}&pagination[page]=1&pagination[pageSize]=3&sort=published_date:desc`,
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
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: activeBlog.title },
        ]}
      />
      <BlogDetail data={activeBlog} relatedBlogs={relatedBlogs} />
    </>
  );
}
