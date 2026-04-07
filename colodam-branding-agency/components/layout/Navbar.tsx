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
        className="fixed inset-x-0 top-4 z-50"
      >
        <div className="container-shell">
          <div
            className={cn(
              "flex h-[76px] items-center rounded-full border px-3 transition-all duration-300",
              solid
                ? "border-slate-200 bg-white/95 shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                : "border-blue-100 bg-white/88 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-lg"
            )}
          >
            <Link href="/" className="flex min-w-[9.5rem] items-center pl-2">
              <Logo dark compact />
            </Link>

            <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            </nav>

            <div className="hidden items-center gap-3 pr-2 lg:flex">
              <Button href="/services" variant="outline" className="rounded-full px-4 py-2.5">
                Services
              </Button>
              <Button href="/contact" variant="primary" className="rounded-full px-5 py-2.5">
                Book a brand strategy call
              </Button>
            </div>

            <button
              className="ml-auto rounded-full border border-slate-300 bg-white p-2 text-slate-900 lg:hidden"
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
                className="rounded-full border border-slate-300 bg-white p-2 text-slate-900"
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
                    className="block rounded-2xl px-4 py-3 text-lg font-medium text-slate-900 transition hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                <Button href="/services" variant="outline" className="w-full rounded-full">
                  Explore services
                </Button>
                <Button href="/contact" variant="primary" className="w-full rounded-full">
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
