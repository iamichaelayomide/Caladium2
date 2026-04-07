import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "ghost" | "outline" | "light" | "dark" | "secondary";
  size?: "sm" | "md" | "lg";
};

const styles = {
  primary:
    "bg-accent text-white shadow-[0_14px_34px_rgba(37,99,235,0.24)] hover:bg-accent-hover hover:shadow-[0_18px_38px_rgba(37,99,235,0.3)]",
  ghost:
    "border border-accent/55 bg-accent text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] hover:border-accent-hover hover:bg-accent-hover",
  outline:
    "border border-accent/55 bg-accent text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] hover:border-accent-hover hover:bg-accent-hover",
  light:
    "border border-accent/55 bg-accent text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] hover:border-accent-hover hover:bg-accent-hover",
  dark:
    "border border-accent/55 bg-accent text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border border-accent/55 bg-accent text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] hover:border-accent-hover hover:bg-accent-hover"
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-55";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, href, variant = "primary", size = "md", children, ...props },
  ref
) {
  if (href) {
    return (
      <Link href={href} className={cn(baseClass, sizes[size], styles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={cn(baseClass, sizes[size], styles[variant], className)} {...props}>
      {children}
    </button>
  );
});
