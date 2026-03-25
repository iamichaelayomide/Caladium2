import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "ghost" | "outline" | "light" | "dark" | "secondary";
  size?: "sm" | "md" | "lg";
};

const styles = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  ghost: "bg-transparent text-ink hover:text-accent",
  outline: "border border-border bg-transparent text-ink hover:border-accent hover:text-white hover:bg-white/5",
  light: "bg-white text-[#0b0911] hover:bg-[#f3e7f0]",
  dark: "border border-white/20 bg-white/10 text-white hover:bg-white/20",
  secondary: "bg-accent text-white hover:bg-accent-hover"
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base"
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
