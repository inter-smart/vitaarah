import React from 'react'
import Image from "next/image";
export default function ConditionLifestyle({ data }) {
    return (
        <section className='relative bg-[#FFF9EB] py-[40px] md:py-[50px] lg:py-[70px_90px] xl:py-[88px_110px] 2xl:py-[100px_130px] 3xl:py-[120px_165px]'>
            <div className="container">
                <div className="max-w-[440px] xl:max-w-[540px] 2xl:max-w-[610px] 3xl:max-w-[740px] text-center m-auto mb-[10px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
                    <div className="heading_1 mb-[10px] sm:mb-[0px]">{data?.title}</div>
                    <div className="text_3 font-light">
                        {data.description}
                    </div>
                </div>
                {data?.cards?.map((item, idx) => (
                    <div
                        key={idx}
                        className={`w-full h-full bg-white p-[15px] lg:p-[18px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[32px] flex flex-wrap mb-[20px] lg:mb-[25px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[55px] last:mb-0 ${idx % 2 !== 0 ? "sm:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="w-full sm:w-[220px] md:w-[280px] lg:w-[330px] xl:w-[420px] 2xl:w-[475px] 3xl:w-[595px] max-sm:mb-[15px]">
                            <Image
                                src={item?.image?.url}
                                className="w-full h-full object-cover"
                                width={595}
                                height={340}
                                alt={item?.image?.alternativeText}
                            />
                        </div>
                        {/* Content */}
                        <div
                            className={`w-full sm:w-[calc(100%-220px)] md:w-[calc(100%-280px)] lg:w-[calc(100%-330px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-475px)] 3xl:w-[calc(100%-595px)] flex items-center ${idx % 2 !== 0
                                    ? "sm:pr-[20px] lg:pr-[30px] xl:pr-[40px] 2xl:pr-[50px] 3xl:pr-[60px]"
                                    : "sm:pl-[20px] lg:pl-[30px] xl:pl-[40px] 2xl:pl-[50px] 3xl:pl-[60px]"
                                }`}
                        >
                            <div className="w-full">
                                <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]">
                                    {item?.title}
                                </div>
                                <ul>
                                    {item?.content?.children?.map((contentItem, id) => (
                                        <li
                                            key={id}
                                            className="text_3 font-light relative flex items-center gap-[10px] before:content-[''] before:p-[2px] before:2xl:p-[3px] before:block before:w-[2px] before:h-[2px] before:bg-black before:rounded-full"
                                        >
                                            {contentItem?.children?.[0]?.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
