"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  className
}: {
  items: Item[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-border py-5">
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-base font-semibold text-ink md:text-lg">{item.question}</span>
              {isOpen ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm leading-7 text-muted">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
