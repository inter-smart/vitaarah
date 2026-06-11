"use client";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HomeTestimonials({ data }) {

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
    <section className="w-full bg-[#fff9eb] py-[40px] sm:py-[60px] xl:py-[90px] 2xl:py-[115px] overflow-hidden relative z-0">
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] translate-x-1/2 absolute -z-1 top-2/10 right-0"
      />
      <Image
        src="/images/home-about-elmt-2.png"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] absolute -z-1 bottom-[5%] left-[2%]"
      />
      <div className="container mx-auto">
        {data.title && (
          <h2 className="text_2 text-center mb-[10px] lg:mb-0">{data.title}</h2>
        )}
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-1 xl:-mx-2.5 ">
            {data?.testimonials?.map((item, idx) => (
              <div
                key={"testimonials" + idx}
                className={cn(
                  "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none px-1 xl:px-2.5",
                )}
              >
                {item?.authorImage && (
                  <div className="w-[60px] sm:w-[80px] xl:w-[90px] 2xl:w-[112px] aspect-square rounded-full overflow-hidden mb-[15px] xl:mb-[20px] 2xl:mb-[24px]">
                    <Image
                      src={getStrapiMediaUrl(item.authorImage.url)}
                      alt={item.authorImage.alternativeText || item.authorName}
                      width={52}
                      height={52}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="text_3 font-semibold">{item?.authorName}</div>
                {item?.authorDesignation && (
                  <div className="text-sm text-muted-foreground mb-2">{item.authorDesignation}</div>
                )}
                {item?.rating && (
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <span key={i} className="text-yellow-500">&#9733;</span>
                    ))}
                  </div>
                )}
                {item?.review && (
                  <div className="text_3 font-normal text-black">
                    <BlocksRenderer content={item.review} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
