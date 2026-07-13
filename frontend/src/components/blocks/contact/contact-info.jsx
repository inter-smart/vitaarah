import RequestQuoteForm from "@/components/form/request-quote-form";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function ContactInfo({ data }) {
  return (
    <section
      id="ContactInfo"
      className="w-full block py-[25px_60px] sm:py-[30px_80px] lg:py-[36px_100px] xl:py-[46px_135px] 2xl:py-[50px_145px] 3xl:py-[62px_178px] overflow-hidden relative z-0"
    >
      <Image
        src="/images/home-about-elmt-1.svg"
        alt="home about element 1"
        width={300}
        height={300}
        className="w-[100px] sm:w-[140px] xl:w-[180px] 2xl:w-[220px] 3xl:w-[310px] translate-x-1/2 absolute -z-1 top-[10%] right-0"
      />
      <Image
        src="/images/home-about-elmt-2.svg"
        alt="home about element 2"
        width={60}
        height={60}
        className="w-[30px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] 3xl:w-[100px] absolute -z-1 bottom-[43%] left-0"
      />
      <div className="container">
        <div className="w-full mx-auto xl:max-w-[992px] 2xl:max-w-[1087px] 3xl:!max-w-[1316px]">
          {data.title && (
            <h2 className="heading_1 leading-tight text-center text-[#1f1f1f] mb-[4px] xl:mb-[6px] 2xl:mb-[10px]">
              {data.title}
            </h2>
          )}
          {data.shortDescription && (
            <div className="text_3 text-center font-normal text-black mb-[51px] sm:mb-[51px] xl:mb-[66px] 2xl:mb-[73px] 3xl:mb-[87px] max-w-[320px] xl:max-w-[468px] 2xl:max-w-[651px] 3xl:max-w-[790px] mx-auto">
              {data.shortDescription}
            </div>
          )}
          <div className="flex flex-wrap gap-[30px] lg:gap-[95px] xl:gap-[122px] 2xl:gap-[135px] 3xl:gap-[162px]">
            <div className="w-full sm:flex-1">
              {data?.uaeAddress && (
                <div className="flex flex-wrap gap-[10px] xl:gap-[15px] 2xl:gap-[17px] 3xl:gap-[20px]">
                  <div className="flex items-center gap-2.5 xl:gap-[12px] 2xl:gap-[14px] 3xl:gap-[17px]">
                    <div className="w-[20px] sm:w-[30px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                      <Image
                        src="/images/contact-info-uae.svg"
                        alt="contact-info-uae"
                        width={48}
                        height={48}
                        className="w-full h-full block"
                      />
                    </div>
                    <div>
                      <div className="text_3 leading-none text-[#a14962]">
                        UAE
                      </div>
                    </div>
                  </div>
                  <div className="text_3 text-[#875849] hover:text-[#623628] w-full">
                    <div className="xl:w-[73%]">{parse(data?.uaeAddress)}</div>
                  </div>
                </div>
              )}
              <hr className="border-black/10 my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[32px]" />
              <div className="text_5 leading-none text-[#a14962] mb-[20px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[32px]">
                Connect with Us
              </div>
              <div className="flex flex-wrap justify-between gap-[30px] lg:gap-[33px] xl:gap-[42px] 2xl:gap-[46px] 3xl:gap-[56px]">
                {data?.phoneNumber && (
                  <ConnectCard
                    url="/images/footer-address-icon.svg"
                    alternativeText="footer-address-icon"
                    label="Mobile"
                    linkUrl={`tel:${data?.phoneNumber}`}
                    content={data?.phoneNumber}
                  />
                )}
                {data?.emailAddress && (
                  <ConnectCard
                    url="/images/footer-mail-icon.svg"
                    alternativeText="footer-mail-icon"
                    label="Mail"
                    linkUrl={`mailto:${data?.emailAddress}`}
                    content={data?.emailAddress}
                  />
                )}
              </div>

              {data?.working_time_info && (
                <div className="w-full bg-[#fff9eb] p-[15px_20px] xl:p-[23px_25px] 2xl:p-[25px_28px] 3xl:p-[30px_34px] mt-[30px] sm:mt-[38px] xl:mt-[49px] 2xl:mt-[54px] 3xl:mt-[65px]">
                  <div className="text_5 leading-none text-[#a14962] mb-[15px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px]">
                    Working Hours
                  </div>
                  {data.working_time_info?.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between my-[11px] 2xl:my-[13px] 3xl:my-[15px] "
                    >
                      <div className="text_3 text-[#875846]">{item.days}</div>
                      <div className="text_3 text-[#875846]">
                        {item.timings}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full sm:w-[349px] xl:w-[447px] 2xl:w-[489px] 3xl:w-[593.5px]">
              <RequestQuoteForm />
            </div>
          </div>
        </div>
      </div>
      {data?.googleMapsUrl && (
        <div className="container mt-[30px] lg:mt-[75px] xl:mt-[96px] 2xl:mt-[104px] 3xl:mt-[127px] grayscale-100">
          <iframe
            src={data.googleMapsUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="w-full h-[250px] sm:h-[300px] xl:h-[350px] 2xl:h-[400px]"
          />
        </div>
      )}
    </section>
  );
}

function ConnectCard({ url, alternativeText, label, linkUrl, content }) {
  return (
    <div className="flex gap-2.5 xl:gap-[12px] 2xl:gap-[14px] 3xl:gap-[17px]">
      <div className="w-[20px] sm:w-[30px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
        <Image
          src={url ? url : "/images/placeholder.jpg"}
          alt={alternativeText || "Image"}
          width={48}
          height={48}
          className="w-full h-full block"
          unoptimized
        />
      </div>
      <div>
        <div className="text_3 leading-none text-[#875849] xl:mb-1">
          {label}
        </div>
        <Link
          href={linkUrl}
          className="text_3 leading-none text-[#875849] hover:text-[#623628]"
        >
          {content}
        </Link>
      </div>
    </div>
  );
}
