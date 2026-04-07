export type PricingTier = {
  name: string;
  audience?: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  custom?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Brand Audit",
    price: "$149",
    cadence: "One-off",
    description:
      "A focused brand health check for early teams that need clear positioning, sharper messaging, and practical next steps.",
    features: [
      "90-minute strategy call",
      "Messaging gap analysis",
      "Competitor positioning snapshot",
      "Quick-win action roadmap",
      "7-day follow-up support"
    ],
    ctaLabel: "Book Audit",
    ctaHref: "/contact"
  },
  {
    name: "Brand Sprint",
    price: "$890",
    cadence: "Per sprint",
    description:
      "A fast, high-impact sprint for founders and marketing teams that need immediate clarity and launch-ready assets.",
    features: [
      "Positioning and offer clarity",
      "Core message framework",
      "Campaign hook and content direction",
      "Landing-page copy outline",
      "14-day async support"
    ],
    ctaLabel: "Start Sprint",
    ctaHref: "/contact",
    featured: true
  },
  {
    name: "Growth Retainer",
    audience: "For growth-stage teams",
    price: "$2,400",
    cadence: "Monthly",
    description:
      "An ongoing partnership for teams that want consistent content, campaign execution, and optimization under one roof.",
    features: [
      "Monthly campaign strategy",
      "Creative production support",
      "Paid media guidance",
      "Weekly optimization reviews",
      "Performance reporting dashboard",
      "Dedicated account lead"
    ],
    ctaLabel: "Apply For Retainer",
    ctaHref: "/contact"
  },
  {
    name: "Custom Launch Program",
    audience: "For established brands and enterprise teams",
    price: "Custom",
    cadence: "Engagement-based",
    description:
      "A tailored end-to-end brand and growth program for major launches, rebrands, or multi-market campaigns.",
    features: [
      "Deep-dive brand strategy",
      "Identity refresh or redesign",
      "Campaign system architecture",
      "Cross-channel launch execution",
      "Leadership workshops and enablement"
    ],
    ctaLabel: "Request Proposal",
    ctaHref: "/contact",
    custom: true
  }
];
