import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getStrapiMediaUrl } from "@/lib/strapi";
import ConsultationForm from "@/components/form/consultation-form";

export default function SpecialityPathway({ data }) {
  const { specialities_listing_section, cta_specialities_section } = data;
  console.log("specialities_listing_section", specialities_listing_section);
  return (
    <section className="w-full block overflow-hidden relative py-[30px_45px] lg:py-[30px_60px] xl:py-[45px_80px] 2xl:py-[55px_120px] 3xl:py-[70px_150px]">
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-1/3 absolute -z-1 top-[10%] right-0 pointer-events-none"
      />
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 bottom-[30%] left-[1%] pointer-events-none"
      />
      <div className="container">
        <div className="w-full text-center m-auto lg:max-w-[468px] xl:max-w-[576px] 2xl:max-w-[630px] 3xl:max-w-[790px] mb-[40px] xl:mb-[50px] 2xl:mb-[55px] 3xl:mb-[72px]">
          <div className="heading_1 mb-[0px] ">
            {specialities_listing_section?.title}
          </div>
          <div className="text_3 font-helvetica-light [&>p]:mb-[15px]">
            {specialities_listing_section?.short_description}
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
          {specialities_listing_section?.specialities_item?.map((item, idx) => (
            <div
              key={"specialities_item" + idx}
              className="w-full sm:w-1/2 md:w-1/3 border border-[#C3C3C3]"
            >
              <Link
                href={`/treatments/${item?.treatment?.slug}`}
                className=" relative z-1 w-full h-full block p-[20px] md:p-[20px_15px] xl:p-[30px_25px] 2xl:p-[40px_35px] 3xl:p-[50px_45px] bg-white transition-all hover:bg-[#FFF9EB] flex flex-col justify-between"
              >
                <div>
                {item?.icon?.url && (
                  <div className="w-[45px] xl:w-[55px] 2xl:w-[65px] 3xl:w-[85px] h-[45px] xl:h-[55px] 2xl:h-[65px] 3xl:h-[85px] bg-white rounded-full border border-[#A7546C] overflow-hidden p-[10px] xl:p-[12px] 2xl:p-[15px] 3xl:p-[20px] mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                    <Image
                      src={getStrapiMediaUrl(item.icon.url)}
                      alt={
                        item.icon.alternativeText ||
                        item.treatment?.title ||
                        "Speciality icon" ||
                        "Image"
                      }
                      width={25}
                      height={25}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]">
                  {item?.title}
                </div>
                {item?.short_description && (
                  <p className="text_3 font-helvetica-light mb-[25px] md:mb-[40px] lg:mb-[70px] xl:mb-[85px] 2xl:mb-[100px] 3xl:mb-[130px] max-w-[215px] xl:max-w-[257px] 2xl:max-w-[290px] 3xl:max-w-[372px]">
                    {item?.short_description}
                  </p>
                )}
                </div>
                {item?.treatment?.conditions_treated?.length > 0 && (
                  <div className="w-full">
                    <div className="text_3 font-helvetica-light text-black mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                      {item?.conditions_treated_title}
                    </div>
                    <div className="flex flex-wrap gap-[5px] md:gap-[10px] 2xl:gap-[13px]">
                      {item?.treatment?.conditions_treated?.map(
                        (condition, idx) => (
                          <div
                            key={"condition" + idx}
                            className="text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] bg-[rgba(230,198,160,0.2)] font-helvetica-light flex items-center justify-center rounded-[30px] p-[10px] xl:p-[11px] 2xl:px-[12px] 3xl:px-[15px] h-[30px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[45px]"
                          >
                            {condition?.title}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>

        {cta_specialities_section && (
          <div className="flex flex-wrap justify-between items-center gap-[15px]">
            <div className="text_3 mb-0">
              {cta_specialities_section?.short_description}
            </div>
            <div className="flex items-center gap-[10px]">
              {cta_specialities_section?.botton_label && (
                <ConsultationForm>
                  <div className="group relative overflow-hidden  bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3] text-white font-medium inline-flex items-center justify-center px-[8px] min-w-[120px] xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[205px] h-[32px] 2xl:h-[37px] 3xl:h-[45px] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03]  hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)] cursor-default">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r  from-transparent  via-white/30 to-transparent skew-x-12  transition-transform  duration-700   group-hover:translate-x-[250%] " />
                    <span className="text-[10px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] relative z-10">
                      {cta_specialities_section.botton_label}
                    </span>
                  </div>
                </ConsultationForm>
              )}
              {cta_specialities_section?.whatsapp_number && (
                <a
                  href={`https://wa.me/${cta_specialities_section.whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[32px] 2xl:w-[37px] 3xl:w-[45px] h-[32px] 2xl:h-[37px] 3xl:h-[45px] flex items-center justify-center bg-[#00A85A] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03]  hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
                  aria-label="Contact via WhatsApp"
                >
                  <div className="xl:p-[5px] 2xl:p-[8px] 3xl:p-[10px] flex">
                    <svg
                      className="w-[18px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[24px]"
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
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
