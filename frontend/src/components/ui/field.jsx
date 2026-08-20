import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const FieldGroup = forwardRef(function FieldGroup({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8", className)}
      {...props}
    />
  );
});

const Field = forwardRef(function Field({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
});

const FieldLabel = forwardRef(function FieldLabel({ className, ...props }, ref) {
  return (
    <label
      ref={ref}
      className={cn(
        "text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] leading-none font-normal text-white/80",
        className,
      )}
      {...props}
    />
  );
});

const FieldError = forwardRef(function FieldError(
  { className, errors, ...props },
  ref,
) {
  if (!errors || errors.length === 0) return null;
  return (
    <div
      ref={ref}
      className={cn(
        "text-[10px] xl:text-[11px] 3xl:text-[12px] leading-normal font-normal text-red-300",
        className,
      )}
      {...props}
    >
      {errors.map((error, i) => (
        <span key={i}>{typeof error === "string" ? error : error.message}</span>
      ))}
    </div>
  );
});

const FieldDescription = forwardRef(function FieldDescription(
  { className, ...props },
  ref,
) {
  return (
    <p
      ref={ref}
      className={cn(
        "text-[10px] xl:text-[11px] 3xl:text-[12px] leading-normal font-normal text-white/60",
        className,
      )}
      {...props}
    />
  );
});

export { FieldGroup, Field, FieldLabel, FieldError, FieldDescription };
