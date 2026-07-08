"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TreatmentRythym({ data }) {
  return (
    <motion.section
      className="relative py-[20px_40px] xl:py-[25px_60px] 2xl:py-[30xp_80px] 3xl:py-[40px_100px]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.div className="text-center m-auto" variants={sectionVariants}>
          <motion.div className="heading_1 mb-[5px]" variants={itemVariants}>
            {data?.title}
          </motion.div>
          <motion.div
            className="text_3 font-light mb-[15px]"
            variants={itemVariants}
          >
            {data?.short_description}
          </motion.div>
          {data?.button_label && (
            <motion.div variants={itemVariants}>
              <Link
                href={`/enquiry`}
                className="group relative overflow-hidden bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3]
                            text-white font-medium inline-flex items-center justify-center
                            px-[10px] min-w-[120px] xl:min-w-[170px] 2xl:min-w-[190px] 3xl:min-w-[240px]
                            h-[35px] 2xl:h-[37px] 3xl:h-[45px]
                            transition-all duration-500 ease-out hover:-translate-y-1
                            hover:scale-[1.03]
                            hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
              >
                <span
                  className="absolute inset-0 -translate-x-full
                                bg-gradient-to-r from-transparent via-white/30 to-transparent
                                skew-x-12 transition-transform duration-700
                                group-hover:translate-x-[250%]"
                />

                <span className="text-[10px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] relative z-10">
                  {data?.button_label}
                </span>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
