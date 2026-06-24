import { Fragment } from "react";

export default function PackagesStatistics({ data }) {
  return (
    <section
      id="PackagesStatistics"
      className="w-full bg-white py-[10px] sm:py-[15px] lg:py-[17px] xl:py-[20px] 2xl:py-[23px] 3xl:py-[28px]"
    >
      <div className="container">
        {data.title && (
          <h2 className="heading_1 leading-tight text-center text-[#1f1f1f] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]">
            {data.title}
          </h2>
        )}
        {data.description && (
          <div className="text_3 text-center font-normal text-black mb-[20px] xl:mb-[40px] 2xl:mb-[60px] 3xl:mb-[80px]">
            {data.description}
          </div>
        )}
        {data?.packagesStatistic?.length > 0 && (
          <div className="w-full flex items-center justify-center gap-[20px] sm:gap-[40px] xl:gap-[80px] 2xl:gap-[90px] 3xl:gap-[100px] mt-[20px] xl:mt-[45px] 2xl:mt-[55px] 3xl:mt-[65px]">
            {data?.packagesStatistic.map((stat, index) => (
              <Fragment key={stat.label}>
                <div>
                  <h3 className="text-[18px] sm:text-[26.6px] xl:text-[32.9px] 2xl:text-[37.3px] 3xl:text-[45.2px] leading-normal font-normal font-helvetica text-[#a14962] mb-[2px] 2xl:mb-[4px] 3xl:mb-[6px]">
                    {stat.valueCount}
                    {stat.valueSuffix || ""}
                  </h3>
                  <p className="text_3 leading-tight text-black">
                    {stat.label}
                  </p>
                </div>
                {index < data.packagesStatistic.length - 1 && (
                  <div className="w-[1px] h-[91px] 2xl:h-[110px] 3xl:h-[130px] bg-[#ECE7D7]" />
                )}
              </Fragment>
            ))}
          </div>
        )}
        <hr className="border-black/10" />
      </div>
    </section>
  );
}
