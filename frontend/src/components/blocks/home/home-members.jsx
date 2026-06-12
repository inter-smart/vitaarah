"use client";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomeMembers({ data }) {
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
    <section className="w-full bg-linear-to-l from-[#e9cba3] to-[#a14962] pt-[30px] sm:pt-[40px] xl:pt-[55px] 2xl:pt-[70px] overflow-hidden relative z-0">
      <Image
        src="/images/home-members-bg.svg"
        alt="home-members-bg"
        width={594}
        height={460}
        className="w-[268px] sm:w-[350px] xl:w-[430px] 2xl:w-[490px] 3xl:w-[593px]"
      />
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-[55%]">
            <div className="w-full max-w-[268px] sm:max-w-[300px] xl:max-w-[376px] 2xl:max-w-[422px] 3xl:max-w-[510px] relative bg-red-300">
              {[1, 2].map((idx) => (
                <Image
                  key={idx}
                  src="/images/home-members-quote.svg"
                  alt="home-members-quote"
                  width={125}
                  height={75}
                  className={cn(
                    "w-[60px] sm:w-[74px] xl:w-[90px] 2xl:w-[100px] 3xl:w-[125px]",
                    idx === 1
                      ? "absolute top-0 left-0"
                      : "absolute bottom-0 right-0 -translate-x-1/2",
                  )}
                />
              ))}
              <div
                ref={emblaRef}
                className="w-full bg-gray-400 max-w-full overflow-hidden"
              >
                <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
                  {data?.members?.map((item, idx) => (
                    <div
                      key={"members" + idx}
                      className={cn(
                        "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_100%] min-w-0 select-none px-1 xl:px-2.5",
                      )}
                    >
                      <Link
                        href={`/team/${item?.name?.toLowerCase().replace(/\s+/g, "-")}`}
                        className="group w-full block"
                      >
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
                        {item?.featuredImage?.url && (
                          <div className="w-[40px] sm:w-[48px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[82px] aspect-square rounded-full border-3 border-white overflow-hidden">
                            <Image
                              src={getStrapiMediaUrl(item.thumbnailImage.url)}
                              alt={
                                item.thumbnailImage.alternativeText ||
                                item.name ||
                                "Team member"
                              }
                              width={82}
                              height={82}
                              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                              unoptimized
                            />
                          </div>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[45%]">
            <div
              ref={emblaRef}
              className="w-full bg-gray-800 max-w-full overflow-hidden"
            >
              <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
                {data?.members?.map((item, idx) => (
                  <div
                    key={"members" + idx}
                    className={cn(
                      "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_100%] min-w-0 select-none px-1 xl:px-2.5",
                    )}
                  >
                    {item?.featuredImage?.url && (
                      <div className="w-[40px] sm:w-[48px] xl:w-[60px] 2xl:w-[68px] 3xl:w-[82px] aspect-square rounded-full border-3 border-white overflow-hidden">
                        <Image
                          src={getStrapiMediaUrl(item?.featuredImage?.url)}
                          alt={
                            item?.featuredImage?.alternativeText ||
                            item.name ||
                            "Team member"
                          }
                          width={82}
                          height={82}
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                          unoptimized
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
