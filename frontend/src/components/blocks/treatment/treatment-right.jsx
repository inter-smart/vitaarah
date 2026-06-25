"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TreatmentRight({ data }) {
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <section className='relative py-[25px] lg:py-[30px_20px] xl:py-[50px_25px] 2xl:py-[60px_30px] 3xl:py-[85px_40px]'>
            <div className="container">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full text-center m-auto lg:max-w-[450px] xl:max-w-[580px] 2xl:max-w-[630px] 3xl:max-w-[790px] mb-[20px] md:mb-[30px] xl:mb-[40px] 2xl:mb-[55px] 3xl:mb-[72px]"
                >
                    <div className="heading_1 mb-[0px] ">
                        {data?.title}
                    </div>

                    <div className="text_3 font-light">
                        {data?.subtitle}
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="flex max-lg:flex-wrap gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]"
                >

                    {/* Left Side */}
                    <motion.div
                        variants={fadeUp}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.3 }
                        }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="w-full h-full bg-[#FFF9EB] p-[42px_24px_42px_35px] xl:p-[50px_30px_50px_45px] 2xl:p-[60px_34px_60px_54px] 3xl:p-[75px_45px_45px_60px]">

                            {data?.conditions.map((item, id) => (
                                <motion.div
                                    key={id}
                                    initial={{
                                        opacity: 0,
                                        x: -40
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: id * 0.12
                                    }}
                                    className="w-full mb-[20px] md:mb-[30px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px] last-of-type:mb-0"
                                >
                                    <div
                                        className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px]
                                        text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]"
                                    >
                                        {item?.title}
                                    </div>

                                    <div className="text_3 font-light [&>p:not(:last-child)]:mb-[20px]">
                                        <BlocksRenderer content={item?.description} />
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        variants={fadeUp}
                        whileHover={{
                            y: -10,
                            scale: 1.01
                        }}
                        transition={{
                            duration: 0.35
                        }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="w-full h-full p-[30px_20px] md:p-[55px_35px] lg:p-[75px_45px] xl:p-[90px_65px] 2xl:p-[105px_75px_110px] 3xl:p-[130px_100px_140px] bg-gradient-to-r from-[#E9CBA3] to-[#A14962]">

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="heading_1 text-white mb-[15px] sm:mb-[25px] md:mb-[30px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]"
                            >
                                {data?.commitmentCard?.title}
                            </motion.div>

                            <ul className="mb-[60px]">
                                {data?.commitmentCard?.details.map((item, id) => (
                                    <motion.li
                                        key={id}
                                        initial={{
                                            opacity: 0,
                                            x: 40
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: id * 0.12
                                        }}
                                        className="text-[15px] lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[30px]
                                        text-white font-light flex items-center
                                        pb-[20px] lg:pb-[25px] xl:pb-[30px] 2xl:pb-[40px] 3xl:pb-[50px]
                                        last-of-type:pb-0 border-white border-b
                                        last-of-type:border-0 mb-[15px] lg:mb-[20px]
                                        xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]
                                        last-of-type:mb-0"
                                    >
                                        <span className="w-[40%]">
                                            {item?.label}
                                        </span>

                                        <span>
                                            {item?.value}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    y: -4
                                }}
                                whileTap={{
                                    scale: 0.97
                                }}
                            >
                                <Link
                                    href={`/${data?.commitmentCard?.button.slug}`}
                                    className="group relative overflow-hidden bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3]
                                    text-white font-medium inline-flex items-center justify-center
                                    px-[8px] min-w-[180px] xl:min-w-[225px] 2xl:min-w-[260px] 3xl:min-w-[325px]
                                    h-[42px] xl:h-[52px] 2xl:h-[60px] 3xl:h-[75px]
                                    transition-all duration-500 ease-out hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
                                >
                                    <span
                                        className="absolute inset-0 -translate-x-full
                                        bg-gradient-to-r from-transparent via-white/30 to-transparent
                                        skew-x-12 transition-transform duration-700
                                        group-hover:translate-x-[250%]"
                                    />

                                    <span className="text-[13px] md:text-[14px] lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[30px] relative z-10">
                                        {data?.commitmentCard?.button?.label}
                                    </span>
                                </Link>
                            </motion.div>

                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}