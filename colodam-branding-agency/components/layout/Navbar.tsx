"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const transparentHero = pathname === "/";
  const solid = !transparentHero || scrolled || open;

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 60));
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        data-site-chrome="navbar"
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-shell">
          <div
            className={cn(
              "mt-4 flex h-[74px] items-center rounded-3xl border px-4 transition-all duration-300",
              solid
                ? "border-slate-200 bg-white/96 shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                : "border-blue-100 bg-[#f8fbff]/92 shadow-[0_10px_28px_rgba(15,23,42,0.1)] backdrop-blur-lg"
            )}
          >
            <Link href="/" className="flex min-w-[9.5rem] items-center">
              <Logo dark compact />
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-1.5 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-blue-100 text-blue-800"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Button href="/services" variant="outline" className="rounded-xl px-4 py-2.5">
                Services
              </Button>
              <Button href="/contact" variant="primary" className="rounded-xl px-5 py-2.5">
                Book a brand strategy call
              </Button>
            </div>

            <button
              className="ml-auto rounded-xl border border-slate-300 bg-white p-2 text-slate-900 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: "100%", opacity: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[60] w-[min(100%,22rem)] border-l border-slate-200 bg-white lg:hidden"
          >
            <div className="flex h-[76px] items-center justify-between border-b border-slate-200 px-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Menu</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-xl border border-slate-300 bg-white p-2 text-slate-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex min-h-[calc(100vh-76px)] flex-col justify-between px-5 py-8">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                <Button href="/services" variant="outline" className="w-full rounded-xl">
                  Explore services
                </Button>
                <Button href="/contact" variant="primary" className="w-full rounded-xl">
                  Book a brand strategy call
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
