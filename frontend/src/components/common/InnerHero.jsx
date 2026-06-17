import Image from "next/image";
import React from "react";

export default function InnerHero({ data }) {
    const isVideo = data?.heroMedia?.mime?.includes("video");

    return (
        <section className="relative py-[20px]">
            <div className="container">
                <div className="relative w-full h-[500px] w-full overflow-hidden rounded-[20px]">

                    {/* Media */}
                    {isVideo ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover"
                        >
                            <source
                                src={data?.heroMedia?.url}
                                type={data?.heroMedia?.mime}
                            />
                        </video>
                    ) : (
                        <Image
                            src={data?.heroMedia?.url}
                            alt={
                                data?.heroMedia?.alternativeText ||
                                data?.title
                            }
                            fill
                            priority
                            className="object-cover"
                        />
                    )} 
                      {/* Content */}
                    <div className="relative z-10 flex h-full items-center">
                        <div className="ml-auto w-full max-w-[680px] p-[35px_35px_35px_40px]">

                            <h1 className="mb-[20px] text-[48px] lg:text-[77px] leading-[1.1] text-white font-normal">
                                {data?.title}
                            </h1>

                            <p className="text-[18px] lg:text-[20px] text-white">
                                {data?.description}
                            </p>

                            {data?.button && (
                                <a
                                    href={`/${data.button.slug}`}
                                    className="inline-flex mt-8 rounded-full border border-white px-8 py-3 text-white transition hover:bg-white hover:text-black"
                                >
                                    {data.button.label}
                                </a>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}