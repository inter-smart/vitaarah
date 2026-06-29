import Herosection from "@/components/common/InnerHero";
import BlogDetail from "@/components/blocks/blog/blog-detail";
import { blogData } from "../blog-data";

export function generateStaticParams() {
  return blogData.blogListSection.blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blogs = blogData.blogListSection.blogs;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return null;

  const data = { ...post, blogs };

  return (
    <>
      {blogData.hero && <Herosection data={blogData.hero} />}
      {post && <BlogDetail data={data} />}
    </>
  );
}
