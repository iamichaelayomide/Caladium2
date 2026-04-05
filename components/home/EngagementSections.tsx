"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { blogPosts, clientLogoRows, contactDetails, testimonials } from "@/lib/site-data";
import type { BlogPost } from "@/lib/site-data";
import type { ContactDetailsContent } from "@/lib/sanity/fetch";
import { cn } from "@/lib/utils";

type TestimonialItem = {
  name: string;
  title: string;
  quote: string;
  image: string;
};

export function HomeServiceTabs() {
  return null;
}

export function HomeTestimonials({
  items = testimonials
}: {
  items?: readonly TestimonialItem[];
}) {
  return (
    <section className="section-padding border-y border-white/8 bg-[#070a10]">
      <div className="container-shell">
        <Reveal className="grid gap-5 xl:grid-cols-[0.72fr_1.28fr] xl:items-end xl:gap-6">
          <div>
            <SectionLabel>Client Perspectives</SectionLabel>
            <h2 className="max-w-md font-bricolage text-[clamp(1.9rem,3.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              The work is only valuable if the business feels the difference.
            </h2>
          </div>
          <p className="max-w-2xl text-[0.94rem] leading-7 text-white/64">
            Our clients talk less about flashy frameworks and more about what changed: better
            decisions, tighter leadership alignment, stronger systems, and actual execution
            momentum.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
          {items.slice(0, 6).map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.03}
              className={index === 0 ? "md:col-span-2 xl:col-span-2" : ""}
            >
              <article className="surface-panel h-full rounded-[30px] p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[0.82rem] font-semibold text-white">{testimonial.name}</p>
                    <p className="text-[0.78rem] text-white/50">{testimonial.title}</p>
                  </div>
                </div>
                <p className="mt-8 font-bricolage text-[1.35rem] leading-[1.3] text-white md:text-[1.55rem]">
                  &quot;{testimonial.quote}&quot;
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeClientLogos() {
  return (
    <section className="overflow-hidden bg-[#06080f] py-10">
      <div className="container-shell text-center">
        <p className="text-sm font-medium tracking-[0.08em] text-white/44">
          Trusted by organizations across Africa, the UK, and North America
        </p>
      </div>
      <div className="mt-7 space-y-3">
        {clientLogoRows.map((row, index) => (
          <div
            key={index}
            className={`marquee-track flex gap-8 ${index === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
          >
            {[...row, ...row].map((logo, logoIndex) => (
              <div
                key={`${logo}-${logoIndex}`}
                className="min-w-max rounded-full border border-white/8 bg-white/[0.03] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/34 transition hover:text-white/70"
              >
                {logo}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeContactPreview({
  details = contactDetails
}: {
  details?: Pick<
    ContactDetailsContent,
    "phoneLabel" | "phoneHref" | "address" | "mapHref" | "email" | "emailHref"
  >;
}) {
  const cards = [
    { label: "Call", value: details.phoneLabel, href: details.phoneHref, icon: Phone },
    { label: "Visit", value: details.address, href: details.mapHref, icon: MapPin },
    { label: "Email", value: details.email, href: details.emailHref, icon: Mail }
  ];

  return (
    <section className="section-padding bg-bg">
      <div className="container-shell grid gap-6 2xl:grid-cols-[0.78fr_1.22fr] 2xl:items-start">
        <Reveal className="relative min-h-[18rem] self-start overflow-hidden rounded-[32px] border border-white/10 md:min-h-[22rem] 2xl:min-h-[36rem]">
          <Image
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
            alt="Premium office architecture"
            fill
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="text-label text-white/52">Contact Caladium</p>
            <h3 className="mt-4 max-w-md font-bricolage text-2xl font-semibold leading-tight text-white md:text-3xl">
              Start the conversation before the problem gets more expensive.
            </h3>
            <p className="mt-3.5 max-w-md text-[0.88rem] leading-6 text-white/66">
              Book a strategy call if the business needs sharper direction, stronger delivery
              systems, or a clearer path through growth.
            </p>
          </div>
        </Reveal>

        <Reveal className="surface-panel rounded-[32px] p-5 md:p-7 xl:p-8">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="max-w-xl font-bricolage text-[clamp(1.9rem,3.5vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            Let&apos;s talk through the next move for your business.
          </h2>
          <p className="mt-4 max-w-2xl text-[0.94rem] leading-7 text-white/62">
            If you need better strategy, stronger operating rhythm, or leadership alignment around
            what matters now, we&apos;ll structure the right next conversation.
          </p>

          <div className="mt-8 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className={cn(
                  "flex h-full min-h-[12.75rem] flex-col rounded-[24px] border border-white/8 bg-white/[0.03] p-4 transition hover:border-accent/35 hover:bg-white/[0.05]",
                  card.label === "Email" ? "sm:col-span-2 xl:col-span-1" : ""
                )}
              >
                <card.icon className="h-5 w-5 text-accent" />
                <p className="mt-4 text-label text-white/36">{card.label}</p>
                <p className="mt-2 break-words text-sm leading-6 text-white/80">{card.value}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-white/8 bg-[#080b12] p-5 md:p-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeBlogPreview({
  posts = blogPosts.slice(0, 4),
  heading = "Ideas, observations, and strategy notes from the field.",
  description = "Practical thinking for founders, operators, and executives building in African markets."
}: {
  posts?: BlogPost[];
  heading?: string;
  description?: string;
}) {
  const featured = posts[0];
  const secondary = posts.slice(1, 4);

  if (!featured) {
    return null;
  }

  return (
    <section className="section-padding bg-[#070a11]">
      <div className="container-shell">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionLabel>Journal</SectionLabel>
            <h2 className="font-bricolage text-[clamp(2.1rem,4vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              {heading}
            </h2>
            <p className="mt-4 text-[0.94rem] leading-7 text-white/62">
              {description}
            </p>
          </div>
          <Button href="/blog" variant="outline" size="sm" className="w-fit">
            Explore the journal <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="group overflow-hidden rounded-[32px] border border-white/10">
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="relative min-h-[18rem] sm:min-h-[22rem] xl:min-h-[24rem]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="hero-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <span className="inline-flex rounded-full border border-accent/24 bg-accent/12 px-3 py-1 text-label text-accent">
                    {featured.category}
                  </span>
                  <h3 className="mt-4 max-w-2xl font-bricolage text-[1.65rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[2.1rem]">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.94rem] leading-7 text-white/68">{featured.excerpt}</p>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-4">
            {secondary.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.03}>
                <article className="surface-panel group overflow-hidden rounded-[28px] p-5">
                  <Link href={`/blog/${post.slug}`} className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:items-center">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={300}
                      height={240}
                      className="aspect-[4/3] w-full rounded-[22px] object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div>
                      <p className="text-label text-accent">{post.category}</p>
                      <h3 className="mt-2.5 font-bricolage text-[1.4rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-[0.82rem] leading-6 text-white/60">{post.excerpt}</p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
