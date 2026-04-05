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
      <section id={anchorId} className={cn("section-padding bg-[#070a10]", className)}>
        <div className="container-shell">
          <Reveal className="surface-panel rounded-[32px] p-6 md:p-8 xl:p-10">
            <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-end">
              <div>
                <SectionLabel>Engagement Pricing</SectionLabel>
                <h2 className="max-w-2xl font-bricolage text-[clamp(2rem,3.8vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                  Clear entry points for founders, startup teams, and larger enterprises.
                </h2>
                <p className="mt-4 max-w-2xl text-[0.94rem] leading-7 text-white/64">
                  Whether you want community access, a one-off strategy session, or a custom
                  enterprise advisory scope, there is a cleaner starting point than guessing.
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
                        : "border-white/10 bg-white/[0.03]"
                    )}
                  >
                    <p className="text-label text-white/40">{tier.cadence}</p>
                    <div className="mt-3 font-bricolage text-4xl font-semibold tracking-[-0.05em] text-white">
                      {tier.price}
                    </div>
                    <h3 className="mt-3 font-bricolage text-[1.45rem] font-semibold leading-[1.05] text-white">
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
    <section id={anchorId} className={cn("section-padding border-y border-white/8 bg-[#06080f]", className)}>
      <div className="container-shell">
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start xl:gap-10">
          <Reveal className="xl:sticky xl:top-28">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="max-w-xl font-bricolage text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
              Engagement options that match the stage and weight of the work.
            </h2>
            <p className="mt-5 max-w-xl text-[0.94rem] leading-7 text-white/64">
              We kept the pricing structure simple: one community entry point, one founder
              strategy session, one startup setup package, and one custom enterprise advisory lane.
            </p>
            <div className="mt-8 space-y-3 border-l border-white/10 pl-5 text-[0.88rem] leading-7 text-white/56">
              <p>All pricing is presented in USD.</p>
              <p>Enterprise work is scoped around the actual problem, timeline, and leadership load.</p>
              <p>Need help choosing the right tier? Start with a call and we will guide you.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Ask about fit <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            {pricingTiers.map((tier, index) => (
              <Reveal
                key={tier.name}
                delay={index * 0.03}
                className={cn(
                  "surface-panel flex h-full flex-col rounded-[30px] p-6",
                  tier.featured ? "border-accent/35 bg-[linear-gradient(180deg,rgba(217,154,43,0.12),rgba(12,16,24,0.94))]" : "",
                  tier.custom ? "lg:col-span-2" : ""
                )}
              >
                {tier.audience ? (
                  <p className={cn("text-label", tier.featured ? "text-accent" : "text-white/42")}>
                    {tier.audience}
                  </p>
                ) : null}
                <div className="mt-4 flex items-end justify-between gap-4 border-b border-white/8 pb-5">
                  <div>
                    <h3 className="font-bricolage text-[1.6rem] font-semibold leading-[1.04] text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-3 text-[0.88rem] leading-7 text-white/60">{tier.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bricolage text-[2.2rem] font-semibold tracking-[-0.05em] text-white">
                      {tier.price}
                    </div>
                    <p className="mt-1 text-[0.78rem] uppercase tracking-[0.16em] text-white/38">
                      {tier.cadence}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-[0.88rem] leading-7 text-white/62">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-2">
                  <Button
                    href={tier.ctaHref}
                    variant={tier.featured ? "primary" : tier.custom ? "secondary" : "outline"}
                    className="w-full sm:w-auto"
                  >
                    {tier.ctaLabel}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
