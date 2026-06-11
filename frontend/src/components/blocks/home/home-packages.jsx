"use client";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomePackages({ data }) {

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
      id="Packages"
      className="w-full bg-linear-to-b from-[#fff9eb] to-white py-[30px_60px] sm:py-[48px_80px] xl:py-[68px_100px] 2xl:py-[85px_130px]"
    >
      <div className="container mx-auto">
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
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {data?.packages?.map((item, idx) => (
              <div
                key={"packages" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                <Link
                  href={`/packages/${item?.slug}`}
                  className="group w-full block border border-[#b1b1b1] bg-white"
                >
                  {item?.featuredImage && (
                    <div className="w-full aspect-[336/262] bg-black transition-all duration-300 mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                      <Image
                        src={getStrapiMediaUrl(item.featuredImage.url)}
                        alt={
                          item.featuredImage.alternativeText ||
                          item.title ||
                          "Package"
                        }
                        width={336}
                        height={262}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="text_4 text-[#a14962] mb-[4px] 2xl:mb-[6px]">
                    {item?.title}
                  </div>
                  <div className="text_3 font-normal text-black">
                    {item?.shortDescription}
                  </div>
                  <div className="flex flex-wrap space-y-[10px] 2xl:space-y-[14px]">
                    {item?.features?.map((feature, featureIdx) => (
                      <div
                        key={"features" + featureIdx}
                        className="flex gap-x-[8px] xl:gap-x-[10px] 2xl:gap-x-[12px] text_3 text-[#a14962]"
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
                            className="w-[14px] aspect-square object-contain"
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
