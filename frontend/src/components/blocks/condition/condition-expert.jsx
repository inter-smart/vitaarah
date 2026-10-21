"use client";

import ConsultationForm from "@/components/form/consultation-form";
import { cn } from "@/lib/utils";

export default function ConditionExpert({ data }) {
  return (
    <section className="relative py-[40px] lg:py-[50px] xl:py-[70px] 2xl:py-[85px] 3xl:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap max-lg:gap-[20px]">
          <div className="lg:w-4/12">
            <div className="w-full">
              <div className="heading_1 text-[#1f1f1f] mb-[15px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]">
                {data.title}
              </div>
              <div className="text_3 font-helvetica-light text-black mb-[25px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[55px]">
                {data?.short_description}
              </div>
              {data?.whatsappUrl && (
                <a
                  href={`https://wa.me/${data?.whatsappUrl || "/"}`}
                  target="_blank"
                  rel=""
                  className="group relative overflow-hidden  bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3]
                                text-white font-medium flex items-center justify-start gap-[5px] 3xl:gap-[10px] w-fit
                               px-[4px_8px] 3xl:px-[8px] min-w-[120px] xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[215px] h-[32px] 2xl:h-[37px]
                                3xl:h-[47px]   transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] 
                                hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
                >
                  <div
                    className="w-[25px] 2xl:w-[27px] 3xl:w-[35px] h-[25px] 2xl:h-[27px]
                                3xl:h-[35px] flex items-center justify-center bg-[#00A85A] transition-all duration-500 ease-out 
                                "
                    aria-label="Whatsapp"
                  >
                    <div className="w-[15px] 3xl:w-[18px] h-[15px] 3xl:h-[18px] flex">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2178_7860)">
                          <path
                            d="M12.003 0H11.997C5.3805 0 0 5.382 0 12C0 14.625 0.846 17.058 2.2845 19.0335L0.789 23.4915L5.4015 22.017C7.299 23.274 9.5625 24 12.003 24C18.6195 24 24 18.6165 24 12C24 5.3835 18.6195 0 12.003 0Z"
                            fill="white"
                          />
                          <path
                            d="M18.9848 16.9453C18.6953 17.7628 17.5463 18.4408 16.6298 18.6388C16.0028 18.7723 15.1838 18.8788 12.4268 17.7358C8.90034 16.2748 6.62934 12.6913 6.45234 12.4588C6.28284 12.2263 5.02734 10.5613 5.02734 8.83928C5.02734 7.11728 5.90184 6.27878 6.25434 5.91878C6.54384 5.62328 7.02234 5.48828 7.48134 5.48828C7.62984 5.48828 7.76334 5.49578 7.88334 5.50178C8.23584 5.51678 8.41284 5.53778 8.64534 6.09428C8.93484 6.79178 9.63984 8.51378 9.72384 8.69078C9.80934 8.86778 9.89484 9.10778 9.77484 9.34028C9.66234 9.58028 9.56334 9.68678 9.38634 9.89078C9.20934 10.0948 9.04134 10.2508 8.86434 10.4698C8.70234 10.6603 8.51934 10.8643 8.72334 11.2168C8.92734 11.5618 9.63234 12.7123 10.6703 13.6363C12.0098 14.8288 13.0958 15.2098 13.4843 15.3718C13.7738 15.4918 14.1188 15.4633 14.3303 15.2383C14.5988 14.9488 14.9303 14.4688 15.2678 13.9963C15.5078 13.6573 15.8108 13.6153 16.1288 13.7353C16.4528 13.8478 18.1673 14.6953 18.5198 14.8708C18.8723 15.0478 19.1048 15.1318 19.1903 15.2803C19.2743 15.4288 19.2743 16.1263 18.9848 16.9453Z"
                            fill="#00A85A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2178_7860">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-[250%]" />
                  <span className="text_3 relative z-1">Whatsapp Now</span>
                </a>
              )}
            </div>
          </div>
          <div className="lg:w-8/12">
            <div className="w-full bg-[#FFF4DE] p-[20px] sm:p-[35px] lg:p-[40px_45px_45px_50px] xl:p-[45px_55px_60px_70px] 2xl:p-[50px_60px_80px_70px] 3xl:p-[65px_75px_100px_85px] lg:max-w-[90%] ml-auto">
              <ConsultationForm
                inline={true}
                variant="expert"
                source="Condition Page"
                conditionName={data?.title}
                conditionSlug={data?.slug}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
