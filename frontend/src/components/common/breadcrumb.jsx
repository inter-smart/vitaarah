import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbNav({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="container mt-1 xl:mt-1">
      <Breadcrumb>
        <BreadcrumbList className="flex-wrap items-center gap-1.5 xl:gap-2">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] leading-normal font-helvetica-light text-[#A14962] max-w-[120px] xl:max-w-[400px] truncate">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={item.href || "#"}
                        className="text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] leading-normal font-helvetica-light text-[#7C7C7C] hover:text-[#A14962] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && (
                  <BreadcrumbSeparator className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full border border-[#A14962] bg-transparent block" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
