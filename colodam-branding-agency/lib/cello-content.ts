export type CelloNavItem = {
  label: string;
  href: string;
};

export type CelloSocialLink = {
  label: string;
  href: string;
};

export const celloNav: CelloNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const celloSocials: CelloSocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" }
];

export const homeContent = {
  hero: {
    badge: "Cello-mode Edition",
    titleA: "Designing",
    titleB: "brands that move",
    description:
      "A digital studio crafting expressive identities, campaign stories, and high-performing brand systems for ambitious teams.",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1600&q=80"
  },
  ticker: [
    "Creative Direction",
    "Brand Design",
    "Web Experiences",
    "Campaign Films",
    "Motion Systems",
    "Product Storytelling",
    "Creative Direction",
    "Brand Design",
    "Web Experiences",
    "Campaign Films",
    "Motion Systems",
    "Product Storytelling"
  ],
  work: [
    {
      title: "Astra Wellness",
      category: "Brand identity + launch campaign",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Parabol Finance",
      category: "Narrative system + growth creative",
      image:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Nema Labs",
      category: "Website + product storytelling",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
    }
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      body: "We map culture, product truth, and market context before any visual work begins."
    },
    {
      step: "02",
      title: "Shape",
      body: "We define visual language, narrative tone, and modular campaign system foundations."
    },
    {
      step: "03",
      title: "Launch",
      body: "We produce and ship the core brand touchpoints and campaign assets across channels."
    },
    {
      step: "04",
      title: "Scale",
      body: "We optimize conversion and consistency with creative iteration and performance insights."
    }
  ],
  stats: [
    { value: "140+", label: "Projects launched" },
    { value: "27", label: "Countries reached" },
    { value: "34%", label: "Avg conversion lift" }
  ],
  services: [
    "Brand Strategy",
    "Visual Identity",
    "Creative Production",
    "Campaign Design",
    "Web Design",
    "Growth Creative"
  ],
  cta: {
    title: "Let’s build your next iconic brand move.",
    body: "From identity to campaign to conversion, we help you ship work people remember.",
    button: "Book a call"
  }
};

export const aboutContent = {
  title: "We are a compact studio built for brave ideas.",
  description:
    "Cello-style means expressive visuals, clear strategy, and execution detail that can survive the real world.",
  image:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  blocks: [
    {
      title: "Human-first",
      body: "We design brands around emotions, behaviors, and everyday experiences, not trends alone."
    },
    {
      title: "Systemic",
      body: "Everything is designed as a reusable system so campaigns remain coherent over time."
    },
    {
      title: "Experimental",
      body: "We test unusual visual directions and interaction patterns while protecting clarity."
    }
  ]
};

export const workContent = {
  title: "Selected work",
  description: "A snapshot of visuals, systems, and campaigns crafted for growth-stage teams.",
  projects: [
    {
      name: "Obsidian Health",
      role: "Branding + Website",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "Kite Commerce",
      role: "Campaign + Motion",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "Rin Labs",
      role: "Narrative + Social System",
      image:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "Nilo Pay",
      role: "Identity + Product Story",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1500&q=80"
    }
  ]
};

export const blogContent = {
  title: "Journal",
  description: "Thoughts on design systems, creative operations, and category storytelling.",
  posts: [
    {
      title: "Designing brands that feel alive",
      date: "May 2, 2026",
      excerpt: "Why brand systems should behave like organisms, not rigid style guides.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "When motion becomes narrative",
      date: "April 17, 2026",
      excerpt: "Using movement to sequence meaning across digital touchpoints.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "The new launch playbook",
      date: "April 3, 2026",
      excerpt: "How modern teams align brand, product, and growth before launch day.",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80"
    }
  ]
};

export const contactContent = {
  title: "Tell us what you’re building.",
  description:
    "If you have an upcoming launch, rebrand, or campaign reset, we can shape the right next move.",
  email: "hello@colodam.com",
  phone: "+234 812 345 6789",
  address: "17 Bourdillon Road, Ikoyi, Lagos",
  image:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
};

