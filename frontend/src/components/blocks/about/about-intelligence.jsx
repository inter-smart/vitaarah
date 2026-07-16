"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function AboutIntelligence({ data }) {
  return (
    <section className="relative bg-[#FFF9EB] py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute right-[50px] top-[150px]">
          <Image
            src="/images/circle.svg"
            className="w-full max-w-[87px]"
            width="85"
            height="85"
            alt="floating_icon"
          />
        </div>
        <div className="absolute left-[50px] bottom-[-65px] xl:bottom-[-105px] 2xl:bottom-[-120px] 3xl:bottom-[-145px] w-full max-w-[170px] xl:max-w-[210px] 2xl:max-w-[240px] 3xl:max-w-[290px] ">
          <Image
            src="/images/circle.svg"
            className="w-full object-cover"
            width="85"
            height="85"
            alt="floating_icon"
          />
        </div>
      </div>
      <div className="container">
        <div className="max-w-[440px] xl:max-w-[540px] 2xl:max-w-[610px] 3xl:max-w-[740px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]">
          <div className="heading_1 mb-[10px] sm:mb-[20px]">{data?.title}</div>
          <div className="text_3 font-helvetica-light">{data?.short_description}</div>
        </div>
        {/* intelligence slider */}

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
          {(data?.root_causes || []).map((item, index) => (
            <SwiperSlide key={"root_causes" + index} className="!h-auto group">
              <div className="relative block w-full h-full bg-white lg:bg-[#FFFCF5] p-[30px_10px] lg:p-[43px_15px] xl:p-[55px_18px] 2xl:p-[60px_20px] 3xl:p-[73px_25px] text-center group transition-all hover:bg-white group transition-all lg:scale-y-90 group-[.swiper-slide-next]:lg:scale-y-100 group-[.swiper-slide-next]:lg:bg-white">
                {/* bg-icon  */}
                <div className="w-full max-w-[320px] absolute top-[30px] left-0 right-0 opacity-0 m-auto pointer-events-none transition-all group-hover:opacity-[0.04]">
                  <Image
                    src={getStrapiMediaUrl(item?.icon?.url)}
                    alt={item?.icon?.alternativeText || item?.title || "icon"}
                    className="w-full h-full object-cover"
                    width="350"
                    height="350"
                  />
                </div>
                {/* main icon */}
                <div className=" w-[32px]xl:w-[38px] 2xl:w-[42px]  3xl:w-[52px] h-[32px] xl:h-[38px] 2xl:h-[42px]  3xl:h-[52px] overflow-hidden m-auto mb-[12px] 2xl:mb-[15px] 3xl:mb-[20px]">
                  <Image
                    src={getStrapiMediaUrl(item?.icon?.url)}
                    alt={item?.icon?.alternativeText || item?.title || "icon"}
                    className="w-full h-full object-contain"
                    width="52"
                    height="52"
                  />
                </div>
                <div className="text-[15px] lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px] text-[#A14962] mb-[10px]">
                  {item?.title}
                </div>
                <div className="text_3 text-[#000000] mb-[12px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[33px]">
                  {item?.sub_title}
                </div>
                <div className="text_3 text-[#000000] font-helvetica-light mb-[12px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[33px]">
                  {item?.short_description}
                </div>
                <div className="flex flex-wrap gap-[7px] xl:gap-[9px] 2xl:gap-[11px] 3xl:gap-[13px]">
                  {item?.service_specification?.map((spec, id) => (
                    <div
                      key={id}
                      className="text_3 text-[#B88190] text-center font-helvetica-light flex-grow-1 rounded-[50px] bg-[rgba(230,198,160,0.2)] flex items-center justify-center h-[25px] xl:h-[30px] 2xl:h-[35px] 3xl:h-[42px] px-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[15px]"
                    >
                      {spec.title}
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
