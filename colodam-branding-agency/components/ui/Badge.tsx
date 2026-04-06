import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default"
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "gold";
}) {
  const toneClass =
    tone === "accent"
      ? "bg-accent text-white"
      : tone === "gold"
        ? "bg-gold-light text-gold"
        : "bg-soft text-muted";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
        toneClass,
        className
      )}
    >
      {children}
    </span>
  );
}
