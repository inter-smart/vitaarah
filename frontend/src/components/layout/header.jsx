"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header({ logo, navigation, ctaButton }) {
  const [isOpen, setIsOpen] = useState(false);
  // const navLinks = navigation?.length ? navigation : defaultNav;

  return (
    <header className="w-full flex items-center">
      <div className="container">
        <div className="h-(--header-y-sm) xl:h-(--header-y-xl) 2xl:h-(--header-y-2xl) 3xl:h-(--header-y-3xl) flex flex-wrap items-center justify-between">
          {logo ? (
            <Link
              href="/"
              className="w-[120px] xl:w-[136px] 2xl:w-[170px] 3xl:w-[246px] flex items-center gap-2"
            >
              <Image
                src={logo.url}
                alt={logo.alternativeText || "Vitaarah"}
                width={170}
                height={44}
                className="w-full h-full"
              />
            </Link>
          ) : (
            <div className="w-[120px] xl:w-[136px] 2xl:w-[170px] 3xl:w-[246px]" />
          )}
          <div className="sm:flex items-center gap-[48px] 2xl:gap-[54px] 3xl:gap-[65px]">
            {ctaButton && (
              <Button
                as="a"
                variant="none"
                size="none"
                href={`tel:${ctaButton.url}`}
                className="max-sm:hidden text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-none font-helvetica font-normal text-center text-[#1c1c1c] bg-white border-white"
              >
                <span className="w-[11px] 2xl:w-[12px] 3xl:w-[14px]">
                  <Image
                    src="/images/icon-call.svg"
                    alt="icon call"
                    width={15}
                    height={15}
                    className="w-full h-full"
                  />
                </span>
                <span>{ctaButton.label}</span>
              </Button>
            )}

            {/* <nav>
          {navigation?.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-[12px] xl:text-[12.6px] 2xl:text-[14.3px] 3xl:text-[17.3px] leading-none font-helvetica font-normal text-[#202020] flex items-center gap-[13px] 2xl:gap-[14px] 3xl:gap-[18px]"
            >
              <span>MENU</span>
              {/* {isOpen ? (
                {[1, 2, 3].map((i) => (
                  <span key={i} className="w-3 h-0.5 bg-[#202020]" />
                ))}
              ) : <Menu size={24} />} */}
              <span className="flex flex-col gap-[3px] 2xl:gap-[3.5px] 3xl:gap-[4px]">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={cn(
                      "w-[18px] h-0.5 rounded-full bg-[#202020]",
                      i === 2 && "w-8/10 bg-[#a14962]",
                      i === 1 && isOpen && "rotate-45",
                      i === 2 && isOpen && "opacity-0",
                      i === 3 && isOpen && "-rotate-45",
                    )}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#ece7d7]" />
      </div>

      <div
        className={cn(
          "fixed z-10 inset-0 overflow-hidden border-b transition-all duration-300",
          isOpen ? "max-h-64" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-2 px-4 pb-4 pt-2">
          {navigation.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              onClick={() => setIsOpen(false)}
              className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {ctaButton ? (
            <Button
              size="sm"
              className="mt-2 w-full"
              as="a"
              href={ctaButton.url}
            >
              {ctaButton.label}
            </Button>
          ) : (
            <Button size="sm" className="mt-2 w-full">
              Get Started
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
