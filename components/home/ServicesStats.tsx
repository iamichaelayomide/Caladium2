"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/site-data";

export function HomeServices() {
  return (
    <section className="section-padding border-y border-white/8 bg-[#06080f]">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <SectionLabel>Core Services</SectionLabel>
            <h2 className="max-w-xl font-bricolage text-[clamp(2.5rem,4.6vw,4rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-white">
              Advisory built to help leadership teams move with precision.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/66">
              Every engagement is structured for action: sharper choices, cleaner operating rhythm,
              and execution that fits the realities of African markets.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-[#ffd18a]"
            >
              View the full service portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {services.slice(0, 6).map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 0.03}
                className="surface-panel group rounded-[30px] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/20"
              >
                <p className="text-label text-white/36">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 max-w-xs font-bricolage text-[1.9rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  {service.shortName}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{service.cardDescription}</p>
                <ul className="mt-6 space-y-2 text-sm text-white/58">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-accent"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeStats() {
  return null;
}
