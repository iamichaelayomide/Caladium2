"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { celloNav, celloSocials } from "@/lib/cello-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-shell">
          <div className="mt-4 flex h-16 items-center rounded-2xl border border-slate-200 bg-white/95 px-4 shadow-[0_12px_26px_rgba(15,23,42,0.12)] backdrop-blur">
            <Link href="/" className="font-bricolage text-2xl font-semibold tracking-[-0.03em] text-slate-900">
              colodam
            </Link>

            <nav className="mx-auto hidden items-center gap-1 lg:flex">
              {celloNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    pathname === item.href
                      ? "bg-blue-100 text-blue-800"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {celloSocials.slice(0, 2).map((social) => (
                  <Link key={social.label} href={social.href} className="hover:text-blue-700">
                    {social.label}
                  </Link>
                ))}
              </div>
              <Button href="/contact" variant="primary" size="sm" className="rounded-xl">
                Let&apos;s chat
              </Button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="ml-auto rounded-xl border border-slate-300 bg-white p-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[60] w-[min(100%,22rem)] border-l border-slate-200 bg-white p-5 lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Menu</p>
              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-300 bg-white p-2"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              {celloNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-lg font-medium text-slate-900 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <Button href="/contact" variant="primary" className="w-full rounded-xl">
                Let&apos;s chat
              </Button>
              <Button href="/work" variant="outline" className="w-full rounded-xl">
                View work
              </Button>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}

