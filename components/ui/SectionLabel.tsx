import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mb-5 flex items-center gap-3 text-label font-semibold uppercase tracking-[0.22em] text-faint",
        className
      )}
    >
      <span className="h-px w-10 bg-current/50" />
      <span>{children}</span>
    </div>
  );
}
