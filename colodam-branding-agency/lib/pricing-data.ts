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
    name: "CaaS for Startups & SMEs",
    price: "$0.0",
    cadence: "Lifetime",
    description:
      "A zero-cost community layer for founders and small teams who want guidance, partnership, and ongoing access to Colodam's startup network.",
    features: [
      "Business management support",
      "Interactive training access",
      "Partnership platform entry",
      "Business mentorship with Colodam",
      "Colodam SME community"
    ],
    ctaLabel: "Join Community",
    ctaHref: "/contact"
  },
  {
    name: "Founders Clarity Session",
    price: "$200",
    cadence: "Per session",
    description:
      "A mini strategy session designed specifically for founders and startups. We help founders get clear on their vision, overcome obstacles, and achieve strategic goals.",
    features: [
      "Gain clarity on business vision and objectives",
      "Identify the obstacles holding the business back",
      "Develop a clear plan to achieve business goals",
      "Make informed decisions that support growth"
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact",
    featured: true
  },
  {
    name: "Startup & SME Setup Suite",
    audience: "Everything in Nano, plus",
    price: "$2500",
    cadence: "One time",
    description:
      "A structured setup package for growth-minded startups and SMEs that need formal operating foundations, compliance support, and sharper business presentation.",
    features: [
      "Business setup support",
      "Enterprise technology access",
      "Regulatory compliance services",
      "Organizational design",
      "Business pitch deck",
      "Business accounting templates"
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact"
  },
  {
    name: "Customized Strategy Services / Solution",
    audience: "Medium & Large Enterprises",
    price: "Custom",
    cadence: "Engagement-based",
    description:
      "For larger organizations that need a tailored campaign scope across strategy, governance, operating design, planning, and research.",
    features: [
      "Strategy retreat",
      "Financial planning",
      "Organization structuring",
      "Governance and compliance",
      "Market research customized solution"
    ],
    ctaLabel: "Schedule A Free Call",
    ctaHref: "/contact",
    custom: true
  }
];
