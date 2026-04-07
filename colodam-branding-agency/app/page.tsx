import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { HomeContactPreview } from "@/components/home/EngagementSections";
import { PricingSection } from "@/components/shared/PricingSection";
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

  const featuredServices = services.slice(0, 6);
  const featuredTeam = teamMembers.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8fbff] pt-28 md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_84%_16%,rgba(14,165,164,0.12),transparent_28%)]"
        />
        <div className="container-shell relative grid gap-10 pb-14 md:pb-20 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-label text-blue-700">
              <Sparkles className="h-3.5 w-3.5" /> Colodam Brand Studio
            </p>
            <h1 className="mt-5 max-w-3xl font-bricolage text-[clamp(2.45rem,6.4vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-slate-900">
              Build a category-leading brand with campaigns that convert.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-slate-600">
              Colodam helps startups and growth teams shape their identity, sharpen messaging, and
              launch demand campaigns that turn attention into revenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
              >
                Book a strategy session
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
              >
                See services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["200+", "Brands supported"],
                ["35%", "Avg conversion lift"],
                ["15+", "Years combined experience"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="font-bricolage text-3xl font-semibold tracking-[-0.03em] text-slate-900">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.08)]">
              <p className="text-label text-slate-500">Now building</p>
              <p className="mt-3 font-bricolage text-2xl font-semibold text-slate-900">
                Multi-channel launch system
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Positioning, visual identity, social content engine, paid media, and weekly
                performance optimization in one coordinated sprint.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-[#ecf4ff] p-5">
                <p className="text-label text-blue-700">Brand Clarity</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Positioning and messaging frameworks your team can apply across channels.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#eefcf9] p-5">
                <p className="text-label text-teal-700">Growth Delivery</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Creative production and campaign management tied to clear growth KPIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="container-shell">
          <p className="text-center text-sm font-medium tracking-[0.14em] text-slate-500">
            TRUSTED BY FAST-GROWING AFRICAN TEAMS
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-4 md:grid-cols-8">
            {["FluxPay", "Seedlane", "Nexa", "Orion", "Paybridge", "Migo", "Azura", "Limebox"].map((name) => (
              <div
                key={name}
                className="rounded-full border border-slate-200 bg-[#f8fbff] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f4f7ff] py-16">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
            >
              <p className="text-label text-blue-700">{service.shortName}</p>
              <h2 className="mt-3 font-bricolage text-[1.6rem] font-semibold leading-[1.08] text-slate-900">
                {service.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.cardDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Explore <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-label text-blue-700">How We Work</p>
            <h2 className="mt-4 font-bricolage text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-slate-900">
              A four-step system from brand foundation to campaign growth.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 xl:grid-cols-4">
            {[
              ["01", "Discover", "Audience research, offer clarity, and competitive signal mapping."],
              ["02", "Design", "Brand identity, messaging hierarchy, and visual direction."],
              ["03", "Deploy", "Launch assets, content systems, and channel rollout."],
              ["04", "Scale", "Weekly performance reviews, testing, and conversion optimization."]
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
                <p className="font-mono text-xs tracking-[0.2em] text-slate-500">{step}</p>
                <h3 className="mt-3 font-bricolage text-2xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="border-b border-slate-200 bg-[#f4f7ff] py-16">
        <div className="container-shell">
          <p className="text-label text-blue-700">Team Highlights</p>
          <h2 className="mt-4 max-w-2xl font-bricolage text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.04] text-slate-900">
            Strategic and creative operators driving your growth goals.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featuredTeam.map((member) => (
              <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-5">
                <p className="font-bricolage text-2xl font-semibold text-slate-900">{member.name}</p>
                <p className="mt-1 text-sm text-blue-700">{member.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
          <Link
            href="/team"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            Meet the full team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <HomeContactPreview details={siteSettings} />
    </>
  );
}
