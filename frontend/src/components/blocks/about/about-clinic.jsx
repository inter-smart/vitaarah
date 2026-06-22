
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AboutClinic({ data }) {
    const isVideo = data?.heroMedia?.mime?.includes("video");
    return (
        <section className="relative bg-[#FFF9EB] py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[110px]">
            <div className="container">
                <div className="flex flex-wrap max-md:gap-[30px]">
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-full overflow-hidden relative">
                            {/* Media */}
                            {isVideo ? (
                                <video autoPlay muted loop playsInline className="h-full w-full object-cover"
                                >
                                    <source
                                        src={data?.featuredImage?.url}
                                        type={data?.featuredImage?.mime}
                                    />
                                </video>
                            ) : (
                                <Image src={data?.featuredImage?.url} alt={data?.featuredImage?.alternativeText || data?.title} width="580" height="440" className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full md:pl-[30px] xl:pl-[70px] 2xl:pl-[80px] 3xl:pl-[95px]">
                            <div className="heading_1 mb-[10px] sm:mb-[20px] !leading-[1.1]">{data?.title}</div>
                            <div className="text_3 font-light">
                                <BlocksRenderer content={data?.description?.filter(
                                    (item) => item.type === "paragraph"
                                )} />
                            </div>
                            <ul className="mt-[20px]  ">
                                {data?.description
                                    ?.find((item) => item.type === "list")
                                    ?.children?.map((item, id) => (
                                        <li key={id} className="text_3 text-[#A14962] font-light not-last-of-type:mb-[15px] not-last-of-type:lg:mb-[20px] not-last-of-type:xl:mb-[25px] not-last-of-type:2xl:mb-[30px] not-last-of-type:3xl:mb-[35px] relative flex items-start gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px]
                                        before:relative before:content-[''] before:block before:w-[10px] before:xl:w-[12px] before:h-[10px] before:xl:h-[12px] before:top-[4px] before:xl:top-[6px] before:bg-[url('/images/dotList.svg')] before:bg-cover before:bg-no-repeat before:p-[5px]">
                                            {item.children?.[0]?.text}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
