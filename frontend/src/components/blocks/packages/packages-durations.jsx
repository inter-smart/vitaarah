import { cn } from "@/lib/utils";

export default function PackagesDurations({ data, packageDetail }) {
  return (
    <section
      id="PackagesDurations"
      className="w-full block py-[15px_30px] sm:py-[15px_60px] lg:py-[15px_78px] xl:py-[19px_97px] 2xl:py-[22px_110px] 3xl:py-[28px_133px]"
    >
      <div className="container">
        {data.title && (
          <h2 className="text_2 text-center text-[#1f1f1f] mb-[2px] xl:mb-[4px] 2xl:mb-[6px]">
            {data.title}
          </h2>
        )}
        {data.description && (
          <div className="text_3 text-center font-normal text-black mb-[20px] xl:mb-[45px] 2xl:mb-[50px] 3xl:mb-[62px]">
            {data.description}
          </div>
        )}

        <div className="flex flex-wrap justify-center -mx-4 sm:-mx-2.5 xl:-mx-[14px] 2xl:-mx-[16px] 3xl:-mx-[20px]">
          {packageDetail?.map((item, idx) => {
            return (
              <div
                key={"packageDetail" + idx}
                className="w-full min-w-0 select-none p-4 sm:p-2.5 xl:p-[18px_14px] 2xl:p-[20px_16px] 3xl:p-[25px_20px]"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-1.5 mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[18px]">
                  <div className="text_3 font-normal uppercase text-[#a14962]">
                    {idx + 1} {item?.title} - {item?.shortDescription}
                  </div>
                  <div className="flex gap-[15px] xl:gap-[22px] 2xl:gap-[25px] 3xl:gap-[31px] ml-auto">
                    {["Available", "Not available"].map((item, idx) => {
                      return (
                        <div
                          key={"avalibity" + idx}
                          className="text_3 font-normal text-black max-sm:text-[10px] flex items-center gap-[6px] xl:gap-[7px] 2xl:gap-[9px] 3xl:gap-[10px] font-helvetica-light"
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
                <div className="w-full bg-linear-to-l from-[#e9cba3] to-[#a14962] transition-all duration-300 p-[10px_5px] sm:p-[18px_14px] xl:p-[22px_18px] 2xl:p-[25px_20px] 3xl:p-[30px_25px]">
                  <div className="flex flex-wrap bg-white rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[9.6px] px-[12px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px] mb-[3px] 2xl:mb-[4.2px] 3xl:mb-[5.7px]">
                    <div className="text_3 leading-tight font-normal text-[#a14962] w-[30%] py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[10px]">
                      Pathway / Program
                    </div>
                    {item?.availableDurations?.map((item, idx) => {
                      return (
                        <div
                          key={"availableDurations" + idx}
                          className="text_3 leading-tight font-normal text-center text-[#a14962] flex-1 py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[10px]"
                        >
                          {item?.label}
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full bg-[#fff9eb] rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[9.6px] px-[12px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[22px]">
                    {item?.includedTreatments?.map((includedTreatment, idx) => {
                      return (
                        <div
                          key={"includedTreatment" + idx}
                          className={cn("flex flex-wrap items-center")}
                        >
                          <div className="text_3 leading-tight font-normal text-[#a14962] w-[30%] py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[10px]">
                            {includedTreatment?.label}
                          </div>
                          {includedTreatment?.availabilityMatrix?.map(
                            (availabilityMatrixStatus, idx) => {
                              return (
                                <div
                                  key={"availabilityMatrixStatus" + idx}
                                  className="flex-1 flex py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[10px]"
                                >
                                  <span
                                    className={cn(
                                      "w-[8.8px] 2xl:w-[10px] 3xl:w-[12px] h-[8.8px] 2xl:h-[10px] 3xl:h-[12px] aspect-square border border-[#a14962] rounded-full inline-block mx-auto",
                                      availabilityMatrixStatus?.available ===
                                        true
                                        ? "bg-[#a14962]"
                                        : "bg-white",
                                    )}
                                  />
                                </div>
                              );
                            },
                          )}
                          <hr
                            className={cn(
                              "w-full",
                              idx !== item?.includedTreatments?.length - 1
                                ? "border-black/10"
                                : "border-[#fff9eb]",
                            )}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
