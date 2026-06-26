"use client";
import { useState } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export default function HomeBlogs({ data }) {
  const [hoveredIdx, setHoveredIdx] = useState(2);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );
  return (
    <section className="w-full py-[40px] sm:py-[60px] xl:py-[74px] 2xl:py-[90px] relative z-0">
      <Image
        src={"/images/home-members-bg.svg"}
        alt="home-members-bg.svg"
        width={360}
        height={280}
        className="w-[200px] xl:w-[260px] 2xl:w-[300px] 3xl:w-[360px] object-contain absolute -z-1 top-[40px] sm:top-[60px] xl:top-[74px] 2xl:top-[90px] left-0 -translate-x-[5%]"
        unoptimized
      />
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-[20px] sm:mb-[10px] xl:mb-[15px] 2xl:mb-[30px]">
          {data.title && (
            <h2 className="text_2 text-center lg:mb-0">{data.title}</h2>
          )}

          <Button
            as="a"
            href="/blogs"
            className="min-w-[90px] xl:min-w-[100px] 2xl:min-w-[113px] 3xl:min-w-[137px]"
          >
            View All
          </Button>
        </div>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-[10px] xl:-mx-[14px] 2xl:-mx-[16px] 3xl:-mx-[20px]">
            {data?.blogs?.map((item, idx) => (
              <div
                key={"blogs" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 select-none px-[10px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[20px]",
                )}
              >
                <div
                  className={cn(
                    "w-full h-full relative z-0 flex flex-col",
                    "transition-all duration-500",
                  )}
                  onMouseEnter={() => setHoveredIdx(idx)}
                >
                  <div
                    className={cn(
                      "max-sm:invisible absolute -z-1 inset-x-0 bottom-0 transition-opacity duration-500",
                      hoveredIdx === idx ? "opacity-0" : "opacity-100",
                    )}
                  >
                    <div className="text_4 line-clamp-2 mb-[15px] xl:mb-[20px] 2xl:mb-[24px] 3xl:mb-[30px]">
                      {item?.title}
                    </div>
                    {item?.featuredImage?.url && (
                      <div className="w-full aspect-square overflow-hidden mt-[15px] xl:mt-[20px] 2xl:mt-[24px] 3xl:mt-[30px]">
                        <Image
                          src={getStrapiMediaUrl(item.featuredImage.url)}
                          alt={
                            item.featuredImage.alternativeText ||
                            item.title ||
                            "Blog"
                          }
                          width={52}
                          height={52}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                          unoptimized
                        />
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/blog/${item?.slug}`}
                    className={cn("mt-auto", "transition-all duration-500")}
                  >
                    <div
                      className={cn(
                        "bg-white transition-opacity duration-500",
                        hoveredIdx === idx
                          ? "opacity-100"
                          : "opacity-100 sm:opacity-0",
                      )}
                    >
                      <div className="text_4 line-clamp-2 mb-[4px] xl:mb-[6px] 2xl:mb-[8px] 3xl:mb-[10px]">
                        {item?.title}
                      </div>
                      <div className="text_3 leading-relaxed line-clamp-2 text-black mb-[15px] xl:mb-[20px] 2xl:mb-[24px] 3xl:mb-[30px]">
                        {item?.shortDescription || "-"}
                      </div>
                      <div className="flex justify-between gap-2">
                        <div className="text_3 text-center text-[#a14962] underline underline-offset-4 hover:text-black">
                          Read More
                        </div>
                        <div className="text_3 text-center text-[#a14962]">
                          {item?.publishedDate
                            ? new Date(item.publishedDate).toLocaleDateString(
                                "de-DE",
                                {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                },
                              )
                            : ""}
                        </div>
                      </div>
                      <div className="w-full aspect-[373/473] overflow-hidden mt-[15px] xl:mt-[20px] 2xl:mt-[24px] 3xl:mt-[30px]">
                        <Image
                          src={getStrapiMediaUrl(item.featuredImage.url)}
                          alt={
                            item.featuredImage.alternativeText ||
                            item.title ||
                            "Blog"
                          }
                          width={52}
                          height={52}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                          unoptimized
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
