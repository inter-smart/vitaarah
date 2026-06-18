"use client";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function AboutGuidence({ data }) {
    return (
        <section className="relative py-[40px] py-[50px] 2xl:py-[60px] 3xl:py-[80px_60px]">
            <div className="container">
                <div className="max-w-[522px] xl:max-w-[644px] 2xl:max-w-[730px] 3xl:max-w-[887px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]">
                    <div className="heading_1 mb-[20px]">{data?.title}</div>
                    <div className="text_3 font-light">
                        <BlocksRenderer content={data.description} />
                    </div>
                </div>

                <div className="w-full h-full relative">

                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        speed={4000}
                        loop={true}
                        center={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            478: {
                                slidesPerView: 1.4,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1.5,
                                spaceBetween: 25,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 2,
                                spaceBetween: 35,
                            },
                        }}
                        className="relative z-20 overflow-hidden"
                    >
                        {data?.members.map((item, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <div key={"members" + index} className="block w-full h-full bg-gradient-to-r from-[#E9CBA3] via-[#C16C84] to-[#A14962] px-[20px] md:px-[30px]">
                                    <div className="flex w-full h-full">
                                        <div className="w-1/2 flex items-end h-full max-md:hidden">
                                            <div className="relative w-full h-auto flex items-end relative after:absolute after:top-[35px] after:content-[''] after:right-0 after:left-0 after:m-auto
                                                 after:w-[285px] after:h-[221px] after:bg-[url('/images/globe-line.svg')] after:pointer-events-none
                                                 after:bg-contain after:bg-no-repeat">
                                                <Image src={item?.featuredImage?.url} width="320" height="430" className="w-full h-full object-contain relative z-10" alt={item.name} />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <div className="relative w-full py-[35px] lg:py-[40px] xl:py-[50px] 2xl:py-[57px] 3xl:py-[70px_85px] md:pl-[25px] 2xl:pl-[30px] 3xl:pl-[40px] ">
                                                <div className="w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] flex items-center ">
                                                    <div className="relative w-[50px] h-[50px] rounded-full border border-white/15 overflow-hidden flex items-end md:hidden">
                                                        <Image src={item?.featuredImage?.url} width="320" height="430" className="w-full h-full object-contain relative z-10" alt={item.name} />
                                                    </div>
                                                    <div className="w-[calc(100%-50px)] max-md:pl-[15px] md:w-full">
                                                        <div className="text-[13px] md:text-[15px] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[33px] text-[#FBAAC1] font-normal mb-[5px]">
                                                            {item?.name}
                                                        </div>
                                                        <div className="text_3 text-white font-light">
                                                            {item?.designation}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                                                    <div className="text_3 text-white font-light mb-[5px]">
                                                        {item?.expirence}
                                                    </div>
                                                    <div className="text_3 text-white font-light">
                                                        {item?.specialisation}
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <div className="text_3 text-white font-light relative after:absolute after:bottom-[-20px] after:content-[''] after:right-0
                                                 after:w-[30px] after:h-[17px] after:bg-[url('/images/quote.svg')]
                                                 after:bg-contain after:bg-no-repeat">
                                                        {item?.description}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
