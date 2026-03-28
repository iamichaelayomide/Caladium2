import Link from "next/link";
import { notFound } from "next/navigation";

import { careers, findCareer } from "@/lib/site-data";

export function generateStaticParams() {
  return careers.map((career) => ({ slug: career.slug }));
}

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  const career = findCareer(params.slug);
  if (!career) notFound();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8 pt-28 pb-20 md:pt-32 md:pb-20 xl:pt-40 xl:pb-24">
        <div aria-hidden className="hero-glow absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="text-sm text-white/45">Home &gt; Careers &gt; {career.title}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-label text-white/44">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
              {career.location}
            </span>
            <span className="rounded-full border border-accent/18 bg-accent/10 px-3 py-2 text-accent">
              {career.type}
            </span>
          </div>
          <h1 className="mt-5 max-w-5xl font-bricolage text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
            {career.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">{career.summary}</p>
          <Link
            href={`mailto:careers@caladiumconsulting.com?subject=${encodeURIComponent(`Application for ${career.title}`)}`}
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#071019] transition hover:bg-accent-hover"
          >
            Apply via email
          </Link>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-5 xl:grid-cols-3">
          <article className="surface-panel rounded-[30px] p-6">
            <h2 className="font-bricolage text-3xl font-semibold text-white">Overview</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-white/62">
              {career.overview.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="surface-panel rounded-[30px] p-6">
            <h2 className="font-bricolage text-3xl font-semibold text-white">Responsibilities</h2>
            <ul className="mt-5 space-y-3 text-base leading-8 text-white/62">
              {career.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-panel rounded-[30px] p-6">
            <h2 className="font-bricolage text-3xl font-semibold text-white">Requirements</h2>
            <ul className="mt-5 space-y-3 text-base leading-8 text-white/62">
              {career.requirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-bricolage text-2xl font-semibold text-white">Why this role</h3>
            <ul className="mt-4 space-y-3 text-base leading-8 text-white/62">
              {career.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
