"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

const floatingOrbs = [
  {
    className:
      "left-[6%] top-[18%] h-24 w-24 bg-[radial-gradient(circle_at_30%_28%,#ffffff_0%,#bfdbfe_34%,#60a5fa_100%)]"
  },
  {
    className:
      "left-[48%] top-[8%] h-16 w-16 bg-[radial-gradient(circle_at_30%_28%,#ffffff_0%,#bae6fd_30%,#38bdf8_100%)]"
  },
  {
    className:
      "right-[8%] top-[26%] h-20 w-20 bg-[radial-gradient(circle_at_30%_28%,#ffffff_0%,#bfdbfe_34%,#2563eb_100%)]"
  },
  {
    className:
      "right-[28%] bottom-[10%] h-14 w-14 bg-[radial-gradient(circle_at_30%_28%,#ffffff_0%,#ccfbf1_35%,#2dd4bf_100%)]"
  }
];

const heroCards = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    label: "Demand Dashboard",
    tone: "from-blue-500/20 to-cyan-400/10"
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    label: "Creative War Room",
    tone: "from-sky-500/20 to-blue-500/10"
  },
  {
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    label: "Launch Sprint",
    tone: "from-cyan-400/20 to-teal-400/10"
  }
];

export function InflatedHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#eef4ff_0%,#f8fbff_36%,#ffffff_100%)] pt-32 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(37,99,235,0.26),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(56,189,248,0.18),transparent_26%)]"
      />

      {floatingOrbs.map((orb, index) => (
        <motion.div
          key={orb.className}
          aria-hidden
          className={`pointer-events-none absolute rounded-full shadow-[0_24px_60px_rgba(59,130,246,0.24)] ${orb.className}`}
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -16, 0],
                  rotate: [0, index % 2 === 0 ? 5 : -5, 0]
                }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 6 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }
          }
        />
      ))}

      <div className="container-shell relative pb-16 md:pb-20">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-label text-blue-700">
              <Sparkles className="h-3.5 w-3.5" /> Colodium Studio Mode
            </p>

            <h1 className="max-w-4xl font-bricolage text-[clamp(2.7rem,7.4vw,6rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-slate-900">
              Inflate your brand.
              <span className="block bg-[linear-gradient(110deg,#1d4ed8,#38bdf8)] bg-clip-text text-transparent">
                Accelerate your growth.
              </span>
            </h1>

            <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-600">
              Colodam builds playful-but-strategic brand systems and campaign engines that make your
              product impossible to ignore.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Book your growth sprint
              </Button>
              <Button href="/services" variant="outline" size="lg">
                See how we work <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Narrative Strategy",
                "Brand Worldbuilding",
                "Performance Creative",
                "Launch Ops"
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {heroCards.map((card, index) => (
              <motion.article
                key={card.label}
                className={`relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br ${card.tone} p-3 shadow-[0_20px_44px_rgba(15,23,42,0.12)] ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        y: [0, index % 2 === 0 ? -8 : 8, 0]
                      }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 7 + index,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      }
                }
              >
                <div
                  className={`relative overflow-hidden rounded-[1.4rem] ${index === 0 ? "h-64" : "h-44"}`}
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover"
                    sizes={index === 0 ? "(max-width: 1280px) 100vw, 46vw" : "(max-width: 1280px) 50vw, 23vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/45 via-transparent to-transparent" />
                </div>
                <p className="mt-3 px-1 text-sm font-semibold text-slate-800">{card.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
