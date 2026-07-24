"use client";
import { useEffect, useState, useCallback } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

export default function HomeTreatments({ data }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const treatments = data?.home_treatment_item || [];
  const activeTreatment = treatments[activeIdx];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: "auto",
      containScroll: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIdx(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const onSlideClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section
      id="Treatments"
      className="w-full bg-black pt-[30px] sm:pt-[40px] xl:pt-[55px] 2xl:pt-[70px] overflow-hidden relative z-0"
    >
      <div className="absolute z-0 inset-0 bg-black/40" />
      <div className="absolute -z-1 inset-0">
        {treatments.map((item, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={"treatments-bg" + idx}
              className={cn(
                "absolute z-0 inset-0 transition-all duration-700 ease-in-out",
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-105",
              )}
            >
              {item?.background_video?.mime?.startsWith("video/") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster={
                    item?.background_image_thumbnail?.url ||
                    "/images/placeholder.jpg"
                  }
                >
                  <source
                    src={getStrapiMediaUrl(item.background_video.url)}
                    type={item.background_video.mime}
                  />
                </video>
              ) : (
                <Image
                  src="/images/placeholder.jpg"
                  alt="Image"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute z-1 inset-0">
        {treatments.map((item, idx) => (
          <div
            key={"treatments-title" + idx}
            className={cn(
              "absolute z-1 inset-x-0 top-1/2 -translate-y-1/2 transition-opacity duration-500 m-auto",
              idx === activeIdx ? "opacity-100" : "opacity-0",
            )}
          >
            {item?.title && (
              <div className="text-[48px] sm:text-[64px] lg:text-[113px] xl:text-[140px] 2xl:text-[158.8px] 3xl:text-[192px] leading-normal font-bold font-helvetica text-center text-[#d9d9d9]/30 whitespace-nowrap backdrop-blur-[2px]">
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="container relative z-10">
        {data.title && (
          <h2 className="text_2 text-center text-white mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
            {data.title}
          </h2>
        )}
        {data.short_description && (
          <div className="text_3 text-center text-white mb-[20px] lg:mb-[45px] xl:mb-[57px] 2xl:mb-[65px] 3xl:mb-[80px]">
            {data.short_description}
          </div>
        )}
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {treatments.map((item, idx) => (
              <div
                key={"treatments" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                <div
                  className={cn(
                    "group w-full h-[268px] lg:h-[358px] xl:h-[442px] 2xl:h-[500px] 3xl:h-[610px] block flex flex-col justify-end p-[20px_10px] sm:p-[34px_15px] xl:p-[42px_20px] 2xl:p-[47px_25px] 3xl:p-[57px_30px] overflow-hidden transition-all duration-300",
                    idx === activeIdx
                      ? "bg-linear-to-b from-transparent from-30% to-[#a14962]"
                      : "bg-none",
                  )}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => onSlideClick(idx)}
                >
                  <div
                    className={cn(
                      "transition-all duration-300",
                      idx === activeIdx
                        ? "h-0 opacity-0 translate-y-full"
                        : "h-auto translate-y-0 opacity-100 group-hover:h-0 group-hover:opacity-0 group-hover:translate-y-full",
                    )}
                  >
                    <div className="text_5 text-center font-bold text-white underline underline-offset-2 mb-[4px] 2xl:mb-[6px]">
                      {item?.title}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "transition-all duration-300",
                      idx === activeIdx
                        ? "h-auto opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full h-0 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0",
                    )}
                  >
                    <div className="text_5 text-center font-bold text-white mb-[4px] 2xl:mb-[6px]">
                      {item?.title}
                    </div>
                    <div className="text_3 text-center font-normal line-clamp-3 text-white mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                      {item?.short_description}
                    </div>
                    {item?.related_treatment_category?.slug && (
                      <div className="flex">
                        <Button className="border-[#a14962] mx-auto" asChild>
                          <Link
                            href={
                              item?.related_treatment_category?.slug
                                ? `/treatments/category/${item.related_treatment_category.slug}`
                                : "#"
                            }
                          >
                            <span>Read More</span>
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
