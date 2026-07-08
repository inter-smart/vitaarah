import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import FallbackImage from "@/components/common/FallbackImage";
import BlogCard from "./blog-card";
import { getStrapiMediaUrl } from "@/lib/strapi";

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

export default function BlogListing({ data, blogs }) {
  return (
    <section
      id="BlogListing"
      className="w-full block py-[25px_30px] sm:py-[30px_40px] lg:py-[44px_57px] xl:py-[54px_70px] 2xl:py-[60px_79px] 3xl:py-[74px_96px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-[20%] absolute -z-1 top-[4%] right-0"
      />
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-[15%] translate-y-1/2 absolute -z-1 bottom-0 right-0"
      />
      <div className="container">
        {data.title && (
          <h2 className="heading_1 text-[#1f1f1f] mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
            {data.title}
          </h2>
        )}

        <div className="flex flex-wrap justify-center -mx-2.5 lg:-mx-[9px] xl:-mx-[11.5px] xl:-mx-[11.5px] 2xl:-mx-[13px] 3xl:-mx-[16px] lg:-my-[30px] xl:-my-[35.5px] xl:-my-[35.5px] 2xl:-my-[42px] 3xl:-my-[50px]">
          {blogs?.map((item, idx) => {
            return idx === 0 ? (
              <div
                key={"blogs" + idx}
                className={cn(
                  "w-full p-[15px_10px] lg:p-[30px_9px] xl:p-[35.5px_11.5px] xl:p-[35.5px_11.5px] 2xl:p-[42px_13px] 3xl:p-[50px_16px]",
                )}
              >
                <Link
                  href={`/blogs/${item?.slug}`}
                  className="w-full flex flex-wrap items-center bg-[#fff9eb] sm:gap-[25px] lg:gap-[32px] xl:gap-[40px] 2xl:gap-[45px] 3xl:gap-[60px] transition-all duration-500"
                >
                  <div className="w-full sm:w-[268px] md:w-[320px] lg:w-[528px] xl:w-[652px] 2xl:w-[740px] 3xl:w-[897px] aspect-[897/450] overflow-hidden">
                    <FallbackImage
                      src={getStrapiMediaUrl(item?.featured_image?.url)}
                      alt={
                        item?.featured_image?.alternativeText ||
                        item?.title ||
                        "Blog"
                      }
                      width={897}
                      height={450}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="w-full sm:flex-1 p-[15px] sm:p-[18px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px]">
                    <div className="text-[17px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-helvetica line-clamp-2 text-[#a14962] mb-[10px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[20px] xl:max-w-8/12">
                      {item?.title}
                    </div>
                    <div className="text_3 leading-relaxed line-clamp-3 text-black mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[24px] 3xl:mb-[22px]">
                      {item?.short_description || "-"}
                    </div>
                    <div className="max-w-11/12 flex justify-between gap-2 mb-[10px] sm:mb-[15px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px]">
                      <BlogSpecItem
                        src="/images/icon-clock.svg"
                        alt="icon-clock"
                      >
                        {calculateReadTime(item?.short_description || "")} min
                        read
                      </BlogSpecItem>
                      <BlogSpecItem
                        src="/images/icon-calcu.svg"
                        alt="icon-calcu"
                      >
                        {item?.published_date
                          ? new Date(item.published_date).toLocaleDateString(
                              "en-US",
                              { month: "long", year: "numeric" },
                            )
                          : ""}
                      </BlogSpecItem>
                      <BlogSpecItem
                        src="/images/icon-views.svg"
                        alt="icon-views"
                      >
                        {item?.viewCount || 0} Views
                      </BlogSpecItem>
                    </div>
                    <Button>Read More</Button>
                  </div>
                </Link>
              </div>
            ) : (
              <div
                key={"blogs" + idx}
                className={cn(
                  "w-full sm:w-1/2 lg:w-1/3 p-[15px_10px] lg:p-[30px_9px] xl:p-[35.5px_11.5px] xl:p-[35.5px_11.5px] 2xl:p-[42px_13px] 3xl:p-[50px_16px]",
                )}
              >
                <BlogCard data={item} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-[20px] xl:mt-[47px] 2xl:mt-[54px] 3xl:mt-[60px]">
          <Button
            variant="none"
            className="hover:text-white hover:bg-[#a14962]"
          >
            Load More...
          </Button>
        </div>
      </div>
    </section>
  );
}
