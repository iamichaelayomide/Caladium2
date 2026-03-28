import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home > Services"
        label="Service Portfolio"
        title="Consulting support designed to move the business forward."
        description="From strategic planning to operating model design and market entry, every Caladium engagement is structured for practical execution and durable outcomes."
        cta={{ href: "/contact", label: "Book a strategy call" }}
      />

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-bricolage text-[clamp(2.3rem,4vw,3.7rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
              Choose the engagement that matches the decision in front of you.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/64">
              Each service page goes deeper into scope, deliverables, and how we approach the work
              with leadership teams.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.03}>
                <Link href={`/services/${service.slug}`} className="surface-panel group block overflow-hidden rounded-[30px]">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={1400}
                      height={900}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="hero-overlay absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <p className="text-label text-accent">{service.shortName}</p>
                    <h3 className="mt-4 font-bricolage text-[1.95rem] font-semibold leading-[1.03] tracking-[-0.03em] text-white">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/60">{service.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-accent">
                      View service <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/8 bg-[#070a10]">
        <div className="container-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            [
              "Architecture for strategy",
              "We treat strategy like architecture: foundations first, then structure, then the choices that make scaling more realistic."
            ],
            [
              "Execution built into scope",
              "Recommendations are tied to operating realities, leadership ownership, and what teams can actually adopt."
            ],
            [
              "Built for African context",
              "Our work is shaped by the realities of building, expanding, and leading in African markets."
            ]
          ].map(([title, body], index) => (
            <Reveal
              key={title}
              delay={index * 0.04}
              className={cn(
                "surface-panel rounded-[28px] p-6",
                index === 2 ? "sm:col-span-2 xl:col-span-1" : ""
              )}
            >
              <h3 className="font-bricolage text-[1.9rem] font-semibold text-white">{title}</h3>
              <p className="mt-4 text-base leading-8 text-white/62">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
