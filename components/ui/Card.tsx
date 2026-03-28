import { cn } from "@/lib/utils";

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface-panel rounded-[28px] text-ink shadow-[0_24px_70px_rgba(0,0,0,0.28)]",
        className
      )}
    >
      {children}
    </div>
  );
}
