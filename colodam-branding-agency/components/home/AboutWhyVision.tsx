"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { teamMembers, whyColodamTabs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type WhyColodamItem = {
  id: string;
  title: string;
  body: string;
  bullets: readonly string[];
};

export function HomeAboutPreview() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-shell grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:gap-12">
        <Reveal className="hidden xl:block xl:relative xl:min-h-[440px]">
          <div className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[30px] shadow-overlay">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Executive discussion"
              fill
              className="object-cover"
            />
          </div>
          <div className="surface-panel absolute bottom-0 right-0 w-[54%] rounded-[28px] p-5">
            <Image
              src={teamMembers[0].image}
              alt={teamMembers[0].name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
            <p className="mt-5 font-bricolage text-2xl font-semibold leading-tight text-white">
              Great businesses are not built on ideas alone. They are built on decisions, systems,
              and follow-through.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/56">
              Since 2010, Colodam has helped leaders navigate strategy, operations, and change
              with a practical lens on what execution really requires.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <SectionLabel>About Colodam</SectionLabel>
          <h2 className="max-w-xl font-bricolage text-[clamp(2.4rem,4.2vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            Strategic minds with real-world operating context.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/66">
            We partner with founders, executives, and management teams that need more than smart
            slides. They need clearer priorities, better alignment, and systems that keep working
            after the engagement ends.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Senior-led branding across strategy, operations, and transformation.",
              "Delivery grounded in African market realities, not imported abstractions.",
              "Structured engagements that balance leadership clarity with execution detail.",
              "A calm, direct working style that helps teams move through complexity."
            ].map((item) => (
              <div key={item} className="surface-muted rounded-[24px] p-5 text-sm leading-7 text-white/62">
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-[#ffd18a]"
          >
            Learn more about the firm
          </Link>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] xl:hidden">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Executive discussion"
            width={1200}
            height={900}
            className="h-[16rem] w-full rounded-[28px] object-cover sm:h-full"
          />
          <div className="surface-panel rounded-[28px] p-5">
            <Image
              src={teamMembers[0].image}
              alt={teamMembers[0].name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
            <p className="mt-5 font-bricolage text-2xl font-semibold leading-tight text-white">
              Great businesses are not built on ideas alone. They are built on decisions, systems,
              and follow-through.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/56">
              Since 2010, Colodam has helped leaders navigate strategy, operations, and change
              with a practical lens on what execution really requires.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeWhyColodam({
  items = whyColodamTabs
}: {
  items?: readonly WhyColodamItem[];
}) {
  const [active, setActive] = useState<string>(items[0]?.id || "");
  const refs = useMemo(
    () => items.map(() => ({ current: null as HTMLDivElement | null })),
    [items]
  );

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(items[index]?.id || "");
          });
        },
        { threshold: 0.45 }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [refs, items]);

  return (
    <section className="section-padding border-y border-white/8 bg-[#070a11]">
      <div className="container-shell hidden gap-12 xl:grid xl:grid-cols-[0.8fr_1.2fr] xl:gap-14">
        <div className="sticky top-28 h-fit">
          <SectionLabel>Why Colodam</SectionLabel>
          <h2 className="max-w-lg font-bricolage text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            A standard of branding that feels direct, senior, and execution-minded.
          </h2>
          <p className="mt-5 max-w-md text-[0.94rem] leading-7 text-white/60">
            We design our engagements to reduce noise, clarify decisions, and leave leadership
            teams with stronger structures than they started with.
          </p>
          <div className="mt-8 space-y-3">
            {items.map((tab) => (
              <button
                key={tab.id}
                className="relative block pl-6 text-left"
                onClick={() => {
                  setActive(tab.id);
                  const target = refs[items.findIndex((item) => item.id === tab.id)]?.current;
                  target?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                {active === tab.id ? (
                  <motion.span
                    layoutId="home-why-indicator"
                    className="absolute left-0 top-1.5 h-4 w-1 rounded-full bg-accent"
                  />
                ) : null}
                <span
                  className={cn(
                    "text-[1.05rem] transition-colors",
                    active === tab.id ? "text-white" : "text-white/42 hover:text-white/72"
                  )}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {items.map((tab, index) => (
            <Reveal
              key={tab.id}
              className="surface-panel rounded-[30px] p-8"
              delay={index * 0.03}
            >
              <div
                ref={(node) => {
                  refs[index].current = node;
                }}
              />
              <p className="text-label text-white/40">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-bricolage text-2xl font-semibold text-white">{tab.title}</h3>
              <p className="mt-4 max-w-2xl text-[0.94rem] leading-7 text-white/64">{tab.body}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {tab.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[22px] border border-white/8 bg-white/[0.03] p-4 text-[0.82rem] leading-6 text-white/58"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-shell xl:hidden">
        <SectionLabel>Why Colodam</SectionLabel>
        <h2 className="max-w-xl font-bricolage text-[clamp(1.8rem,4.5vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          A branding partner that works with senior calm and practical depth.
        </h2>
        <div className="mt-8 space-y-4">
          {items.map((tab) => (
            <Reveal key={tab.id} className="surface-panel rounded-[28px] p-6">
              <h3 className="font-bricolage text-xl font-semibold text-white">{tab.title}</h3>
              <p className="mt-3 text-[0.94rem] leading-7 text-white/62">{tab.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeVision() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="section-padding bg-bg">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center">Our Vision</SectionLabel>
          <h2 className="font-bricolage text-[clamp(2.45rem,4.6vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
            To be the trusted partner helping African businesses grow with clarity, resilience, and
            strategic discipline.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/66">
            We want more African organizations to navigate complexity with confidence. That means
            better strategy, better systems, and a stronger bridge between ambition and execution.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
          {[
            [
              "Clarity",
              "Sharpen strategic direction so leadership teams know what matters most and what comes next."
            ],
            [
              "Capability",
              "Build structures, operating rhythm, and team alignment that make sustained growth more realistic."
            ],
            [
              "Continuity",
              "Leave behind systems and momentum that continue to work after our direct involvement ends."
            ]
          ].map(([title, body], index) => (
            <Reveal
              key={title}
              delay={index * 0.04}
              className={cn(
                "surface-panel rounded-[28px] p-6",
                index === 2 ? "md:col-span-2 xl:col-span-1" : ""
              )}
            >
              <h3 className="font-bricolage text-[1.9rem] font-semibold text-white">{title}</h3>
              <p className="mt-4 text-base leading-8 text-white/62">{body}</p>
            </Reveal>
          ))}
        </div>

        <motion.div
          style={{ y }}
          className="relative mt-10 overflow-hidden rounded-[34px] border border-white/10"
        >
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
            alt="Lagos aerial view"
            width={1600}
            height={900}
            className="h-[320px] w-full object-cover md:h-[460px]"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute bottom-0 left-0 max-w-xl p-6 md:p-8">
            <p className="text-label text-white/55">Built for the long term</p>
            <p className="mt-4 font-bricolage text-3xl font-semibold leading-tight text-white md:text-4xl">
              The goal is not more activity. The goal is a business that knows how to scale itself.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
