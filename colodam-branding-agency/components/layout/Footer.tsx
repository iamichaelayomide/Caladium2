import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { celloNav, celloSocials } from "@/lib/cello-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-[#eef4ff]">
      <div className="container-shell py-14">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_14px_32px_rgba(15,23,42,0.08)]">
          <p className="text-label text-blue-700">Colodam Studio</p>
          <h2 className="mt-4 max-w-3xl font-bricolage text-[clamp(2rem,4.2vw,3.3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-slate-900">
            We make brands feel unforgettable.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Identity, storytelling, and campaign systems for teams launching the next category leaders.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact" variant="primary">Book a call</Button>
            <Button href="/work" variant="outline">See portfolio</Button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-bricolage text-2xl font-semibold text-slate-900">colodam</p>
            <p className="mt-3 text-sm text-slate-600">A Cello-inspired digital brand studio.</p>
          </div>
          <div>
            <p className="text-label text-slate-500">Navigate</p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              {celloNav.map((item) => (
                <Link key={item.href} href={item.href} className="block hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label text-slate-500">Socials</p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              {celloSocials.map((social) => (
                <Link key={social.label} href={social.href} className="block hover:text-blue-700">
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          Copyright {year} Colodam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

