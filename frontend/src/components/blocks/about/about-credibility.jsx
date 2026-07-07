"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { animate, useInView } from "framer-motion";
import React, { Fragment, useEffect, useRef } from "react";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function AboutCredibility({ data }) {
  return (
    <section className="relative py-[15px_40px] xl:py-[25px_55px] 2xl:py-[30px_70px] 3xl:py-[60px_180px]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-[35px]">
          <div className="heading_1">{data.title}</div>
          {data?.statistic?.length > 0 && (
            <div className="lg:max-w-[403px] xl:max-w-[497px] 2xl:max-w-[563px] 3xl:max-w-[685px] flex justify-between gap-[10px] sm:gap-[15px] xl:gap-[20px] 2xl:gap-[25px]">
              {data?.statistic.map((stat, index) => (
                <Fragment key={stat.label}>
                  <div>
                    <h3 className="text-[18px] sm:text-[26.6px] xl:text-[32.9px] 2xl:text-[37.3px] 3xl:text-[45.2px] leading-normal font-normal font-helvetica-light text-[#a14962] mb-[2px] 2xl:mb-[4px] 3xl:mb-[14px]">
                      {stat.value_count}
                      {stat.value_suffix || ""}
                    </h3>
                    <p className="text_3 leading-tight font-helvetica-light text-black xl:max-w-[80%]">
                      {stat.label}
                    </p>
                  </div>
                  {index < data.statistic.length - 1 && (
                    <div className="w-[1px] h-[91px] 2xl:h-[110px] 3xl:h-[130px] bg-[#ECE7D7]" />
                  )}
                </Fragment>
              ))}
            </div>
          )}
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop={true}
          slidesPerView={2.5}
          spaceBetween={0}
          breakpoints={{
            478: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1280: { slidesPerView: 5 },
          }}
          className="relative z-20"
        >
          {(data?.certification_card || data?.certifications || []).map(
            (item, index) => (
              <SwiperSlide
                key={index}
                className="!h-auto border border-[#83394E] not-first-of-type:!border-l-0 "
              >
                <div className="w-full h-full overflow-hidden text-center p-[15px] md:p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px]">
                  <div className="max-w-[40px] md:max-w-[90px] lg:max-w-[95px] xl:max-w-[100px] 2xl:max-w-[120px] 3xl:max-w-[150px] w-full aspect-square m-auto mb-[8px] flex items-center justify-center">
                    <Image
                      src={getStrapiMediaUrl(item?.certification_media?.url)}
                      alt={
                        item?.certification_media?.alternativeText ||
                        item?.title ||
                        "certification"
                      }
                      className="w-full object-contain"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div className="text_3 font-light">{item.title}</div>
                </div>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  );
}
