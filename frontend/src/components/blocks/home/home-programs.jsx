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

export default function HomePrograms({ data }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    // [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const canScrollPrev = emblaApi ? emblaApi.canScrollPrev() : true;
  const canScrollNext = emblaApi ? emblaApi.canScrollNext() : true;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIdx(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  console.log("HomePrograms", data);

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
        {data.short_description && (
          <div className="text_3 text-center font-normal text-black mb-[20px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
            {data.short_description}
          </div>
        )}
        <div className="w-full relative z-0">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "absolute z-0 -left-[1%] lg:-left-[2%] top-1/2 -translate-y-1/2 -translate-x-4 w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[25px] bg-none flex items-center justify-center transition-all",
              !canScrollPrev && "opacity-0 pointer-events-none",
            )}
          >
            <Image
              src="/images/icon-right-slider.svg"
              alt="prev"
              width={25}
              height={25}
              className="w-full h-full object-contain"
              unoptimized
            />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "absolute z-0 -right-[1%] lg:-right-[2%] top-1/2 -translate-y-1/2 translate-x-4 w-[16px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[25px] -rotate-180 bg-none flex items-center justify-center transition-all",
              !canScrollNext && "opacity-0 pointer-events-none",
            )}
          >
            <Image
              src="/images/icon-right-slider.svg"
              alt="next"
              width={25}
              height={25}
              className="w-full h-full object-contain"
              unoptimized
            />
          </button>
          <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
            <div className="flex sm:items-center justify-center touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5">
              {data?.home_program_item?.map((item, idx) => {
                const centerIdx =
                  (selectedIdx + 1) % (data?.home_program_item?.length || 1);
                const isCenter = idx === centerIdx;
                return (
                  <div
                    key={"packages" + idx}
                    className={cn(
                      "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none px-1 xl:px-2.5",
                    )}
                  >
                    <Link
                      href={
                        item?.related_program?.slug
                          ? `/programs/${item.related_program.slug}`
                          : "#"
                      }
                      className={cn(
                        "group w-full h-full block border border-[#b1b1b1] bg-white transition-all duration-500 transform",
                        isCenter
                          ? "sm:scale-100 z-1 sm:bg-[#FAF7ED] sm:border-[#FAF7ED]"
                          : "sm:scale-90",
                      )}
                    >
                      <div className="w-full aspect-[336/262] bg-black relative z-0 overflow-hidden mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                        {item?.badgeType && (
                          <div className="absolute z-1 top-[10px] xl:top-[12px] 2xl:top-[13px] 3xl:top-[16px] right-[10px] xl:right-[12px] 2xl:right-[13px] 3xl:right-[16px] text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-tight font-normal tracking-wider font-things text-[#a14962] h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] bg-[#fff9eb] px-[6px] xl:px-[8px] 2xl:px-[10px] 3xl:px-[12px] flex items-center">
                            {item?.badgeType}
                          </div>
                        )}
                        <Image
                          src={
                            item?.featured_image?.url
                              ? getStrapiMediaUrl(item.featured_image.url)
                              : "/images/placeholder.jpg"
                          }
                          alt={
                            item.featured_image.alternativeText ||
                            item.title ||
                            "Program"
                          }
                          width={336}
                          height={262}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                          unoptimized
                        />
                      </div>
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
                          {item?.short_description}
                        </div>
                        <div className="flex flex-col space-y-[10px] 2xl:space-y-[12px] 3xl:space-y-[14px] mb-[25px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px]">
                          {item?.program_attractions?.map(
                            (feature, featureIdx) => (
                              <div
                                key={"features" + featureIdx}
                                className="flex gap-x-[5px] sm:gap-x-[8px] xl:gap-x-[14px] 2xl:gap-x-[16px] 3xl:gap-x-[18px] text_3 leading-tight text-black"
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
                            ),
                          )}
                        </div>
                        {item?.related_program?.slug && (
                          <Button
                            className={cn(
                              "w-full mx-auto transition-all duration-300",
                              isCenter
                                ? "bg-[#FAF7ED]"
                                : "from-white to-white border-black text-black",
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
