"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { BlogPost } from "@/lib/site-data";

const filters = ["All", "Strategy", "SME", "Report", "Founders", "Operations", "Market Entry"] as const;

export function BlogFilterGrid({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((post) => post.category === active)),
    [active, posts]
  );

  return (
    <>
      <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === filter
                ? "border-accent/30 bg-accent/12 text-accent"
                : "border-white/10 bg-white/[0.03] text-white/58 hover:text-white"
            }`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.slug} className="surface-panel group overflow-hidden rounded-[30px]">
            <div className="overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={700}
                className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-label text-accent">
                {post.category}
              </span>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/34">{post.date}</p>
              <h3 className="mt-4 font-bricolage text-[1.9rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-[#ffd18a]"
              >
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
