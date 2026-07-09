import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";

export default function AboutApproach({ data }) {
  return (
    <section className="relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[90px_80px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 flex items-center max-lg:gap-[30px]">
            <div className="w-full lg:max-w-[400px] xl:max-w-[490px] 2xl:max-w-[550px] 3xl:max-w-[670px]">
              <div className="text_2  mb-[20px] lg:max-w-[280px] xl:max-w-[340px] 2xl:max-w-[385px] 3xl:max-w-[470px]">
                {data?.title}
              </div>
              <div className="text_3 font-helvetica-light [&>p]:mb-[15px]">
                <BlocksRenderer content={data.description} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap relative before:absolute before:content-[''] before:top-0 before:h-[20px] before:xl:h-[30px] before:2xl:h-[40px] before:3xl:h-[50px] before:w-full before:bg-white before:left-0 before:z-1 after:absolute after:top after:content-['] after:left-0 after:w-full after:h-full after:bg-transparent after:border after:border-white">
              {(data?.approach_card || data?.approachs || []).map(
                (item, idx) => (
                  <div
                    key={"approach_card" + idx}
                    className={cn(
                      "w-1/2 border border-b-1 border-black/10 border-r-1 block flex-grow-1 relative",
                      idx % 2 === 0
                        ? ""
                        : "pb-0 not-last-of-type:pb-[25px]  not-last-of-type:xl:pb-[35px] not-last-of-type:2xl:pb-[45px] not-last-of-type:3xl:pb-[55px] pl-[25px] sm:pl-[65px] lg:pl-[35px] xl:pl-[45px] 2xl:pl-[55px] 3xl:pl-[65px] pt-[25px] xl:pt-[35px] 2xl:pt-[45px] 3xl:pt-[55px]",
                      idx < 2
                        ? "pb-[25px] xl:pb-[35px] 2xl:pb-[45px] 3xl:pb-[55px] border-b border-black/10 pt-[25px] xl:pt-[35px] 2xl:pt-[45px] 3xl:pt-[55px]  "
                        : "pt-[25px] xl:pt-[35px] 2xl:pt-[45px] 3xl:pt-[55px]",
                    )}
                  >
                    <div className="w-full h-full relative z-20">
                      <div className="h-[27px] xl:h-[33px] 2xl:w-[38px] 3xl:w-[46px] w-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[46px] flex mb-[12px] xl:mb-[15px] 2xl:mb-[18px] 3xl:mb-[22px]">
                        <Image
                          src={getStrapiMediaUrl(item?.icon?.url)}
                          alt={(item?.icon?.alternativeText ||
                            item?.title ||
                            "approach icon") || "Image"}
                          className="w-auto object-contain"
                          width="46"
                          height="46"
                        />
                      </div>
                      <div className="text-[14px] sm:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px] text-[#A14962] mb-[10px] md:mb-[15px]">
                        {item.title}
                      </div>
                      <div className="text_3 max-w-[150px] xl:max-w-[185px] 2xl:max-w-[210px] 3xl:max-w-[255px] font-helvetica-light">
                        {item.short_description || item.shortDescription}
                      </div>
                    </div>

                    {idx === 0 && (
                      <div className="absolute z-10 bottom-[-60px] right-[-60px] w-[120px] h-[120px] bg-white flex items-center justify-center pointer-events-none">
                        <div className="w-[34px] h-[34px] flex items-center justify-center">
                          <Image
                            src="/images/circle.svg"
                            width="40"
                            height="40"
                            alt="circle"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
