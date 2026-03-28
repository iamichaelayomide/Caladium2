import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getServiceBySlug,
  getServiceSlugs,
  getServices
} from "@/lib/sanity/fetch";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const [service, services] = await Promise.all([
    getServiceBySlug(params.slug),
    getServices()
  ]);

  if (!service) {
    notFound();
  }

  const related = service.relatedSlugs
    .map((slug) => services.find((entry) => entry.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8 pb-20 pt-32 md:pb-24 md:pt-40">
        <div aria-hidden className="hero-glow absolute inset-0 opacity-70" />
        <div className="container-shell relative">
          <p className="text-sm text-white/45">Home &gt; Services &gt; {service.name}</p>
          <p className="mt-6 text-label text-accent">{service.name}</p>
          <h1 className="mt-4 max-w-5xl font-bricolage text-[clamp(3.2rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-white">
            {service.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">{service.summary}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#071019] transition hover:bg-accent-hover"
          >
            Book a consultation
          </Link>
        </div>
      </section>

      <section className="section-padding-tight bg-bg">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10">
            <Image
              src={service.image}
              alt={service.name}
              width={1600}
              height={900}
              className="h-[18rem] w-full object-cover sm:h-[23rem] md:h-[30rem] xl:h-[34rem]"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:gap-12">
          <div className="space-y-6 text-base leading-8 text-white/66 md:text-[1.05rem]">
            {service.detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="surface-panel h-fit rounded-[30px] p-6 xl:sticky xl:top-28">
            <p className="text-label text-white/40">Deliverables</p>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-7 text-white/60">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding border-y border-white/8 bg-[#070a11]">
        <div className="container-shell">
          <h2 className="font-bricolage text-[clamp(2.3rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            What this service includes
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {service.subServices.map((item, index) => (
              <article key={item.title} className="surface-panel overflow-hidden rounded-[30px]">
                <Image
                  src={
                    [
                      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
                      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
                      "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1400&q=80"
                    ][index % 3]
                  }
                  alt={item.title}
                  width={900}
                  height={700}
                  className="aspect-[16/11] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bricolage text-[1.85rem] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/60">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <h2 className="font-bricolage text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
            Related services
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="surface-panel rounded-[28px] p-6 transition hover:border-accent/22"
              >
                <p className="text-label text-accent">{item.name}</p>
                <h3 className="mt-4 font-bricolage text-[1.85rem] font-semibold leading-[1.03] text-white">
                  {item.tagline}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/60">{item.summary}</p>
              </Link>
            ))}
          </div>
          <div className="surface-panel mt-12 rounded-[32px] p-6 text-white md:p-8 xl:p-10">
            <h2 className="font-bricolage text-[clamp(2rem,4vw,2.25rem)] font-semibold">
              Ready to move on this service?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/64">
              Start with a conversation and we will map the right scope, timeline, and advisory
              structure for the priority in front of you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#071019] transition hover:bg-accent-hover"
            >
              Talk to Caladium
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
