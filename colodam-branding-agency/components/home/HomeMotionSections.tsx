"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { StaggerItem, StaggerReveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";

const tickerItems = [
  "Brand Strategy",
  "Campaign Systems",
  "Creative Direction",
  "Performance Marketing",
  "Conversion Design",
  "Launch Operations",
  "Storytelling",
  "Social Content Engine"
];

const stickySteps = [
  {
    title: "Signal Discovery",
    description:
      "We map audience behavior, category blind spots, and your strongest unfair advantage before any campaign spend starts."
  },
  {
    title: "Narrative + Visual Build",
    description:
      "We shape one clear narrative and design language that is flexible enough for ads, web, social, and founder-led channels."
  },
  {
    title: "Launch + Optimize",
    description:
      "We ship the campaign system, monitor conversion signals weekly, and keep improving performance through structured experiments."
  }
];

export function HomeMotionSections() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"]
  });
  const reduced = useReducedMotion();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });
  const progressHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <section className="overflow-hidden border-b border-slate-200 bg-white py-6">
        <motion.div
          className="marquee-track flex gap-3"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduced
              ? undefined
              : {
                  duration: 32,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }
          }
        >
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </section>

      <section className="border-b border-slate-200 bg-[#f1f6ff] py-16">
        <div className="container-shell">
          <StaggerReveal className="grid gap-6 md:grid-cols-3">
            <StaggerItem className="rounded-3xl border border-slate-200 bg-white p-6">
              <StatCounter
                value={142}
                suffix="+"
                label="Campaigns launched"
                description="Go-to-market programs delivered across B2B, consumer, and SaaS teams."
              />
            </StaggerItem>
            <StaggerItem className="rounded-3xl border border-slate-200 bg-white p-6">
              <StatCounter
                value={38}
                suffix="%"
                label="Avg conversion lift"
                description="Median improvement after messaging and campaign system overhaul."
              />
            </StaggerItem>
            <StaggerItem className="rounded-3xl border border-slate-200 bg-white p-6">
              <StatCounter
                value={21}
                suffix=" days"
                label="First optimization cycle"
                description="Average time to first measurable improvement after launch."
              />
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      <section ref={sectionRef} className="border-b border-slate-200 bg-white py-20">
        <div className="container-shell grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <p className="text-label text-blue-700">Sticky Scroll Story</p>
            <h2 className="mt-4 font-bricolage text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-900">
              Scroll through how Colodam builds growth momentum.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              This model keeps strategy and execution in one loop so your brand keeps compounding
              instead of restarting from scratch each quarter.
            </p>

            <div className="relative mt-7 h-52 rounded-3xl border border-blue-100 bg-[#edf4ff] p-4">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Creative strategy team in planning workshop"
                fill
                className="rounded-3xl object-cover"
                sizes="(max-width: 1280px) 100vw, 42vw"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0f172a]/45 via-[#0f172a]/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-3 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Operational Focus</p>
                <p className="mt-1 text-sm text-slate-700">One source of truth across message, creative, and growth.</p>
              </div>
            </div>
          </div>

          <div className="relative pl-7">
            <div className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-blue-100" />
            <motion.div
              className="absolute left-0 top-0 w-[2px] rounded-full bg-blue-600"
              style={{ height: progressHeight }}
            />

            <div className="space-y-8">
              {stickySteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={reduced ? false : { opacity: 0, y: 28 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 font-bricolage text-[1.9rem] font-semibold leading-[1.02] text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
