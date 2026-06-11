"use client";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomeBlogs({ data }) {
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
    <section className="w-full py-[40px] sm:py-[60px] xl:py-[74px] 2xl:py-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-[10px] xl:mb-[15px] 2xl:mb-[30px]">
          {data.title && (
            <h2 className="text_2 text-center lg:mb-0">
              {data.title}
            </h2>
          )}
        </div>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {data?.blogs?.map((item, idx) => (
              <div
                key={"blogs" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                <Link
                  href={`/blog/${item?.slug}`}
                  className="group w-full block"
                >
                  {item?.featuredImage?.url && (
                    <div className="w-[60px] sm:w-[80px] xl:w-[90px] 2xl:w-[112px] aspect-square rounded-full scale-100 group-hover:scale-90 transition-all duration-300 mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                      <Image
                        src={getStrapiMediaUrl(item.featuredImage.url)}
                        alt={item.featuredImage.alternativeText || item.title || "Blog"}
                        width={52}
                        height={52}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="text_3 text-center">{item?.title}</div>
                  <div className="text_3 text-center">
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
