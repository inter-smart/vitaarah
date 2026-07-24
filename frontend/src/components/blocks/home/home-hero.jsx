import { Button } from "@/components/ui/button";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero({ data }) {
  const isVideo = data?.hero_media?.mime?.includes("video");
  return (
    <section className="w-full pt-[25px] xl:pt-[29px] 2xl:pt-[33px] 3xl:pt-[40px]">
      <div className="container mb-[30px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[55]">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-[45%]">
            {data.small_heading && (
              <div className="text_1 font-normal tracking-wide text-[#a14962] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
                {data.small_heading}
              </div>
            )}
            {data.title && (
              <h1 className="text_2 tracking-wide mb-[10px] lg:mb-0">
                {data.title}
              </h1>
            )}
          </div>
          <div className="w-full sm:w-[55%]">
            <div className="w-full max-w-full sm:max-w-[340px] xl:max-w-[490px] 2xl:max-w-[590px] 3xl:max-w-[710px] ml-auto pr-[40px] xl:pr-[65px] 2xl:pr-[78px] 3xl:pr-[90px] relative z-0">
              <a
                href="#About"
                className="group w-[30px] min-[376px]:w-[50px] sm:w-[60px] xl:w-[76px] 2xl:w-[90px] 3xl:w-[120px] rounded-full aspect-square p-[4px] 2xl:p-[6px] bg-linear-to-r from-[#a14962] to-[#f8c63d] absolute z-0 bottom-0 min-[376px]:bottom-[15%] right-0 translate-y-1/2 hover:scale-110 transition-transform duration-500"
              >
                <span className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/icon-arrow.svg"
                    alt="icon arrow"
                    width={16}
                    height={7}
                    className="w-1 min-[376px]:w-2 2xl:w-2.5 3xl:w-3 block group-hover:translate-y-1 transition-transform duration-300"
                  />
                </span>
              </a>
              {data.description && (
                <div className="text_3 font-normal text-[#1f1f1f] sm:mt-[30px] xl:mt-[40px] 2xl:mt-[50px] 3xl:mt-[60px] mb-[20px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]">
                  {Array.isArray(data.description) ? (
                    <BlocksRenderer content={data.description} />
                  ) : (
                    <p>{data.description}</p>
                  )}
                </div>
              )}
              {(data.primary_button || data.secondary_button) && (
                <div className="flex items-center gap-[4px] xl:gap-[6px] 2xl:gap-[8px]">
                  {data.primary_button && (
                    <Button className="gap-2 xl:gap-2" asChild>
                      <Link href={data.primary_button.url}>
                        {data?.primary_button?.icon && (
                          <span className="w-[11px] 2xl:w-[12px] 3xl:w-[14px]">
                            <Image
                              src={getStrapiMediaUrl(data?.primary_button?.icon?.url)}
                              alt={
                                data?.primary_button?.icon?.alternativeText ||
                                "button icon"
                              }
                              width={15}
                              height={15}
                              className="w-full h-full"
                            />
                          </span>
                        )}
                        <span>{data.primary_button.label}</span>
                      </Link>
                    </Button>
                  )}
                  {data.secondary_button && (
                    <Button className="gap-2 xl:gap-2" variant="outline" asChild>
                      <Link href={data.secondary_button.url}>
                        {data?.secondary_button?.icon && (
                          <span className="w-[11px] 2xl:w-[12px] 3xl:w-[14px]">
                            <Image
                              src={getStrapiMediaUrl(data?.secondary_button?.icon?.url)}
                              alt={
                                data?.secondary_button?.icon?.alternativeText ||
                                "button icon"
                              }
                              width={15}
                              height={15}
                              className="w-full h-full"
                            />
                          </span>
                        )}
                        <span>{data.secondary_button.label}</span>
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-[1920px] h-auto mx-auto aspect-[1024/420] object-cover"
        >
          <source
            src={getStrapiMediaUrl(data?.hero_media?.url)}
            type={data?.hero_media?.mime || "video/mp4"}
          />
        </video>
      ) : (
        <Image
          src={
            getStrapiMediaUrl(data?.hero_media?.url) ||
            "/images/placeholder.jpg"
          }
          alt={data?.hero_media?.alternativeText || "hero media"}
          fill
          sizes="100vw"
          priority
          className="w-full max-w-[1920px] h-auto mx-auto aspect-[1024/420] object-cover"
        />
      )}
    </section>
  );
}
