"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blogPosts, clientLogoRows, contactDetails, serviceTabPanels, testimonials } from "@/lib/site-data";

export function HomeServiceTabs() {
  const [active, setActive] = useState<string>(serviceTabPanels[0].id);
  const panel = serviceTabPanels.find((item) => item.id === active) ?? serviceTabPanels[0];

  return (
    <section className="section-padding bg-bg">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">Find The Right Solution</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Every business is different — your consulting approach should be too.
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            We&apos;re a corporate consulting firm focused on helping businesses grow, streamline, and adapt. With deep industry experience and a sharp, practical approach, we guide companies through strategy, operations, and transformation.
          </p>
        </Reveal>
        <div className="mt-12 flex gap-6 overflow-x-auto border-b border-border pb-3">
          {serviceTabPanels.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition ${active === tab.id ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={panel.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div>
              <h3 className="font-display text-4xl font-semibold text-ink">{panel.title}</h3>
              <p className="mt-4 text-lg leading-8 text-body">{panel.intro}</p>
              <div className="mt-8 space-y-6">
                {panel.features.map((feature) => (
                  <div key={feature.title}>
                    <h4 className="text-lg font-semibold text-ink">{feature.title}</h4>
                    <p className="mt-2 text-base leading-7 text-body">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="rounded-sm bg-accent-light px-3 py-2 font-display text-lg font-semibold text-accent-text">
                  caladium ◆
                </div>
                <Link href="/contact" className="text-sm font-semibold text-ink transition hover:text-accent">
                  Book a free consultation →
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-card">
              <Image src={panel.image} alt={panel.title} width={1200} height={1200} className="h-full min-h-[420px] w-full object-cover" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function HomeTestimonials() {
  return (
    <section className="section-padding bg-[#0b0911]">
      <div className="container-shell">
        <Reveal className="max-w-3xl">
          <SectionLabel>Our Clients</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Trusted by ambitious leaders and forward-thinking organizations.
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            We partner with businesses across industries — from emerging ventures to established enterprises — helping them navigate complexity, sharpen strategy, and accelerate results.
          </p>
        </Reveal>
        <div className="mt-12 space-y-6">
          {testimonials.map((testimonial, index) => {
            const imageLeft = index % 3 === 1;
            const showImage = index % 3 !== 0;
            return (
              <Reveal key={`${testimonial.name}-${index}`}>
                <div className={`grid gap-6 rounded-2xl border border-border bg-[#14111b] p-8 ${showImage ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}>
                  {showImage && imageLeft ? (
                    <div className="overflow-hidden rounded-xl">
                      <Image src={testimonial.image} alt={testimonial.name} width={900} height={900} className="h-full min-h-[300px] w-full object-cover" />
                    </div>
                  ) : null}
                  <div className="flex flex-col justify-between">
                    <p className="font-display text-3xl leading-10 text-ink md:text-4xl md:leading-[1.15]">“{testimonial.quote}”</p>
                    <div className="mt-8 flex items-center gap-4">
                      <Image src={testimonial.image} alt={testimonial.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                        <p className="text-sm text-muted">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                  {showImage && !imageLeft ? (
                    <div className="overflow-hidden rounded-xl">
                      <Image src={testimonial.image} alt={testimonial.name} width={900} height={900} className="h-full min-h-[300px] w-full object-cover" />
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeClientLogos() {
  return (
    <section className="overflow-hidden border-y border-border bg-[#0b0911] py-12">
      <div className="container-shell text-center">
        <p className="text-sm text-muted">Trusted by 200+ organizations across Africa, the UK, and North America.</p>
      </div>
      <div className="group mt-8 space-y-4">
        {clientLogoRows.map((row, index) => (
          <div key={index} className={`marquee-track flex gap-8 ${index === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}>
            {[...row, ...row].map((logo, logoIndex) => (
              <div key={`${logo}-${logoIndex}`} className="min-w-max text-xl font-semibold text-[#C0C0C0] transition hover:text-ink">
                {logo}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeContactPreview() {
  const cards = [
    { label: "Call us at:", value: contactDetails.phoneLabel, href: contactDetails.phoneHref, icon: Phone },
    { label: "Visit us at:", value: contactDetails.address, href: contactDetails.mapHref, icon: MapPin },
    { label: "Email us:", value: contactDetails.email, href: contactDetails.emailHref, icon: Mail }
  ];

  return (
    <section className="section-padding bg-bg">
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Office lobby" width={1200} height={1400} className="h-full min-h-[480px] w-full object-cover" />
        </div>
        <div className="rounded-xl border border-border bg-[#14111b] p-8 md:p-10">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Ready to move your business forward? Let&apos;s talk.
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            Whether you&apos;re seeking clarity, growth, or transformation, we&apos;re here to help. Reach out to start the conversation — no pressure, no obligation.
          </p>
          <div className="mt-8 space-y-4">
            <div className="font-display text-xl font-semibold text-accent">caladium ◆</div>
            {cards.map((card) => (
              <Link key={card.label} href={card.href} className="flex gap-4 rounded-xl border border-border p-4 transition hover:border-accent">
                <card.icon className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">{card.label}</p>
                  <p className="mt-1 text-sm leading-6 text-ink">{card.value}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeBlogPreview() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-shell">
        <Reveal className="max-w-3xl">
          <SectionLabel>Our Journal</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Insights. Strategies. Real-world perspectives.
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            Explore fresh thinking on African business strategy, operational excellence, and leadership in times of change. Written by our consultants for decision-makers.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Reveal key={post.slug}>
              <article className="group overflow-hidden rounded-xl border border-border bg-[#14111b] shadow-card">
                <div className="overflow-hidden">
                  <Image src={post.coverImage} alt={post.title} width={1200} height={700} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-sm bg-accent-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-text">{post.category}</span>
                    <span className="text-xs text-muted">{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-9 text-ink">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-body">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-semibold text-ink transition hover:text-accent">
                    Read more →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
