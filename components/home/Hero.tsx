"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Dot } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { heroImage, stats } from "@/lib/site-data";

export function HomeHero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 88]);

  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-28 text-white md:pt-32">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image src={heroImage} alt="Lagos skyline" fill priority className="object-cover" />
      </motion.div>
      <div aria-hidden className="hero-overlay absolute inset-0" />
      <div aria-hidden className="hero-grid absolute inset-0 opacity-40" />
      <div aria-hidden className="hero-glow absolute inset-0" />

      <div className="container-shell relative z-10 flex w-full flex-col justify-end pb-10 md:pb-14">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end"
        >
          <div className="max-w-[46rem]">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              className="text-label text-white/58"
            >
              Caladium Consulting
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-6 font-bricolage text-[clamp(3.6rem,9vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-balance"
            >
              Strategy advisory with discipline, calm, and real operating depth.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-[1.15rem]"
            >
              We help African businesses sharpen direction, align teams, and build the systems that
              turn growth ambition into measurable progress.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="/contact" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore services <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/58"
            >
              <span>Board and leadership advisory</span>
              <Dot className="h-4 w-4" />
              <span>Operating model design</span>
              <Dot className="h-4 w-4" />
              <span>Market entry and transformation</span>
            </motion.div>
          </div>

          <motion.aside
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="hero-panel hidden rounded-[32px] p-6 lg:block"
          >
            <p className="text-label text-white/45">Why leaders call us</p>
            <div className="mt-6 space-y-6">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
                  <div className="font-bricolage text-4xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <p className="mt-2 text-sm font-medium text-white/82">{stat.label}</p>
                  <p className="mt-2 text-sm leading-7 text-white/54">{stat.description}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
