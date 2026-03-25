"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { heroImage } from "@/lib/site-data";

export function HomeHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={heroImage} alt="Lagos skyline" fill priority className="object-cover" />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />
      <div className="container-shell relative z-10 py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-[700px]"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mb-5 text-label font-semibold uppercase tracking-[0.14em] text-white/60"
          >
            Caladium Consulting · Est. 2010
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="font-display text-[clamp(2.9rem,6vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-balance"
          >
            Your strategy partner in African business growth
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-5 max-w-[560px] text-base leading-7 text-white/74 md:text-lg"
          >
            We partner with visionary African leaders to unlock growth, navigate transformation, and
            build future-proof enterprises through tailored strategy and operational excellence.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/contact" variant="light">
              Let&apos;s Talk Strategy {">"}
            </Button>
            <Button href="/services" variant="dark">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
