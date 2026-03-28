export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  cardDescription: string;
  image: string;
  features: string[];
  detailParagraphs: string[];
  subServices: { title: string; description: string }[];
  relatedSlugs: string[];
};

export type BlogPost = {
  slug: string;
  category: "Strategy" | "SME" | "Report" | "Founders" | "Operations" | "Market Entry";
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  authorImage?: string;
  body: {
    intro: string[];
    sections: { heading: string; paragraphs: string[]; bullets?: string[]; quote?: string }[];
  };
};

export type Career = {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  overview: string[];
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin: string;
};

export const contactDetails = {
  phoneLabel: "+234 802 433 2000",
  phoneHref: "tel:+2348024332000",
  email: "enquiries@caladiumconsulting.com",
  emailHref: "mailto:enquiries@caladiumconsulting.com",
  careersEmail: "careers@caladiumconsulting.com",
  address: "D24, Dolphin Plaza, Corporation Drive, Dolphin Estate, Ikoyi, Lagos, Nigeria",
  mapHref: "https://maps.google.com/?q=Dolphin+Plaza+Ikoyi+Lagos",
  hours: "Mon - Fri, 9AM - 6PM WAT"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
] as const;

export const heroImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";

export const stats = [
  { value: 95, suffix: "%", label: "Client Satisfaction Rate", description: "Long-term relationships built on trust, clarity, and results." },
  { value: 15, suffix: "+", label: "Years of Combined Experience", description: "Senior consultants with deep African and global market insight." },
  { value: 200, suffix: "+", label: "Organizations Supported", description: "Across strategy, operations, financial advisory, and transformation." },
  { value: 40, suffix: "%", label: "Average Growth Achieved", description: "Clients report measurable revenue and performance improvement." }
] as const;

export const whyCaladiumTabs = [
  {
    id: "strategic-precision",
    title: "Strategic Precision",
    body: "Our work goes beyond theory and turns business goals into focused action plans that leaders can actually execute.",
    bullets: [
      "Solutions grounded in research and analytics",
      "Leadership alignment around what matters most",
      "Strategies designed to be visionary and practical"
    ]
  },
  {
    id: "senior-led-expertise",
    title: "Senior-Led Expertise",
    body: "Every engagement is led by experienced consultants with real African and international operating experience.",
    bullets: [
      "Senior partner visibility throughout the engagement",
      "Board-level and C-suite perspective",
      "Commercial judgment shaped by real operating contexts"
    ]
  },
  {
    id: "tailored-solutions",
    title: "Tailored Solutions",
    body: "We do not deliver generic frameworks. Every engagement is designed around your market, culture, business model, and ambition.",
    bullets: [
      "No off-the-shelf consulting",
      "Built around your exact context",
      "Refined as your needs evolve"
    ]
  },
  {
    id: "long-term-value",
    title: "Long-Term Value",
    body: "We measure success by what lasts in your business after the project, not just by what looks good in a presentation.",
    bullets: [
      "Capability transfer built into delivery",
      "Post-engagement support and checkpoints",
      "Outcomes designed to outlast our involvement"
    ]
  },
  {
    id: "transparent-partnership",
    title: "Transparent Partnership",
    body: "We operate as partners, not vendors. You always know what we are doing, why we are doing it, and how success is being measured.",
    bullets: [
      "Clear communication and progress reviews",
      "Shared accountability for outcomes",
      "Honest counsel when it matters most"
    ]
  }
] as const;

