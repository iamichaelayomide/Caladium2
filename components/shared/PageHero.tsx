import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PageHero({
  breadcrumb,
  label,
  title,
  description,
  cta
}: {
  breadcrumb: string;
  label?: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pt-32 pb-[4.5rem] md:pt-40 md:pb-24">
      <div aria-hidden className="hero-glow absolute inset-x-0 top-0 h-full opacity-80" />
      <div aria-hidden className="hero-grid absolute inset-x-0 top-0 h-full opacity-35" />
      <div className="container-shell relative">
        <p className="mb-6 text-sm text-white/45">{breadcrumb}</p>
        {label ? <SectionLabel className="text-white/56">{label}</SectionLabel> : null}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-bricolage text-[clamp(3.2rem,7vw,6rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68 md:text-[1.15rem]">
              {description}
            </p>
            {cta ? (
              <div className="mt-8">
                <Button href={cta.href} variant="primary" className="rounded-full">
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </div>
          <div className="surface-panel hidden rounded-[28px] p-6 lg:block">
            <p className="text-label text-white/46">Caladium Lens</p>
            <p className="mt-4 font-bricolage text-2xl font-semibold leading-tight text-white">
              Strategy, structure, and execution built for African growth.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Every page now lives inside the same premium-dark system: calmer surfaces, stronger
              rhythm, and clearer decision-focused copy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
