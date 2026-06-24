import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";
import Link from "next/link";

export default function TreatmentAlchemy({ data }) {
    return (
        <section className='relative py-[140px_85px]'>
            <div className="container">
                <div className="flex flex-wrap w-full ">
                    <div className="w-full  lg:w-[330px] xl:w-[400px] 2xl:w-[460px] 3xl:w-[578px]">
                        <div className="w-full h-full">
                            <div className="heading_1 mb-[0px] max-w-[450px]">{data?.title}</div>
                            <div className="text_3 font-light mb-[15px] lg:mb-[20px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px] ">{data?.subtitle}</div>
                            <div className="text_3 font-light  mb-[20px] md:mb-[30px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px]">
                                <BlocksRenderer content={data?.description} />
                            </div>
                            <div className="w-full overflow-hidden group">
                                <Image src={data?.image?.url} className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105" width="578" height="457" alt={data?.image?.alternativeText} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(100%-330px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-460px)] 3xl:w-[calc(100%-578px)] lg:pl-[30px] xl:pl-[40px] 2xl:pl-[60px] 3xl:pl-[80px]">
                        <div className="w-full h-full flex flex-wrap border-t border-r border-[#CFCFCF]" >
                            {data.benefits.map((item, id) => (
                                <div className="w-1/2" key={id}>
                                    <div className="w-full h-full border-[#CFCFCF] border-b border-l p-[12px] md:p-[15px] lg:p-[20px] xl:p-[25px] 2xl:p-[30px] 3xl:p-[40px]">
                                        <div className="w-[35px] xl:w-[45px] 2xl:w-[52px] 3xl:w-[72px] h-[35px] xl:h-[45px] 2xl:h-[52px] 3xl:h-[72px] overflow-hidden flex mb-[15px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[28px]">
                                            <Image src={item?.icon?.url} className="w-full h-full object-contain" width={70} height={70} alt={item?.icon?.alternativeText} />
                                        </div>
                                        <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]">
                                            {item?.title}</div>
                                        <div className="text_3 font-light [&>p:not(:last-child)]:mb-[20px] ">
                                            <BlocksRenderer content={item?.description} />
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
