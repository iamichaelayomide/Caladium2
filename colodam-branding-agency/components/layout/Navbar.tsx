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
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          solid
            ? "border-white/10 bg-[#07090f]/88 text-white shadow-[0_12px_38px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            : "border-transparent bg-transparent text-white"
        )}
        >
        <div className="container-shell flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <Logo dark compact />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-sm font-medium transition-colors",
                    active ? "text-accent" : "text-white/72 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-px bg-current transition-all duration-200",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/contact"
              className="text-sm font-medium text-white/62 transition-colors hover:text-white"
            >
              Talk to us
            </Link>
            <Button href="/contact" variant="primary" className="rounded-full px-5 py-2.5">
              Book a brand strategy call
            </Button>
          </div>
          <button
            className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#07090f] lg:hidden"
          >
            <div className="container-shell flex h-[72px] items-center justify-between border-b border-white/10">
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <Logo dark compact />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="container-shell flex min-h-[calc(100vh-72px)] flex-col justify-between py-12">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-3xl font-medium text-white" onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block pt-6 text-lg text-white/65"
                  onClick={() => setOpen(false)}
                >
                  Talk to us
                </Link>
              </div>
              <Button href="/contact" variant="primary" className="w-full rounded-full">
                Book a brand strategy call
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
