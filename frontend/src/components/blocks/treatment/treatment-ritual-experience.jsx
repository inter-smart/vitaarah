"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TreatmentRitualExperience({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % (data?.ritual_experience_item?.length || 1),
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data?.ritual_experience_item?.length]);

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-[#FFF9EB] py-[40px] md:py-[50px_70px] lg:py-[65px_100px] xl:py-[80px_120px] 2xl:py-[90px_150px] 3xl:py-[110px_200px]">
      <div className="container">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full text-center m-auto lg:max-w-[450px] xl:max-w-[580px] 2xl:max-w-[630px] 3xl:max-w-[790px] mb-[20px] md:mb-[30px] xl:mb-[40px] 2xl:mb-[55px] 3xl:mb-[72px]"
        >
          <div className="heading_1 mb-[0px]">{data?.title}</div>
          {data?.short_description && (
            <div className="text_3 font-helvetica-light">{data?.short_description}</div>
          )}
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            478: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1090: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1345: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1525: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
            1850: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="relative z-20 overflow-hidden"
        >
          {(data?.ritual_experience_item || []).map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -12,
                  transition: {
                    duration: 0.3,
                  },
                }}
                animate={
                  activeIndex === index
                    ? {
                        scale: 1.03,
                        boxShadow: [
                          "0 0 0 rgba(161,73,98,0)",
                          "0 20px 40px rgba(161,73,98,0.25)",
                          "0 0 0 rgba(161,73,98,0)",
                        ],
                      }
                    : {
                        scale: 1,
                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                      }
                }
                transition={{
                  duration: 2,
                  repeat: activeIndex === index ? Infinity : 0,
                }}
                className="w-full h-full block p-[15px] lg:p-[20px] xl:p-[25px] 2xl:p-[30px_33px] 3xl:p-[40px] transition-all duration-300 ease-in-out group relative z-0 overflow-hidden"
              >
                {/* Default white background */}
                <div className="absolute inset-0 z-[-2] bg-white transition-colors duration-300" />
                {/* Gradient background that fades in smoothly */}
                <div 
                  className={`absolute inset-0 z-[-1] bg-gradient-to-r from-[#A14962] to-[#E9CBA3] transition-opacity duration-500 ease-in-out ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
                />
                <motion.div
                  animate={
                    activeIndex === index
                      ? {
                          scale: [1, 1.15, 1],
                        }
                      : {
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: 1.2,
                    repeat: activeIndex === index ? Infinity : 0,
                  }}
                  className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-white text-center 
                                    mb-[20px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]
                                    bg-gradient-to-r from-[#A14962] to-[#E9CBA3]
                                    w-[35px] lg:w-[44px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[80px]
                                    h-[35px] lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[80px]
                                    flex items-center justify-center rounded-full"
                >
                  {item?.stepNumber || String(index + 1).padStart(2, "0")}
                </motion.div>

                <motion.div
                  animate={
                    activeIndex === index
                      ? {
                          x: [0, 3, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: activeIndex === index ? Infinity : 0,
                  }}
                  className={`text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] font-normal
                                    mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]
                                    ${
                                      activeIndex === index
                                        ? "text-[#FBAAC1]"
                                        : "text-[#A14962]"
                                    }`}
                >
                  {item?.title}
                </motion.div>

                <div
                  className={`text_3 font-helvetica-light
                                    [&>p:not(:last-child)]:mb-[20px]
                                    mb-[20px] md:mb-[30px]
                                    lg:mb-[35px]
                                    xl:mb-[40px]
                                    2xl:mb-[45px]
                                    3xl:mb-[50px]
                                    ${
                                      activeIndex === index
                                        ? "[&>p]:text-white"
                                        : "text-black"
                                    }`}
                >
                  {item?.short_description && <p>{item.short_description}</p>}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
