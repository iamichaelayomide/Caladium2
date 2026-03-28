import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/ui/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { contactDetails } from "@/lib/site-data";

export default function ContactPage() {
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
        title="Start the conversation before the issue gets heavier."
        description="Whether you need sharper strategy, operating redesign, or support navigating growth, reach out and we will structure the right next step."
      />

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
              alt="Caladium office environment"
              fill
              className="object-cover"
            />
            <div className="hero-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-label text-white/52">Reach us directly</p>
              <h2 className="mt-4 max-w-md font-bricolage text-3xl font-semibold leading-tight text-white md:text-4xl">
                The best conversations happen when the challenge is still solvable.
              </h2>
            </div>
          </div>

          <div className="surface-panel rounded-[32px] p-6 md:p-8">
            <h2 className="max-w-xl font-bricolage text-[clamp(2.25rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
              Tell us what the business is facing.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/62">
              We will use that context to shape the right conversation, scope, and advisory path.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {cards.map((card) => (
                <Link
                  key={card.label}
                  href={card.href}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4 transition hover:border-accent/35 hover:bg-white/[0.05]"
                >
                  <card.icon className="h-5 w-5 text-accent" />
                  <p className="mt-4 text-label text-white/36">{card.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/78">{card.value}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/8 bg-[#080b12] p-5 md:p-6">
              <ContactForm includeService />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
