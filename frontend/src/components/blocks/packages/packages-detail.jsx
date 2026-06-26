import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export default function PackagesDetail({ data, availableDurations }) {
  const sections = [
    data?.benefitsTitle
      ? { title: data.benefitsTitle, description: data.benefitsDescription }
      : null,
    data?.includedTreatmentsTitle
      ? {
          title: data.includedTreatmentsTitle,
          description: data.includedTreatmentsDescription,
        }
      : null,
    data?.whoThisForTitle
      ? { title: data.whoThisForTitle, description: data.whoThisForDescription }
      : null,
    data?.packageIncludedTitle
      ? {
          title: data.packageIncludedTitle,
          description: data.packageIncludedDescription,
          availableDurations,
        }
      : null,
  ].filter(Boolean);

  return (
    <section
      id="PackagesStatistics"
      className="w-full bg-white py-[20px] sm:py-[25px] lg:py-[27px] xl:py-[33px] 2xl:py-[38px] 3xl:py-[46px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-1/2 absolute -z-1 top-[4%] right-0"
      />
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 top-[42%] left-0 -translate-x-1/2"
      />
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
        {availableDurations && (
          <div className="mb-[20px] sm:mb-[34px] xl:mb-[42px] 2xl:mb-[47px] 3xl:mb-[57px]">
            <AvailableDurationsList availableDurations={availableDurations} />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-[15px] sm:gap-[20px] lg:gap-[49.9px] xl:gap-[61.6px] 2xl:gap-[70px] 3xl:gap-[84.7px] mb-[20px] sm:mb-[40px] lg:mb-[61px] xl:mb-[75px] 2xl:mb-[85px] 3xl:mb-[104px]">
          <div className="w-[268px] sm:w-[268px] lg:w-[458px] xl:w-[565.3px] 2xl:w-[640.9px] 3xl:w-[777.5px] mx-auto">
            <div className="w-full aspect-[777/406] overflow-hidden">
              <Image
                src={data?.introductionImage?.url}
                alt={data?.introductionImage?.alternativeText || "home about 1"}
                width={777}
                height={406}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
          <div className="flex-auto sm:flex-1">
            {data.introductionTitle && (
              <div className="text-[14px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-normal font-helvetica text-center sm:text-start text-[#a14962] mb-[2px] xl:mb-[4px] 2xl:mb-[6px] 3xl:mb-[10px]">
                {data.introductionTitle}
              </div>
            )}
            {data.introductionDescription && (
              <div className="text_3 font-normal text-center sm:text-start text-black xl:max-w-[90%]">
                <BlocksRenderer content={data.introductionDescription} />
              </div>
            )}
          </div>
        </div>

        {sections.length > 0 && (
          <div className={cn("grid grid-cols-1 sm:grid-cols-2")}>
            {sections.map((section, idx) => (
              <div key={"sections" + idx}>
                <div
                  className={cn(
                    "w-full h-full p-[15px_20px] sm:p-[20px_25px] lg:p-[30px_36px] xl:p-[37px_44px] 2xl:p-[42px_50px] 3xl:p-[51px_61px] border-[#c3c3c3]",
                    idx === 0 && "border",
                    idx === 1 && "border-y border-r max-sm:border-t-0 max-sm:border-l",
                    idx === 2 && "border-x border-b",
                    idx === 3 && "border-b border-r max-sm:border-l",
                  )}
                >
                  {section?.title && (
                    <div className="text-[14px] lg:text-[19.8px] xl:text-[24.5px] 2xl:text-[27.8px] 3xl:text-[33.7px] leading-normal font-normal font-helvetica text-[#a14962] mb-[2px] xl:mb-[4px] 2xl:mb-[6px] 3xl:mb-[10px]">
                      {section?.title}
                    </div>
                  )}
                  {section?.description && (
                    <div className="text_3 font-normal text-black xl:max-w-[90%] [&_ul>li]:pl-[20px] xl:[&_ul>li]:pl-[30px] [&_ul>li]:relative [&_ul>li]:before:absolute [&_ul>li]:before:top-1/2 [&_ul>li]:before:left-0 [&_ul>li]:before:-translate-y-1/2 [&_ul>li]:before:size-[10px] xl:[&_ul>li]:before:size-[12px] [&_ul>li]:before:bg-[url('/images/includedTreatments-icon.svg')] [&_ul>li]:before:bg-no-repeat [&_ul>li]:before:bg-contain [&_ul>li]:before:bg-center">
                      <BlocksRenderer content={section?.description} />
                    </div>
                  )}
                  {section?.availableDurations && (
                    <div className="flex mt-[10px] sm:mt-[15px] xl:mt-[20px] 2xl:mt-[25px] 3xl:mt-[30px]">
                      <AvailableDurationsList
                        availableDurations={section?.availableDurations}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function AvailableDurationsList({ availableDurations }) {
  return (
    <div className="flex flex-wrap justify-center gap-[4px] sm:gap-[6px] xl:gap-[7.6px] 2xl:gap-[8.6px] 3xl:gap-[10.5px]">
      {availableDurations?.map((availableDuration, idx) => (
        <div
          key={"AvailableDurationsList" + idx}
          className="text-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] leading-tight font-helvetica text-black p-[4px_10px] xl:p-[6px_12px] 2xl:p-[8px_14px] 3xl:p-[10px_16px] bg-[#E6C6A0]/20 rounded-full backdrop-blur-lg shadow-[-1px_-1px_0px_rgba(255,255,255,0.4)] inset-shadow-[-1px_-1px_0px_0px_rgba(255,255,255,0.4)] transition-all duration-300 group-hover/packages:bg-[#E6C6A0]/20 group-hover/packages:text-white"
        >
          {availableDuration?.label}
        </div>
      ))}
    </div>
  );
}
