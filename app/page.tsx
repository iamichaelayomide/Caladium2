import { HomeAboutPreview, HomeVision, HomeWhyCaladium } from "@/components/home/AboutWhyVision";
import { HomeBlogPreview, HomeClientLogos, HomeContactPreview, HomeTestimonials } from "@/components/home/EngagementSections";
import { HomeHero } from "@/components/home/Hero";
import { HomeServices } from "@/components/home/ServicesStats";
import {
  getBlogPosts,
  getHomePageContent,
  getServices,
  getSiteSettings
} from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function HomePage() {
  const [blogPosts, homePage, services, siteSettings] = await Promise.all([
    getBlogPosts(),
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
      <HomeServices services={services} />
      <HomeAboutPreview />
      <HomeWhyCaladium />
      <HomeVision />
      <HomeTestimonials />
      <HomeClientLogos />
      <HomeContactPreview details={siteSettings} />
      <HomeBlogPreview
        posts={blogPosts.slice(0, 4)}
        heading={homePage.journalHeading}
        description={homePage.journalDescription}
      />
    </>
  );
}
