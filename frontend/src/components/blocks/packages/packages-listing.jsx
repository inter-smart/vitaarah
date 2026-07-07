import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function PackagesListing({ data }) {
  return (
    <>
      <style>{`
      .group\\/includedTreatments:hover .included-treatment-label {
        color: #a14962 !important;
      }
    `}</style>
      <section
        id="PackagesListing"
        className="w-full block py-[15px_15px] sm:py-[15px_20px] lg:py-[15px_24px] xl:py-[19px_29px] 2xl:py-[22px_33px] 3xl:py-[28px_35px] overflow-hidden relative z-0"
      >
        <Image
          src="/images/home-about-elmt-2.svg"
          alt="home about element 2"
          width={60}
          height={60}
          className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 bottom-[8%] left-0 -translate-x-1/2"
        />
        <div className="container">
          {data?.title && (
            <h2 className="text_2 text-center text-[#1f1f1f] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
              {data.title}
            </h2>
          )}

          <div className="flex flex-wrap justify-center -mx-2.5 xl:-mx-[14px] 2xl:-mx-[16px] 3xl:-mx-[20px]">
            {data?.packages?.map((item, idx) => {
              
              return (
                <div
                  key={"packages" + idx}
                  className={cn(
                    "w-full sm:w-1/2 lg:w-1/2 min-w-0 select-none p-2.5 xl:p-[18px_14px] 2xl:p-[20px_16px] 3xl:p-[25px_20px]",
                  )}
                >
                  <div
                    className={cn(
                      "group/packages w-full h-full p-[20px_15px] sm:p-[40px_17px] xl:p-[50px_25px] 2xl:p-[57px_28px] 3xl:p-[69px_34.6px] flex flex-wrap gap-[10px] sm:gap-[15px] lg:gap-[24px] xl:gap-[29.4px] 2xl:gap-[33.3px] 3xl:p-[40.4px] border border-[#fff9eb] bg-linear-to-l from-[#fff9eb] to-[#fff9eb] transition-all duration-300 hover:from-[#e9cba3] hover:to-[#a14962]",
                    )}
                  >
                    <div className="w-[90px] sm:w-[100px] lg:w-[129px] xl:w-[160px] 2xl:w-[180.3px] 3xl:w-[218.7px] aspect-[218/436] rounded-[482px] xl:rounded-[482px] 2xl:rounded-[180.3px] 3xl:rounded-[482px] bg-black relative z-0 overflow-hidden">
                      <Image
                        src={getStrapiMediaUrl(item?.featured_image)}
                        alt={
                          item?.featured_image?.alternativeText ||
                          item?.title ||
                          "Package image"
                        }
                        width={336}
                        height={262}
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      {item?.title && (
                        <div className="heading_1 leading-tight text-[#1f1f1f] group-hover/packages:text-white mb-[1px] 3xl:mb-[2px] transition-colors duration-300">
                          {item?.title}
                        </div>
                      )}
                      {item?.short_description && (
                        <div className="text_3 font-normal text-black group-hover/packages:text-white mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] transition-colors duration-300">
                          {item?.short_description}
                        </div>
                      )}
                      {item?.programs?.length > 0 && (
                        <>
                          <div className="text_3 font-normal tracking-[2px] xl:tracking-[4px] text-black group-hover/packages:text-white mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] transition-colors duration-300">
                            PROGRAMSINCLUDED
                          </div>
                          <div className="xl:max-w-[282px] 2xl:max-w-[320px] 3xl:max-w-[388px] flex flex-col mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                            {item?.programs?.map((program, pIdx) => (
                              <Link
                                key={"program" + pIdx}
                                href={`/packages/${program?.slug}`}
                                className="group/includedTreatments flex gap-x-[8px] lg:gap-x-[11px] 2xl:gap-x-[12px] 3xl:gap-x-[15px] p-[4px_4px] sm:p-[6px_5px] xl:p-[7px_8.5px] 2xl:p-[8px_9.5px] 3xl:p-[10px_11.5px] hover:bg-[#d9d9d9]/20 transition-all duration-300"
                              >
                                <Image
                                  src="/images/includedTreatments-icon.svg"
                                  alt="includedTreatments-icon"
                                  width={12}
                                  height={12}
                                  className="w-[8px] 2xl:w-[10px] 3xl:w-[12px] object-contain"
                                />
                                <span className="included-treatment-label text_3 leading-tight text-black group-hover/packages:text-white flex-1 transition-colors duration-300">
                                  {program?.title}
                                </span>
                                <Image
                                  src="/images/includedTreatments-icon2.svg"
                                  alt="includedTreatments-icon2"
                                  width={24}
                                  height={12}
                                  className="w-[8px] 2xl:w-[10px] 3xl:w-[12px] object-contain transition-opacity duration-300 opacity-0 group-hover/includedTreatments:opacity-100"
                                />
                              </Link>
                            ))}
                          </div>
                        </>
                      )}

                      {data?.durations?.length > 0 && (
                        <div className="flex flex-wrap gap-[4px] sm:gap-[6px] xl:gap-[7.6px] 2xl:gap-[8.6px] 3xl:gap-[10.5px]">
                          {data?.durations?.map((availableDuration, dIdx) => (
                            <div
                              key={"availableDurations" + dIdx}
                              className="text-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] leading-tight font-helvetica text-black p-[8px_10px] xl:p-[10px_12px] 2xl:p-[12px_14px] 3xl:p-[14px_16px] bg-[#E6C6A0]/20 rounded-full backdrop-blur-lg shadow-[-1px_-1px_0px_rgba(255,255,255,0.4)] inset-shadow-[-1px_-1px_0px_0px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover/packages:bg-[#E6C6A0]/20 group-hover/packages:text-white"
                            >
                              {availableDuration?.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
