import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const WORDS_PER_MINUTE = 200;

function calculateReadTime(text) {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function BlogSpecItem({ src, alt, children }) {
  return (
    <div className="text_3 max-[376px]:text-[10px] text-black flex gap-[6.3px] 2xl:gap-[7px] 3xl:gap-[8.6px]">
      <Image
        src={src}
        alt={alt}
        width={12}
        height={12}
        className="w-[10px] 2xl:w-[11px] 3xl:w-[13.4px]"
        unoptimized
      />
      {children}
    </div>
  );
}

export default function BlogCard({ data }) {
  return (
    <Link href={`/blog/${data?.slug}`} className="w-full h-full flex flex-col">
      <div className="w-full aspect-[502/403] overflow-hidden mb-[10px] sm:mb-[15px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px]">
        <Image
          src={data.featuredImage.url || "/images/placeholder.jpg"}
          alt={data.featuredImage.alternativeText || data.title || "Blog"}
          width={502}
          height={403}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-[10px] lg:gap-[18px] xl:gap-[22px] 2xl:gap-[26px] 3xl:gap-[31px]">
        <div>
          <div className="text-[17px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-helvetica line-clamp-2 text-[#a14962] mb-[10px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px]">
            {data?.title}
          </div>
          <div className="text_3 leading-relaxed line-clamp-2 text-black mb-[10px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px]">
            {data?.shortDescription || "-"}
          </div>
          <div className="max-w-11/12 flex justify-between gap-2">
            <BlogSpecItem src="/images/icon-clock.svg" alt="icon-clock">
              {calculateReadTime(data?.shortDescription || "")} min read
            </BlogSpecItem>
            <BlogSpecItem src="/images/icon-calcu.svg" alt="icon-calcu">
              {data?.publishedDate
                ? new Date(data.publishedDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </BlogSpecItem>
            <BlogSpecItem src="/images/icon-views.svg" alt="icon-views">
              {data?.viewCount || 0} Views
            </BlogSpecItem>
          </div>
        </div>
        <div>
          <Button>Read More</Button>
        </div>
      </div>
    </Link>
  );
}
