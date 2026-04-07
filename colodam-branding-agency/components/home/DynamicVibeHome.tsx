"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

type ServiceCard = {
  slug: string;
  name: string;
  shortName: string;
  cardDescription: string;
};

type TeamCard = {
  name: string;
  title: string;
  bio: string;
};

export function DynamicVibeHome({
  services,
  team
}: {
  services: ServiceCard[];
  team: TeamCard[];
}) {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const layerOneY = useTransform(scrollY, [0, 1400], [0, 240]);
  const layerTwoY = useTransform(scrollY, [0, 1400], [0, -200]);
  const layerThreeY = useTransform(scrollY, [0, 1400], [0, 140]);
  const heroVisualY = useTransform(scrollY, [0, 1000], [0, -80]);
  const galleryLeftY = useTransform(scrollY, [200, 1800], [0, -160]);
  const galleryRightY = useTransform(scrollY, [200, 1800], [0, 170]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#e9f2ff_0%,#f6faff_52%,#ffffff_100%)] pt-28 md:pt-32">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-300/40 blur-3xl"
          style={{ y: reducedMotion ? undefined : layerOneY }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-4rem] top-24 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl"
          style={{ y: reducedMotion ? undefined : layerTwoY }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-[42%] top-[52%] h-48 w-48 rounded-full bg-cyan-300/35 blur-3xl"
          style={{ y: reducedMotion ? undefined : layerThreeY }}
        />

        <div className="container-shell relative pb-20">
          <div className="grid gap-10 xl:grid-cols-[1fr_1fr] xl:items-center">
            <div>
              <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-label text-blue-700">
                Colodam Brand Dynamics
              </p>
              <h1 className="mt-6 max-w-3xl font-bricolage text-[clamp(2.6rem,7vw,6.2rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-slate-900">
                A different kind of
                <span className="block bg-[linear-gradient(100deg,#1d4ed8,#0ea5e9)] bg-clip-text text-transparent">
                  growth playground.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-slate-600">
                We design brand universes, launch campaign systems, and run weekly optimization
                loops that turn attention into durable demand.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Start a project
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore stack <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <motion.div
              style={{ y: reducedMotion ? undefined : heroVisualY }}
              className="relative overflow-hidden rounded-[2.2rem] border border-blue-100 bg-white p-4 shadow-[0_24px_56px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-[26rem] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1400&q=80"
                  alt="Creative growth planning dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 46vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-[#0f172a]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Live Campaign Room</p>
                  <p className="mt-1 text-sm text-slate-700">Creative, media, and conversion signals in one control layer.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="container-shell overflow-hidden">
          <motion.div
            className="marquee-track flex gap-3"
            animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              reducedMotion
                ? undefined
                : { duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
            }
          >
            {[
              "Narrative Engineering",
              "Brand Worldbuilding",
              "Growth Creative",
              "Offer Positioning",
              "Launch Operations",
              "Conversion Optimization",
              "Social Systems",
              "Paid Strategy",
              "Narrative Engineering",
              "Brand Worldbuilding",
              "Growth Creative",
              "Offer Positioning",
              "Launch Operations",
              "Conversion Optimization",
              "Social Systems",
              "Paid Strategy"
            ].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f3f8ff] py-16">
        <div className="container-shell grid gap-6 xl:grid-cols-2">
          <motion.div
            style={{ y: reducedMotion ? undefined : galleryLeftY }}
            className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-slate-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="Team workshop and strategy session"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 via-transparent to-transparent" />
          </motion.div>

          <motion.div style={{ y: reducedMotion ? undefined : galleryRightY }} className="grid gap-4">
            {services.slice(0, 4).map((service, index) => (
              <motion.article
                key={service.slug}
                initial={reducedMotion ? false : { opacity: 0, x: 36 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.34 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-label text-blue-700">{service.shortName}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                  >
                    View <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <h2 className="mt-3 font-bricolage text-2xl font-semibold leading-[1.05] text-slate-900">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.cardDescription}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {team.slice(0, 4).map((member, index) => (
              <motion.article
                key={member.name}
                initial={reducedMotion ? false : { opacity: 0, y: 26 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5"
              >
                <p className="font-bricolage text-2xl font-semibold text-slate-900">{member.name}</p>
                <p className="mt-1 text-sm text-blue-700">{member.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
