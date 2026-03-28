"use client";

import { NextStudio } from "next-sanity/studio";

import sanityConfig from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen bg-[#06070b] px-6 py-24 text-white">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-white/45">Sanity setup</p>
          <h1 className="mt-4 font-bricolage text-4xl font-semibold tracking-[-0.04em]">
            Add your Sanity project ID and dataset to continue.
          </h1>
          <p className="mt-5 text-base leading-8 text-white/68">
            Paste your values into <code>.env.local</code> using the keys from{" "}
            <code>.env.example</code>, then restart the app. Once that is done, this editor will
            load here.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={sanityConfig} />;
}
