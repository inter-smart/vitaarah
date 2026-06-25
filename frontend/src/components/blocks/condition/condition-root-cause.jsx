"use client";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { cn } from "@/lib/utils";

export default function ConditionRootCause({ data }) {
   
 
    return (
        <section className='relative bg-[#FFF9EB] py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] overflow-hidden'>

            <div className="container">
                <div className="max-w-[440px] xl:max-w-[540px] 2xl:max-w-[610px] 3xl:max-w-[740px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]">
                    <div className="heading_1 mb-[10px] sm:mb-[20px]">{data?.title}</div>
                    <div className="text_3 font-light">
                        {data.description}
                    </div>
                </div>
                {/* intelligence slider */}

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={4000}
                    loop={true}
                    center={true}
                    slidesPerView={1.3}
                    spaceBetween={25}
                    breakpoints={{
                        478: { slidesPerView: 2 },
                        768: { slidesPerView: 2.5 },
                        992: { slidesPerView: 3 },
                        1280: { slidesPerView: 3 },
                    }}
                    className="relative z-20"
                >
                    {data?.rootCauses.map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div key={"services" + index} className="relative block w-full h-full bg-[#FFFCF5] p-[30px_10px] lg:p-[43px_15px] xl:p-[55px_18px] 2xl:p-[60px_20px] 3xl:p-[73px_55px] text-center group transition-all hover:bg-white">

                                {/* main icon */}
                                <div className=" w-[32px]xl:w-[38px] 2xl:w-[42px]  3xl:w-[52px] h-[32px] xl:h-[38px] 2xl:h-[42px]  3xl:h-[52px] overflow-hidden m-auto mb-[12px] 2xl:mb-[15px] 3xl:mb-[20px]">
                                    <Image src={item?.icon?.url} width="52" height="52" className="w-full h-full object-contain" alt={item?.title} />
                                </div>
                                <div className="text-[15px] lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px] text-[#A14962] mb-[10px]">{item?.title}</div>
                                <div className="text_3 text-[#000000] font-light mb-[12px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[33px]">{item?.shortDescription}</div>

                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>


            </div>
        </section>
    )
}
