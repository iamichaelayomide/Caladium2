import { HomeAboutPreview, HomeVision, HomeWhyCaladium } from "@/components/home/AboutWhyVision";
import { HomeBlogPreview, HomeClientLogos, HomeContactPreview, HomeTestimonials } from "@/components/home/EngagementSections";
import { HomeHero } from "@/components/home/Hero";
import { HomeServices } from "@/components/home/ServicesStats";
import { getBlogPosts } from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function HomePage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeAboutPreview />
      <HomeWhyCaladium />
      <HomeVision />
      <HomeTestimonials />
      <HomeClientLogos />
      <HomeContactPreview />
      <HomeBlogPreview posts={blogPosts.slice(0, 4)} />
    </>
  );
}
