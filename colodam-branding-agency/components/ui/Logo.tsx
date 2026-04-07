import { cn } from "@/lib/utils";

type LogoProps = {
  dark?: boolean;
  compact?: boolean;
  className?: string;
};

export function Logo({ dark = false, compact = false, className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-bricolage font-semibold tracking-[-0.03em]",
        compact ? "text-2xl sm:text-[1.7rem]" : "text-[2rem] sm:text-[2.2rem] md:text-[2.4rem]",
        dark ? "text-slate-900" : "text-slate-900",
        className
      )}
      aria-label="colodium"
    >
      colodium
    </span>
  );
}
