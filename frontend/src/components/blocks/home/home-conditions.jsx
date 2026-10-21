"use client";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const bgImgStyle =
  "w-full h-full object-cover absolute -z-1 inset-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500";

export default function HomeConditions({ data }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      slidesToScroll: "auto",
    },
    [
      Autoplay({
        delay: 8000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ],
  );
  return (
    <section
      id="Specialities"
      className="w-full block bg-[#fff9eb] py-[35px] sm:py-[50px] xl:py-[63px] 2xl:py-[72px] 3xl:py-[87px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="conditon background"
        width={80}
        height={80}
        className="w-[30px] sm:w-[40px] xl:w-[60px] 2xl:w-[70px] 3xl:w-[80px] absolute -z-1 top-2/10 right-[5%] pointer-events-none"
        unoptimized
      />
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="conditon background two"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] -translate-x-1/2 translate-y-1/2 absolute -z-1 bottom-0 left-0 pointer-events-none"
        unoptimized
      />
      <div className="container">
        {data.title && (
          <h2 className="text_2 text-center mb-[2px] 2xl:mb-[4px] 3xl:mb-[6px]">
            {data.title}
          </h2>
        )}
        {data.short_description && (
          <div className="text_3 text-center mb-[20px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[52px]">
            {data.short_description}
          </div>
        )}
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {data?.condition_item?.map((item, idx) => (
              <div
                key={"condition" + idx}
                className={cn(
                  "flex-[0_0_100%] min-[468px]:flex-[0_0_50%] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                <Link
                  href={
                    item?.related_condition?.slug
                      ? `/conditions/${item.related_condition.slug}`
                      : "#"
                  }
                  className="group w-full h-[268px] sm:h-[240px] lg:h-[270px] xl:h-[332px] 2xl:h-[376px] 3xl:h-[456px] flex items-end sm:align-top sm:p-[30px_15px_35px] xl:p-[38px_14px_45px] 2xl:p-[48px_18px_57px] overflow-hidden relative z-0"
                >
                  <div className="w-full h-1/2 bg-linear-to-t from-black via-20% via-black to-transparent absolute z-1 inset-0 top-auto block sm:hidden" />
                  {item?.background_video?.url ? (
                    <video autoPlay muted loop className={bgImgStyle}>
                      <source
                        src={getStrapiMediaUrl(item.background_video.url)}
                        type={item.background_video.mime || "video/mp4"}
                      />
                    </video>
                  ) : (
                    <Image
                      src="/images/placeholder.jpg"
                      alt="placeholder"
                      width={386}
                      height={482}
                      className={bgImgStyle}
                    />
                  )}
                  <div className="w-full p-[20px_15px] sm:p-0">
                    <div className="w-[40px] sm:w-[96px] xl:w-[118px] 2xl:w-[134px] 3xl:w-[162px] aspect-square rounded-full flex items-center justify-center transition-all duration-300 mx-auto bg-linear-to-b from-[#ecd6d0] to-[#fff9eb] mb-[5px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                      {item?.icon?.url ? (
                        <Image
                          src={getStrapiMediaUrl(item.icon.url)}
                          alt={
                            item.icon.alternativeText ||
                            item.title ||
                            "Condition"
                          }
                          width={90}
                          height={90}
                          className="w-[25px] sm:w-[54px] xl:w-[67px] 2xl:w-[75px] 3xl:w-[85px] object-contain"
                        />
                      ) : (
                        <Image
                          src="/images/placeholder.jpg"
                          alt="placeholder"
                          width={90}
                          height={90}
                          className="w-[25px] sm:w-[54px] xl:w-[67px] 2xl:w-[75px] 3xl:w-[85px] object-contain"
                        />
                      )}
                    </div>
                    <div className="text_4 font-bold sm:font-medium line-clamp-2 text-center mb-[4px] sm:mb-[6px] xl:mb-[8px] 2xl:mb-[10px] text-[#a14962] sm:group-hover:text-white relative z-1">
                      {item?.title}
                    </div>
                    <div className="text_3 leading-tight line-clamp-3 text-center text-black mx-auto xl:max-w-[80%] text-white sm:text-black sm:group-hover:text-white relative z-1">
                      {item?.short_description}
                    </div>
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
