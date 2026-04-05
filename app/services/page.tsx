import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { PricingSection } from "@/components/shared/PricingSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getServices, getServicesPageContent } from "@/lib/sanity/fetch";
import { cn } from "@/lib/utils";

export const revalidate = 60;

export default async function ServicesPage() {
  const [pageContent, services] = await Promise.all([
    getServicesPageContent(),
    getServices()
  ]);

  return (
    <>
      <PageHero
        breadcrumb="Home > Services"
        label="Service Portfolio"
        title={pageContent.heroTitle}
        description={pageContent.heroDescription}
        cta={{ href: "/contact", label: "Book a strategy call" }}
      />

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-bricolage text-[clamp(2.1rem,3.8vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              {pageContent.introTitle}
            </h2>
            <p className="mt-5 text-[0.94rem] leading-7 text-white/64">
              {pageContent.introDescription}
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
                    <h3 className="mt-4 font-bricolage text-[1.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-[0.88rem] leading-7 text-white/60">{service.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-white transition group-hover:text-accent">
                      View service <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PricingSection className="border-t-0" />

      <section className="section-padding border-t border-white/8 bg-[#070a10]">
        <div className="container-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pageContent.principles.map(({ title, body }, index) => (
            <Reveal
              key={title}
              delay={index * 0.04}
              className={cn(
                "surface-panel rounded-[28px] p-6",
                index === 2 ? "sm:col-span-2 xl:col-span-1" : ""
              )}
            >
              <h3 className="font-bricolage text-[1.6rem] font-semibold text-white">{title}</h3>
              <p className="mt-4 text-[0.94rem] leading-7 text-white/62">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
