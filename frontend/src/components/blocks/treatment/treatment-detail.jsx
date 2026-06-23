

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";
import Link from "next/link";
export default function TreatmentDetail({ data }) {
  return (
    <section className='py-[70px_160px]'>
      <div className="container">
        <div className="w-full text-center m-auto lg:max-w-[450px] xl:max-w-[580px] 2xl:max-w-[630px] 3xl:max-w-[790px] mb-[40px] xl:mb-[50px] 2xl:mb-[55px] 3xl:mb-[72px]">
          <div className="heading_1 mb-[0px] ">{data?.title}</div>
          <div className="text_3 font-light mb-[25px] md:mb-[40px] lg:mb-[70px] xl:mb-[85px] 2xl:mb-[100px] 3xl:mb-[130px]">
            <BlocksRenderer content={data?.description} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2">
            <div className="w-full h-full overflow-hidden max-w-[95%]">
              <Image src={data?.aboutSection?.image?.url} className="w-full h-full object-cover" width="875" height="620" alt={data?.aboutSection?.image?.alternativeText} />
            </div>
          </div>
          <div className="w-1/2 flex items-center ">
            <div className="w-full">
              <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]">{data?.aboutSection?.title}</div>
              <div className="text_3 font-light [&>_p]:mb-[20px] last:[&>p]:mb-0">
                <BlocksRenderer content={data?.aboutSection?.description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
