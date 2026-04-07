import { DynamicVibeHome } from "@/components/home/DynamicVibeHome";
import { HomeContactPreview } from "@/components/home/EngagementSections";
import { PricingSection } from "@/components/shared/PricingSection";
import {
  getServices,
  getSiteSettings,
  getTeamMembers
} from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function HomePage() {
  const [services, siteSettings, teamMembers] = await Promise.all([
    getServices(),
    getSiteSettings(),
    getTeamMembers()
  ]);

  const featuredServices = services.slice(0, 5);
  const featuredTeam = teamMembers.slice(0, 4);

  return (
    <>
      <DynamicVibeHome services={featuredServices} team={featuredTeam} />

      <PricingSection />

      <HomeContactPreview details={siteSettings} />
    </>
  );
}
