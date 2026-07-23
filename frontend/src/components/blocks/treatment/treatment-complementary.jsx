"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { cn } from "@/lib/utils";

export default function TreatmentComplementary({ data }) {
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

  const fadeCard = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full block relative py-[25px] lg:py-[30px] xl:py-[35px] 2xl:py-[45px_35px] 3xl:py-[55px_40px]">
      <div className="container">
        <motion.div
          className="max-w-[522px] xl:max-w-[644px] 2xl:max-w-[730px] 3xl:max-w-[887px] text-center m-auto mb-[20px] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="heading_1 mb-[0px]">{data?.title}</div>
          <div className="text_3 font-helvetica-light text-black">
            {data?.short_description}
          </div>
        </motion.div>
        <div className="w-full h-full relative">
          <div className="flex flex-wrap justify-center -mx-2.5 lg:-mx-[9px] xl:-mx-[11.5px] xl:-mx-[11.5px] 2xl:-mx-[13px] 3xl:-mx-[16px] lg:-my-[30px] xl:-my-[35.5px] xl:-my-[35.5px] 2xl:-my-[42px] 3xl:-my-[50px]">
            {(data?.related_treatments || []).map((item, index) => (
              <div
                key={"related_treatments" + index}
                className={cn(
                  "w-full sm:w-1/2 lg:w-1/3 p-[15px_10px] lg:p-[30px_9px] xl:p-[35.5px_11.5px] xl:p-[35.5px_11.5px] 2xl:p-[42px_13px] 3xl:p-[50px_16px]",
                )}
              >
                <motion.div
                  variants={fadeCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="h-full"
                  >
                    <Link
                      href={`/treatments/${item.slug}`}
                      className="relative w-full aspect-[516/620] block group overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:via-black/10 before:to-transparent before:z-[1] before:opacity-70 before:transition-all before:duration-700 after:absolute after:inset-0 after:bg-white/10 after:opacity-0 after:transition-all after:duration-700 hover:before:opacity-100 hover:after:opacity-100"
                    >
                      <Image
                        src={
                          item?.featured_image?.url ||
                          item?.hero?.hero_media?.url
                            ? getStrapiMediaUrl(
                                item.featured_image?.url ||
                                  item.hero?.hero_media?.url,
                              )
                            : "/images/placeholder.jpg"
                        }
                        alt={
                          item?.featured_image?.alternativeText || "Treatment"
                        }
                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                        width={520}
                        height={640}
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
                                                    bg-white/70
                                                    backdrop-blur-lg
                                                    transition-all duration-700
                                                    group-hover:bg-white
                                                    group-hover:border-white/60
                                                    group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                                    p-[8px]
                                                    sm:p-[10px_12px]
                                                    xl:p-[12px_15px]
                                                    3xl:p-[16px_20px]"
                        >
                          <div className="text-[11px] xl:text-[14px] font-light font-helvetica-light text-black">
                            {item?.duration_info}
                          </div>

                          <div className="text_4 font-helvetica-light text-[#A14962] font-normal mb-0 transition-all duration-500 mb-1">
                            {item.title}
                          </div>

                          <div className="text_3 leading-tight max-sm:text-[12px] font-helvetica-light text-black">
                            <p>{item.short_description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
