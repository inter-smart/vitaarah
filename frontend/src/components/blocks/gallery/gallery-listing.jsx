"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function GalleryListing({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const allImages = images?.filter((m) => m?.mime?.startsWith("image/")) || [];

  const slides =
    allImages.map((img) => ({
      src: getStrapiMediaUrl(img?.url) || "/images/placeholder.jpg",
      alt: img?.alternativeText || "Gallery Image",
    })) || [];

  return (
    <section
      id="GalleryListing"
      className="w-full block py-[30px_40px] sm:py-[40px_60px] lg:py-[55px_72px] xl:py-[68px_89px] 2xl:py-[77px_101px] 3xl:py-[94px_123px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-1/2 absolute -z-1 top-[4%] right-0"
      />
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 top-[42%] left-0 -translate-x-1/2"
      />
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-1 sm:-mx-[14px] xl:-mx-[18px] 2xl:-mx-[20px] 3xl:-mx-[24.5px]">
          {allImages.map((item, idx) => {
            return (
              <div
                key={"galleryList" + idx}
                className={cn(
                  "w-1/4 min-w-0 select-none p-1 sm:p-[12px_14px] xl:p-[15px_18px] 2xl:p-[16px_20px] 3xl:p-[20px_24.5px]",
                  idx % 6 === 0 && "w-[43%]",
                  idx % 6 === 1 && "w-[33%]",
                  idx % 6 === 2 && "w-[24%]",
                  idx % 6 === 3 && "w-[24%]",
                  idx % 6 === 4 && "w-[43%]",
                  idx % 6 === 5 && "w-[33%]",
                )}
              >
                <button
                  className="w-full h-full max-h-[268px] xl:max-h-[330px] 2xl:max-h-[370px] 3xl:max-h-[450px] overflow-hidden cursor-pointer text-left"
                  onClick={() => {
                    setIndex(idx);
                    setOpen(true);
                  }}
                  type="button"
                >
                  <Image
                    src={
                      getStrapiMediaUrl(item?.url) ||
                      "/images/placeholder.jpg"
                    }
                    alt={item?.alternativeText || "Gallery Image"}
                    width={622}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.srcset = "";
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
}
