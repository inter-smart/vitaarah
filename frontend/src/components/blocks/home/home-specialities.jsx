"use client";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomeSpecialities({ data }) {
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
      id="Specialities"
      className="w-full bg-[#fff9eb] py-[40px] sm:py-[60px] xl:py-[90px] 2xl:py-[115px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-2.png"
        alt="home about element 1"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] absolute -z-1 top-4/10 right-[5%]"
      />
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 2"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] -translate-x-1/2 translate-y-1/2 absolute -z-1 bottom-0 left-0"
      />
      <div className="container mx-auto">
        {data.title && (
          <h2 className="text_2 text-center mb-[10px] lg:mb-0">{data.title}</h2>
        )}
        {data.description && (
          <div className="text_3 text-center mb-[20px] xl:mb-[30px] 2xl:mb-[36px]">
            <BlocksRenderer content={data.description} />
          </div>
        )}
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {data?.specialties?.map((item, idx) => (
              <div
                key={"specialties" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                <Link
                  href={`/conditions/${item?.slug}`}
                  className="group w-full h-full block bg-green-300 p-[30px_10px_35px] xl:p-[38px_14px_45px] 2xl:p-[48px_18px_57px] relative z-0"
                >
                  {item?.featuredImage?.mime?.startsWith("video/") ? (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover absolute z-0 inset-0 invisible group-hover:visible"
                    >
                      <source
                        src={getStrapiMediaUrl(item.featuredImage.url)}
                        type={item.featuredImage.mime}
                      />
                    </video>
                  ) : (
                    <Image
                      src={getStrapiMediaUrl(item.featuredImage.url)}
                      alt={
                        item.featuredImage.alternativeText ||
                        item.title ||
                        "Specialty"
                      }
                      fill
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover absolute z-0 inset-0 invisible group-hover:visible"
                      unoptimized
                    />
                  )}
                  {item?.icon?.url && (
                    <div className="w-[60px] sm:w-[80px] xl:w-[90px] 2xl:w-[112px] aspect-square rounded-full flex items-center justify-center transition-all duration-300 mx-auto bg-linear-to-b from-[#ecd6d0] to-[#fff9eb] mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                      <Image
                        src={getStrapiMediaUrl(item.icon.url)}
                        alt={
                          item.icon.alternativeText || item.title || "Specialty"
                        }
                        width={52}
                        height={52}
                        className="w-[30px] xl:w-[40px] 2xl:w-[50px] object-contain"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="text_4 text-center mb-[6px] xl:mb-[8px] 2xl:mb-[10px]">
                    {item?.title}
                  </div>
                  <div className="text_3 text-center text-black mx-auto xl:max-w-6/10">
                    {item?.shortDescription}
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
