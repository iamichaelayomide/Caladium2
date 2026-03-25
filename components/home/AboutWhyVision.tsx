"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { teamMembers, whyCaladiumTabs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HomeAboutPreview() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionLabel>About Us</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            Strategic minds. <br /> Real-world impact.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-body">
            We&apos;re a corporate consulting firm focused on helping African businesses grow, streamline, and adapt. With deep industry experience and a sharp, practical approach, we guide companies through strategy, operations, and transformation.
          </p>
          <div className="mt-8 border-l-2 border-accent pl-6">
            <p className="font-display text-2xl italic leading-9 text-accent">
              Great businesses aren&apos;t built on ideas alone — they&apos;re built on execution, discipline, and vision. That&apos;s where we come in.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image src={teamMembers[0].image} alt={teamMembers[0].name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-ink">Caladium Consulting, Est. 2010</p>
                <p className="text-sm text-muted">D24 Dolphin Plaza, Ikoyi, Lagos</p>
              </div>
            </div>
          </div>
          <Link href="/about" className="mt-8 inline-flex text-sm font-semibold text-ink transition hover:text-accent">
            More about us →
          </Link>
        </Reveal>
        <Reveal className="relative min-h-[520px]">
          <div className="absolute left-0 top-0 h-[78%] w-[70%] overflow-hidden rounded-xl shadow-overlay">
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" alt="Executive discussion" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-[46%] w-[48%] overflow-hidden rounded-xl shadow-card-hover">
            <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80" alt="Ikoyi skyline" fill className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeWhyCaladium() {
  const [active, setActive] = useState<string>(whyCaladiumTabs[0].id);
  const refs = useMemo(() => whyCaladiumTabs.map(() => ({ current: null as HTMLDivElement | null })), []);

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      if (!ref.current) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(whyCaladiumTabs[index].id);
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [refs]);

  return (
    <section className="section-padding bg-bg">
      <div className="container-shell hidden gap-16 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="sticky top-28 h-fit">
          <SectionLabel>Why Caladium</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            The standard for <br /> African consulting excellence.
          </h2>
          <div className="mt-10 space-y-4">
            {whyCaladiumTabs.map((tab) => (
              <div key={tab.id} className="relative pl-6">
                {active === tab.id ? <motion.div layoutId="active-tab" className="absolute left-0 top-1 h-6 w-1 rounded-full bg-accent" /> : null}
                <p className={cn("text-2xl transition", active === tab.id ? "font-medium text-accent" : "text-muted")}>{tab.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          {whyCaladiumTabs.map((tab, index) => (
            <div
              key={tab.id}
              ref={(node) => {
                refs[index].current = node;
              }}
              className="flex min-h-[80vh] items-center rounded-2xl border border-white/10 bg-soft p-10"
            >
              <div className="max-w-xl">
                <h4 className="font-display text-4xl font-semibold text-ink">{tab.title}</h4>
                <p className="mt-5 text-lg leading-8 text-body">{tab.body}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-body">
                  {tab.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-shell lg:hidden">
        <SectionLabel>Why Caladium</SectionLabel>
        <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
          The standard for African consulting excellence.
        </h2>
        <div className="mt-8 space-y-4">
          {whyCaladiumTabs.map((tab) => (
            <div key={tab.id} className="rounded-xl border border-border bg-soft p-6">
              <h4 className="font-display text-3xl font-semibold text-ink">{tab.title}</h4>
              <p className="mt-3 text-base leading-7 text-body">{tab.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeVision() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="section-padding bg-[#0b0911]">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center">Our Vision</SectionLabel>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
            To be the trusted partner that enables African businesses to grow with clarity, resilience, and purpose.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-body">
            We envision a future where organizations of all sizes across Africa can navigate complexity with confidence. Our mission is to empower leaders with insight, structure, and strategies they need to drive meaningful progress — not just in profits, but in performance, people, and long-term value.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-body">
            We&apos;re not just building a consulting firm. We&apos;re building the standard for how African enterprises engage, evolve, and lead in a fast-changing world.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            ["1", "Our Focus", "We concentrate on strategic clarity, operational excellence, and sustainable growth. Our work is grounded in real African business needs — not theoretical models imported from other markets — always aligned with long-term success."],
            ["2", "Our Approach", "We do not believe in one-size-fits-all consulting. Every engagement is customized to your context — co-created with your team to ensure buy-in, adoption, and results that outlast our involvement."],
            ["3", "Our Experience", "Our consultants bring experience from diverse industries and complex African business environments. We&apos;ve led high-impact projects across growth, transformation, and performance — from startups to government institutions."]
          ].map(([number, title, body]) => (
            <Reveal key={title} className="rounded-xl border border-border bg-[#14111b] p-8">
              <div className="font-display text-6xl font-semibold text-accent">{number}</div>
              <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-base leading-7 text-body">{body}</p>
            </Reveal>
          ))}
        </div>
        <motion.div style={{ y }} className="relative mt-14 h-[320px] overflow-hidden rounded-[24px] md:h-[520px]">
          <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80" alt="Lagos aerial" fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
