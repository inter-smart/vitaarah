"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Reveal({
  children,
  className,
  variant = "fade-up",
  as: Tag = "div",
  threshold = 0.15,
  rootMargin = "0px 0px -50px 0px",
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      data-reveal={variant !== "fade-up" ? variant : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
