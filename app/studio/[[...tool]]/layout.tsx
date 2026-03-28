import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | Caladium Consulting",
  robots: {
    index: false,
    follow: false
  }
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        [data-site-chrome="navbar"],
        [data-site-chrome="footer"],
        [data-site-chrome="backdrop"] {
          display: none !important;
        }
      `}</style>
      <div className="min-h-screen">{children}</div>
    </>
  );
}
