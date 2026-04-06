import { Globe, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { careers, contactDetails } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-20 text-white md:pt-32 md:pb-20 xl:pt-40 xl:pb-24">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt="Team at work"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-shell relative z-10 grid gap-8 xl:grid-cols-[1.18fr_0.82fr] xl:items-end xl:gap-10">
          <div>
            <p className="text-sm text-white/52">Home &gt; Careers</p>
            <p className="mt-6 text-label text-white/58">Careers</p>
            <h1 className="mt-4 font-bricolage text-[clamp(3.3rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
              Build impact and grow with purpose.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Colodam is a place for thoughtful operators, analysts, and consultants who want
              their work to shape real business outcomes.
            </p>
          </div>
          <div className="hero-panel rounded-[30px] p-6 md:p-7">
            <h2 className="font-bricolage text-3xl font-semibold text-white">
              Interested in joining the team?
            </h2>
            <p className="mt-4 text-base leading-8 text-white/68">
              We value thoughtful people, direct collaboration, and work that leaves clients
              stronger than we found them.
            </p>
            <p className="mt-5 text-sm text-white/50">For career inquiries, email</p>
            <a
              href={`mailto:${contactDetails.careersEmail}`}
              className="mt-2 inline-flex text-xl font-semibold text-white underline decoration-white/35 underline-offset-4"
            >
              {contactDetails.careersEmail}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-white/8 bg-[#070a11]">
        <div className="container-shell">
          <SectionLabel>Why Join Colodam</SectionLabel>
          <h2 className="max-w-3xl font-bricolage text-[clamp(2.3rem,4vw,3.7rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            Meaningful client work, senior exposure, and room to keep growing.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/64">
            We believe in doing work that has visible impact for clients and real growth value for
            the people doing it.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              [
                Target,
                "Purpose-driven work",
                "You will help solve actual business problems for organizations navigating growth, restructuring, and transformation."
              ],
              [
                Globe,
                "Pan-African relevance",
                "Our work spans Nigerian and broader African business realities, with perspective across multiple operating contexts."
              ],
              [
                TrendingUp,
                "Continuous development",
                "From mentorship to hands-on delivery experience, we expect people to keep expanding in judgment and capability."
              ]
            ].map(([Icon, title, body], index) => (
              <Reveal key={title as string} delay={index * 0.04} className="surface-panel rounded-[28px] p-6">
                <div className="inline-flex rounded-2xl border border-accent/18 bg-accent/10 p-3 text-accent">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-6 font-bricolage text-[1.9rem] font-semibold text-white">{title as string}</h3>
                <p className="mt-4 text-base leading-8 text-white/60">{body as string}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <SectionLabel>Open Roles</SectionLabel>
          <h2 className="max-w-3xl font-bricolage text-[clamp(2.3rem,4vw,3.7rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            Current opportunities at Colodam.
          </h2>
          <div className="mt-10 space-y-4">
            {careers.map((career) => (
              <article key={career.slug} className="surface-panel rounded-[30px] p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bricolage text-[2rem] font-semibold leading-tight text-white">
                      {career.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-3 text-label text-white/44">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                        {career.location}
                      </span>
                      <span className="rounded-full border border-accent/18 bg-accent/10 px-3 py-2 text-accent">
                        {career.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/careers/${career.slug}`}
                    className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#071019] transition hover:bg-accent-hover"
                  >
                    View role
                  </Link>
                </div>
                <p className="mt-5 max-w-4xl text-base leading-8 text-white/62">{career.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
