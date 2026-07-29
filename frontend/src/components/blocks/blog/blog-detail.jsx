"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import BlogCard from "./blog-card";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { getVisitorUUID } from "@/lib/utils";

const WORDS_PER_MINUTE = 200;

function calculateReadTime(text) {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function BlogSpecItem({ src, alt, children }) {
  return (
    <div className="text_3 max-sm:text-[10px] text-black flex gap-[6.3px] 2xl:gap-[7px] 3xl:gap-[8.6px]">
      <Image
        src={src}
        alt={alt || "Image"}
        width={12}
        height={12}
        className="w-[10px] 2xl:w-[11px] 3xl:w-[13.4px]"
        unoptimized
      />
      {children}
    </div>
  );
}

export default function BlogDetail({ data, relatedBlogs }) {
  const [viewCount, setViewCount] = useState(data?.viewCount || 0);
  const incrementAttempted = useRef(false);

  useEffect(() => {
    if (!data?.documentId || incrementAttempted.current) return;

    incrementAttempted.current = true;
    const visitor_uuid = getVisitorUUID();
    
    if (!visitor_uuid) return;

    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
    fetch(`${apiUrl}/api/blogs/${data.documentId}/view`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { visitor_uuid } }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to increment view");
        return res.json();
      })
      .then((json) => {
        if (json?.viewCount !== undefined) {
          setViewCount(json.viewCount);
        }
      })
      .catch((err) => {
        console.error("View increment error:", err);
      });
  }, [data?.documentId]);

  return (
    <section
      id="BlogDetail"
      className="w-full block py-[25px_40px] sm:py-[30px_50px] lg:py-[44px_60px] xl:py-[54px_106px] 2xl:py-[60px_115px] 3xl:py-[74px_140px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={80}
        height={80}
        className="w-[30px] sm:w-[40px] xl:w-[60px] 2xl:w-[80px] 3xl:w-[100px] absolute -z-1 bottom-[5%] left-0"
      />
      <div className="container max-sm:max-w-[368px]">
        <div className="flex flex-wrap gap-[30px] lg:gap-[33px] xl:gap-[42px] 2xl:gap-[46px] 3xl:gap-[56px]">
          <div className="w-full lg:w-[600px] xl:w-[761px] 2xl:w-[863px] 3xl:w-[1047px]">
            <div className="heading_2 text-[#1f1f1f] mb-[10px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px]">
              Blogs
            </div>
            <div className="w-full bg-[#fff9eb]">
              <div className="w-full aspect-[897/450] relative z-0 overflow-hidden">
                {data?.category && (
                  <div className="absolute z-1 top-[10px] xl:top-[12px] 2xl:top-[13px] 3xl:top-[16px] right-[10px] xl:right-[12px] 2xl:right-[13px] 3xl:right-[16px] text_3 font-things capitalize text-[#a14962] h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] bg-[#fff9eb] px-[6px] xl:px-[8px] 2xl:px-[10px] 3xl:px-[12px] flex items-center">
                    {data?.category}
                  </div>
                )}
                <Image
                  src={
                    data?.featured_image?.url
                      ? getStrapiMediaUrl(data.featured_image.url)
                      : "/images/placeholder.jpg"
                  }
                  alt={
                    data?.featured_image?.alternativeText ||
                    data?.title ||
                    "Blog" ||
                    "Image"
                  }
                  width={897}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="w-full p-[20px_15px] lg:p-[27px_32px] xl:p-[35px_40px] 2xl:p-[38px_45px] 3xl:p-[45px_52px]">
                <div className="text-[15px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-helvetica line-clamp-2 text-[#a14962] mb-[10px] sm:mb-[18px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px]">
                  {data?.title}
                </div>
                {data.description && (
                  <div className="text_3 font-normal font-helvetica text-black mb-1.5 xl:mb-2.5 3xl:mb-3">
                    <BlocksRenderer content={data.description} />
                  </div>
                )}
                {data?.author_name && (
                  <div className="text_3 font-normal font-things capitalize italic text-black mb-3 xl:mb-4 3xl:mb-6">
                    - {data?.author_name}
                  </div>
                )}
                <div className="max-w-11/12 flex flex-wrap gap-4 sm:gap-[30px] xl:gap-[70px] 2xl:gap-[77px] 3xl:gap-[93px]">
                  <BlogSpecItem src="/images/icon-clock.svg" alt="icon-clock">
                    {calculateReadTime(data?.short_description || "")} min read
                  </BlogSpecItem>
                  {data?.published_date && (
                    <BlogSpecItem src="/images/icon-calcu.svg" alt="icon-calcu">
                      {new Date(data.published_date).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </BlogSpecItem>
                  )}
                  <BlogSpecItem src="/images/icon-views.svg" alt="icon-views">
                    {viewCount ?? 0} Views
                  </BlogSpecItem>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:flex-1">
            <div className="heading_2 text-[#1f1f1f] mb-[10px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px]">
              Recent Blogs
            </div>
            <div className="flex flex-wrap -mx-[15px] lg:m-0 [&>div]:p-[15px] lg:[&>div]:p-0 lg:space-y-[20px] xl:space-y-[48px] 2xl:space-y-[55px] 3xl:space-y-[67px]">
              {relatedBlogs
                ?.filter((b) => b.slug !== data.slug)
                .slice(0, 2)
                .map((item, idx) => {
                  return (
                    <div
                      key={"blogs" + idx}
                      className="w-full sm:w-1/2 lg:w-full"
                    >
                      <BlogCard data={item} />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="w-full flex justify-center mt-3 sm:hidden">
            <Button
              variant="none"
              className="hover:text-white hover:bg-[#a14962]"
            >
              View More...
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
