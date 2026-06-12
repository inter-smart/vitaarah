"use client";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export default function HomeTestimonials({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="Testimonials"
      className="w-full bg-[#fff9eb] py-[30px_60px] sm:py-[40px_80px] lg:py-[60px_114px] xl:py-[72px_140px] 2xl:py-[82px_160px] 3xl:py-[100px_195px]"
    >
      <div className="container">
        {data.title && (
          <h2 className="text_2 text-center text-[#1f1f1f] mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[55px]">
            {data.title}
          </h2>
        )}
        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
            <div className="flex touch-pan-y touch-pinch-zoom">
              {data?.testimonials?.map((item, idx) => (
                <div
                  key={"testimonials" + idx}
                  className={cn(
                    "flex-[0_0_220px] sm:flex-[0_0_33.333%] lg:flex-[0_0_33.333%] min-w-0 select-none",
                  )}
                >
                  <div
                    className={cn(
                      "w-full border-[#83394e] p-[42px_55px] sm:p-[24px_32px] xl:p-[30px_40px] 2xl:p-[35px_45px] 3xl:p-[42px_55px]",
                      idx === 0 ? "border" : "border-y-1 border-r-1",
                    )}
                  >
                    <Image
                      src="/images/icon-testimonials.svg"
                      alt="icon-testimonials"
                      width={64}
                      height={38}
                      className="w-[37px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[64px] object-contain"
                    />
                    {item?.review && (
                      <div className="text_3 font-normal leading-normal text-black h-[100px] xl:h-[115px] 2xl:h-[130px] 3xl:h-[150px] overflow-y-auto my-[20px] sm:my-[30px] xl:my-[43px] 2xl:my-[52px] 3xl:my-[52px] pr-4 xl:pr-5 2xl:pr-6 3xl:pr-8 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]">
                        <BlocksRenderer content={item.review} />
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Harum, voluptas. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Harum, voluptas. Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit.
                        Harum, voluptas. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Harum, voluptas.
                      </div>
                    )}
                    <div className="flex items-center gap-[18px] xl:gap-[22px] 2xl:gap-[25px] 3xl:gap-[30px]">
                      {item?.authorImage && (
                        <div className="w-[50px] sm:w-[56px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[95px] aspect-square rounded-full overflow-hidden">
                          <Image
                            src={getStrapiMediaUrl(item.authorImage.url)}
                            alt={
                              item.authorImage.alternativeText ||
                              item.authorName
                            }
                            width={95}
                            height={95}
                            className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        {item?.authorName && (
                          <div className="text_4 leading-none text-[#a14962] mb-[2px] 2xl:mb-[4px] 3xl:mb-[6px]">
                            {item?.authorName}
                          </div>
                        )}
                        {item?.authorDesignation && (
                          <div className="text_3 leading-none text-black mb-[2px] 2xl:mb-[4px] 3xl:mb-[10px]">
                            {item.authorDesignation}
                          </div>
                        )}
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                              <svg
                                width="23"
                                height="22"
                                viewBox="0 0 23 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.3221 0L14.8135 7.08253L22.6192 8.20477L16.9582 13.7162L18.3049 21.497L11.3221 17.831L4.31436 21.497L5.66104 13.7162L0 8.20477L7.83069 7.08253L11.3221 0Z"
                                  fill={
                                    i < (item?.rating || 0)
                                      ? "#F9AE0E"
                                      : "#E5E4E4"
                                  }
                                />
                              </svg>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