export const serviceTabPanels = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    intro: "Our Strategic Advisory service helps leadership teams make smarter decisions, define direction, and align around what matters most.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    features: [
      { title: "Define Strategic Direction", description: "Clarify your business model, positioning, and growth priorities." },
      { title: "Build Competitive Advantage", description: "Identify where you can win and strengthen that advantage." },
      { title: "Align Leadership Around Priorities", description: "Get decision-makers moving in the same direction." }
    ]
  },
  {
    id: "operational-consulting",
    title: "Operational Consulting",
    intro: "We help organizations improve how they work through clearer systems, sharper workflows, and scalable structures.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    features: [
      { title: "Process Engineering & Redesign", description: "Map and redesign workflows for efficiency and control." },
      { title: "Performance Management Systems", description: "Build KPI structures that strengthen accountability." },
      { title: "Technology Enablement", description: "Select practical tools that support daily execution." }
    ]
  },
  {
    id: "change-growth-acceleration",
    title: "Change & Growth Acceleration",
    intro: "We support leaders through transformation and growth while protecting continuity and execution quality.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    features: [
      { title: "Market Entry & Expansion", description: "Build the roadmap and support the move into new markets." },
      { title: "Organizational Transformation", description: "Guide restructuring, culture shifts, and capability building." },
      { title: "Founder-to-Enterprise Transition", description: "Help founder-led businesses mature into scalable organizations." }
    ]
  }
] as const;

export const testimonials = [
  {
    quote: "We came in with a messy strategy and left with a clear roadmap and aligned leadership team. Caladium stayed until the work was actually done.",
    name: "Chukwuemeka A.",
    title: "CEO, Lagos FMCG Company",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    quote: "Their organizational redesign transformed how we operate. We are faster, leaner, and far more aligned now.",
    name: "Ngozi O.",
    title: "COO, Nigerian Financial Services Group",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
  },
  {
    quote: "The Founders Clarity Session gave us more strategic clarity in two hours than we had in two years.",
    name: "Adebayo F.",
    title: "Founder, B2B Tech Startup, Abuja",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
  },
  {
    quote: "They helped us lead a major restructuring with purpose instead of panic. The organization came out stronger.",
    name: "Amaka N.",
    title: "Managing Director, Professional Services Firm, Lagos",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80"
  },
  {
    quote: "They redesigned systems that actually work in the Nigerian context. We are running faster and smarter.",
    name: "Tunde I.",
    title: "Head of Operations, Nigerian Manufacturing Company",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80"
  },
  {
    quote: "Their ability to align people, process, and strategy was exactly what our growth phase needed.",
    name: "Funke B.",
    title: "CEO, Pan-African Retail Group",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=900&q=80"
  }
] as const;

export const clientLogoRows = [
  ["FirstBank", "GTBank", "Stanbic IBTC", "Shell Nigeria", "Lagos State", "Sohcahtoa", "Stretford Hill", "So Fresh"],
  ["FCMB", "Access Bank", "UBA", "Dangote Group", "MTN Nigeria", "Interswitch", "Flutterwave", "Paystack"]
] as const;

