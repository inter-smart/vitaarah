import { forwardRef, Children, cloneElement } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "text-white bg-linear-to-l from-[#e9cba3] to-[#a14962] border border-[#e9cba3]",
  outline:
    "text-[#1c1c1c] border border-[#ece7d7] bg-white",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizes = {
  default:
    "text-[11px] lg:text-[11.3px] xl:text-[14px] 2xl:text-[15.8px] 3xl:text-[19.2px] leading-none font-helvetica font-normal text-center h-[27px] xl:h-[32.8px] 2xl:h-[37px] 3xl:h-[45px] px-[13px] 2xl:px-[14px] 3xl:px-[18px]",
  sm: "h-8 rounded-sm px-3",
  lg: "",
};

const Button = forwardRef(function Button(
  {
    className,
    variant = "default",
    size = "default",
    as: Comp = "button",
    asChild,
    children,
    ...props
  },
  ref,
) {
  const classString = cn(
    "inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (asChild) {
    const child = Children.only(children);
    return cloneElement(child, {
      ref,
      className: cn(classString, child.props.className),
      ...props,
    });
  }

  return (
    <Comp ref={ref} className={classString} {...props}>
      {children}
    </Comp>
  );
});

export { Button };
