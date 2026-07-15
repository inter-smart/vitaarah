"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Link from "next/link";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function TreatmentComplementary({ data }) {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeCard = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full block relative py-[25px] lg:py-[30px] xl:py-[35px] 2xl:py-[45px_35px] 3xl:py-[55px_40px]">
      <div className="container">
        <motion.div
          className="max-w-[522px] xl:max-w-[644px] 2xl:max-w-[730px] 3xl:max-w-[887px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="heading_1 mb-[0px]">{data?.title}</div>
          <div className="text_3 font-helvetica-light text-black">
            {data?.short_description}
          </div>
        </motion.div>
        <div className="w-full h-full relative">
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
            slidesPerView={1.5}
            spaceBetween={15}
            centerInsufficientSlides={true}
            breakpoints={{
              578: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              1090: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1325: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1535: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              1800: {
                slidesPerView: 3,
                spaceBetween: 44,
              },
            }}
            className="relative z-20"
          >
            {(data?.related_treatments || []).map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  variants={fadeCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="h-full"
                  >
                    <Link
                      href={`/treatments/${item.slug}`}
                      className="relative w-full h-full block group overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:via-black/10 before:to-transparent before:z-[1] before:opacity-70 before:transition-all before:duration-700 after:absolute after:inset-0 after:bg-white/10 after:opacity-0 after:transition-all after:duration-700 hover:before:opacity-100 hover:after:opacity-100"
                    >
                      <Image
                        src={
                          item?.featured_image?.url ||
                          item?.hero?.hero_media?.url
                            ? getStrapiMediaUrl(
                                item.featured_image?.url ||
                                  item.hero?.hero_media?.url,
                              )
                            : "/images/placeholder.jpg"
                        }
                        alt={
                          item?.featured_image?.alternativeText || "Treatment"
                        }
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                        width={520}
                        height={640}
                      />

                      <div
                        className="absolute bottom-0 left-0 w-full transition-all duration-700 z-[2]
                                                group-hover:translate-y-[-12px]
                                                p-[8px] sm:p-[10px]
                                                md:px-[15px]
                                                xl:px-[20px]
                                                2xl:px-[25px]
                                                3xl:px-[30px]
                                                md:py-[20px]
                                                xl:py-[30px]
                                                2xl:py-[35px]
                                                3xl:py-[40px]"
                      >
                        <div
                          className="w-full max-w-[452px]
                                                    bg-white/10
                                                    backdrop-blur-lg
                                                    transition-all duration-700
                                                    group-hover:bg-white/15
                                                    group-hover:border-white/40
                                                    group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                                    p-[8px]
                                                    sm:p-[10px_12px]
                                                    xl:p-[12px_15px]
                                                    3xl:p-[16px_20px]"
                        >
                          <div className="text_3 font-helvetica-light">
                            {item?.duration_info}
                          </div>

                          <div
                            className="text-[15px]
                                                        md:text-[18px]
                                                        lg:text-[20px]
                                                        xl:text-[24px]
                                                        2xl:text-[27px]
                                                        3xl:text-[35px]
                                                        text-[#A14962]
                                                        font-normal mb-0
                                                        transition-all duration-500
                                                        group-hover:tracking-[0.5px]"
                          >
                            {item.title}
                          </div>

                          <div className="text_3 font-helvetica-light text-black">
                            <p>{item.short_description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-y-0 left-0 right-0 z-30 pointer-events-none">
            <button
              className="
                            button-prev
                            pointer-events-auto
                            absolute
                            left-[-15px]
                            md:left-[-65px]
                            top-1/2
                            -translate-y-1/2
                            max-md:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                            w-[35px]
                            h-[35px]
                            lg:w-[56px]
                            lg:h-[56px]
                            rounded-full
                            bg-white
                            max-md:p-[11px]
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-[#A14962]
                            text-[#A14962]
                            hover:text-white"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0513 0.351562L0.70254 13.8759L14.0513 27.4003"
                  stroke="black"
                />
                <line
                  y1="-0.5"
                  x2="26.3468"
                  y2="-0.5"
                  transform="matrix(1 -5.961e-08 -1.28212e-07 -1 0.877441 13.875)"
                  stroke="black"
                />
              </svg>
            </button>

            <button
              className="
                            button-next
                            pointer-events-auto
                            absolute
                            right-[-15px]
                            md:right-[-65px]
                            top-1/2
                            -translate-y-1/2
                            w-[35px]
                            h-[35px]
                            lg:w-[56px]
                            lg:h-[56px]
                            rounded-full
                            bg-white
                            max-md:p-[5px]
                            max-md:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-[#A14962]
                            text-[#A14962]
                            hover:text-white"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1729 0.351562L26.5216 13.8759L13.1729 27.4003"
                  stroke="black"
                />
                <line
                  x1="26.3467"
                  y1="14.375"
                  x2="-8.62318e-05"
                  y2="14.375"
                  stroke="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
