"use client";
import Image from "next/image";

export default function FallbackImage({ src, fallbackSrc = "/images/placeholder.jpg", ...props }) {
  return (
    <Image
      src={src || fallbackSrc}
      {...props}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.srcset = "";
        e.currentTarget.src = fallbackSrc;
      }}
    />
  );
}
