"use client";

import { NextStudio } from "next-sanity/studio";

import sanityConfig from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen bg-[#f5f8ff] px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-slate-200 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-700/45">Sanity setup</p>
          <h1 className="mt-4 font-bricolage text-4xl font-semibold tracking-[-0.04em]">
            Add your Sanity project ID and dataset to continue.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-700/68">
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
