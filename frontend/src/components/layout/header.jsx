"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function Header({
  header_logo,
  navigation = [],
  mega_menu_image,
  cta_button,
  support_phone,
  support_email,
  social_links = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 1) Lock full screen scroll and handle Escape key close when mega menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      const atTop = current < 50;
      setVisible(atTop || current < lastY);
      setIsScrolled(!atTop);
      lastY = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      // style={{
      //   transform: visible ? "translateY(0)" : "translateY(-100%)",
      //   opacity: visible ? 1 : 0,
      //   transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
      // }}
      className={cn(
        "w-full z-50 top-0 inset-x-0 flex flex-col items-center bg-white transition-[background-color,backdrop-filter,box-shadow] fixed",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm duration-500 delay-100"
          : "bg-white duration-300 delay-0",
      )}
    >
      <div className="container">
        <div
          className={cn(
            " flex flex-wrap items-center justify-between transition-[height] duration-300 delay-0",
            isScrolled
              ? "h-[60px] xl:h-[80px] 2xl:h-[90px] 3xl:h-[100px]"
              : "h-(--header-y)",
          )}
        >
          {header_logo ? (
            <Link
              href="/"
              className="w-[120px] xl:w-[136px] 2xl:w-[170px] 3xl:w-[246px] flex items-center gap-2"
            >
              <Image
                src={getStrapiMediaUrl(header_logo.url)}
                alt={header_logo.alternativeText || "Vitaarah"}
                width={170}
                height={44}
                priority
                className="w-full h-full"
              />
            </Link>
          ) : (
            <div className="w-[120px] xl:w-[136px] 2xl:w-[170px] 3xl:w-[246px]" />
          )}
          <div className="flex items-center gap-[48px] 2xl:gap-[54px] 3xl:gap-[65px]">
            {cta_button?.url && (
              <Button
                variant="none"
                size="none"
                className="max-sm:hidden text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-none font-helvetica font-normal text-center text-[#1c1c1c] bg-none border-none flex items-center gap-2 hover:shadow-none transition-opacity"
                asChild
              >
                <Link
                  href={`tel:${cta_button.url}`}
                  target="_blank"
                  rel={
                    cta_button.is_external ? "noopener noreferrer" : undefined
                  }
                >
                  {cta_button.icon && (
                    <span className="w-[11px] 2xl:w-[12px] 3xl:w-[14px]">
                      <Image
                        src={getStrapiMediaUrl(cta_button.icon.url)}
                        alt="icon"
                        width={15}
                        height={15}
                        className="w-full h-full"
                      />
                    </span>
                  )}
                  <span>{cta_button.label}</span>
                </Link>
              </Button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-none font-helvetica font-normal text-[#202020] flex items-center gap-[13px] 2xl:gap-[14px] 3xl:gap-[18px] cursor-pointer"
            >
              <span>MENU</span>
              <span className="flex flex-col gap-[3px] 2xl:gap-[3.5px] 3xl:gap-[4px]">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={cn(
                      "w-[18px] h-0.5 rounded-full bg-[#202020] block transition-all duration-300",
                      i === 2 && "w-8/10 bg-[#a14962]",
                      i === 1 &&
                        isOpen &&
                        "rotate-45 translate-y-[5px] 2xl:translate-y-[5.5px] 3xl:translate-y-[6px]",
                      i === 2 && isOpen && "opacity-0",
                      i === 3 &&
                        isOpen &&
                        "-rotate-45 -translate-y-[5px] 2xl:-translate-y-[5.5px] 3xl:-translate-y-[6px]",
                    )}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>
        <div
          className={cn(
            "w-full h-0.5 bg-[#ece7d7] transition-opacity duration-300",
            isScrolled && "opacity-0",
          )}
        />
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "fixed z-10 inset-x-0 overflow-y-auto",
              isScrolled
                ? "top-[60px] xl:top-[80px] 2xl:top-[90px] 3xl:top-[100px]"
                : "top-(--header-y-sm) xl:top-(--header-y-xl) 2xl:top-(--header-y-2xl) 3xl:top-(--header-y-3xl)",
            )}
            data-lenis-prevent="true"
            onClick={() => setIsOpen(false)}
          >
            <div className="container">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className={cn("w-full bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-4 sm:p-6 xl:p-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-8 lg:gap-x-[26px] xl:gap-x-[34px] 2xl:gap-x-[37px] 3xl:gap-x-[45px] relative overflow-hidden",
                  isScrolled ? "bg-white" : "bg-white/80"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[454/408] group max-lg:hidden">
                  <Image
                    src={getStrapiMediaUrl(mega_menu_image?.url)}
                    alt={mega_menu_image?.alternativeText || "Vitaarah"}
                    fill
                    sizes="576px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex flex-col justify-between h-full gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-[71px] xl:gap-x-[91px] 2xl:gap-x-[100px] 3xl:gap-x-[121px]">
                    {navigation
                      .filter((link) => link?.url)
                      .map((link, idx) => {
                        const isActive = pathname === link.url;
                        return (
                          <Link
                            key={`${idx}-${link.url}`}
                            href={link.url}
                            target={link.is_external ? "_blank" : undefined}
                            rel={
                              link.is_external
                                ? "noopener noreferrer"
                                : undefined
                            }
                            onClick={() =>
                              !link.is_external && setIsOpen(false)
                            }
                            className={cn(
                              "text-[14px] lg:text-[17px] xl:text-[21.3px] 2xl:text-[23.3px] 3xl:text-[28.9px] leading-tight font-helvetica py-3 lg:py-4 xl:py-[19px] 2xl:py-[21px] 3xl:py-[26px] transition-colors duration-200",
                              "border-b border-black/10",
                              isActive
                                ? "text-[#a14962]"
                                : "text-[#202020] hover:text-[#a14962]",
                            )}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                  </div>

                  <div className="w-full bg-[#fff9eb] p-3 lg:p-[22px_10px] xl:p-[26px_13px] 2xl:p-[31px_15px] 3xl:p-[38px_18px] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border border-[#f3ebda]">
                    <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px]">
                      {/* {support_phone from site settings and support_email from site settings */}
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
                    </div>
                    {/* social_links && social_links.length > 0 &&  from site settings */}
                    <div className="flex items-center gap-[15px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]">
                      <div className="text_3 leading-none font-helvetica-light text-black">
                        Follow Us
                      </div>
                      <div className="flex items-center gap-[15px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[33px]">
                        {social_links.map((link, idx) => (
                          <Link
                            key={idx + link.url}
                            href={link.url}
                            target="_blank"
                            aria-label={link.label}
                            className="flex gap-2"
                          >
                            <Image
                              src={
                                getStrapiMediaUrl(link.icon) ||
                                "/images/placeholder.jpg"
                              }
                              alt={link.label || "social"}
                              width={48}
                              height={48}
                              className="w-[10px] sm:w-[12px] xl:w-[13px] 2xl:w-[14px] 3xl:w-[16px] aspect-square object-contain block"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ConnectCard({ url, alternativeText, label, linkUrl, content }) {
  return (
    <div className="flex gap-2.5 xl:gap-[12px] 2xl:gap-[13px] 3xl:gap-[15px]">
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
        <div className="text_3 leading-none font-helvetica-light text-[#875849] xl:mb-0.5 2xl:mb-1">
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
