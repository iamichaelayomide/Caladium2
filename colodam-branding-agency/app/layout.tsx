import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Outfit } from "next/font/google";

import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

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
  description: "Colodam is a Cello-inspired digital brand studio.",
  metadataBase: new URL("https://colodam.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jakarta.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg font-jakarta text-ink antialiased">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

