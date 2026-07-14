import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "../form/appointment-form";
import { getStrapiMediaUrl } from "@/lib/strapi";

const headStyle =
  "text-[13px] lg:text-[14.1px] xl:text-[17.5px] 2xl:text-[19.8px] 3xl:text-[24px] leading-normal font-helvetica text-[#a14962] mb-[10px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[30px] 3xl:mb-[30px]";

export default function Footer({ data, siteSettings }) {
  const footer_logo = data?.footer_logo;
  const quick_links = data?.quick_links || [];
  const legal_links = data?.legal_links || [];
  const short_description = data?.short_description;
  const uae_address = data?.uae_address;
  const google_maps_url = data?.google_maps_url;
  const copyright_text = data?.copyright_text;

  const support_phone = siteSettings?.support_phone;
  const support_email = siteSettings?.support_email;
  const social_links = siteSettings?.social_links || [];
  return (
    <footer className="[--top-box:60px] sm:[--top-box:72px] xl:[--top-box:90px] 2xl:[--top-box:102px] 3xl:[--top-box:124px] w-full block bg-[#faf7ed] sm:pt-[60px] xl:pt-[73px] 2xl:pt-[80px] 3xl:pt-[100px] sm:mt-[calc(var(--top-box)/2)] relative z-0">
      <div className="w-full h-[calc(var(--top-box)/2)] bg-white sm:bg-[#faf7ed] max-sm:absolute -z-1 top-0 inset-x-0 pointer-events-none"></div>
      <div className="container sm:absolute z-1 top-0 inset-x-0 sm:-translate-y-1/2 mb-[calc(var(--top-box)/2)]">
        <AppointmentForm />
      </div>
      <div className="container">
        <div className="flex flex-wrap flex-row-reverse sm:flex-row gap-y-5 sm:gap-y-4 gap-x-[4%] sm:gap-x-[2%] xl:gap-x-[1%]">
          <div className="w-[48%] sm:w-[30%] lg:w-[17%] xl:w-[19%]">
            <div className={headStyle}>Quick Links</div>
            <div className="flex flex-col gap-[10px] lg:gap-[14px] xl:gap-[18px] 2xl:gap-[22px] 3xl:gap-[26px]">
              {quick_links
                ?.filter((link) => link?.url)
                .map((link, idx) => (
                  <Link
                    key={`${idx}-${link.url}`}
                    href={link.url}
                    target={link.is_external ? "_blank" : undefined}
                    rel={link.is_external ? "noopener noreferrer" : undefined}
                    className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] hover:text-[#623628]"
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="w-[48%] sm:w-[30%] lg:w-[13%]">
            <div className={headStyle}>Follow Us</div>
            <div className="flex flex-col gap-[10px] lg:gap-[14px] xl:gap-[18px] 2xl:gap-[22px] 3xl:gap-[26px]">
              {social_links
                ?.filter((item) => item?.url)
                .map((item, index) => (
                  <Link
                    key={`${index}-${item.url}`}
                    href={item.url}
                    target={item.is_external ? "_blank" : undefined}
                    rel={item.is_external ? "noopener noreferrer" : undefined}
                    className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] hover:text-[#623628] flex gap-2 items-center"
                  >
                    {item.icon?.url && (
                      <Image
                        src={getStrapiMediaUrl(item.icon.url)}
                        alt={item.icon.alternativeText || item.label || "social"}
                        width={48}
                        height={48}
                        className="w-[10px] sm:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px] aspect-square object-contain block"
                      />
                    )}
                    <span>{item.label ?? ""}</span>
                  </Link>
                ))}
            </div>
          </div>
          <div className="w-[48%] sm:w-[30%] lg:w-[16%] xl:w-[18%]">
            <div className="mb-2">
              <div className={headStyle}>UAE</div>
              <div className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-normal font-helvetica text-[#875849] xl:max-w-[90%]">
                {uae_address}
              </div>
            </div>
            <hr className="max-w-[120px] 3xl:max-w-[154px] border-[#AF8C80]/20 my-[10px] lg:my-[20px] 2xl:my-[25px] 3xl:my-[30px]" />
            <div>
              <div className="flex flex-col gap-[10px] lg:gap-[14px] xl:gap-[18px] 2xl:gap-[22px] 3xl:gap-[26px]">
                {legal_links
                  ?.filter((link) => link?.url)
                  .map((link, idx) => (
                    <Link
                      key={`${idx}-${link.url}`}
                      href={link.url}
                      target={link.is_external ? "_blank" : undefined}
                      rel={link.is_external ? "noopener noreferrer" : undefined}
                      className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] hover:text-[#623628]"
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-[48%] sm:w-[30%] lg:w-[20%]">
            <div className={headStyle}>Connect with Us</div>
            <div className="flex flex-col gap-[15px] sm:gap-[20px] xl:gap-[25px] 2xl:gap-[30px] 3xl:gap-[35px]">
              {support_phone && (
                <ConnectCard
                  url="/images/footer-address-icon.svg"
                  alternativeText="footer-address-icon"
                  label="Mobile"
                  linkUrl={`tel:${support_phone}`}
                  content={support_phone}
                />
              )}
              {support_email && (
                <ConnectCard
                  url="/images/footer-mail-icon.svg"
                  alternativeText="footer-mail-icon"
                  label="Mail"
                  linkUrl={`mailto:${support_email}`}
                  content={support_email}
                />
              )}
              {google_maps_url && (
                <a
                  href={google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[120px] xl:max-w-[148px] 2xl:max-w-[169px] 3xl:max-w-[205px] h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] bg-[#faf7ed] border border-[#AF8C80] flex gap-2 justify-center items-center hover:bg-[#f1f1f1] transition-colors"
                >
                  <div className="w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]">
                    <Image
                      src="/images/footer-map-icon.svg"
                      alt="footer-map-icon"
                      width={48}
                      height={48}
                      className="w-full h-full block"
                    />
                  </div>
                  <div>
                    <div className="text_3 text-[#875849]">Google Map</div>
                  </div>
                </a>
              )}
            </div>
          </div>
          <div className="w-full sm:w-[68%] lg:w-[26%] order-first sm:order-last">
            {footer_logo?.url && (
              <Link
                href="/"
                className="w-[168px] lg:w-[212px] xl:w-[262px] 2xl:w-[297px] 3xl:w-[360px] block sm:ml-auto mb-[10px] 3xl:mb-[15px]"
              >
                <Image
                  src={getStrapiMediaUrl(footer_logo.url)}
                  alt={footer_logo.alternativeText || "Vitaarah"}
                  width={360}
                  height={92}
                  className="w-full h-full"
                />
              </Link>
            )}
            <div className="text_3 leading-relaxed sm:text-end text-[#875849] xl:max-w-[90%] ml-auto">
              {short_description}
            </div>
          </div>
        </div>

        <hr className="border-[#AF8C80]/20 mt-[30px] sm:mt-[40px] xl:mt-[60px] 2xl:mt-[80px] 3xl:mt-[100px]" />

        <div className="flex flex-col sm:flex-row gap-2.5 max-sm:items-center sm:justify-between py-[15px] sm:py-[20px] xl:py-[27px] 2xl:py-[30px] 3xl:py-[37px]">
          {copyright_text && (
            <div className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849]">
              &copy; {new Date().getFullYear()} {copyright_text}
            </div>
          )}
          <div className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] flex items-center gap-2">
            Designed by:{" "}
            <a href="https://www.intersmartsolution.com/">
              <Image
                src="/images/footer-author.svg"
                alt="footer-author"
                width={118}
                height={20}
                className="w-[70px] xl:w-[86px] 2xl:w-[98px] 3xl:w-[118px] block"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ConnectCard({ url, alternativeText, label, linkUrl, content }) {
  return (
    <div className="flex gap-2.5 xl:gap-[12px] 2xl:gap-[14px] 3xl:gap-[17px]">
      <div className="w-[20px] sm:w-[30px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
        <Image
          src={url}
          alt={alternativeText || "Image"}
          width={48}
          height={48}
          className="w-full h-full block"
        />
      </div>
      <div>
        <div className="text_3 leading-none text-[#875849] xl:mb-0.5 2xl:mb-1">
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
