"use client";
import { cn } from "@/lib/utils";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function GalleryTreatmentVideos({ data }) {
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
    <section className="w-full block">
      <div className="w-full py-[30px] sm:py-[40px] xl:py-[61px_98px] 2xl:py-[69px_111px] 3xl:py-[90px_134px] bg-[#fff9eb] overflow-hidden relative z-0">
        <Image
          src="/images/home-about-elmt-1.svg"
          alt="home about element 1"
          width={300}
          height={300}
          className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] -translate-x-[20%] absolute -z-1 top-[18%] left-0"
        />
        <div className="container">
          <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 mb-[15px] sm:mb-[27px] xl:mb-[34px] 2xl:mb-[40px] 3xl:mb-[47px]">
            {data?.title && (
              <h2 className="heading_1 text-center text-[#1f1f1f] lg:mb-0">
                {data.title}
              </h2>
            )}
            {data?.short_description && (
              <div className="text_3 text-center font-normal text-black">
                {data.short_description}
              </div>
            )}
          </div>
          <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
            <div className="flex touch-pan-y touch-pinch-zoom -mx-[6px] sm:-mx-[11px] xl:-mx-[14px] 2xl:-mx-[15px] 3xl:-mx-[18px]">
              {data?.gallery_video?.map((item, idx) => (
                <div
                  key={"treatmentVideos" + idx}
                  className={cn(
                    "flex-[0_0_160px] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 select-none px-[6px] sm:px-[11px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px]",
                  )}
                >
                  <div
                    className={cn(
                      "w-full aspect-[366/538] bg-gray-200 block overflow-hidden relative z-0",
                    )}
                  >
                    <video
                      src={getStrapiMediaUrl(item?.video?.url)}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) =>
                        e.currentTarget.play().catch(() => {})
                      }
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <Link
                      href={item?.instagram_post_url || "#"}
                      target="_blank"
                      className="absolute z-0 bottom-[10px]  lg:bottom-[18px] 2xl:bottom-[21px] 3xl:bottom-[26px] right-[10px] lg:right-[12px] 2xl:right-[14px] 3xl:right-[17px] block hover:scale-105 transition-all duration-500"
                    >
                      <Image
                        src="/images/icon-insta-2.svg"
                        alt="icon-insta-2"
                        width={21}
                        height={21}
                        className="size-[21px] xl:size-[25px] 2xl:size-[30px] 3xl:size-[35px] object-contain"
                        unoptimized
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[30px] sm:py-[54px] xl:py-[67px] 2xl:py-[76px] 3xl:py-[92px] bg-white overflow-hidden relative z-0">
        <Image
          src="/images/home-about-elmt-2.svg"
          alt="home about element 2"
          width={60}
          height={60}
          className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 bottom-[10%] left-0"
        />
        <div className="container">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-[76px] xl:gap-[94px] 2xl:gap-[107px] 3xl:gap-[130px]">
            <div className="flex-auto lg:flex-1 flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-[48px] xl:gap-[59px] 2xl:gap-[68px] 3xl:gap-[82px]">
              {data?.sub_title && (
                <h2 className="heading_1 leading-none text-center lg:text-start text-[#1f1f1f]">
                  {data.sub_title}
                </h2>
              )}
              {data?.sub_description && (
                <div className="text_3 font-normal text-center lg:text-start text-black  mb-[2px] xl:mb-[4px] 2xl:mb-[6px]">
                  {data.sub_description}
                </div>
              )}
            </div>
            <div className="flex flex-col items-center lg:items-end">
              {data?.instagram_username && (
                <div className="text_3 text-center font-normal text-[#a14962] mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px]">
                  {data.instagram_username}
                </div>
              )}
              {data?.background_url && (
                <Link
                  href={data.background_url}
                  target="_blank"
                  className="text_3 leading-none font-normal text-white w-full min-w-[185px] xl:min-w-[230px] 2xl:min-w-[260px] 3xl:min-w-[315px] h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[85px] bg-linear-to-l from-[#e9cba3] to-[#a14962] flex items-center justify-center gap-[10px] xl:gap-[12px] 2xl:gap-[14px] 3xl:gap-[17px] hover:scale-105 transition-all duration-500"
                >
                  <Image
                    src="/images/icon-insta-2.svg"
                    alt="icon-insta-2"
                    width={21}
                    height={21}
                    className="size-[25px] lg:size-[34px] xl:size-[42px] 2xl:size-[48px] 3xl:size-[58px] object-contain"
                    unoptimized
                  />
                  View All on Instagram
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
