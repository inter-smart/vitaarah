import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const inputBase =
  "text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-none font-normal text-white placeholder:text-white w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[55px] bg-none border-b border-white/20 focus:outline-none focus:ring-0 focus:border-white disabled:opacity-60";

const Input = forwardRef(function Input({ className, type, ...props }, ref) {
  return (
    <input
      type={type}
      className={cn(inputBase, className)}
      ref={ref}
      {...props}
    />
  );
});

export { Input };
