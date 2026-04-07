"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { homeContent } from "@/lib/cello-content";

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 1400], [0, 260]);
  const orbY = useTransform(scrollY, [0, 1400], [0, -220]);
  const heroY = useTransform(scrollY, [0, 900], [0, -90]);
  const galleryY = useTransform(scrollY, [300, 1800], [0, -140]);

  return (
    <>
      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#eaf3ff_0%,#f7fbff_48%,#ffffff_100%)]">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-300/45 blur-3xl"
            style={{ y: reduceMotion ? undefined : bgY }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[-5rem] top-24 h-80 w-80 rounded-full bg-cyan-300/45 blur-3xl"
            style={{ y: reduceMotion ? undefined : orbY }}
          />

          <div className="container-shell relative grid gap-10 py-16 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
            <div>
              <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-label text-blue-700">
                {homeContent.hero.badge}
              </p>
              <h1 className="mt-6 font-bricolage text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.06em] text-slate-900">
                {homeContent.hero.titleA}
                <span className="block bg-[linear-gradient(100deg,#1d4ed8,#0ea5e9)] bg-clip-text text-transparent">
                  {homeContent.hero.titleB}
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-slate-600">{homeContent.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Start your project
                </Button>
                <Button href="/work" variant="outline" size="lg">
                  View work <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <motion.div style={{ y: reduceMotion ? undefined : heroY }} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_48px_rgba(15,23,42,0.14)]">
              <div className="relative h-[27rem] overflow-hidden rounded-[1.5rem]">
                <Image src={homeContent.hero.image} alt="Hero visual" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 46vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-[#0f172a]/8 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="overflow-hidden border-b border-slate-200 bg-white py-8">
          <div className="container-shell">
            <motion.div
              className="marquee-track flex gap-3"
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
              }
            >
              {homeContent.ticker.map((item, i) => (
                <span key={`${item}-${i}`} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#f4f8ff] py-16">
          <div className="container-shell grid gap-6 xl:grid-cols-2">
            <motion.div style={{ y: reduceMotion ? undefined : galleryY }} className="grid gap-4">
              {homeContent.work.slice(0, 2).map((project, index) => (
                <article key={project.title} className={`relative overflow-hidden rounded-[2rem] border border-slate-200 ${index === 0 ? "h-80" : "h-72"}`}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width:1280px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/80">{project.category}</p>
                    <h2 className="mt-2 font-bricolage text-3xl font-semibold leading-[1.02]">{project.title}</h2>
                  </div>
                </article>
              ))}
            </motion.div>

            <div className="space-y-4">
              {homeContent.process.map((item, index) => (
                <motion.article
                  key={item.step}
                  initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="rounded-3xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Step {item.step}</p>
                  <h3 className="mt-2 font-bricolage text-3xl font-semibold leading-[1.02] text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-16">
          <div className="container-shell grid gap-4 md:grid-cols-3">
            {homeContent.stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-6"
              >
                <p className="font-bricolage text-5xl font-semibold tracking-[-0.04em] text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#f4f8ff] py-16">
          <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homeContent.services.map((service, index) => (
              <motion.article
                key={service}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-3xl border border-slate-200 bg-white p-5"
              >
                <p className="text-label text-blue-700">Service</p>
                <h3 className="mt-3 font-bricolage text-2xl font-semibold text-slate-900">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Made to be modular, expressive, and launch-ready.</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-shell rounded-[2rem] border border-slate-200 bg-[#eaf3ff] p-8 text-center">
            <p className="text-label text-blue-700">Let&apos;s work</p>
            <h2 className="mt-4 font-bricolage text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-900">
              {homeContent.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">{homeContent.cta.body}</p>
            <div className="mt-7">
              <Button href="/contact" variant="primary" size="lg">{homeContent.cta.button}</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

