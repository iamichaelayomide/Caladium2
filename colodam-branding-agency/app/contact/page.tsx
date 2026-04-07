"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { contactContent } from "@/lib/cello-content";

export default function ContactPage() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 1200], [0, -110]);

  return (
    <main className="pt-28">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#eaf3ff_0%,#ffffff_100%)] py-16">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
          <div>
            <p className="text-label text-blue-700">Contact</p>
            <h1 className="mt-4 font-bricolage text-[clamp(2.2rem,5.5vw,4.8rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-slate-900">{contactContent.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600">{contactContent.description}</p>

            <div className="mt-7 space-y-2 text-sm text-slate-700">
              <p>{contactContent.email}</p>
              <p>{contactContent.phone}</p>
              <p>{contactContent.address}</p>
            </div>

            <div className="mt-7">
              <Button href="mailto:hello@colodam.com" variant="primary" size="lg">Send email</Button>
            </div>
          </div>

          <motion.div style={{ y: reduceMotion ? undefined : parallax }} className="relative h-[28rem] overflow-hidden rounded-[2rem] border border-slate-200">
            <Image src={contactContent.image} alt="Contact visual" fill className="object-cover" sizes="(max-width:1280px) 100vw, 48vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

