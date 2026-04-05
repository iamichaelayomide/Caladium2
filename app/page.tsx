import { HomeWhyCaladium } from "@/components/home/AboutWhyVision";
import { HomeClientLogos, HomeContactPreview, HomeTestimonials } from "@/components/home/EngagementSections";
import { HomeHero } from "@/components/home/Hero";
import { HomeServices } from "@/components/home/ServicesStats";
import { PricingSection } from "@/components/shared/PricingSection";
import {
  getHomePageContent,
  getServices,
  getSiteSettings
} from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function HomePage() {
  const [homePage, services, siteSettings] = await Promise.all([
    getHomePageContent(),
    getServices(),
    getSiteSettings()
  ]);

  return (
    <>
      <HomeHero
        label={homePage.heroLabel}
        title={homePage.heroTitle}
        description={homePage.heroDescription}
        statsData={homePage.stats}
      />
      <HomeClientLogos />
      <HomeServices services={services} />
      <PricingSection />
      <HomeWhyCaladium items={homePage.whyCaladium} />
      <HomeTestimonials items={homePage.testimonials} />
      <HomeContactPreview details={siteSettings} />
    </>
  );
}
