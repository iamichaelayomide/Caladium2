"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { aboutContent } from "@/lib/cello-content";

export default function AboutPage() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const layerA = useTransform(scrollY, [0, 1200], [0, 180]);
  const layerB = useTransform(scrollY, [0, 1200], [0, -120]);

  return (
    <main className="pt-28">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#edf5ff_0%,#ffffff_100%)] py-16">
        <motion.div aria-hidden className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" style={{ y: reduceMotion ? undefined : layerA }} />
        <motion.div aria-hidden className="pointer-events-none absolute right-[-4rem] top-20 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" style={{ y: reduceMotion ? undefined : layerB }} />
        <div className="container-shell relative grid gap-8 xl:grid-cols-[1fr_1fr] xl:items-center">
          <div>
            <p className="text-label text-blue-700">About</p>
            <h1 className="mt-4 font-bricolage text-[clamp(2.2rem,5.5vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-slate-900">{aboutContent.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600">{aboutContent.description}</p>
          </div>
          <div className="relative h-[26rem] overflow-hidden rounded-[2rem] border border-slate-200">
            <Image src={aboutContent.image} alt="About visual" fill className="object-cover" sizes="(max-width:1280px) 100vw, 46vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {aboutContent.blocks.map((block, index) => (
            <motion.article
              key={block.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-3xl border border-slate-200 bg-[#f7fbff] p-6"
            >
              <h2 className="font-bricolage text-3xl font-semibold text-slate-900">{block.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{block.body}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

