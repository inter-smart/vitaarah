import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function PackagesDurations({ data, packageDetail }) {
  return (
    <section
      id="PackagesDurations"
      className="w-full block py-[15px_15px] sm:py-[15px_20px] lg:py-[15px_24px] xl:py-[19px_29px] 2xl:py-[22px_33px] 3xl:py-[28px_35px]"
    >
      <div className="container">
        {data.title && (
          <h2 className="text_2 text-center text-[#1f1f1f] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
            {data.title}
          </h2>
        )}
        {data.description && (
          <div className="text_3 text-center font-normal text-black mb-[20px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
            {data.description}
          </div>
        )}

        <div className="flex flex-wrap justify-center -mx-2.5 xl:-mx-[14px] 2xl:-mx-[16px] 3xl:-mx-[20px]">
          {packageDetail?.map((item, idx) => {
            return (
              <div
                key={"packageDetail" + idx}
                className="w-full min-w-0 select-none p-2.5 xl:p-[18px_14px] 2xl:p-[20px_16px] 3xl:p-[25px_20px]"
              >
                <div className="flex justify-between mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[18px]">
                  <div className="text_3 font-normal uppercase text-[#a14962]">
                    {idx + 1} {item?.title} - {item?.shortDescription}
                  </div>
                  <div className="flex gap-[15px] xl:gap-[22px] 2xl:gap-[25px] 3xl:gap-[31px]">
                    {["Available", "Not available"].map((item, idx) => {
                      return (
                        <div
                          key={"avalibity" + idx}
                          className="text_3 font-light text-black flex items-center gap-[6px] xl:gap-[7px] 2xl:gap-[9px] 3xl:gap-[10px]"
                        >
                          <span
                            className={cn(
                              "w-[8.8px] 2xl:w-[10px] 3xl:w-[12px] h-[8.8px] 2xl:h-[10px] 3xl:h-[12px] aspect-square border border-[#a14962] rounded-full inline-block",
                              idx === 0 ? "bg-[#a14962]" : "bg-white",
                            )}
                          />
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full bg-linear-to-l from-[#e9cba3] to-[#a14962] transition-all duration-300 p-[18px_14px] xl:p-[22px_18px] 2xl:p-[25px_20px] 3xl:p-[30px_25px]">
                  <div className="flex flex-wrap bg-white rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[9.6px] mb-[3px] 2xl:mb-[4.2px] 3xl:mb-[5.7px] [&>*]:border">
                    <div className="text_3 font-normal text-[#a14962] w-[30%] p-[6px_12px] xl:p-[7px_16px] 2xl:p-[8px_18px] 3xl:p-[10px_22px]">
                      Pathway / Program
                    </div>
                    {item?.availableDurations?.map((item, idx) => {
                      return (
                        <div
                          key={"availableDurations" + idx}
                          className="text_3 font-normal text-[#a14962] flex-1 p-[6px_12px] xl:p-[7px_16px] 2xl:p-[8px_18px] 3xl:p-[10px_22px]"
                        >
                          {item?.label}
                        </div>
                      );
                    })}
                  </div>
                  {item?.includedTreatments?.map((includedTreatment, idx) => {
                    return (
                      <div
                        key={"includedTreatment" + idx}
                        className="flex flex-wrap bg-white rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[9.6px] mb-[3px] 2xl:mb-[4.2px] 3xl:mb-[5.7px] [&>*]:border"
                      >
                        <div className="text_3 font-normal text-[#a14962] w-[30%] p-[6px_12px] xl:p-[7px_16px] 2xl:p-[8px_18px] 3xl:p-[10px_22px]">
                          {includedTreatment?.label}
                        </div>
                        {includedTreatment?.availabilityMatrix?.map(
                          (availabilityMatrixStatus, idx) => {
                            return (
                              <div
                                key={"availabilityMatrixStatus" + idx}
                                className="flex-1"
                              >
                                <span
                                  className={cn(
                                    "w-[8.8px] 2xl:w-[10px] 3xl:w-[12px] h-[8.8px] 2xl:h-[10px] 3xl:h-[12px] aspect-square border border-[#a14962] rounded-full inline-block mx-auto",
                                    availabilityMatrixStatus?.availabile
                                      ? "bg-[#a14962]"
                                      : "bg-white",
                                  )}
                                />
                              </div>
                            );
                          },
                        )}
                        <div
                          key={"availableDurations" + idx}
                          className="text_3 font-normal text-[#a14962] flex-1 p-[6px_12px] xl:p-[7px_16px] 2xl:p-[8px_18px] 3xl:p-[10px_22px]"
                        >
                          {item?.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
