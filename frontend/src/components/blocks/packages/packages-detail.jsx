import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export default function PackagesDetail({ data, availableDurations }) {
  return (
    <section
      id="PackagesStatistics"
      className="w-full bg-white py-[15px] sm:py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23px] 3xl:py-[28px]"
    >
      <div className="container">
        {data.label && (
          <h2 className="heading_1 leading-tight text-center text-[#1f1f1f] mb-[2px] xl:mb-[2px] 2xl:mb-[2px]">
            {data.label}
          </h2>
        )}
        {data.description && (
          <div className="text_3 text-center font-normal text-black mb-[15px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px]">
            {data.description}
          </div>
        )}
        {availableDurations?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-[4px] sm:gap-[6px] xl:gap-[7.6px] 2xl:gap-[8.6px] 3xl:gap-[10.5px] mb-[20px] sm:mb-[34px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px]">
            {availableDurations?.map((availableDuration, idx) => (
              <div
                key={"availableDurations" + idx}
                className="text-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] leading-tight font-helvetica text-black p-[8px_10px] xl:p-[10px_12px] 2xl:p-[12px_14px] 3xl:p-[14px_16px] bg-[#E6C6A0]/20 rounded-full backdrop-blur-lg shadow-[-1px_-1px_0px_rgba(255,255,255,0.4)] inset-shadow-[-1px_-1px_0px_0px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover/packages:bg-[#E6C6A0]/20 group-hover/packages:text-white"
              >
                {availableDuration?.label}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-[15px] sm:gap-[20px] lg:gap-[49.9px] xl:gap-[61.6px] 2xl:gap-[70px] 3xl:gap-[84.7px] mb-[20px] sm:mb-[40px] lg:mb-[61px] xl:mb-[75px] 2xl:mb-[85px] 3xl:mb-[104px]">
          <div className="w-[200px] sm:w-[268px] lg:w-[458px] xl:w-[565.3px] 2xl:w-[640.9px] 3xl:w-[777.5px]">
            <div className="w-full aspect-[777/406] overflow-hidden">
              <Image
                src={data?.introductionImage?.url}
                alt={data?.introductionImage?.alternativeText || "home about 1"}
                width={777}
                height={406}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                unoptimized
              />
            </div>
          </div>
          <div className="flex-1">
            {data.introductionTitle && (
              <div className="text-[14px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-normal font-helvetica text-[#a14962] mb-[2px] xl:mb-[4px] 2xl:mb-[6px] 3xl:mb-[10px]">
                {data.introductionTitle}
              </div>
            )}
            {data.introductionDescription && (
              <div className="text_3 font-normal text-black xl:max-w-[90%]">
                <BlocksRenderer content={data.introductionDescription} />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-[15px] sm:gap-[20px] lg:gap-[49.9px] xl:gap-[61.6px] 2xl:gap-[70px] 3xl:gap-[84.7px]">
          <div className="w-full sm:w-1/2">
            <div className="w-full border border-[#c3c3c3] p-[15px_20px] sm:p-[20px_25px] lg:p-[30px_36px] xl:p-[37px_44px] 2xl:p-[42px_50px] 3xl:p-[51px_61px]">
              {data.benefitsTitle && (
                <div className="text-[14px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-normal font-helvetica text-[#a14962] mb-[2px] xl:mb-[4px] 2xl:mb-[6px] 3xl:mb-[10px]">
                  {data.benefitsTitle}
                </div>
              )}
              {data.benefitsDescription && (
                <div className="text_3 font-normal text-black xl:max-w-[90%]  [&_ul]:pl-[20px] xl:[&_ul]:pl-[30px]">
                  <BlocksRenderer content={data.benefitsDescription} />
                </div>
              )}
              {/* [&_ul>li]:list-image-[url('/images/includedTreatments-icon.svg')] */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
