"use client";
import { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function AboutGuidence({ data }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="relative py-[40px_10px] md:py-[50px] 2xl:py-[60px] 3xl:py-[80px_60px] overflow-hidden">
      <div className="container">
        <div className="max-w-[522px] xl:max-w-[644px] 2xl:max-w-[730px] 3xl:max-w-[887px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]">
          <div className="heading_1 mb-[20px]">{data?.title}</div>
          <div className="text_3 font-helvetica-light">
            {data.short_description}
          </div>
        </div>

        <div className="w-full h-full relative  ">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl,
              nextEl,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
            loop={true}
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
                spaceBetween: 15,
              },
              1600: {
                slidesPerView: 2,
                spaceBetween: 35,
              },
            }}
            className="relative z-0 overflow-hidden"
          >
            {(data?.members || []).map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div
                  key={"members" + index}
                  className="block w-full h-full bg-gradient-to-r from-[#E9CBA3] via-[#C16C84] to-[#A14962] px-[20px] md:px-[20px] 3xl:px-[30px]"
                >
                  <div className="flex w-full h-full">
                    <div className="w-full md:w-[190px] xl:w-[230px] 2xl:w-[260px] 3xl:w-[320px] flex items-end h-full overflow-hidden max-md:hidden">
                      <div className="relative w-full h-auto flex items-end  after:absolute after:top-[35px] after:content-[''] after:right-0 after:left-0 after:m-auto after:w-[190px] xl:after:w-[230px] 2xl:after:w-[260px] 3xl:after:w-[320px] after:h-[190px] xl:after:h-[230px] 2xl:after:h-[260px] 3xl:after:h-[320px] after:bg-[url('/images/globe-line.svg')] after:pointer-events-none after:bg-contain after:bg-no-repeat">
                        <Image
                          src={getStrapiMediaUrl(item?.featured_image?.url)}
                          alt={
                            item?.featured_image?.alternativeText || "members"
                          }
                          width="320"
                          height="430"
                          className="w-full h-full object-contain relative z-10"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-[calc(100%-190px)] xl:w-[calc(100%-230px)] 2xl:w-[calc(100%-260px)] 3xl:w-[calc(100%-320px)] ">
                      <div className="relative w-full py-[35px] lg:py-[40px] xl:py-[50px] 2xl:py-[57px] 3xl:py-[70px_85px] md:pl-[25px] 2xl:pl-[30px] 3xl:pl-[40px] ">
                        <div className="w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] flex items-center ">
                          <div className="relative w-[50px] h-[50px] rounded-full border border-white/15 overflow-hidden flex items-end md:hidden">
                            <Image
                              src={
                                item?.featured_image?.url
                                  ? getStrapiMediaUrl(item?.featured_image?.url)
                                  : "/images/placeholder.jpg"
                              }
                              alt={item.name || "members"}
                              width="320"
                              height="430"
                              className="w-full h-full object-contain relative z-10"
                            />
                          </div>
                          <div className="w-[calc(100%-50px)] max-md:pl-[15px] md:w-full">
                            <div className="text-[13px] md:text-[15px] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[33px] text-[#FBAAC1] font-normal mb-[5px]">
                              {item?.name}
                            </div>
                            <div className="text_3 text-white font-helvetica-light">
                              {item?.designation}
                            </div>
                          </div>
                        </div>
                        {item?.expirence ||
                          (item?.specialisation && (
                            <div className="w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                              <div className="text_3 text-white font-helvetica-light mb-[5px]">
                                {item?.expirence}
                              </div>
                              <div className="text_3 text-white font-helvetica-light">
                                {item?.specialisation}
                              </div>
                            </div>
                          ))}
                        <div className="w-full relative after:absolute after:bottom-[-20px] after:content-[''] after:right-0 after:w-[30px] after:h-[17px] after:bg-[url('/images/quote.svg')] after:bg-contain after:bg-no-repeat">
                          <div className="text_3 text-white font-helvetica-light pr-[20px] h-[140px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[200px] overflow-y-auto pr-4 xl:pr-5 2xl:pr-6 3xl:pr-8 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]">
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
          <div className="absolute inset-y-0 left-0 right-0 z-2 pointer-events-none">
            <button
              ref={setPrevEl}
              className="guidance-prev
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
                                    hover:text-white
                                "
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M9.8432 0.246094L0.492136 9.7202L9.8432 19.1943"
                  stroke="black"
                  strokeWidth="0.700521"
                />
                <line
                  y1="-0.35026"
                  x2="18.4565"
                  y2="-0.35026"
                  transform="matrix(1 -5.961e-08 -1.28212e-07 -1 0.614685 9.71875)"
                  stroke="black"
                  strokeWidth="0.700521"
                />
              </svg>
            </button>

            <button
              ref={setNextEl}
              className="
                                guidance-next
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
                                hover:text-white
                            "
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7022 9.28906L28.0533 18.7632L18.7022 28.2373"
                  stroke="black"
                  strokeWidth="0.700521"
                />
                <line
                  x1="27.9308"
                  y1="19.112"
                  x2="9.47436"
                  y2="19.112"
                  stroke="black"
                  strokeWidth="0.700521"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
