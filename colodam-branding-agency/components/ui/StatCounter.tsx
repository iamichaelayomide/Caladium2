"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatCounter({ value, suffix, label, description }: { value: number; suffix: string; label: string; description: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 100, damping: 30 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) count.set(value);
  }, [count, inView, value]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="font-display text-5xl font-semibold text-ink md:text-6xl">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <h3 className="text-lg font-semibold text-ink">{label}</h3>
      <p className="max-w-xs text-sm text-muted">{description}</p>
    </div>
  );
}
