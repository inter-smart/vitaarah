import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogListing({ data }) {
  return (
    <section
      id="BlogListing"
      className="w-full block py-[25px_30px] sm:py-[30px_40px] lg:py-[44px_57px] xl:py-[54px_70px] 2xl:py-[60px_79px] 3xl:py-[74px_96px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 bottom-[8%] left-0 -translate-x-1/2"
      />
      <div className="container">
        {data.title && (
          <h2 className="heading_1 text-center text-[#1f1f1f] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
            {data.title}
          </h2>
        )}

        <div className="flex flex-wrap justify-center -mx-2.5 xl:-mx-[14px] 2xl:-mx-[16px] 3xl:-mx-[20px]">
          {data?.blogs?.map((item, idx) => {
            return (
              <div
                key={"blogs" + idx}
                className={cn(
                  "w-full sm:w-1/2 lg:w-1/3 min-w-0 select-none p-2.5 sm:p-[30px_9px] xl:p-[35.5px_11.5px] xl:p-[35.5px_11.5px] 2xl:p-[42px_13px] 3xl:p-[50px_16px]",
                )}
              >
                <Link
                  href={`/blog/${item?.slug}`}
                  className={cn("mt-auto", "transition-all duration-500")}
                >
                  <div className="w-full aspect-[373/473] overflow-hidden mt-[15px] xl:mt-[20px] 2xl:mt-[24px] 3xl:mt-[30px]">
                    <Image
                      src={item.featuredImage.url}
                      alt={
                        item.featuredImage.alternativeText ||
                        item.title ||
                        "Blog"
                      }
                      width={52}
                      height={52}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="text_4 line-clamp-2 mb-[4px] xl:mb-[6px] 2xl:mb-[8px] 3xl:mb-[10px]">
                    {item?.title}
                  </div>
                  <div className="text_3 leading-relaxed line-clamp-2 text-black mb-[15px] xl:mb-[20px] 2xl:mb-[24px] 3xl:mb-[30px]">
                    {item?.shortDescription || "-"}
                  </div>
                  <div className="flex justify-between gap-2">
                    <div className="text_3 text-center text-[#a14962] underline underline-offset-4 hover:text-black">
                      Read More
                    </div>
                    <div className="text_3 text-center text-[#a14962]">
                      {item?.publishedDate
                        ? new Date(item.publishedDate).toLocaleDateString(
                            "de-DE",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            },
                          )
                        : ""}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
