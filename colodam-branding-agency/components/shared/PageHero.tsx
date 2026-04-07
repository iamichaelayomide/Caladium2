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
    <section className="relative overflow-hidden border-b border-slate-200 pt-28 pb-[4rem] md:pt-32 md:pb-20 xl:pt-40 xl:pb-24">
      <div aria-hidden className="hero-glow absolute inset-x-0 top-0 h-full opacity-80" />
      <div aria-hidden className="hero-grid absolute inset-x-0 top-0 h-full opacity-35" />
      <div className="container-shell relative">
        <p className="mb-6 text-sm text-slate-700/45">{breadcrumb}</p>
        {label ? <SectionLabel className="text-slate-700/56">{label}</SectionLabel> : null}
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-end xl:gap-10">
          <div>
            <h1 className="max-w-4xl font-bricolage text-[clamp(2.2rem,7.5vw,4.8rem)] font-semibold leading-[1] tracking-[-0.05em] text-slate-900">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-[0.94rem] leading-7 text-slate-700/68 md:text-base xl:text-[1.05rem]">
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
          <div className="surface-panel hidden rounded-[28px] p-6 xl:block">
            <p className="text-label text-slate-700/46">Colodam Lens</p>
            <p className="mt-4 font-bricolage text-2xl font-semibold leading-tight text-slate-900">
              Strategy, structure, and execution built for African growth.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700/58">
              Every page now lives inside the same premium-dark system: calmer surfaces, stronger
              rhythm, and clearer decision-focused copy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
