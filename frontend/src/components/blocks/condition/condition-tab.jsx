"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Link from "next/link"; 
import { usePathname, useSearchParams } from "next/navigation";

export default function ConditionTab({ data }) {
    const pathname = usePathname();
    const searchParams = useSearchParams(); 
    const getActiveTab = () => {
        const tabParam = searchParams.get("tab");
        if (tabParam) return tabParam;

        const pathSegments = pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        if (lastSegment && lastSegment !== "condition" && lastSegment !== "") {
            return lastSegment;
        }
        return "hair-loss"; 
    };
    const activeTab = getActiveTab();
    return (        
            <section className='relative pt-[35px] lg:pt-[45px] xl:pt-[55px] 2xl:pt-[65px] 3xl:pt-[77px]'>
                <div className="container">
                    <div className="w-full md:max-w-[93%] h-[65px] xl:h-[75px] 2xl:h-[85px] 3xl:h-[105px] flex items-center justify-center mx-auto
                    px-[10px] md:px-[20px] lg:px-[50px]  xl:px-[60px] 2xl:px-[70px] 3xl:px-[80px] bg-white shadow-[inset_4px_2px_15px_-6px_rgba(0,0,0,0.08)]">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = ".button-prev";
                                swiper.params.navigation.nextEl = ".button-next";
                            }}
                            navigation={{
                                prevEl: ".button-prev",
                                nextEl: ".button-next",
                            }}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            speed={4000}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={15}
                            breakpoints={{
                                478: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 25,
                                },
                                1090: {
                                    slidesPerView: 6,
                                    spaceBetween: 25,
                                },
                                1325: {
                                    slidesPerView: 6,
                                    spaceBetween: 30,
                                },
                                1535: {
                                    slidesPerView: 6,
                                    spaceBetween: 35,
                                },
                                1800: {
                                    slidesPerView: 6,
                                    spaceBetween: 44,
                                },
                            }}
                            className="relative z-20" >
                            {data.map((item, id) => {
                                const isActive = activeTab === item.slug;
                                return (
                                    <SwiperSlide key={id} className="!h-auto" >
                                        <Link
                                            href={`/condition?tab=${item.slug}`}
                                            className={`text-[13px] lg:text-[14px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[23px] font-normal flex flex-col items-center m-auto w-fit justify-center 
                                                transition-all duration-300 pb-2 border-b-2 ${isActive
                                                    ? "text-[#A14962] border-[#A14962]"
                                                    : "text-black border-transparent hover:text-[#A14962]/70"
                                                }`}
                                        >
                                            {item?.label}
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>       
    );
}

