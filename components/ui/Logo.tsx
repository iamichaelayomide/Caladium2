import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  dark?: boolean;
  compact?: boolean;
  className?: string;
};

export function Logo({ dark = false, compact = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/caladium-logo.png"
        alt="Caladium Consulting"
        width={1536}
        height={457}
        className={cn(
          "w-auto object-contain",
          compact ? "h-8 sm:h-9" : "h-11 sm:h-12 md:h-14",
          dark ? "" : "drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]"
        )}
        sizes={compact ? "(max-width: 640px) 144px, 168px" : "(max-width: 640px) 180px, 240px"}
      />
    </span>
  );
}
