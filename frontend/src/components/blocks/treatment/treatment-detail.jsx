"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import React from "react";
import { motion } from "framer-motion";
import { getStrapiMediaUrl } from "@/lib/strapi";

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
      ease: [0.22, 1, 0.36, 1],
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

export default function TreatmentDetail({ data }) {
  return (
    <motion.section
      className="w-full block relative py-[40px] lg:py-[40px_70px] xl:py-[50px_100px] 2xl:py-[55px_120px] 3xl:py-[70px_160px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-50px] bottom-[-65px] xl:bottom-[-105px] 2xl:bottom-[-120px] 3xl:bottom-[-145px]"
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
            y: [0, 30, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-50px] top-[100px] w-full max-w-[170px] xl:max-w-[210px] 2xl:max-w-[240px] 3xl:max-w-[290px]"
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
          variants={fadeUp}
          className="w-full text-center m-auto lg:max-w-[450px] xl:max-w-[580px] 2xl:max-w-[630px] 3xl:max-w-[790px] mb-[20px] md:mb-[30px] xl:mb-[40px] 2xl:mb-[55px] 3xl:mb-[72px]"
        >
          <div className="heading_1 mb-[0px]">{data?.title}</div>
          {data?.short_description && (
            <div className="text_3 font-light text-black">
              {data?.short_description}
            </div>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap max-md:gap-[15px]"
        >
          <motion.div variants={fadeUp} className="w-full md:w-7/12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="w-full h-auto aspect-[874/620] overflow-hidden md:max-w-[90%] group"
            >
              <Image
                src={
                  data?.featured_image?.url
                    ? getStrapiMediaUrl(data.featured_image.url)
                    : "/images/placeholder.jpg"
                }
                alt={
                  data?.featured_image?.alternativeText || "Treatment Details"
                }
                className="w-full h-full object-cover transition-all duration-300 ease-in group-hover:scale-110"
                width={875}
                height={620}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full md:w-5/12 flex items-center"
          >
            <div className="w-full">
              <div
                className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px]
                text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]"
              >
                {data?.what_is_section?.title}
              </div>

              {data?.what_is_section?.description && (
                <div
                  className="text_3 font-light [&>p:not(:last-child)]:mb-[20px]
                mb-[20px] md:mb-[30px] lg:mb-[35px]
                xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px]"
                >
                  <BlocksRenderer content={data.what_is_section.description} />
                </div>
              )}

              <ul className="flex flex-wrap gap-[5px] md:gap-[10px] 2xl:gap-[13px]">
                {(data?.tags || []).map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    className="text_3 text-[#A14962]
                    bg-[rgba(230,198,160,0.2)]
                    font-light flex items-center justify-center
                    rounded-[30px]
                    p-[10px]
                    xl:p-[11px]
                    2xl:px-[12px]
                    3xl:px-[15px]
                    h-[30px]
                    xl:h-[35px]
                    2xl:h-[40px]
                    3xl:h-[45px]"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
