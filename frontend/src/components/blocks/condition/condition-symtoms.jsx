"use client";
 
import Image from "next/image"; 
import { motion } from "framer-motion";

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

export default function ConditionSymtoms({ data }) { 

    const symptoms = data.symptoms?.children || [];

    const midpoint = Math.ceil(symptoms.length / 2);
    const leftSymptoms = symptoms.slice(0, midpoint);
    const rightSymptoms = symptoms.slice(midpoint);

    return (
        <section className="relative py-[35px_50px] lg:py-[40px_70px] xl:py-[50px_90px] 2xl:py-[60px_100px] 3xl:py-[70px_130px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute left-[0px] bottom-[50px]">
                    <Image src="/images/circle.svg" className="w-full max-w-[87px]" width="85" height="85" alt="floating_icon" />
                </div>
                <div className="absolute right-[-60px] top-[0x] w-full max-w-[170px] xl:max-w-[210px] 2xl:max-w-[240px] 3xl:max-w-[290px] ">
                    <Image src="/images/conditionCircle.svg" className="w-full object-cover" width="85" height="85" alt="floating_icon" />
                </div>
            </div>
            <div className="container">
                <motion.div
                    className="max-w-[522px] xl:max-w-[644px] 2xl:max-w-[730px] 3xl:max-w-[887px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="heading_1 mb-[0px]">
                        {data?.title}
                    </div>

                    <div className="text_3 font-light">
                        {data?.subTitle}
                    </div>
                </motion.div>

                <div className="flex flex-wrap items-center">
                    {/* Left Symptoms */}
                    <motion.div
                        className="w-full lg:w-1/3 max-lg:mb-[8px] max-lg:order-2"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ul>
                            {leftSymptoms.map((item, id) => (
                                <li
                                    key={id}
                                    className="text_3 text-[#1C1C1C] font-light relative flex items-center gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px]
                                    [&:not(:last-child)]:mb-[8px]
                                    lg:[&:not(:last-child)]:mb-[10px]
                                    xl:[&:not(:last-child)]:mb-[15px]
                                    2xl:[&:not(:last-child)]:mb-[20px]
                                    3xl:[&:not(:last-child)]:mb-[25px]
                                    before:relative before:content-['']
                                    before:block
                                    before:w-[10px]
                                    before:h-[10px]
                                    before:top-[0px]
                                    before:bg-[url('/images/dotList.svg')]
                                    before:bg-cover
                                    before:bg-no-repeat
                                    before:flex-shrink-0"
                                >
                                    {item?.children?.[0]?.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Center Image */}
                    <motion.div
                        className="w-full lg:w-1/3 flex justify-center max-lg:mb-[30px] max-lg:order-1"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="overflow-hidden w-full h-full rounded-[20px] lg:rounded-[120px]">
                            <Image
                                src={data?.image?.url}
                                alt={
                                    data?.image?.alternativeText || "Symptoms"
                                }
                                width={520}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Symptoms */}
                    <motion.div
                        className="w-full lg:w-1/3 lg:pl-[55px] xl:pl-[65px] 2xl:pl-[75px] 3xl:pl-[95px] order-3"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <ul>
                            {rightSymptoms.map((item, id) => (
                                <li
                                    key={id}
                                    className="text_3 text-[#1C1C1C] font-light relative flex items-center gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px]
                                    [&:not(:last-child)]:mb-[8px]
                                    lg:[&:not(:last-child)]:mb-[10px]
                                    xl:[&:not(:last-child)]:mb-[15px]
                                    2xl:[&:not(:last-child)]:mb-[20px]
                                    3xl:[&:not(:last-child)]:mb-[25px]
                                    before:relative before:content-['']
                                    before:block
                                    before:w-[10px]
                                    before:h-[10px]
                                    before:top-[0px]
                                    before:bg-[url('/images/dotList.svg')]
                                    before:bg-cover
                                    before:bg-no-repeat
                                    before:flex-shrink-0"
                                >
                                    {item?.children?.[0]?.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}