"use client";
import { useCallback, useEffect, useState } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomeMembers({ data }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbEmblaApi) return;
    setSelectedIdx(emblaApi.selectedScrollSnap());
    thumbEmblaApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbEmblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reinit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reinit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (idx) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(idx);
    },
    [emblaApi],
  );

  return (
    <section className="w-full bg-linear-to-l from-[#e9cba3] to-[#a14962] pt-[30px] sm:pt-[40px] xl:pt-[55px] 2xl:pt-[70px] overflow-hidden relative z-0">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-[52%]">
            <div className="w-full relative">
              <Image
                src="/images/home-members-quote.svg"
                alt="home-members-quote"
                width={125}
                height={75}
                className={cn(
                  "w-[60px] sm:w-[74px] xl:w-[90px] 2xl:w-[100px] 3xl:w-[125px]",
                  "absolute top-[5%] left-0",
                )}
              />
              <div className="max-w-[268px] sm:max-w-[300px] xl:max-w-[376px] 2xl:max-w-[442px] 3xl:max-w-[510px] ml-auto">
                <div
                  ref={emblaRef}
                  className="w-full overflow-hidden relative z-0 mb-[20px] sm:mb-[25px] xl:mb-[34px] 2xl:mb-[40px] 3xl:mb-[48px]"
                >
                  <Image
                    src="/images/home-members-quote.svg"
                    alt="home-members-quote"
                    width={125}
                    height={75}
                    className={cn(
                      "w-[60px] sm:w-[74px] xl:w-[90px] 2xl:w-[100px] 3xl:w-[125px]",
                      "absolute bottom-0 right-0 scale-x-[-1]",
                    )}
                  />
                  <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
                    {data?.members?.map((item, idx) => (
                      <div
                        key={"members" + idx}
                        className={cn(
                          "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_100%] min-w-0 select-none px-1 xl:px-2.5",
                        )}
                      >
                        <div className="group w-full block">
                          <div className="text-[32px] sm:text-[44px] lg:text-[56.7px] xl:text-[70px] 2xl:text-[79.4px] 3xl:text-[96px] leading-normal font-normal font-things text-white mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                            {item.title}
                          </div>
                          <div className="text-[14px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-normal font-helvetica text-white mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                            {item?.description}
                          </div>
                          <div className="text_4 text-[#fbaac1]">
                            {item?.name}
                          </div>
                          <div className="text_3 text-white">
                            {item?.designation}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  ref={thumbEmblaRef}
                  className="w-full max-w-[110px] xl:max-w-[125px] 2xl:max-w-[142px] 3xl:max-w-[172px] overflow-hidden "
                >
                  <div className="flex touch-pan-y touch-pinch-zoom">
                    {data?.members?.map((item, idx) => (
                      <div
                        key={"members" + idx}
                        className={cn(
                          "flex-[0_0_50%] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none cursor-pointer flex justify-center",
                        )}
                        onClick={() => scrollTo(idx)}
                      >
                        <div
                          className={cn(
                            "w-[40px] sm:w-[48px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[82px] aspect-square rounded-full p-[3px] xl:p-[4px] overflow-hidden transition-all duration-300 bg-white",
                          )}
                        >
                          <Image
                            src={getStrapiMediaUrl(item.thumbnailImage.url)}
                            alt={
                              item.thumbnailImage.alternativeText ||
                              item.name ||
                              "Team member"
                            }
                            width={82}
                            height={82}
                            className="w-full h-full object-cover hover:scale-105"
                            unoptimized
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[48%]">
            <div className="w-[200px] sm:w-[320px] xl:w-[400px] 2xl:w-[454px] 3xl:w-[550px] aspect-[551/773] relative z-0 mx-auto">
              <Image
                src={"/images/home-members-bg.svg"}
                alt="home-members-bg.svg"
                width={552}
                height={775}
                className="w-full h-full object-contain absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <Image
                src={getStrapiMediaUrl(data?.members?.[1]?.featuredImage?.url)}
                alt={
                  data?.members?.[1]?.featuredImage?.alternativeText ||
                  "Team member"
                }
                width={552}
                height={775}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
