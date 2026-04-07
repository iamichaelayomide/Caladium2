"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { blogContent } from "@/lib/cello-content";

export default function BlogPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="pt-28">
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#edf5ff_0%,#ffffff_100%)] py-16">
        <div className="container-shell">
          <p className="text-label text-blue-700">Blog</p>
          <h1 className="mt-4 font-bricolage text-[clamp(2.2rem,5.5vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-slate-900">{blogContent.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{blogContent.description}</p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogContent.posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width:1280px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{post.date}</p>
                  <h2 className="mt-2 font-bricolage text-[1.8rem] font-semibold leading-[1.04] text-slate-900">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

