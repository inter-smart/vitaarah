
"use client";
// import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function AboutMoto({ data }) {
    return (
        <section className='relative py-[30px] lg:py-[40px_50px] xl:py-[50px_70px] 2xl:py-[60px_100px] 3xl:py-[80px_120px]'>
            <div className="container">
                <Swiper
                    modules={[Autoplay]}

                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={4000}
                    loop={true}
                    spaceBetween={15}       
                    slidesPerView={1.5}       
                    breakpoints={{
                        478: {
                            slidesPerView: 2,
                            spaceBetween: 20,       
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,       
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,       
                        },
                        1350: {
                            slidesPerView: 3,
                            spaceBetween: 50,       
                        },
                        1545: {
                            slidesPerView: 3,
                            spaceBetween: 60,       
                        },
                        1600: {
                            slidesPerView: 3,
                            spaceBetween: 72,       
                        },
                    }}
                    className="relative z-20 overflow-hidden"
                >
                    {data?.companyMoto.map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto border-r-1 border-black/10 last-of-type:border-0 ">
                            <div className="w-full h-full pr-[10px]">
                                <div className="max-w-[240px] xl:max-w-[290px] 2xl:max-w-[330px] 3xl:max-w-[400px] w-full h-full">
                                    <div className="text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[33px] text-[#A14962] mb-[12px] xl:mb-[15px] 2xl:mb-[25px] 3xl:mb-[33px]">{item?.title}</div>
                                    <div className="text_3 font-light">
                                        <BlocksRenderer content={item.description} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
