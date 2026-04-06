import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { PricingSection } from "@/components/shared/PricingSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { teamMembers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home > About Us"
        label="About Colodam"
        title="Brand strategy, creative execution, and growth systems for ambitious African businesses."
        description="From startup teams to established enterprises, we help marketing leaders shape memorable brands, sharpen campaign priorities, and build systems that scale."
        cta={{ href: "/services", label: "Explore our services" }}
      />

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:gap-12">
          <Reveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="max-w-xl font-bricolage text-[clamp(2.1rem,3.8vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              A branding firm built for leaders who need more than a polished deck.
            </h2>
            <p className="mt-5 max-w-xl text-[0.94rem] leading-7 text-white/64">
              Colodam combines brand strategy, creative direction, and campaign operations with a
              deep understanding of African markets. We work closely with teams to turn ideas into
              clear positioning and positioning into repeatable growth.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Senior-led partnership across brand strategy, identity design, and campaign performance.",
                "A delivery style that values clarity, speed, and practical implementation.",
                "Cross-sector experience spanning startups, growth-stage brands, and enterprise teams.",
                "An approach grounded in evidence, creative quality, and measurable outcomes."
              ].map((item) => (
                <div key={item} className="surface-panel rounded-[26px] p-5 text-sm leading-7 text-white/60">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2 xl:grid-rows-2">
            {[
              "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
            ].map((image, index) => (
              <div
                key={image}
                className={index === 0 ? "sm:row-span-2" : ""}
              >
                <Image
                  src={image}
                  alt=""
                  width={900}
                  height={900}
                  className="h-full min-h-[15rem] w-full rounded-[28px] object-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-padding border-y border-white/8 bg-[#070a11]">
        <div className="container-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            ["200+", "Brands supported across strategy, creative production, and campaign growth."],
            ["10K+", "Leads and community members reached through Colodam campaigns and content initiatives."],
            ["15+", "Years of market-facing experience shaping brand systems and demand generation."]
          ].map(([value, label], index) => (
            <Reveal
              key={value}
              delay={index * 0.04}
              className={cn(
                "surface-panel rounded-[28px] p-6",
                index === 2 ? "sm:col-span-2 xl:col-span-1" : ""
              )}
            >
              <div className="font-bricolage text-5xl font-semibold tracking-[-0.04em] text-white">
                {value}
              </div>
              <p className="mt-4 text-sm leading-7 text-white/58">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start xl:gap-12">
          <Reveal className="xl:sticky xl:top-28">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="max-w-xl font-bricolage text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              Our work balances bold creative thinking with grounded delivery.
            </h2>
            <p className="mt-5 max-w-xl text-[0.94rem] leading-7 text-white/64">
              We do not believe in generic templates or detached recommendations. We work alongside
              client teams, define the growth priorities in front of them, and shape launch-ready
              paths forward.
            </p>
          </Reveal>

          <div className="space-y-4">
            {[
              [
                "Clarity before content",
                "We start by clarifying positioning, narrowing audience priorities, and defining the brand decisions that matter most."
              ],
              [
                "Execution built in",
                "Recommendations are tied to owners, timelines, creative workflows, and the conditions needed for campaign success."
              ],
              [
                "Partnership over posturing",
                "Our style is collaborative and direct. We bring senior brand thinking and stay close enough to the work to make it land."
              ]
            ].map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.03} className="surface-panel rounded-[28px] p-6">
                <h3 className="font-bricolage text-[1.6rem] font-semibold text-white">{title}</h3>
                <p className="mt-4 text-[0.94rem] leading-7 text-white/62">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PricingSection variant="compact" />

      <section className="section-padding bg-[#070a10]">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel>Leadership Team</SectionLabel>
            <h2 className="font-bricolage text-[clamp(2.1rem,3.8vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              A multidisciplinary team built around strategy, creative quality, and brand performance.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Reveal key={member.name} delay={index * 0.03} className="surface-panel overflow-hidden rounded-[28px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={700}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bricolage text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="mt-2 text-[0.82rem] text-white/50">{member.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/team"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-[#ffd18a]"
          >
            Meet the full team
          </Link>
        </div>
      </section>
    </>
  );
}
