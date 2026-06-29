"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { motion } from "framer-motion";

export default function TreatmentFaq({ data }) {

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative py-[25px] lg:py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[60px]">
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-[522px] xl:max-w-[644px] 2xl:max-w-[730px] 3xl:max-w-[887px] text-center m-auto mb-[25px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]"
                >
                    <div className="heading_1 mb-[0px]">
                        {data?.title}
                    </div>

                    <div className="text_3 font-light">
                        {data?.subtitle}
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={`item-${data?.faqs?.[0]?.id || 0}`}
                    >
                        {data?.faqs?.map((item, id) => (
                            <motion.div
                                key={id}
                                variants={itemVariants}
                            >
                                <AccordionItem
                                    value={`item-${item?.id || id}`}
                                    className="mb-[15px] border border-[#E4E4E4] transition-all duration-300 data-[state=open]:bg-[#FFF9EB] data-[state=open]:border-[#FFF9EB] px-[10px] lg:px-[15px] xl:px-[20px] 2xl:px-[25px] 3xl:px-[30px]"
                                >
                                    <AccordionTrigger
                                        className="text-[13px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[22px] text-[#1C1C1C] font-normal relative py-[15px] xl:py-[18px] 2xl:py-[22px] 3xl:py-[25px] cursor-pointer hover:no-underline data-[state=open]:pb-[15px]
                                        [&>svg]:!hidden
                                        after:absolute
                                        after:content-['+']
                                        after:w-[15px]
                                        after:h-[15px]
                                        after:flex
                                        after:items-center
                                        after:justify-center
                                        after:top-0
                                        after:bottom-0
                                        after:m-auto
                                        after:text-[13px]
                                        xl:after:text-[15px]
                                        2xl:after:text-[18px]
                                        3xl:after:text-[22px]
                                        after:right-0
                                        after:text-[#1C1C1C]
                                        data-[state=open]:after:content-['−']"
                                    >
                                        {item?.question}
                                    </AccordionTrigger>

                                    <AccordionContent>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-[11px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[16px] font-light [&>p:not(:last-child)]:mb-[15px] 3xl:max-w-[1024px] pb-[10px]"
                                        >
                                            <BlocksRenderer content={item?.answer} />
                                        </motion.div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

            </div>
        </section>
    );
}