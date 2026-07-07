import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function AboutClinic({ data }) {
  return (
    <section className="w-full block relative bg-[#FFF9EB] py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[110px]">
      <div className="container">
        <div className="flex flex-wrap max-md:gap-[30px]">
          <div className="w-full md:w-1/2">
            <div className="w-full h-full overflow-hidden relative">
              <Image
                src={getStrapiMediaUrl(data?.featured_image?.url)}
                alt={
                  data?.featured_image?.alternativeText ||
                  data?.title ||
                  "clinic"
                }
                className="w-full h-full object-cover"
                width="830"
                height="630"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full md:pl-[30px] xl:pl-[70px] 2xl:pl-[80px] 3xl:pl-[95px]">
              <div className="heading_1 mb-[10px] sm:mb-[20px] !leading-[1.1]">
                {data?.title}
              </div>
              {data?.description && (
                <div className="text_3 font-normal text-black xl:max-w-[90%] [&_ul>li]:pl-[20px] xl:[&_ul>li]:pl-[30px] [&_ul>li]:relative [&_ul>li]:before:absolute [&_ul>li]:before:top-1/2 [&_ul>li]:before:left-0 [&_ul>li]:before:-translate-y-1/2 [&_ul>li]:before:size-[10px] xl:[&_ul>li]:before:size-[12px] [&_ul>li]:before:bg-[url('/images/includedTreatments-icon.svg')] [&_ul>li]:before:bg-no-repeat [&_ul>li]:before:bg-contain [&_ul>li]:before:bg-center *:not-last-of-type:mb-[10px]">
                  <BlocksRenderer content={data?.description} />
                </div>
              )}
              {/* <div className="text_3 font-light">
                <BlocksRenderer
                  content={data?.description?.filter(
                    (item) => item.type === "paragraph",
                  )}
                />
              </div>
              <ul className="mt-[20px]  ">
                {data?.description
                  ?.find((item) => item.type === "list")
                  ?.children?.map((item, id) => (
                    <li
                      key={id}
                      className="text_3 text-[#A14962] font-light not-last-of-type:mb-[15px] not-last-of-type:lg:mb-[20px] not-last-of-type:xl:mb-[25px] not-last-of-type:2xl:mb-[30px] not-last-of-type:3xl:mb-[35px] relative flex items-start gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px] before:relative before:content-[''] before:block before:w-[10px] before:xl:w-[12px] before:h-[10px] before:xl:h-[12px] before:top-[4px] before:xl:top-[6px] before:bg-[url('/images/dotList.svg')] before:bg-cover before:bg-no-repeat before:p-[5px]"
                    >
                      {item.children?.[0]?.text}
                    </li>
                  ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
