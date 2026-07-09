import { Button } from "@/components/ui/button";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
// -mr-[100px] sm:-mr-[115px] xl:-mr-[130px] 2xl:-mr-[160px]
const ElementStyle =
  "group w-[140px] sm:w-[180px] lg:w-[200px] xl:w-[260px] 2xl:w-[315px] 3xl:w-[370px] -mr-[90px] lg:-mr-[100px] xl:-mr-[130px] 2xl:-mr-[160px] 3xl:-mr-[200px] aspect-square border-[8px] 2xl:border-[10px] border-white bg-linear-to-l from-[#e9cba3] to-[#a14962] rounded-full overflow-hidden relative z-1";

export default function HomeAbout({ data }) {
  console.log("HomeAbout", data);

  return (
    <section
      id="About"
      className="w-full py-[40px] sm:py-[60px] xl:py-[110px] 2xl:py-[130px] 3xl:py-[160px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-1/2 absolute -z-1 top-[10%] right-0"
      />
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 bottom-[5%] left-[1%]"
      />
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[55%] mb-5 lg:mb-0">
            <div className="flex relative z-0">
              <a
                href="#About"
                className="w-[40px] lg:w-[50px] xl:w-[60px] 2xl:w-[74px] 3xl:w-[90px] rounded-full aspect-square p-[4px] lg:p-[6px] 2xl:p-[8px] bg-linear-to-t from-[#a14962] to-[#e9cba3] absolute z-2 top-[5%] left-[200px] sm:left-[310px] lg:left-[69%] xl:left-[73%] 2xl:left-[76%] 3xl:left-[71%]"
              >
                <span className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/images/icon-arrow-2.svg"
                    alt="icon arrow"
                    width={16}
                    height={7}
                    className="w-3 2xl:w-4 3xl:w-4.5 block"
                  />
                </span>
              </a>
              <div className={ElementStyle} />
              {(() => {
                const secondaryImgUrl =
                  data?.secondary_image?.url || data?.about_media?.[1]?.url;
                const secondaryImgAlt =
                  data?.secondary_image?.alternativeText ||
                  data?.about_media?.[1]?.alternativeText ||
                  "home about 1";
                if (!secondaryImgUrl) return null;
                return (
                  <div className={ElementStyle}>
                    <Image
                      src={getStrapiMediaUrl(secondaryImgUrl)}
                      alt={secondaryImgAlt || "Image"}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      unoptimized
                    />
                  </div>
                );
              })()}
              {(() => {
                const mainImgUrl =
                  data?.main_image?.url || data?.about_media?.[0]?.url;
                const mainImgAlt =
                  data?.main_image?.alternativeText ||
                  data?.about_media?.[0]?.alternativeText ||
                  "home about 2";
                if (!mainImgUrl) return null;
                return (
                  <div className={ElementStyle}>
                    <Image
                      src={getStrapiMediaUrl(mainImgUrl)}
                      alt={mainImgAlt || "Image"}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      unoptimized
                    />
                  </div>
                );
              })()}
            </div>

            {data?.about_statistic?.length > 0 && (
              <div className="lg:max-w-[403px] xl:max-w-[497px] 2xl:max-w-[563px] 3xl:max-w-[685px] flex items-center justify-between gap-[10px] sm:gap-[15px] xl:gap-[20px] 2xl:gap-[25px] mt-[20px] xl:mt-[45px] 2xl:mt-[55px] 3xl:mt-[65px]">
                {data?.about_statistic.map((stat, index) => (
                  <Fragment key={stat.label}>
                    <div>
                      <h3 className="text-[18px] sm:text-[26.6px] xl:text-[32.9px] 2xl:text-[37.3px] 3xl:text-[45.2px] leading-normal font-normal font-helvetica text-[#a14962] mb-[2px] 2xl:mb-[4px] 3xl:mb-[6px]">
                        {stat.value_count}
                        {stat.value_suffix || ""}
                      </h3>
                      <p className="text_3 !leading-tight text-black xl:max-w-[80%]">
                        {stat.label}
                      </p>
                    </div>
                    {index < data.about_statistic.length - 1 && (
                      <div className="w-[1px] h-[91px] 2xl:h-[110px] 3xl:h-[130px] bg-[#ECE7D7]" />
                    )}
                  </Fragment>
                ))}
              </div>
            )}
          </div>
          <div className="w-full lg:w-[45%]">
            {data.title && (
              <h2 className="text_2 mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                {data.title}
              </h2>
            )}
            {data?.description && (
              <div className="text_3 font-normal text-black mb-[30px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px]">
                {Array.isArray(data.description) ? (
                  <BlocksRenderer content={data.description} />
                ) : (
                  <p>{data.description}</p>
                )}
              </div>
            )}
            {data?.button && (
              <Button asChild>
                <Link href={data?.button?.url}>{data?.button?.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
