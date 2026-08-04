import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function InnerHero({ data }) {
  const isVideo = data?.hero_media?.mime?.includes("video");
  console.log(data);
  

  return (
    <section className="w-full block relative">
      <div className="container max-sm:px-0">
        <div className="relative w-full h-[250px] md:h-[285px] xl:h-[350px] 2xl:h-[400px] 3xl:h-[500px] w-full flex items-end overflow-hidden px-[25px] py-5 xl:py-[30px]">
          {/* Media */}
          {isVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              poster="/images/placeholder.jpg"
            >
              <source
                src={getStrapiMediaUrl(data?.hero_media?.url)}
                type={data?.hero_media?.mime}
              />
            </video>
          ) : (
            <Image
              src={
                getStrapiMediaUrl(data?.hero_media?.url) ||
                "/images/placeholder.jpg"
              }
              alt={data?.hero_media?.alternativeText || data?.title || "Image"}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          )}
          {/* Content */}
          <div className="relative z-1 w-auto max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[560px] 3xl:max-w-[680px] h-auto backdrop-blur-2xl ml-auto bg-white/10 border border-white/80 p-[10px_15px] sm:p-[15px_20px] xl:p-[25px_20px] 2xl:p-[30px_32px] 3xl:p-[35px_35px_32px_40px] flex flex-col gap-y-1 xl:gap-y-2.5">
            {data?.title && (
              <h1 className="text-[22px] sm:text-[28px] lg:text-[42px] xl:text-[54px] 2xl:text-[62px] 3xl:text-[76px] leading-[1] text-white font-normal font-things">
                {data?.title}
              </h1>
            )}
            {data?.description && (
              <p className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-tight font-helvetica-light text-white">
                {data?.description}
              </p>
            )}
            {data?.primary_button?.label && (
              <div>
                <Link
                  href={`${data?.primary_button?.url || "#"}`}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3] text-white font-medium inline-flex items-center justify-center px-[8px] min-w-[110px] xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[205px] h-[26px] xl:h-[30px] 2xl:h-[37px] 3xl:h-[45px] mt-1.5 xl:mt-2.5 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r  from-transparent  via-white/30 to-transparent skew-x-12  transition-transform  duration-700 group-hover:translate-x-[250%]" />
                  <span className="text-[10px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] relative z-10">
                    {data?.primary_button?.label}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