export const teamMembers: TeamMember[] = [
  { name: "Aderonke Adebiyi", title: "Managing Partner", bio: "Leads strategy engagements and board advisory mandates across African enterprises.", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Tomiwa Adeoye", title: "Director, Strategy", bio: "Specializes in business model design, positioning, and growth strategy.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Ifeoma Nwosu", title: "Director, Operations & Process Engineering", bio: "Designs high-performance operating models and workflow redesign programs.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Emeka Okorie", title: "Senior Consultant, Organizational Design", bio: "Builds governance, leadership structures, and culture systems for scale.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Mariam Bello", title: "Principal, Financial Advisory", bio: "Supports budgeting, forecasting, controls, and performance improvement.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Chinonso Eze", title: "Research Lead, SME Intelligence", bio: "Leads Caladium research programs and proprietary market studies.", image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "David Osei", title: "Market Entry Specialist", bio: "Supports expansion strategy, partnerships, and go-to-market planning.", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Adaeze Nnamani", title: "Change Management Consultant", bio: "Guides leaders through restructuring, communication, and adoption.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Samuel Afolayan", title: "Senior Business Analyst", bio: "Turns commercial complexity into dashboards, insight, and action.", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Peace Nwachukwu", title: "Process Engineer (Certified Lean Six Sigma)", bio: "Maps and redesigns processes with a focus on throughput and control.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Favour Williams", title: "Client Engagement Manager", bio: "Keeps engagements aligned from kickoff through post-delivery support.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80", linkedin: "#" },
  { name: "Oluwadamilola Sanni", title: "Business Setup Specialist", bio: "Supports founders with setup, compliance, and launch readiness.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80", linkedin: "#" }
];

export const services: Service[] = [
  {
    slug: "strategy-business-planning",
    name: "Strategy & Business Planning",
    shortName: "Strategy & Planning",
    tagline: "Clear, data-driven strategies to drive growth and competitive edge.",
    summary: "We help African organizations define direction, sharpen choices, and build practical roadmaps for growth and competitive advantage.",
    cardDescription: "Clear, data-driven strategies to drive growth and competitive edge.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    features: ["Strategic Planning", "Business Model Development", "Market & Competitive Analysis", "Vision & Mission Refinement", "Go-to-Market Strategy", "Growth & Expansion Strategy"],
    detailParagraphs: ["We help leadership teams define what matters most and where the business should focus next.", "From market intelligence and business model design to leadership alignment and growth roadmaps, our work turns ambition into structured action.", "This service is valuable for founders, executive teams, and enterprises facing strategic complexity or expansion decisions."],
    subServices: [{ title: "Executive Strategy Workshops", description: "Facilitated sessions that align leaders around ambition and strategic priorities." }, { title: "Growth Roadmaps", description: "Structured plans that connect long-term direction with execution milestones." }, { title: "Market Positioning", description: "Sharper positioning based on market opportunity and competitive reality." }],
    relatedSlugs: ["market-entry-expansion", "business-analysis-research", "organizational-design"]
  },
  {
    slug: "organizational-design",
    name: "Organizational Design",
    shortName: "Organizational Design",
    tagline: "Shaping agile teams and future-ready leadership structures.",
    summary: "We redesign structures, governance, and talent systems so organizations can scale without losing alignment or control.",
    cardDescription: "Shaping agile structures and future-ready leadership for scale.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=80",
    features: ["Leadership Development", "Culture Transformation", "Organizational Redesign", "Internal Communication Strategy", "Talent & Capability Building", "Change Readiness"],
    detailParagraphs: ["As businesses grow, old reporting lines and decision habits often stop working. We help leaders redesign them.", "Our work covers governance, accountability, role clarity, leadership capability, and the operating rhythms that support scale.", "For founder-led companies, this service often bridges the gap between entrepreneurial speed and enterprise readiness."],
    subServices: [{ title: "Operating Model Design", description: "Define how structure, governance, and decisions should work at scale." }, { title: "Leadership Enablement", description: "Equip senior teams to lead through growth and complexity." }, { title: "Culture & Communication", description: "Shape the narratives and behaviors that support sustainable change." }],
    relatedSlugs: ["change-management", "process-engineering", "strategy-business-planning"]
  },
  {
    slug: "market-entry-expansion",
    name: "Market Entry & Expansion",
    shortName: "Market Entry",
    tagline: "Guided strategies for launching into new regions or industries.",
    summary: "We support organizations entering new regions, customer segments, and industries across Africa and beyond with disciplined market-entry strategy.",
    cardDescription: "Guided strategies for entering new regions and industries across Africa.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    features: ["Market Research & Analysis", "Entry Strategy Development", "Regulatory & Compliance Advisory", "Partnership & Alliance Building", "Go-to-Market Execution", "Growth Scaling & Optimization"],
    detailParagraphs: ["Expansion works best when the business understands both the opportunity and the operational realities of the target market.", "We help leadership teams evaluate markets, sequence investment, design entry strategies, and prepare for launch.", "This service supports Nigerian companies expanding across Africa and global businesses entering African markets."],
    subServices: [{ title: "Market Prioritization", description: "Choose the right markets based on fit, complexity, and opportunity." }, { title: "Entry Readiness", description: "Assess the capability and operating gaps that need to be closed before launch." }, { title: "Partnership Strategy", description: "Design local partner and channel strategies that reduce risk and increase traction." }],
    relatedSlugs: ["strategy-business-planning", "business-analysis-research", "business-setup-support"]
  },
  {
    slug: "financial-advisory",
    name: "Financial Advisory",
    shortName: "Financial Advisory",
    tagline: "Smart budgeting, forecasting, and financial health planning.",
    summary: "We improve financial clarity through forecasting, reporting, control design, and profit-focused analysis that supports better decisions.",
    cardDescription: "Smart budgeting, forecasting, and financial health planning.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    features: ["Financial Analysis & Reporting", "Budgeting & Forecasting", "Cost Management & Optimization", "Profitability Improvement", "Financial Controls & Risk Management", "Cash Flow Management"],
    detailParagraphs: ["Financial discipline is foundational to growth, especially in volatile environments.", "We help leaders understand the economics of the business, improve reporting quality, and make sharper budgeting and profitability decisions.", "The work is relevant for SMEs, founder-led firms, and larger enterprises preparing for scale or capital."],
    subServices: [{ title: "Management Reporting", description: "Build clearer reporting packs that support executive decision-making." }, { title: "Forecasting Models", description: "Develop practical forecasting and scenario-planning tools." }, { title: "Commercial Performance Review", description: "Identify margin pressure, leakage, and profit improvement opportunities." }],
    relatedSlugs: ["business-analysis-research", "strategy-business-planning", "process-engineering"]
  },
  {
    slug: "process-engineering",
    name: "Process Engineering",
    shortName: "Process Engineering",
    tagline: "Streamlining processes to maximize efficiency and output.",
    summary: "We redesign workflows, control points, and performance systems so organizations can execute faster, leaner, and with greater consistency.",
    cardDescription: "Streamlining operations to maximize efficiency and eliminate waste.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    features: ["Process Improvement", "Performance Management", "Operational Restructuring", "Technology Enablement", "Capacity & Resource Optimization", "Workflow Design"],
    detailParagraphs: ["As companies grow, operational workarounds become expensive. We help leaders redesign how work flows through the business.", "The focus is on throughput, quality, handoffs, controls, and the practical systems that support smoother execution.", "This is especially useful for businesses preparing for technology adoption, scale, or operational restructuring."],
    subServices: [{ title: "Workflow Mapping", description: "Surface bottlenecks and inefficiencies in the current state." }, { title: "KPI System Design", description: "Build performance measures that support accountability and throughput." }, { title: "Operational Redesign", description: "Reshape work, roles, and control points for smoother delivery." }],
    relatedSlugs: ["organizational-design", "change-management", "financial-advisory"]
  },
  {
    slug: "business-analysis-research",
    name: "Business Analysis & Research",
    shortName: "Business Analysis",
    tagline: "Unlocking clarity through analytics and performance insights.",
    summary: "We turn business questions into evidence through research, insight generation, competitive intelligence, and structured analysis.",
    cardDescription: "Unlocking clarity through analytics, market research, and SME intelligence.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1400&q=80",
    features: ["Data Strategy & Governance", "Competitive Intelligence", "Business Intelligence Reporting", "Customer & Market Insights", "Feasibility Studies", "SME Market Research"],
    detailParagraphs: ["Strong strategy depends on strong evidence. We help clients answer commercial and strategic questions with disciplined research and analysis.", "Our work covers market opportunity, customer insight, performance analysis, and feasibility assessments that guide better decisions.", "This capability also powers many of our strategy, expansion, and transformation engagements."],
    subServices: [{ title: "Insight Studies", description: "Custom research projects built around strategic questions." }, { title: "Performance Dashboards", description: "Business intelligence views that make signals easier to act on." }, { title: "Feasibility Analysis", description: "Evaluate new initiatives and investments before committing." }],
    relatedSlugs: ["strategy-business-planning", "market-entry-expansion", "financial-advisory"]
  },
  {
    slug: "change-management",
    name: "Change Management",
    shortName: "Change Management",
    tagline: "Smooth, structured transitions during periods of transformation.",
    summary: "We guide organizations through change with structured communication, stakeholder alignment, and adoption support.",
    cardDescription: "Structured transitions during periods of transformation.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    features: ["Change Strategy & Planning", "Stakeholder Engagement", "Communication Management", "Training & Capability Building", "Adoption & Reinforcement", "Change Impact Assessment"],
    detailParagraphs: ["Even the right strategy fails when people are not ready for the shift. We help leaders manage that reality.", "Our work covers change narrative, stakeholder mapping, manager enablement, adoption planning, and reinforcement.", "The objective is to preserve trust, reduce disruption, and improve uptake across the business."],
    subServices: [{ title: "Stakeholder Alignment", description: "Map influence, concerns, and communication needs across the organization." }, { title: "Change Communications", description: "Build clear communication rhythms that reduce confusion and resistance." }, { title: "Capability Transfer", description: "Equip managers and champions to sustain the change internally." }],
    relatedSlugs: ["organizational-design", "process-engineering", "strategy-business-planning"]
  },
  {
    slug: "business-setup-support",
    name: "Business Setup Support",
    shortName: "Business Setup",
    tagline: "Everything you need to launch and structure your business properly.",
    summary: "We help entrepreneurs and SMEs formalize operations through setup support, compliance guidance, and practical business foundations.",
    cardDescription: "Everything you need to launch and structure your business properly.",
    image: "https://images.unsplash.com/photo-1521790366320-3f3c4f85524a?auto=format&fit=crop&w=1400&q=80",
    features: ["Company Registration", "Business Pitch Deck", "Accounting Templates", "Regulatory Compliance", "Enterprise Technology Access", "Operational Foundation"],
    detailParagraphs: ["Launching a business is about more than registration. Founders need practical systems, templates, and documentation that improve readiness.", "We help reduce ambiguity around compliance, pitch materials, financial templates, and early operating foundations.", "This service is useful for early-stage businesses, growth-minded SMEs, and companies entering new markets."],
    subServices: [{ title: "Launch Readiness", description: "Get the compliance and operating essentials in place." }, { title: "Founder Toolkit", description: "Create pitch materials, templates, and foundational business assets." }, { title: "Operational Foundations", description: "Set up simple systems that support disciplined early execution." }],
    relatedSlugs: ["market-entry-expansion", "strategy-business-planning", "financial-advisory"]
  }
];

const simpleBody = (focus: string): BlogPost["body"] => ({
  intro: [
    `Caladium publishes research and advisory insight to help leaders make sharper decisions around ${focus}.`,
    "Our perspective combines strategy, process, people, and the practical realities of operating in African markets."
  ],
  sections: [
    { heading: "What leaders should notice", paragraphs: [`The key issue in ${focus} is not activity alone. It is clarity, sequencing, and disciplined execution.`] },
    { heading: "Why it matters", paragraphs: ["Businesses scale better when leaders align ambition with evidence, capability, and operating discipline."], bullets: ["Clear choices", "Stronger systems", "Better execution"] },
    { heading: "What happens next", paragraphs: ["Organizations that invest in sharper strategy and stronger execution are better positioned for growth, resilience, and transformation."], quote: "Clarity is not a luxury. It is a growth advantage." }
  ]
});

export const blogPosts: BlogPost[] = [
  { slug: "driving-business-success", category: "Strategy", date: "March 2025", readTime: "6 min read", title: "Driving Business Success: How Caladium Shapes African Enterprise", excerpt: "In a rapidly evolving business environment, staying ahead requires more than ambition. Here is how our approach is helping Nigerian businesses thrive.", coverImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("strategy and growth") },
  { slug: "business-struggling-asking-for-help", category: "SME", date: "February 2025", readTime: "5 min read", title: "Is Your Business Struggling? It's Not Failing - It's Asking for Help", excerpt: "Most businesses do not collapse overnight. The warning signs are always there. The key is knowing how to read them and what to do next.", coverImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("SME pressure and turnaround") },
  { slug: "2024-sme-report", category: "Report", date: "2024", readTime: "8 min read", title: "The 2024 Caladium Nigeria SME Report: Key Findings", excerpt: "We interviewed over 1,500 businesses and industry experts to uncover the real challenges and opportunities in Nigeria's business landscape.", coverImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("SME research and insight") },
  { slug: "founders-clarity-session-lessons", category: "Founders", date: "January 2025", readTime: "5 min read", title: "What the Founders Clarity Session Has Taught Us About Nigerian Startups", excerpt: "Patterns emerge quickly when founders bring their toughest questions into the same room. These are the ones we keep seeing.", coverImage: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("founder clarity and growth") },
  { slug: "founder-led-to-founder-limited", category: "Operations", date: "January 2025", readTime: "6 min read", title: "When Founder-Led Becomes Founder-Limited: The Case for Redesign", excerpt: "What made the business work at NGN50M can actively slow it down at NGN500M. Growth requires a different operating design.", coverImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("operating redesign") },
  { slug: "expanding-across-africa", category: "Market Entry", date: "December 2024", readTime: "7 min read", title: "Expanding Across Africa: What Nigerian Businesses Get Wrong", excerpt: "Ambition is not the hard part. The hard part is choosing the right market, the right timing, and the right operating model.", coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("market entry and expansion") },
  { slug: "five-kpis-for-smes", category: "Strategy", date: "November 2024", readTime: "4 min read", title: "The 5 KPIs Every Nigerian SME Should Be Tracking Right Now", excerpt: "The point of KPIs is not reporting. It is decision quality. These five measures give leaders a clearer picture of performance.", coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("KPI discipline") },
  { slug: "founder-led-to-board-governed", category: "Founders", date: "October 2024", readTime: "7 min read", title: "How to Transition From Founder-Led to Board-Governed in 18 Months", excerpt: "Governance maturity does not happen by accident. It needs sequencing, discipline, and a willingness to let structure catch up with ambition.", coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("governance and founder transition") },
  { slug: "nigerian-business-landscape-2025", category: "Report", date: "2025", readTime: "8 min read", title: "Nigerian Business Landscape 2025: What Our Research Reveals", excerpt: "What is shaping leadership decisions in 2025? Our latest research points to a clearer pattern than many expect.", coverImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80", author: "Caladium Consulting Research Team", body: simpleBody("the business landscape") }
];

export const careers: Career[] = [
  { slug: "strategy-consultant", title: "Strategy Consultant", location: "Lagos, Nigeria", type: "Hybrid", summary: "Join our core consulting team to lead strategic planning, market analysis, and growth initiatives for corporate clients across Africa.", overview: ["You will work directly with senior consultants and client leaders on strategic recommendations.", "The role suits sharp thinkers with strong business judgment and structured communication."], responsibilities: ["Lead strategic analysis across engagements", "Develop client-ready recommendations", "Support growth, strategy, and market-entry work", "Contribute to thought leadership and internal development"], requirements: ["3-5 years in strategy consulting or corporate strategy", "Strong analytical and communication skills", "Comfort with client workshops and executive material", "African market exposure is an advantage"], benefits: ["Hybrid work model", "Direct partner exposure", "High-impact client work", "Structured mentorship"] },
  { slug: "operations-analyst", title: "Operations & Process Analyst", location: "Lagos, Nigeria", type: "On-site", summary: "Support our clients in optimizing systems, processes, and operations through analysis, redesign, and KPI tracking.", overview: ["You will diagnose bottlenecks and support workflow redesign across sectors.", "The role combines analytical discipline with client-facing collaboration."], responsibilities: ["Map processes and identify waste", "Support KPI design and reporting", "Prepare analysis for process engineering work", "Test and refine redesigned workflows"], requirements: ["2-4 years in operations, analysis, or process improvement", "Strong spreadsheet capability", "Clear documentation skills", "Exposure to Lean Six Sigma is helpful"], benefits: ["Hands-on delivery exposure", "Continuous learning", "Growth into consulting leadership", "High-ownership role"] },
  { slug: "change-manager", title: "Organizational Change Manager", location: "Lagos / Remote", type: "Hybrid", summary: "Help clients navigate transformation with empathy, structure, and disciplined communication planning.", overview: ["You will design adoption plans, engagement strategies, and change communications.", "The role requires strong people judgment and structured thinking."], responsibilities: ["Design change management strategies", "Develop communication materials", "Assess adoption risk", "Support leadership teams through transformation"], requirements: ["4+ years in change management or organizational development", "Strong facilitation and communication skills", "Ability to manage sensitive stakeholder dynamics", "Transformation exposure preferred"], benefits: ["Hybrid flexibility", "Cross-sector change work", "Leadership exposure", "Professional development support"] },
  { slug: "financial-advisory-associate", title: "Financial Advisory Associate", location: "Lagos, Nigeria", type: "On-site", summary: "Work with our financial advisory team on budgeting, forecasting, and financial modeling engagements.", overview: ["You will support management reporting, commercial analysis, and forecasting work.", "The role suits someone who enjoys detail and financially grounded decision support."], responsibilities: ["Build forecasting and scenario models", "Support reporting projects", "Prepare insight summaries", "Assist with control and performance reviews"], requirements: ["2-4 years in financial analysis or advisory", "Strong Excel and modeling skills", "ACA, ACCA, CFA, or equivalent progression preferred", "Clear business writing ability"], benefits: ["Deep advisory exposure", "Mentorship from senior finance leaders", "Structured capability growth", "Meaningful client impact"] },
  { slug: "client-engagement-coordinator", title: "Client Engagement Coordinator", location: "Lagos, Nigeria / Remote", type: "Hybrid", summary: "Be the connection between clients and consulting teams, ensuring alignment, communication, and project momentum.", overview: ["You will maintain project rhythm and client responsiveness across engagements.", "The role sits at the center of delivery quality and relationship management."], responsibilities: ["Coordinate timelines and client communications", "Track deliverables and momentum", "Prepare meeting notes and action logs", "Support a high-quality client experience"], requirements: ["2-5 years in coordination or client service", "Excellent organization and communication", "Comfort with multiple priorities and stakeholders", "Professional services exposure is helpful"], benefits: ["Hybrid structure", "Client-facing responsibility", "Cross-functional learning", "Clear advancement path"] },
  { slug: "research-associate", title: "Research & Insights Associate", location: "Remote", type: "Remote", summary: "Support strategy projects with competitive research, market trend analysis, and insight reporting.", overview: ["You will contribute to strategic work by gathering evidence and shaping insight-led recommendations.", "The role is ideal for a curious and detail-oriented analyst."], responsibilities: ["Conduct market and competitor research", "Synthesize findings into concise briefs", "Support survey and interview workstreams", "Contribute to thought leadership and reports"], requirements: ["Strong research and writing ability", "Background in business, economics, social science, or data", "Comfort working independently in a remote environment", "Experience with desk research and slide writing"], benefits: ["Remote flexibility", "Exposure to strategic work", "Strong mentorship", "Research-to-consulting growth path"] }
];

export const findService = (slug: string) => services.find((service) => service.slug === slug);
export const findBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
export const findCareer = (slug: string) => careers.find((career) => career.slug === slug);
