import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  contactDetails as fallbackContactDetails,
  services as fallbackServices,
  type Service
} from "@/lib/site-data";
import type { ContactDetailsContent } from "@/lib/sanity/fetch";

export function Footer({
  services = fallbackServices,
  contactDetails = fallbackContactDetails
}: {
  services?: Service[];
  contactDetails?: Pick<ContactDetailsContent, "address" | "email" | "phoneLabel" | "hours">;
}) {
  const year = new Date().getFullYear();

  return (
    <footer data-site-chrome="footer" className="border-t border-slate-200 bg-[#eef4ff] text-slate-900">
      <div className="container-shell py-[4.5rem]">
        <div className="surface-panel rounded-[32px] px-6 py-8 sm:px-8">
          <div className="grid gap-8 2xl:grid-cols-[1.2fr_0.8fr] 2xl:items-end 2xl:gap-10">
            <div>
              <Section />
              <Logo dark />
              <h2 className="mt-6 max-w-2xl font-bricolage text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-900">
                Bold brand systems for African businesses building with serious intent.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700/62">
                We work with founders and marketing teams to sharpen positioning, align campaigns,
                and build momentum that lasts beyond launch week.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row 2xl:justify-end">
              <Button href="/contact" variant="primary" className="min-w-[12rem]">
                Start a conversation
              </Button>
              <Button href="/services" variant="outline" className="min-w-[12rem]">
                Explore services
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 2xl:grid-cols-4">
          <div>
            <p className="text-label text-slate-700/40">Connect</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-700/60">
              Strategy, process, and people expertise rooted in African markets and built for
              decisive operators.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-accent/30 hover:bg-accent/10"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-label text-slate-700/40">Company</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700/70">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/blog", "Journal"],
                ["/contact", "Contact"]
              ].map(([href, label]) => (
                <Link key={href} href={href} className="block transition hover:text-slate-900">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-label text-slate-700/40">Services</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700/70">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block transition hover:text-slate-900"
                >
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-label text-slate-700/40">Contact</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700/70">
              <p>{contactDetails.address}</p>
              <p>
                <span className="text-slate-700/42">Email:</span> {contactDetails.email}
              </p>
              <p>
                <span className="text-slate-700/42">Phone:</span> {contactDetails.phoneLabel}
              </p>
              <p>
                <span className="text-slate-700/42">Hours:</span> {contactDetails.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 text-xs text-slate-700/40 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} Colodam Limited. All rights reserved.</p>
          <p>Clarity for growth. Structure for scale.</p>
        </div>
      </div>
    </footer>
  );
}

function Section() {
  return <p className="text-label text-slate-700/40">Colodam</p>;
}
