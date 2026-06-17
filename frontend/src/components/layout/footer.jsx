import Link from "next/link";
import Image from "next/image";
import ConnectCard from "@/components/common/ConnectCard";

const headStyle =
  "text-[13px] lg:text-[14.1px] xl:text-[17.5px] 2xl:text-[19.8px] 3xl:text-[24px] leading-normal font-helvetica text-[#a14962] mb-[30px] xl:mb-[30px] 2xl:mb-[30px] 3xl:mb-[30px]";

const defaultSocialLinks = [
  {
    label: "facebook",
    url: "https://www.facebook.com/",
    icon: "/images/facebook.svg",
  },
  {
    label: "twitter",
    url: "https://twitter.com/",
    icon: "/images/twitter.svg",
  },
  {
    label: "instagram",
    url: "https://www.instagram.com/",
    icon: "/images/instagram.svg",
  },
];

export default function Footer({
  data,
  logo,
  quickLinks = [],
  legalLinks = [],
  uaeAddress,
  phoneNumber,
  emailAddress,
  googleMapsUrl,
  shortDescription,
  copyrightText,
  socialLinks = defaultSocialLinks,
}) {
  console.log(data);

  return (
    <footer className="[--top-box:60px] sm:[--top-box:72px] xl:[--top-box:90px] 2xl:[--top-box:102px] 3xl:[--top-box:124px] w-full block bg-[#faf7ed] pt-[40px] sm:pt-[60px] xl:pt-[73px] 2xl:pt-[80px] 3xl:pt-[100px]">
      <div className="w-full h-[calc(var(--top-box)/2)] "></div>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[20%]">
            <div className={headStyle}>Quick Links</div>
            <div className="flex flex-col gap-[14px] xl:gap-[18px] 2xl:gap-[22px] 3xl:gap-[26px]">
              {quickLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="text-[10px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] hover:text-[#623628]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[20%]">
            <div className={headStyle}>Follow Us</div>
            <div className="flex flex-col gap-[14px] xl:gap-[18px] 2xl:gap-[22px] 3xl:gap-[26px]">
              {socialLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="text-[10px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] hover:text-[#623628] flex gap-2"
                >
                  <Image
                    src={link.icon}
                    alt={logo.alternativeText || "social"}
                    width={48}
                    height={48}
                    className="w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px] aspect-square block"
                  />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[20%]">
            <div className="mb-2">
              <div className={headStyle}>UAE</div>
              <div className="text-[10px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] ">
                {uaeAddress ||
                  "Test data - melbin@vitaarah.ae 202, API Business Suites, Al Barsha 1 ,Dubai"}
              </div>
            </div>
            <hr className="max-w-[120px] 3xl:max-w-[154px] border-[#AF8C80]/20 my-[20px] 2xl:my-[25px] 3xl:my-[30px]" />
            <div>
              <div className="flex flex-col gap-[14px] xl:gap-[18px] 2xl:gap-[22px] 3xl:gap-[26px]">
                {legalLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    className="text-[10px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-tight font-helvetica text-[#875849] hover:text-[#623628]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[20%]">
            <div className={headStyle}>Connect with Us</div>
            {phoneNumber && (
              <ConnectCard
                url="/images/footer-address-icon.svg"
                alternativeText="footer-address-icon"
                label="Mobile"
                linkUrl={`tel:${phoneNumber}`}
                content={phoneNumber}
              />
            )}
            {emailAddress && (
              <ConnectCard
                url="/images/footer-mail-icon.svg"
                alternativeText="footer-mail-icon"
                label="Mail"
                linkUrl={`mailto:${emailAddress}`}
                content={emailAddress}
              />
            )}
            {googleMapsUrl && (
              <div className="w-full max-w-[120px] xl:max-w-[148px] 2xl:max-w-[169px] 3xl:max-w-[205px] h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] bg-white border border-[#AF8C80] flex gap-2 justify-center items-center">
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
                  <div className="text_3">Google Map</div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-[20%]">
            {logo?.url && (
              <Link
                href="/"
                className="w-[120px] xl:w-[136px] 2xl:w-[170px] 3xl:w-[246px] flex items-center gap-2"
              >
                <Image
                  src={logo.url}
                  alt={logo.alternativeText || "Vitaarah"}
                  width={360}
                  height={92}
                  className="w-full h-full"
                />
              </Link>
            )}
            <div className="text_3 text-[#875849]">{shortDescription}</div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text_3">
            &copy; {new Date().getFullYear()} {copyrightText}
          </div>
          <div className="text_3">
            Designed by:{" "}
            <a href="https://www.intersmartsolution.com/">
              <Image
                src="/images/footer-author.svg"
                alt="footer-author"
                width={118}
                height={20}
                className="w-[70px] xl:w-[86px] 2xl:w-[98px] 3xl:w-[118px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ConnectCard(linkUrl, content, url, alternativeText, label = "Mobile") {
  return (
    <Link href={linkUrl} className="flex gap-2">
      <div className="w-[30px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
        <Image
          src={url}
          alt={alternativeText || "footer-address-icon"}
          width={48}
          height={48}
          className="w-full h-full block"
        />
      </div>
      <div>
        <div className="text_3">{label}</div>
        <div className="text_3">{content}</div>
      </div>
    </Link>
  );
}
