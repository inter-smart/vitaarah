"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function TreatmentPathway({ data }) {
    return (
        <motion.section
            className='relative py-[30px_10px] lg:py-[30px_10px] xl:py-[45px_15px] 2xl:py-[55px_20px] 3xl:py-[70px_25px] overflow-hidden'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
        >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">

                <motion.div
                    animate={{
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute left-[0px] bottom-[65px] xl:bottom-[105px] 2xl:bottom-[120px] 3xl:bottom-[145px]"
                >
                    <Image
                        src="/images/circle.svg"
                        className="w-full max-w-[87px]"
                        width={85}
                        height={85}
                        alt="floating_icon"
                    />
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 25, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute right-[-50px] top-[150px] w-full max-w-[170px] xl:max-w-[210px] 2xl:max-w-[240px] 3xl:max-w-[290px]"
                >
                    <Image
                        src="/images/circle.svg"
                        className="w-full object-cover"
                        width={85}
                        height={85}
                        alt="floating_icon"
                    />
                </motion.div>

            </div>

            <div className="container">

                <motion.div
                    variants={itemVariants}
                    className="w-full text-center m-auto lg:max-w-[450px] xl:max-w-[580px] 2xl:max-w-[630px] 3xl:max-w-[790px] mb-[40px] xl:mb-[50px] 2xl:mb-[55px] 3xl:mb-[72px]"
                >
                    <div className="heading_1 mb-[0px]">
                        {data?.title}
                    </div>

                    <div className="text_3 font-light [&>p]:mb-[15px]">
                        {data?.subtitle}
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap -mx-[5px] xl:-mx-[10px] 2xl:-mx-[15px] 3xl:-mx-[20px] -my-[5px] xl:-my-[15px] 2xl:-my-[20px] 3xl:-my-[24px]"
                >
                    {data?.therapies.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                            className={`${idx === 0
                                    ? "w-1/2 md:w-2/3"
                                    : "w-1/2 md:w-1/3"
                                } px-[5px] xl:px-[10px] 2xl:px-[15px] 3xl:px-[20px] py-[5px] xl:py-[15px] 2xl:py-[20px] 3xl:py-[24px]`}
                        >
                            <Link
                                href={`/treatment/${item.slug}`}
                                className="relative w-full h-full block group overflow-hidden
                                before:absolute before:inset-0 before:bg-gradient-to-t
                                before:from-black/50 before:via-black/10 before:to-transparent
                                before:z-[1] before:opacity-70 before:transition-all before:duration-700
                                after:absolute after:inset-0 after:bg-white/10
                                after:opacity-0 after:transition-all after:duration-700
                                hover:before:opacity-100
                                hover:after:opacity-100"
                            >
                                <Image
                                    src={item.image.url}
                                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                                    width={520}
                                    height={640}
                                    alt={item.image.url}
                                />

                                <div
                                    className="absolute bottom-0 left-0 w-full transition-all duration-700 z-[2]
                                    group-hover:translate-y-[-12px]
                                    p-[8px] sm:p-[10px]
                                    md:px-[15px]
                                    xl:px-[20px]
                                    2xl:px-[25px]
                                    3xl:px-[30px]
                                    md:py-[20px]
                                    xl:py-[30px]
                                    2xl:py-[35px]
                                    3xl:py-[40px]"
                                >
                                    <div
                                        className="w-full max-w-[452px]
                                        bg-white/10 backdrop-blur-lg
                                        transition-all duration-700
                                        group-hover:bg-white/15
                                        group-hover:border-white/40
                                        group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                        p-[8px]
                                        sm:p-[10px_12px]
                                        xl:p-[12px_15px]
                                        3xl:p-[16px_20px]"
                                    >
                                        <div className="text_3 font-light">
                                            {item.duration}
                                        </div>

                                        <div
                                            className="text-[15px] md:text-[18px]
                                            lg:text-[20px]
                                            xl:text-[24px]
                                            2xl:text-[27px]
                                            3xl:text-[35px]
                                            text-[#A14962]
                                            font-normal
                                            mb-0
                                            transition-all duration-500
                                            group-hover:tracking-[0.5px]"
                                        >
                                            {item.title}
                                        </div>

                                        <div className="text_3 font-light">
                                            {item.shortDescription}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}