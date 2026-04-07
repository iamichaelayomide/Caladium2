import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { HomeContactPreview } from "@/components/home/EngagementSections";
import { InflatedHero } from "@/components/home/InflatedHero";
import { HomeMotionSections } from "@/components/home/HomeMotionSections";
import { PricingSection } from "@/components/shared/PricingSection";
import { Button } from "@/components/ui/Button";
import {
  getServices,
  getSiteSettings,
  getTeamMembers
} from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function HomePage() {
  const [services, siteSettings, teamMembers] = await Promise.all([
    getServices(),
    getSiteSettings(),
    getTeamMembers()
  ]);

  const featuredServices = services.slice(0, 5);
  const featuredTeam = teamMembers.slice(0, 4);

  return (
    <>
      <InflatedHero />

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="container-shell">
          <p className="text-center text-sm font-semibold tracking-[0.16em] text-slate-500">
            BRANDS WE HAVE HELPED SCALE
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-4 md:grid-cols-8">
            {["OrbitPay", "NexaCore", "Timbuk", "FrameLab", "Nova", "Cobalt", "Zenlio", "Limebook"].map((name) => (
              <div
                key={name}
                className="rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeMotionSections />

      <section className="border-b border-slate-200 bg-[#f4f8ff] py-16">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-label text-blue-700">Service Architecture</p>
              <h2 className="mt-4 max-w-xl font-bricolage text-[clamp(2rem,4.3vw,3.35rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-slate-900">
                Design-led growth programs arranged for speed.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
                Every engagement is built around measurable outcomes. You know what we are testing,
                what we are shipping, and what is improving each week.
              </p>
            </div>

            <div className="space-y-3">
              {featuredServices.map((service, index) => (
                <article
                  key={service.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-label text-blue-700">{String(index + 1).padStart(2, "0")}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    >
                      View details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <h3 className="mt-3 font-bricolage text-[1.65rem] font-semibold leading-[1.06] text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.cardDescription}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-label text-blue-700">Execution Rhythm</p>
            <h2 className="mt-4 font-bricolage text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-slate-900">
              One operating cadence from insight to measurable growth.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 xl:grid-cols-4">
            {[
              ["Week 1", "Strategy Inputs", "Audience interviews, offer diagnosis, and conversion baseline mapping."],
              ["Week 2", "Creative Systems", "Campaign concepts, design direction, and messaging framework rollout."],
              ["Week 3", "Launch Engine", "Page and content deployment with paid and organic distribution."],
              ["Week 4+", "Optimization", "Weekly KPI reviews, experiments, and iteration cycles."]
            ].map(([step, title, detail]) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{step}</p>
                <h3 className="mt-3 font-bricolage text-2xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="border-b border-slate-200 bg-[#f4f8ff] py-16">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-label text-blue-700">Core Team</p>
              <h2 className="mt-3 font-bricolage text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.03] text-slate-900">
                Specialists who own strategy and execution together.
              </h2>
            </div>
            <Button href="/team" variant="outline">
              Meet the full team <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredTeam.map((member) => (
              <article key={member.name} className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="font-bricolage text-2xl font-semibold text-slate-900">{member.name}</p>
                <p className="mt-1 text-sm text-blue-700">{member.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeContactPreview details={siteSettings} />
    </>
  );
}
