"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function ConditionRootCause({ data, rootCauses }) {
  return (
    <section className="relative bg-[#FFF9EB] py-[40px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[100px] overflow-hidden">
      <div className="container">
        <div className="max-w-[440px] xl:max-w-[540px] 2xl:max-w-[610px] 3xl:max-w-[740px] text-center m-auto mb-[10px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
          <div className="heading_1 mb-[10px] sm:mb-[0px]">{data?.title}</div>
          <div className="text_3 font-helvetica-light">
            {data?.short_description}
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          loop={true}
          centerInsufficientSlides={true}
          slidesPerView={1.3}
          spaceBetween={25}
          breakpoints={{
            478: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1090: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1345: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1525: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1800: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          className="relative z-20"
        >
          {(rootCauses || []).map((item, index) => (
            <SwiperSlide key={index} className="!h-auto group transition-all ">
              <div
                key={"services" + index}
                className="relative block w-full h-full bg-white lg:bg-[#FFFCF5] p-[30px_15px] lg:p-[43px_15px] xl:p-[55px_18px] 2xl:p-[60px_20px] 3xl:p-[73px_55px] text-center group transition-all  lg:scale-y-90 group-[.swiper-slide-next]:lg:scale-y-100 group-[.swiper-slide-next]:lg:bg-white "
              >
                <div className="w-[32px]xl:w-[38px] 2xl:w-[42px] 3xl:w-[52px] h-[32px] xl:h-[38px] 2xl:h-[42px] 3xl:h-[52px] overflow-hidden m-auto mb-[12px] 2xl:mb-[15px] 3xl:mb-[20px]">
                  <Image
                    src={
                      item?.icon?.url
                        ? getStrapiMediaUrl(item.icon.url)
                        : "/images/placeholder.jpg"
                    }
                    alt={item?.title || "Icon"}
                    width="52"
                    height="52"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[15px] lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px] text-[#A14962] mb-[10px]">
                  {item?.title}
                </div>
                <div className="text_3 text-[#000000] font-helvetica-light mb-[12px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[33px]">
                  {item?.short_description}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
