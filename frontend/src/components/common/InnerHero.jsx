import Image from "next/image";
import React from "react";

export default function InnerHero({ data }) {
    return (
        <section className="relative py-[20px]">
            <div className="container">
                <div className="relative h-[500px] w-full overflow-hidden rounded-[20px]">
                    {/* Media */}
                    {data?.media?.type === "video" ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={data?.media?.video?.poster}
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source
                                src={data?.media?.video?.url}
                                type="video/mp4"
                            />
                        </video>
                    ) : (
                        <Image
                            src={data?.media?.image?.url}
                            alt={data?.media?.image?.alternativeText || data?.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    )} 
                    {/* Content */}
                    <div className="relative z-10 flex h-full items-center">
                        <div className="ml-auto w-full max-w-[680px] p-[35px_35px_35px_40px]">
                            <h1 className="text-[48px] lg:text-[77px] leading-[1.1] text-white font-normal mb-[20px]">
                                {data?.title}
                            </h1>
                            <p className="text-[18px] lg:text-[20px] text-white">
                                {data?.description?.text}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}