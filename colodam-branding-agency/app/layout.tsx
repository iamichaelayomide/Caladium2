import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Outfit } from "next/font/google";

import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getServices, getSiteSettings } from "@/lib/sanity/fetch";

const bricolage = Outfit({
  subsets: ["latin"],
  variable: "--font-bricolage"
});

const jakarta = Manrope({
  subsets: ["latin"],
  variable: "--font-jakarta"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Colodam",
    template: "%s | Colodam"
  },
  description:
    "Colodam is a marketing and branding agency helping African businesses build memorable identities, launch creative campaigns, and grow predictable demand.",
  metadataBase: new URL("https://colodam.vercel.app")
};

export const revalidate = 60;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [services, siteSettings] = await Promise.all([getServices(), getSiteSettings()]);

  return (
    <html lang="en" className={`${bricolage.variable} ${jakarta.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg font-jakarta text-ink antialiased">
        <div className="relative isolate flex min-h-screen flex-col overflow-x-clip">
          <div
            aria-hidden
            data-site-chrome="backdrop"
            className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_12%_16%,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(16,185,129,0.12),transparent_26%),linear-gradient(180deg,rgba(248,251,255,0.9),transparent)]"
          />
          <Navbar />
          {children}
          <Footer services={services} contactDetails={siteSettings} />
        </div>
      </body>
    </html>
  );
}
