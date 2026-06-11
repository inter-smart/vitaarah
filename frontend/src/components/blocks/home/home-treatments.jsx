"use client";
import { useState } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomeTreatments({ data }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const treatments = data?.treatments || [];
  const activeTreatment = treatments[activeIdx];

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
    <section
      id="Treatments"
      className="w-full bg-black pt-[30px] sm:pt-[40px] xl:pt-[55px] 2xl:pt-[70px] overflow-hidden relative z-0"
    >
      <div className="absolute z-0 inset-0">
        {treatments.map((item, idx) => (
          <div
            key={"treatments-bg" + idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              idx === activeIdx ? "opacity-100" : "opacity-0",
            )}
          >
            {item?.featuredImage?.mime?.startsWith("video/") ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src={getStrapiMediaUrl(item.featuredImage.url)}
                  type={item.featuredImage.mime}
                />
              </video>
            ) : item?.featuredImage?.url ? (
              <Image
                src={getStrapiMediaUrl(item.featuredImage.url)}
                alt={item.featuredImage.alternativeText || item.title || "Treatment"}
                fill
                sizes="100vw"
                className="object-cover"
                priority={idx === 0}
                unoptimized
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="container mx-auto relative z-10">
        {data.title && (
          <h2 className="text_2 text-center text-white mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
            {data.title}
          </h2>
        )}
        {data.description && (
          <div className="text_3 text-center text-white mb-[60px] xl:mb-[100px] 2xl:mb-[135px]">
            <BlocksRenderer content={data.description} />
          </div>
        )}
        <div className="relative h-16 lg:h-24 xl:h-32 2xl:h-40 bg-red-500 mb-[60px] xl:mb-[100px] 2xl:mb-[135px]">
          {treatments.map((item, idx) => (
            <div
              key={"treatments-title" + idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                idx === activeIdx ? "opacity-100" : "opacity-0",
              )}
            >
              {item?.title && (
                <div className="text-[48px] lg:text-[72px] xl:text-[106px] 2xl:text-[133.3px] leading-normal font-bold font-helvetica text-center text-[#d9d9d9]/30 whitespace-nowrap">
                  {item.title}
                </div>
              )}
            </div>
          ))}
        </div>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {treatments.map((item, idx) => (
              <div
                key={"treatments" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                <Link
                  href={`/conditions/${item?.slug}`}
                  className="group w-full h-full block bg-linear-to-b from-transparent to-[#a14962]"
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <div className="text_5 text-center font-bold text-white mb-[4px] 2xl:mb-[6px]">
                    {item?.title}
                  </div>
                  <div className="text_3 text-center font-normal text-white">
                    {item?.shortDescription}
                  </div>
                  {item?.slug && (
                    <span className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-center text-primary-foreground mx-auto shadow transition-colors hover:bg-primary/90">
                      Read More
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
