import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getServices, getSiteSettings } from "@/lib/sanity/fetch";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Caladium Consulting",
    template: "%s | Caladium Consulting"
  },
  description:
    "Caladium Consulting helps African enterprises scale through strategy, organizational design, market entry, and financial advisory.",
  metadataBase: new URL("https://caladiumconsulting.com")
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
            className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_14%_18%,rgba(217,154,43,0.16),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(95,115,255,0.12),transparent_26%),linear-gradient(180deg,rgba(11,14,20,0.7),transparent)]"
          />
          <Navbar />
          {children}
          <Footer services={services} contactDetails={siteSettings} />
        </div>
      </body>
    </html>
  );
}
