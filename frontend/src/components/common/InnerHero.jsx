import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function InnerHero({ data }) {
    const isVideo = data?.heroMedia?.mime?.includes("video");

    return (
        <section className="relative py-[20px]">
            <div className="container">
                <div className="relative w-full h-[250px] md:h-[285px] xl:h-[350px] 2xl:h-[400px] 3xl:h-[500px] w-full flex items-end overflow-hidden px-[25px] py-[30px]">
                    {/* Media */}
                    {isVideo ? (
                        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover"
                        >
                            <source
                                src={data?.heroMedia?.url}
                                type={data?.heroMedia?.mime}
                            />
                        </video>
                    ) : (
                        <Image src={data?.heroMedia?.url} alt={data?.heroMedia?.alternativeText || data?.title} fill priority className="object-cover"
                        />
                    )}
                    {/* Content */}
                    <div className="relative z-10 w-full max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[560px] 3xl:max-w-[680px] h-auto backdrop-blur-2xl ml-auto bg-white/10 border border-white/80 p-[20px_22px] xl:p-[25px_20px] 2xl:p-[30px_32px] 3xl:p-[35px_35px_32px_40px]">
                        <h1 className="mb-[10px] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[77px] leading-[1] text-white font-normal font-things">
                            {data?.title}
                        </h1>
                        <p className="text-[10px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] text-white ">
                            {data?.description}
                        </p>
                        {data?.button && (
                            <Link
                                href={`/${data.button.slug}`}
                                className="group relative overflow-hidden  bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3]
                                text-white font-medium inline-flex items-center justify-center 
                               px-[8px] min-w-[120px] xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[205px] h-[32px] 2xl:h-[37px]
                                3xl:h-[45px] mt-[15px] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] 
                                hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r  from-transparent  via-white/30 to-transparent
                                        skew-x-12  transition-transform  duration-700   group-hover:translate-x-[250%] " />
                                <span className="text-[10px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] relative z-10">
                                    {data.button.label}
                                </span>
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}