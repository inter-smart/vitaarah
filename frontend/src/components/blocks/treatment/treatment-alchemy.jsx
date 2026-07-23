"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { motion } from "framer-motion";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function TreatmentAlchemy({ data }) {
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

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section className="w-full block relative py-[40px_20px] lg:py-[60px_30px] xl:py-[90px_50px] 2xl:py-[100px_60px] 3xl:py-[140px_85px] overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute left-[-30px] top-[-80px] w-full max-w-[170px] xl:max-w-[210px] 2xl:max-w-[240px] 3xl:max-w-[290px] ">
          <Image
            src="/images/circle.svg"
            alt="floating_icon"
            className="w-full object-cover"
            width="85"
            height="85"
          />
        </div>

        <Image
          src="/images/home-about-elmt-2.svg"
          alt="home about element 2"
          width={60}
          height={60}
          className="w-[30px] sm:w-[40px] xl:w-[60px] 2xl:w-[80px] 3xl:w-[100px] absolute -z-1 bottom-[10%] right-[1%] pointer-events-none"
        />
      </div>

      <div className="container">
        <div className="flex flex-wrap w-full">
          {/* LEFT CONTENT */}
          <motion.div
            className="w-full lg:w-[330px] xl:w-[400px] 2xl:w-[460px] 3xl:w-[578px] max-lg:mb-[20px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full h-full">
              <div className="heading_1 mb-[0px] max-w-[450px]">
                {data?.title}
              </div>
              <div className="text_3 font-helvetica-light text-black mb-[20px] md:mb-[30px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px]">
                <BlocksRenderer content={data.description} />
              </div>
              <motion.div
                className="w-full aspect-[578/478] overflow-hidden group"
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Image
                  src={
                    data?.featured_image?.url
                      ? getStrapiMediaUrl(data.featured_image.url)
                      : "/images/placeholder.jpg"
                  }
                  alt={
                    data?.featured_image?.alternativeText ||
                    data?.title ||
                    "Benefits" ||
                    "Image"
                  }
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                  width={578}
                  height={478}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[calc(100%-330px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-460px)] 3xl:w-[calc(100%-578px)] lg:pl-[30px] xl:pl-[40px] 2xl:pl-[60px] 3xl:pl-[80px]">
            <motion.div
              className="w-full h-full flex flex-wrap overflow-hidden border-t border-r border-[#CFCFCF]"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {(data?.benefits_item || []).map((item, id) => (
                <motion.div
                  key={id}
                  className="w-full sm:w-1/2"
                  variants={fadeUp}
                >
                  <motion.div className="w-full h-full border-[#CFCFCF] border-b border-l p-[12px] md:p-[15px] lg:p-[20px] xl:p-[25px] 2xl:p-[30px] 3xl:p-[40px] hover:bg-[#FFF9EB]">
                    <motion.div
                      className="w-[35px] xl:w-[45px] 2xl:w-[52px] 3xl:w-[72px] h-[35px] xl:h-[45px] 2xl:h-[52px] 3xl:h-[72px] overflow-hidden flex mb-[15px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[28px]"
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <Image
                        src={
                          item?.icon?.url
                            ? getStrapiMediaUrl(item.icon.url)
                            : "/images/placeholder.jpg"
                        }
                        alt={
                          item?.icon?.alternativeText || item?.title || "Icon"
                        }
                        className="w-full h-full object-contain"
                        width={70}
                        height={70}
                      />
                    </motion.div>
                    <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-[#A14962] font-normal mb-[8px] xl:mb-[10px] 2xl:mb-[15px]">
                      {item?.title}
                    </div>
                    {item?.short_description && (
                      <div className="text_3 font-helvetica-light text-black [&>p:not(:last-child)]:mb-[20px]">
                        <p>{item.short_description}</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
