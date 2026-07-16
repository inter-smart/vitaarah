"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Link from "next/link";

export default function ConditionTreatment({ data, treatments }) {
  return (
    <section className="relative py-[45px] md:py-[50px_60px] lg:py-[55px_70px] xl:py-[65px_90px] 2xl:py-[75px_100px] 3xl:py-[95px_135px]">
      <div className="container">
        <div className="max-w-[440px] xl:max-w-[540px] 2xl:max-w-[610px] 3xl:max-w-[740px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]">
          <div className="heading_1 mb-[5px]">{data?.title}</div>
          <div className="text_3 font-helvetica-light">
            {data?.short_description}
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={4000}
          loop={true}
          centerInsufficientSlides={true}
          slidesPerView={1.3}
          spaceBetween={0}
          breakpoints={{
            478: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1090: {
              slidesPerView: 3,
            },
            1345: {
              slidesPerView: 3,
            },
            1525: {
              slidesPerView: 3,
            },
            1800: {
              slidesPerView: 3,
            },
          }}
          className="relative z-20"
        >
          {(treatments || []).map((item, index) => (
            <SwiperSlide
              key={"treatments" + index}
              className="!h-auto group  border border-[#C3C3C3] not-first-of-type:!border-l-0"
            >
              <Link
                href={`/treatments/${item?.slug}`}
                className="w-full h-full block bg-wite p-[30px_15px] sm:p-[45px_25px] md:p-[50px_35px] lg:p-[60px_40px] xl:p-[70px_50px] 2xl:p-[75px_60px] 3xl:p-[75px_73px] text-center transition-all hover:bg-[#FFF9EB]"
              >
                <div className="text_3 uppercase font-helvetica-light text-[#5D5D5D] mb-[8px]">
                  {item?.duration_info}
                </div>
                <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]">
                  {item?.title}
                </div>
                <div className="text_3 font-helvetica-light [&>p:not(:last-child)]:mb-[20px]">
                  <p>{item.short_description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
