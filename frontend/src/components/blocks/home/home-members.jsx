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
    <section className="w-full bg-black pt-[30px] sm:pt-[40px] xl:pt-[55px] 2xl:pt-[70px] overflow-hidden relative z-0">
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] translate-x-1/2 absolute -z-1 top-2/10 right-0"
      />
      <div className="container mx-auto">
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {data?.members?.map((item, idx) => (
              <div
                key={"members" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                <Link
                  href={`/team/${item?.name?.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group w-full block"
                >
                  {item?.thumbnailImage?.url && (
                    <div className="w-[60px] sm:w-[80px] xl:w-[90px] 2xl:w-[112px] aspect-square rounded-full scale-100 group-hover:scale-90 transition-all duration-300 mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                      <Image
                        src={getStrapiMediaUrl(item.thumbnailImage.url)}
                        alt={item.thumbnailImage.alternativeText || item.name || "Team member"}
                        width={52}
                        height={52}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="text_3 text-center">{item?.name}</div>
                  <div className="text_3 text-center">
                    {item?.designation}
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
