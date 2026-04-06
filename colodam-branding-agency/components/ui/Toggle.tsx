"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type Option = "left" | "right";

export function Toggle({
  leftLabel,
  rightLabel,
  selected,
  onChange,
  badge
}: {
  leftLabel: string;
  rightLabel: string;
  selected: Option;
  onChange: (value: Option) => void;
  badge?: string;
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface p-1 shadow-soft">
      <button
        className={cn(
          "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
          selected === "left" ? "text-ink" : "text-muted"
        )}
        onClick={() => onChange("left")}
        type="button"
      >
        {selected === "left" ? (
          <motion.span
            layoutId="billing-toggle"
            className="absolute inset-0 rounded-full bg-accent-light"
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        ) : null}
        <span className="relative">{leftLabel}</span>
      </button>
      <button
        className={cn(
          "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
          selected === "right" ? "text-ink" : "text-muted"
        )}
        onClick={() => onChange("right")}
        type="button"
      >
        {selected === "right" ? (
          <motion.span
            layoutId="billing-toggle"
            className="absolute inset-0 rounded-full bg-accent-light"
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        ) : null}
        <span className="relative inline-flex items-center gap-2">
          {rightLabel}
          {badge ? (
            <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-white">
              {badge}
            </span>
          ) : null}
        </span>
      </button>
    </div>
  );
}
