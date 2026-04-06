"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Dot } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { heroImage, stats } from "@/lib/site-data";

type HomeHeroProps = {
  label?: string;
  title?: string;
  description?: string;
  statsData?: (typeof stats)[number][];
};

export function HomeHero({
  label = "Colodam",
  title = "Build a brand people remember and a growth engine that performs.",
  description = "Colodam blends brand strategy, content direction, and campaign execution to help African businesses launch louder, look sharper, and convert consistently.",
  statsData = [...stats]
}: HomeHeroProps) {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 88]);
  const compactStats = statsData.slice(0, 3);

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-24 text-white md:pt-28 xl:pt-32">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image src={heroImage} alt="Lagos skyline" fill priority className="object-cover" />
      </motion.div>
      <div aria-hidden className="hero-overlay absolute inset-0" />
      <div aria-hidden className="hero-grid absolute inset-0 opacity-40" />
      <div aria-hidden className="hero-glow absolute inset-0" />

      <div className="container-shell relative z-10 flex w-full flex-col justify-end pb-8 md:pb-10 xl:pb-14">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-end xl:gap-12"
        >
          <div className="max-w-[46rem]">
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              className="text-label text-white/58"
            >
              {label}
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-5 font-bricolage text-[clamp(2.3rem,8vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-balance"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-5 max-w-2xl text-[0.94rem] leading-7 text-white/74 md:leading-8 xl:text-[1.05rem]"
            >
              {description}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button href="/contact" variant="primary" size="lg">
                Book a brand strategy call
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore services <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/58"
            >
              <span>Brand strategy and identity</span>
              <Dot className="hidden h-4 w-4 sm:block" />
              <span>Creative and content systems</span>
              <Dot className="hidden h-4 w-4 sm:block" />
              <span>Paid media and conversion growth</span>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 grid gap-3 sm:grid-cols-3 xl:hidden"
            >
              {compactStats.map((stat) => (
                <div key={stat.label} className="hero-panel rounded-[26px] p-4">
                  <div className="font-bricolage text-3xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <p className="mt-2 text-sm font-medium text-white/82">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="hero-panel hidden rounded-[32px] p-6 xl:block"
          >
            <p className="text-label text-white/45">Why brands pick Colodam</p>
            <div className="mt-6 space-y-6">
              {statsData.slice(0, 3).map((stat) => (
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
