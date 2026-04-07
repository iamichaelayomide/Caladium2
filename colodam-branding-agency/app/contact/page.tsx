import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/ui/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { PricingSection } from "@/components/shared/PricingSection";
import { getContactPageContent, getSiteSettings } from "@/lib/sanity/fetch";
import { cn } from "@/lib/utils";

export const revalidate = 60;

export default async function ContactPage() {
  const [pageContent, contactDetails] = await Promise.all([
    getContactPageContent(),
    getSiteSettings()
  ]);

  const cards = [
    { label: "Call", value: contactDetails.phoneLabel, href: contactDetails.phoneHref, icon: Phone },
    { label: "Visit", value: contactDetails.address, href: contactDetails.mapHref, icon: MapPin },
    { label: "Email", value: contactDetails.email, href: contactDetails.emailHref, icon: Mail }
  ];

  return (
    <>
      <PageHero
        breadcrumb="Home > Contact"
        label="Contact"
        title={pageContent.heroTitle}
        description={pageContent.heroDescription}
      />

      <PricingSection variant="compact" className="pb-0" />

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-6 2xl:grid-cols-[0.82fr_1.18fr] 2xl:items-start">
          <div className="relative min-h-[18rem] self-start overflow-hidden rounded-[32px] border border-slate-200 md:min-h-[22rem] 2xl:min-h-[36rem]">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
              alt="Colodam office environment"
              fill
              className="object-cover"
            />
            <div className="hero-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-label text-slate-700/52">Reach us directly</p>
              <h2 className="mt-4 max-w-md font-bricolage text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                The best conversations happen when the challenge is still solvable.
              </h2>
            </div>
          </div>

          <div className="surface-panel rounded-[32px] p-5 md:p-7 xl:p-8">
            <h2 className="max-w-xl font-bricolage text-[clamp(2.25rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-slate-900">
              {pageContent.panelTitle}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700/62">
              {pageContent.panelDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <Link
                  key={card.label}
                  href={card.href}
                  className={cn(
                    "flex h-full min-h-[12.75rem] flex-col rounded-[24px] border border-slate-200 bg-white p-4 transition hover:border-accent/35 hover:bg-[#f8fbff]",
                    card.label === "Email" ? "sm:col-span-2 xl:col-span-1" : ""
                  )}
                >
                  <card.icon className="h-5 w-5 text-accent" />
                  <p className="mt-4 text-label text-slate-700/36">{card.label}</p>
                  <p className="mt-2 break-words text-sm leading-6 text-slate-700/78">{card.value}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#edf3ff] p-5 md:p-6">
              <ContactForm includeService />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
