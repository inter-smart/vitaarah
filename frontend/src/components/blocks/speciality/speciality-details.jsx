import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

export default function SpecialityDetail({ data }) {
  return (
    <section className="relative py-[30px_40px] lg:py-[30px_60px] xl:py-[35px_80px] 2xl:py-[40px_120px] 3xl:py-[42px_140px]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute right-[50px] top-[150px]  w-full max-w-[170px] xl:max-w-[210px] 2xl:max-w-[240px] 3xl:max-w-[290px] ">
          <Image
            src="/images/circle.svg"
            className="w-full object-cover"
            width="85"
            height="85"
            alt="floating_icon"
          />
        </div>
      </div>
      <div className="container">
        <div className="w-full text-center m-auto lg:max-w-[510px] xl:max-w-[630px] 2xl:max-w-[720px] 3xl:max-w-[850px] mb-[25px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px]">
          <div className="heading_1 mb-[0px] ">{data.title}</div>
          <div className="text_3 font-helvetica-light mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
            {data.subtitle}
          </div>
          <div className="text_3 font-helvetica-light [&>p]:mb-[30px]">
            <BlocksRenderer content={data.description} />
          </div>
        </div>
        <div className="relative z-1 w-full h-full bg-[#FFF9EB] border border-[#C3C3C3] p-[12px] md:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[33px] mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
          <div className="flex flex-wrap max-md:gap-[20px]">
            <div className="w-full md:w-[calc(100%-380px)] lg:w-[calc(100%-520px)] xl:w-[calc(100%-640px)] 2xl:w-[calc(100%-725px)] 3xl:w-[calc(100%-920px)] flex items-center">
              <div className="w-full md:pl-[10px]">
                <div className="text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[35px] text-[#A14962] font-normal mb-[12px] xl:mb-[15px] 2xl:mb-[18px] 3xl:mb-[22px]">
                  {data?.contentSection?.title}
                </div>
                <ul className="space-y-[5px]">
                  {data?.contentSection?.conditions.map((item, idx) => (
                    <li
                      key={idx}
                      className="text_3 font-helvetica-light relative flex items-center gap-[10px] before:content-[''] before:p-[2px] before:2xl:p-[3px] before:block before:w-[2px] before:h-[2px] before:bg-black before:rounded-full "
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-[380px] lg:w-[520px] xl:w-[640px] 2xl:w-[725px] 3xl:w-[920px]">
              <div className="w-full">
                <Image
                  src={data?.contentSection?.image?.url}
                  className="w-full h-full object-cover"
                  width={1640}
                  height={460}
                  alt={data?.contentSection?.image?.alternativeText}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-[15px]">
          <div className="text_3 font-helvetica-light mb-0">
            {data?.ctaSection?.footerText}
          </div>
          <div className="flex items-center gap-[10px]">
            <Link
              href={`/${data?.ctaSection?.button?.slug}`}
              className="group relative overflow-hidden  bg-gradient-to-r from-[#A14962] via-[#C16C84] to-[#E9CBA3]
                                text-white font-medium inline-flex items-center justify-center 
                               px-[8px] min-w-[120px] xl:min-w-[150px] 2xl:min-w-[170px] 3xl:min-w-[205px] h-[32px] 2xl:h-[37px]
                                3xl:h-[45px]   transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] 
                                hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r  from-transparent  via-white/30 to-transparent
                                        skew-x-12  transition-transform  duration-700   group-hover:translate-x-[250%] "
              />
              <span className="text-[10px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] relative z-10">
                {data?.ctaSection?.button?.label}
              </span>
            </Link>
            <a
              href={data?.ctaSection?.whatsapp?.Url}
              className="w-[32px] 2xl:w-[37px] 3xl:w-[45px] h-[32px] 2xl:h-[37px]
                                3xl:h-[45px] flex items-center justify-center bg-[#00A85A] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] 
                                hover:shadow-[0_15px_40px_rgba(161,73,98,0.35)]"
              aria_label={data?.ctaSection?.whatsapp?.label}
            >
              <div className="xl:p-[5px] 2xl:p-[8px] 3xl:p-[10px] flex">
                <svg
                  className="w-[18px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[24px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2178_7860)">
                    <path
                      d="M12.003 0H11.997C5.3805 0 0 5.382 0 12C0 14.625 0.846 17.058 2.2845 19.0335L0.789 23.4915L5.4015 22.017C7.299 23.274 9.5625 24 12.003 24C18.6195 24 24 18.6165 24 12C24 5.3835 18.6195 0 12.003 0Z"
                      fill="white"
                    />
                    <path
                      d="M18.9848 16.9453C18.6953 17.7628 17.5463 18.4408 16.6298 18.6388C16.0028 18.7723 15.1838 18.8788 12.4268 17.7358C8.90034 16.2748 6.62934 12.6913 6.45234 12.4588C6.28284 12.2263 5.02734 10.5613 5.02734 8.83928C5.02734 7.11728 5.90184 6.27878 6.25434 5.91878C6.54384 5.62328 7.02234 5.48828 7.48134 5.48828C7.62984 5.48828 7.76334 5.49578 7.88334 5.50178C8.23584 5.51678 8.41284 5.53778 8.64534 6.09428C8.93484 6.79178 9.63984 8.51378 9.72384 8.69078C9.80934 8.86778 9.89484 9.10778 9.77484 9.34028C9.66234 9.58028 9.56334 9.68678 9.38634 9.89078C9.20934 10.0948 9.04134 10.2508 8.86434 10.4698C8.70234 10.6603 8.51934 10.8643 8.72334 11.2168C8.92734 11.5618 9.63234 12.7123 10.6703 13.6363C12.0098 14.8288 13.0958 15.2098 13.4843 15.3718C13.7738 15.4918 14.1188 15.4633 14.3303 15.2383C14.5988 14.9488 14.9303 14.4688 15.2678 13.9963C15.5078 13.6573 15.8108 13.6153 16.1288 13.7353C16.4528 13.8478 18.1673 14.6953 18.5198 14.8708C18.8723 15.0478 19.1048 15.1318 19.1903 15.2803C19.2743 15.4288 19.2743 16.1263 18.9848 16.9453Z"
                      fill="#00A85A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2178_7860">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
