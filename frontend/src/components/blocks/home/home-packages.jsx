"use client";
import { useCallback, useEffect, useState } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export default function HomePackages({ data }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIdx(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="Packages"
      className="w-full bg-linear-to-b from-[#fff9eb] to-[30%] to-white py-[30px_60px] sm:py-[50px_80px] lg:py-[70px_105px] xl:py-[90px_134px] 2xl:py-[100px_150px] 3xl:py-[123px_185px]"
    >
      <div className="container">
        {data.title && (
          <h2 className="text_2 text-center text-[#1f1f1f] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
            {data.title}
          </h2>
        )}
        {data.description && (
          <div className="text_3 text-center font-normal text-black mb-[10px] xl:mb-[15px] 2xl:mb-[30px]">
            <BlocksRenderer content={data.description} />
          </div>
        )}
        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div
            ref={emblaRef}
            className="w-full max-w-full overflow-hidden"
          >
            <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5">
              {data?.packages?.map((item, idx) => {
                const isCenter = idx === selectedIdx;
                return (
                  <div
                    key={"packages" + idx}
                    className={cn(
                      "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none px-1 xl:px-2.5",
                    )}
                  >
                    <Link
                      href={`/packages/${item?.slug}`}
                      className={cn(
                        "group w-full block border border-[#b1b1b1] transition-all duration-300",
                        isCenter ? "bg-[#FAF7ED]" : "bg-white",
                      )}
                    >
                      {item?.featuredImage && (
                        <div className="w-full aspect-[336/262] bg-black relative z-0 transition-all duration-300 mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                          {item?.badgeType && (
                            <div className="absolute z-0 top-[10px] xl:top-[12px] 2xl:top-[13px] 3xl:top-[16px] right-[10px] xl:right-[12px] 2xl:right-[13px] 3xl:right-[16px] text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-tight font-normal tracking-wider font-things text-[#a14962] h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] bg-[#fff9eb] px-[6px] xl:px-[8px] 2xl:px-[10px] 3xl:px-[12px] flex items-center">
                              {item?.badgeType}
                            </div>
                          )}
                          <Image
                            src={getStrapiMediaUrl(item.featuredImage.url)}
                            alt={
                              item.featuredImage.alternativeText ||
                              item.title ||
                              "Package"
                            }
                            width={336}
                            height={262}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="w-full p-[12px] sm:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px]">
                        <div className="text_5 text-black mb-[8px] xl:mb-[12px] 2xl:mb-[16px] 3xl:mb-[20px]">
                          {item?.days} days
                        </div>
                        {item?.title && (
                          <div className="text_4 text-[#a14962] mb-[4px] 2xl:mb-[6px] 3xl:mb-[8px]">
                            {item?.title}
                          </div>
                        )}
                        <div className="text_3 font-normal text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                          {item?.shortDescription}
                        </div>
                        <div className="flex flex-col space-y-[10px] 2xl:space-y-[12px] 3xl:space-y-[14px] mb-[25px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px]">
                          {item?.features?.map((feature, featureIdx) => (
                            <div
                              key={"features" + featureIdx}
                              className="flex gap-x-[10px] xl:gap-x-[14px] 2xl:gap-x-[16px] 3xl:gap-x-[18px] text_3 leading-tight text-black"
                            >
                              {feature?.icon ? (
                                <Image
                                  src={getStrapiMediaUrl(feature?.icon?.url)}
                                  alt={
                                    feature?.icon?.alternativeText ||
                                    feature?.title ||
                                    "features"
                                  }
                                  width={14}
                                  height={14}
                                  className="w-[13px] 3xl:w-[14px] aspect-square object-contain"
                                  unoptimized
                                />
                              ) : (
                                <Image
                                  src="/images/package-feature-list.svg"
                                  alt={
                                    feature?.icon?.alternativeText ||
                                    feature?.title ||
                                    "features"
                                  }
                                  width={14}
                                  height={14}
                                  className="w-[14px] aspect-square object-contain"
                                />
                              )}
                              <span className="flex-1">{feature?.title}</span>
                            </div>
                          ))}
                        </div>
                        {item?.slug && (
                          <Button
                            className={cn(
                              "w-full mx-auto transition-all duration-300",
                              isCenter
                                ? "border-red-500"
                                : "border-transparent",
                            )}
                            asChild
                          >
                            <span>Select Plan</span>
                          </Button>
                        )}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
