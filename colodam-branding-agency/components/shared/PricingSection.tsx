"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pricingTiers } from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

type PricingSectionProps = {
  variant?: "full" | "compact";
  anchorId?: string;
  className?: string;
};

export function PricingSection({
  variant = "full",
  anchorId = "pricing",
  className
}: PricingSectionProps) {
  if (variant === "compact") {
    return (
      <section id={anchorId} className={cn("section-padding bg-[#f4f7ff]", className)}>
        <div className="container-shell">
          <Reveal className="surface-panel rounded-[32px] p-6 md:p-8 xl:p-10">
            <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-end">
              <div>
                <SectionLabel>Engagement Pricing</SectionLabel>
                <h2 className="max-w-2xl font-bricolage text-[clamp(2rem,3.8vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-900">
                  Clear entry points for founders, marketing teams, and larger brands.
                </h2>
                <p className="mt-4 max-w-2xl text-[0.94rem] leading-7 text-slate-700/64">
                  Whether you want community access, a one-off brand sprint, or a custom
                  enterprise campaign scope, there is a cleaner starting point than guessing.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {pricingTiers.slice(0, 2).map((tier) => (
                  <div
                    key={tier.name}
                    className={cn(
                      "rounded-[24px] border p-5",
                      tier.featured
                        ? "border-accent/40 bg-accent/10"
                        : "border-slate-200 bg-white"
                    )}
                  >
                    <p className="text-label text-slate-700/40">{tier.cadence}</p>
                    <div className="mt-3 font-bricolage text-4xl font-semibold tracking-[-0.05em] text-slate-900">
                      {tier.price}
                    </div>
                    <h3 className="mt-3 font-bricolage text-[1.45rem] font-semibold leading-[1.05] text-slate-900">
                      {tier.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/services#pricing" variant="primary" size="lg">
                View pricing options
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk through the right fit <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id={anchorId} className={cn("section-padding border-y border-slate-200 bg-[#f2f7ff]", className)}>
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">Pricing</SectionLabel>
          <h2 className="font-bricolage text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-900">
            Pricing That Fits Your Growth Stage
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.94rem] leading-7 text-slate-600">
            Pick a starting model, then scale into a deeper partnership once momentum is moving.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {pricingTiers.map((tier, index) => (
              <Reveal
                key={tier.name}
                delay={index * 0.03}
                className={cn(
                  "surface-panel flex h-full flex-col rounded-[30px] p-6 md:p-7",
                  tier.featured
                    ? "border-accent/45 bg-[linear-gradient(180deg,#edf4ff,#e4efff)]"
                    : "border-slate-200 bg-white"
                )}
              >
                {tier.audience ? (
                  <p className={cn("text-label", tier.featured ? "text-accent" : "text-slate-500")}>
                    {tier.audience}
                  </p>
                ) : null}

                <div className="mt-4 flex items-end justify-between gap-4 border-b border-slate-200 pb-5">
                  <div className="min-w-0">
                    <div className="font-bricolage text-[2.5rem] font-semibold tracking-[-0.05em] text-slate-900 md:text-[3rem]">
                      {tier.price}
                    </div>
                  </div>
                  <p className="shrink-0 text-right text-[0.78rem] uppercase tracking-[0.16em] text-slate-500">
                    {tier.custom ? "Tailored scope" : tier.cadence}
                  </p>
                </div>

                <div className="pt-5">
                  <h3 className="font-bricolage text-[1.55rem] font-semibold leading-[1.05] text-slate-900">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-[0.88rem] leading-7 text-slate-600">{tier.description}</p>
                </div>

                <ul className="mt-6 space-y-3 text-[0.88rem] leading-7 text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.featured ? "primary" : tier.custom ? "secondary" : "dark"}
                    className="w-full"
                    size="lg"
                  >
                    {tier.ctaLabel}
                    {tier.custom ? <ArrowRight className="h-4 w-4" /> : null}
                  </Button>
                </div>
              </Reveal>
            ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-[0.82rem] leading-7 text-slate-500">
            All pricing is shown in USD. Enterprise engagements are scoped around the actual
            decision, timeline, leadership involvement, and delivery complexity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
