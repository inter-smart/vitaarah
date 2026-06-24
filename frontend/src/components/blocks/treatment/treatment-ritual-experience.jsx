
"use client";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { useEffect, useState } from "react";

export default function TreatmentRitualExperience({ data }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % data.steps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [data.steps.length]);

    return (
        <section className='relative bg-[#FFF9EB] py-[40px] md:py-[50px_70px] lg:py-[65px_100px] xl:py-[80px_120px] 2xl:py-[90px_150px] 3xl:py-[110px_200px]'>
            <div className="container">
                <div className="w-full text-center m-auto lg:max-w-[450px] xl:max-w-[580px] 2xl:max-w-[630px] 3xl:max-w-[790px] mb-[20px] md:mb-[30px] xl:mb-[40px] 2xl:mb-[55px] 3xl:mb-[72px]">
                    <div className="heading_1 mb-[0px] ">{data?.title}</div>
                    <div className="text_3 font-light">
                        {data?.subtitle}
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={6000}
                    loop={true}
                    center={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        478: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 18
                        },
                        1090: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        1345: {
                            slidesPerView: 4,
                            spaceBetween: 25
                        },
                        1525: {
                            slidesPerView: 4,
                            spaceBetween: 35
                        },
                        1850: {
                            slidesPerView: 4,
                            spaceBetween: 50
                        },
                    }}
                    className="relative z-20 overflow-hidden"
                >
                    {data?.steps.map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div className={`w-full h-full block bg-white p-[15px] lg:p-[20px] xl:p-[25px] 2xl:p-[30px_33px] 3xl:p-[40px]
                                transition-all duration-300 ease-in-out group  
                                  ${activeIndex === index
                                    ? "bg-gradient-to-r from-[#A14962] to-[#E9CBA3]"
                                    : "bg-white"
                                }`}>
                                <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-white text-center 
                                    mb-[20px] xl:mb-[30px]  2xl:mb-[40px] 3xl:mb-[50px] bg-gradient-to-r from-[#A14962] to-[#E9CBA3] w-[35px] lg:w-[44px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[80px] h-[35px] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[80px] 
                                    flex items-center justify-center rounded-full ">
                                    {item?.stepNumber}
                                </div>
                                <div className={`text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px]  font-normal
                                 mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] 
                                   ${activeIndex === index
                                        ? "text-[#FBAAC1]"
                                        : "text-[#A14962]"
                                    }`}>
                                    {item?.title}
                                </div>
                                <div className={`text_3 font-light [&>p:not(:last-child)]:mb-[20px] mb-[20px] md:mb-[30px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px]
                                 ${activeIndex === index
                                        ? "[&>p]:text-white"
                                        : "text-black"
                                    }`}>
                                    <BlocksRenderer content={item?.description} />
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
