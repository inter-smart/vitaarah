import Herosection from "@/components/common/InnerHero";
import BlogListing from "@/components/blocks/blog/blog-listing";
import { blogData } from "./blog-data";

const local_data = blogData;

export default function BlogPage() {
  return (
    <>
      {local_data.hero && <Herosection data={local_data.hero} />}
      {local_data.blogListSection && (
        <BlogListing data={local_data.blogListSection} />
      )}
    </>
  );
}
