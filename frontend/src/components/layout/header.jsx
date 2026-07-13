"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function Header({ logo, navigation = [], ctaButton }) {
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

  return (
    <header className="w-full flex flex-col items-center relative z-50 bg-white">
      <div className="container">
        <div className="h-(--header-y-sm) xl:h-(--header-y-xl) 2xl:h-(--header-y-2xl) 3xl:h-(--header-y-3xl) flex flex-wrap items-center justify-between">
          {logo ? (
            <Link
              href="/"
              className="w-[120px] xl:w-[136px] 2xl:w-[170px] 3xl:w-[246px] flex items-center gap-2"
            >
              <Image
                src={getStrapiMediaUrl(logo.url)}
                alt={logo.alternativeText || "Vitaarah"}
                width={170}
                height={44}
                className="w-full h-full"
              />
            </Link>
          ) : (
            <div className="w-[120px] xl:w-[136px] 2xl:w-[170px] 3xl:w-[246px]" />
          )}
          <div className="flex items-center gap-[48px] 2xl:gap-[54px] 3xl:gap-[65px]">
            {ctaButton && (
              <Button
                as="a"
                variant="none"
                size="none"
                href={ctaButton.url}
                target={ctaButton.is_external ? "_blank" : undefined}
                rel={ctaButton.is_external ? "noopener noreferrer" : undefined}
                className="max-sm:hidden text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-none font-helvetica font-normal text-center text-[#1c1c1c] bg-white border-white flex items-center gap-2 hover:opacity-85 transition-opacity"
              >
                {ctaButton.icon && (
                  <span className="w-[11px] 2xl:w-[12px] 3xl:w-[14px]">
                    <Image
                      src={getStrapiMediaUrl(ctaButton.icon.url)}
                      alt="icon"
                      width={15}
                      height={15}
                      className="w-full h-full"
                    />
                  </span>
                )}
                <span>{ctaButton.label}</span>
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
        <div className="w-full h-0.5 bg-[#ece7d7]" />
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed z-10 inset-x-0 top-(--header-y-sm) xl:top-(--header-y-xl) 2xl:top-(--header-y-2xl) 3xl:top-(--header-y-3xl) overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <div className="container">
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="w-full bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-4 sm:p-6 xl:p-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-8 lg:gap-x-[26px] xl:gap-x-[34px] 2xl:gap-x-[37px] 3xl:gap-x-[45px] relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[454/408] group max-lg:hidden">
                  <Image
                    src="/images/mega-menu-spa.jpg"
                    alt="Spa treatment"
                    fill
                    sizes="576px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex flex-col justify-between h-full gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-[71px] xl:gap-x-[91px] 2xl:gap-x-[100px] 3xl:gap-x-[121px]">
                    {navigation.map((link) => {
                      const isActive = pathname === link.url;
                      return (
                        <Link
                          key={link.url}
                          href={link.url}
                          target={link.is_external ? "_blank" : undefined}
                          rel={
                            link.is_external ? "noopener noreferrer" : undefined
                          }
                          onClick={() => !link.is_external && setIsOpen(false)}
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
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
