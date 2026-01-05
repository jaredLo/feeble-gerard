import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "nav" | "hero";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  size: ButtonSize;
  hoverEffect?: "slide";
  children: ReactNode;
};

const baseClasses = "cursor-pointer font-[500] tracking-tight2 select-none";
const sizeClasses: Record<ButtonSize, string> = {
  nav: "inline-flex h-[4.1rem] items-center gap-[0.698rem] rounded-[4.362rem] px-[1.8rem] py-[1.1rem] text-[1.6rem] leading-[1.9rem]",
  hero: "inline-flex items-center gap-[1.2rem] rounded-[5rem] px-[2rem] py-[1.15rem] text-[1.8rem] leading-[1.2]",
};
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#007AFF] text-white",
  outline: "border-[0.7px] border-[#6C788F] text-[#1D2026]",
};
const slideHoverClasses = [
  "relative isolate overflow-hidden",
  "transition-colors duration-300",
  "[transition-timing-function:cubic-bezier(0,0.4,0.62,0.98)]",
  "before:content-['']",
  "before:absolute before:-inset-[0.12rem] before:translate-x-full before:bg-white",
  "before:transition-transform before:duration-300",
  "before:[transition-timing-function:cubic-bezier(0,0.4,0.62,0.98)]",
  "before:rounded-[inherit]",
  "hover:before:translate-x-0 hover:bg-white hover:text-[#007AFF]",
  "hover:shadow-[0_10px_26px_rgba(15,23,42,0.12)]",
  "focus-visible:outline-none",
].join(" ");

export default function Button({
  variant,
  size,
  hoverEffect,
  children,
  className = "",
  type,
  ...props
}: ButtonProps) {
  const outlineExtras =
    variant === "outline" ? "w-[26.6rem] justify-center" : "";
  const slideHover = hoverEffect === "slide";
  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    outlineExtras,
    slideHover ? slideHoverClasses : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {slideHover ? (
        <span className="relative z-10">{children}</span>
      ) : (
        children
      )}
    </button>
  );
}
