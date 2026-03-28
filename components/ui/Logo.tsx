import { cn } from "@/lib/utils";

export function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div className={cn("inline-flex items-start", compact ? "gap-2" : "gap-3")}>
      <div className="relative pt-1">
        <span
          className={cn(
            "font-bricolage font-bold tracking-[-0.04em]",
            compact ? "text-2xl" : "text-[40px]",
            dark ? "text-white" : "text-ink"
          )}
        >
          Calad
          <span className={cn(dark ? "text-white" : "text-ink")}>u</span>m
        </span>
        <span
          className={cn(
            "absolute -top-1 rounded-full border",
            compact ? "left-[67%] h-2.5 w-2.5" : "left-[67.8%] h-4 w-4",
            dark ? "border-white/70" : "border-ink/60"
          )}
        />
        <span
          className={cn(
            "absolute rounded-full",
            compact ? "left-[61.8%] top-[-0.1rem] h-6 w-4" : "left-[62.8%] top-[-0.2rem] h-10 w-6",
            "bg-lime-500"
          )}
          style={{
            clipPath:
              "polygon(50% 0%, 72% 10%, 84% 28%, 86% 52%, 72% 74%, 50% 100%, 28% 74%, 14% 52%, 16% 28%, 28% 10%)"
          }}
        >
          <span
            className={cn(
              "absolute left-1/2 -translate-x-1/2 rounded-full bg-yellow-300",
              compact ? "top-[4px] h-[18px] w-[7px]" : "top-[6px] h-[28px] w-[10px]"
            )}
            style={{
              clipPath: "polygon(50% 0%, 75% 22%, 72% 100%, 28% 100%, 25% 22%)"
            }}
          />
        </span>
      </div>
      {!compact ? (
        <div className="pt-3">
          <div
            className={cn(
              "text-[12px] uppercase tracking-[0.7em]",
              dark ? "text-white/78" : "text-ink/70"
            )}
          >
            Consulting
          </div>
        </div>
      ) : null}
    </div>
  );
}
