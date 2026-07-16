"use client";
import { useCallback, useEffect, useState } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: "keepSnaps",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIdx(index);
    thumbEmblaApi?.scrollTo(index);
  }, [emblaApi, thumbEmblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Initialize without synchronous state cascade — read current snap directly
    const initialIndex = emblaApi.selectedScrollSnap();
    setSelectedIdx(initialIndex);
    thumbEmblaApi?.scrollTo(initialIndex);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("reinit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("reinit", onSelect);
    };
  }, [emblaApi, onSelect, thumbEmblaApi]);

  const onThumbClick = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section
      id="Members"
      className="w-full block bg-linear-to-l from-[#e9cba3] to-[#a14962] pt-[40px] sm:pt-[60px] xl:pt-[70px] 2xl:pt-[85px] 3xl:pt-[100px] overflow-hidden relative z-0"
    >
      <div className="container">
        <div className="flex flex-wrap sm:items-center">
          <div className="w-full min-[376px]:w-[50%] sm:w-[52%]">
            <div className="w-full relative">
              <Image
                src="/images/home-members-quote.svg"
                alt="home-members-quote"
                width={125}
                height={75}
                className={cn(
                  "w-[30px] sm:w-[40px] lg:w-[74px] xl:w-[90px] 2xl:w-[100px] 3xl:w-[125px]",
                  "absolute -top-5 sm:top-[5%] left-0",
                )}
              />
              <div className="max-w-[268px] lg:max-w-[320px] xl:max-w-[390px] 2xl:max-w-[442px] 3xl:max-w-[510px] ml-auto mb-[30px] sm:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[100px]">
                <div className="w-full overflow-hidden relative z-0 mb-[20px] sm:mb-[25px] xl:mb-[34px] 2xl:mb-[40px] 3xl:mb-[48px]">
                  <Image
                    src="/images/home-members-quote.svg"
                    alt="home-members-quote"
                    width={125}
                    height={75}
                    className={cn(
                      "w-[60px] lg:w-[74px] xl:w-[90px] 2xl:w-[100px] 3xl:w-[125px]",
                      "absolute bottom-0 right-0 scale-x-[-1]",
                    )}
                  />
                  <div ref={emblaRef} className="w-full overflow-hidden">
                    <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
                      {data?.members?.map((item, idx) => (
                        <div
                          key={"members" + idx}
                          className={cn(
                            "flex-[0_0_100%] min-w-0 select-none px-1 xl:px-2.5",
                          )}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={selectedIdx === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="group w-full block"
                          >
                            <div className="text-[28px] sm:text-[42px] lg:text-[56.7px] xl:text-[70px] 2xl:text-[79.4px] 3xl:text-[96px] leading-normal font-normal font-things truncate text-white mb-[5px] sm:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                              {item.title}
                            </div>
                            <div className="text-[12px] sm:text-[14px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-normal font-helvetica line-clamp-4 text-white mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                              {item?.description}
                            </div>
                            <div className="text_4 truncate text-[#fbaac1]">
                              {item?.name}
                            </div>
                            <div className="text_3 truncate text-white">
                              {item?.designation}
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  ref={thumbEmblaRef}
                  className="w-full overflow-hidden max-w-[130px] sm:max-w-[150px] xl:max-w-[170px] 2xl:max-w-[190px] 3xl:max-w-[220px]"
                >
                  <div className="flex items-center touch-pan-y touch-pinch-zoom">
                    {data?.members?.map((item, idx) => (
                      <div
                        key={"members" + idx}
                        className={cn(
                          "flex-[0_0_auto] cursor-pointer relative",
                          "-ml-3 sm:-ml-4 xl:-ml-5 first:ml-0"
                        )}
                        onClick={() => {
                          onThumbClick(idx);
                        }}
                      >
                        <div
                          className={cn(
                            "relative z-10 bg-white",
                            "w-[40px] sm:w-[48px] xl:w-[60px] 2xl:w-[64px] 3xl:w-[80px]",
                            "aspect-square rounded-full p-[3px] xl:p-[4px]",
                            "overflow-hidden transition-all duration-300",
                            selectedIdx === idx
                              ? "border-[5px] border-white z-20"
                              : "border-[5px] border-transparent"
                          )}
                        >
                          <Image
                            src={getStrapiMediaUrl(item.thumbnail_image?.url)}
                            alt={
                              item.thumbnail_image?.alternativeText ||
                              item.name ||
                              "Team member" ||
                              "Image"
                            }
                            width={82}
                            height={82}
                            sizes="80px"
                            className="w-full h-full object-cover hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-[376px]:w-[50%] sm:w-[48%] flex">
            <div className="w-[168px] sm:w-[200px] lg:w-[320px] xl:w-[400px] 2xl:w-[454px] 3xl:w-[550px] aspect-[551/773] relative z-0 mx-auto mt-auto">
              <Image
                src={"/images/home-members-bg.svg"}
                alt=""
                width={552}
                height={775}
                className="w-full h-full object-contain absolute -z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                unoptimized
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={getStrapiMediaUrl(
                      data?.members?.[selectedIdx]?.featured_image?.url,
                    )}
                    alt={
                      data?.members?.[selectedIdx]?.featured_image
                        ?.alternativeText ||
                      "Team member" ||
                      "Image"
                    }
                    width={552}
                    height={775}
                    sizes="(max-width: 640px) 168px, (max-width: 1024px) 320px, 454px"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
