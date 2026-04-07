"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { workContent } from "@/lib/cello-content";

export default function WorkPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-28">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)] py-16">
        <div className="container-shell">
          <p className="text-label text-blue-700">Work</p>
          <h1 className="mt-4 font-bricolage text-[clamp(2.2rem,5.4vw,4.8rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-slate-900">{workContent.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{workContent.description}</p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {workContent.projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image src={project.image} alt={project.name} fill className="object-cover" sizes="(max-width:1280px) 100vw, 48vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-label text-blue-700">{project.role}</p>
                  <h2 className="mt-2 font-bricolage text-3xl font-semibold leading-[1.02] text-slate-900">{project.name}</h2>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

