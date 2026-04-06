import {
  blogPosts as fallbackBlogPosts,
  contactDetails as fallbackContactDetails,
  services as fallbackServices,
  stats as fallbackStats,
  teamMembers as fallbackTeamMembers,
  testimonials as fallbackTestimonials,
  whyColodamTabs as fallbackWhyColodamTabs,
  type BlogPost,
  type Service,
  type TeamMember
} from "@/lib/site-data";

import { client, isSanityConfigured } from "@/lib/sanity/client";
import {
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  blogPostsQuery,
  contactPageQuery,
  homePageQuery,
  serviceBySlugQuery,
  serviceSlugsQuery,
  servicesPageQuery,
  servicesQuery,
  siteSettingsQuery,
  teamMembersQuery,
  teamPageQuery
} from "@/lib/sanity/queries";

type Stat = (typeof fallbackStats)[number];

type HomePageContent = {
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  journalHeading: string;
  journalDescription: string;
  stats: Stat[];
  whyColodam: Array<{
    id: string;
    title: string;
    body: string;
    bullets: readonly string[];
  }>;
  testimonials: Array<{
    name: string;
    title: string;
    quote: string;
    image: string;
  }>;
};

type ServicesPageContent = {
  heroTitle: string;
  heroDescription: string;
  introTitle: string;
  introDescription: string;
  principles: Array<{ title: string; body: string }>;
};

type TeamPageContent = {
  heroTitle: string;
  heroDescription: string;
};

type ContactPageContent = {
  heroTitle: string;
  heroDescription: string;
  panelTitle: string;
  panelDescription: string;
};

export type ContactDetailsContent = {
  phoneLabel: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  careersEmail: string;
  address: string;
  mapHref: string;
  hours: string;
  siteTitle: string;
  seoDescription: string;
};

type SanityBlogPost = Omit<BlogPost, "coverImage"> & {
  slug: string;
  coverImage?: string | null;
  authorImage?: string | null;
};

type SanityService = Omit<Service, "slug"> & {
  slug: string;
};

const fallbackHomePage: HomePageContent = {
  heroLabel: "Colodam",
  heroTitle: "Build a brand people remember and a growth engine that performs.",
  heroDescription:
    "Colodam blends brand strategy, creative direction, and campaign execution to help African businesses launch louder, look sharper, and convert consistently.",
  journalHeading: "Creative playbooks, campaign lessons, and growth insights.",
  journalDescription:
    "Practical ideas for founders and marketers building standout brands in African markets.",
  stats: [...fallbackStats],
  whyColodam: [...fallbackWhyColodamTabs],
  testimonials: [...fallbackTestimonials]
};

const fallbackServicesPage: ServicesPageContent = {
  heroTitle: "Branding support designed to move the business forward.",
  heroDescription:
    "From brand strategy and identity design to campaign launch and optimization, every Colodam engagement is structured for practical execution and durable outcomes.",
  introTitle: "Choose the engagement that matches the decision in front of you.",
  introDescription:
    "Each service page goes deeper into scope, deliverables, and how we approach the work with leadership teams.",
  principles: [
    {
      title: "Architecture for brand systems",
      body: "We build brand systems with strong foundations first, then creative structure, then campaigns that can scale."
    },
    {
      title: "Execution built into scope",
      body: "Recommendations are tied to operating realities, leadership ownership, and what teams can actually adopt."
    },
    {
      title: "Built for African context",
      body: "Our work is shaped by the realities of building, expanding, and leading in African markets."
    }
  ]
};

const fallbackTeamPage: TeamPageContent = {
  heroTitle: "Meet the Colodam team.",
  heroDescription:
    "A multidisciplinary group spanning brand strategy, identity design, campaign production, audience insight, and performance growth."
};

const fallbackContactPage: ContactPageContent = {
  heroTitle: "Start the conversation before the issue gets heavier.",
  heroDescription:
    "Whether you need sharper positioning, stronger campaign systems, or support scaling demand, reach out and we will structure the right next step.",
  panelTitle: "Tell us what the business is facing.",
  panelDescription:
    "We will use that context to shape the right conversation, scope, and delivery path."
};

const fallbackSiteSettings: ContactDetailsContent = {
  siteTitle: "Colodam",
  seoDescription:
    "Colodam is a marketing and branding agency helping African businesses build memorable identities, launch creative campaigns, and grow predictable demand.",
  address: fallbackContactDetails.address,
  email: fallbackContactDetails.email,
  emailHref: fallbackContactDetails.emailHref,
  phoneLabel: fallbackContactDetails.phoneLabel,
  phoneHref: fallbackContactDetails.phoneHref,
  careersEmail: fallbackContactDetails.careersEmail,
  mapHref: fallbackContactDetails.mapHref,
  hours: fallbackContactDetails.hours
};

const serviceOrder = new Map(fallbackServices.map((service, index) => [service.slug, index]));
const teamOrder = new Map(fallbackTeamMembers.map((member, index) => [member.name, index]));
const fallbackCoverImage = fallbackBlogPosts[0]?.coverImage ?? "";

function toPhoneHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : fallbackContactDetails.phoneHref;
}

function toEmailHref(email: string) {
  return email ? `mailto:${email}` : fallbackContactDetails.emailHref;
}

function sortByReference<T>(items: T[], getKey: (item: T) => string, order: Map<string, number>) {
  return [...items].sort((a, b) => {
    const aOrder = order.get(getKey(a)) ?? Number.MAX_SAFE_INTEGER;
    const bOrder = order.get(getKey(b)) ?? Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });
}

function normalizePost(post: SanityBlogPost): BlogPost {
  return {
    ...post,
    coverImage: post.coverImage || fallbackCoverImage
  };
}

function normalizeService(service: Partial<SanityService> & { slug: string }): Service {
  const fallback = fallbackServices.find((entry) => entry.slug === service.slug);

  return {
    slug: service.slug,
    name: service.name || fallback?.name || "",
    shortName: service.shortName || fallback?.shortName || service.name || "",
    tagline: service.tagline || fallback?.tagline || "",
    summary: service.summary || fallback?.summary || "",
    cardDescription: service.cardDescription || fallback?.cardDescription || "",
    image: service.image || fallback?.image || "",
    features: service.features?.length ? service.features : fallback?.features || [],
    detailParagraphs:
      service.detailParagraphs?.length ? service.detailParagraphs : fallback?.detailParagraphs || [],
    subServices: service.subServices?.length ? service.subServices : fallback?.subServices || [],
    relatedSlugs: service.relatedSlugs?.length ? service.relatedSlugs : fallback?.relatedSlugs || []
  };
}

function normalizeTeamMember(member: Partial<TeamMember> & { name: string }): TeamMember {
  const fallback = fallbackTeamMembers.find((entry) => entry.name === member.name);

  return {
    name: member.name,
    title: member.title || fallback?.title || "",
    bio: member.bio || fallback?.bio || "",
    image: member.image || fallback?.image || "",
    linkedin: member.linkedin || fallback?.linkedin || "#"
  };
}

function normalizeSiteSettings(settings: Partial<{
  siteTitle: string;
  seoDescription: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  careersEmail: string;
  mapHref: string;
  hours: string;
}> | null): ContactDetailsContent {
  const email = settings?.contactEmail || fallbackSiteSettings.email;
  const phone = settings?.contactPhone || fallbackSiteSettings.phoneLabel;

  return {
    siteTitle: settings?.siteTitle || fallbackSiteSettings.siteTitle,
    seoDescription: settings?.seoDescription || fallbackSiteSettings.seoDescription,
    address: settings?.address || fallbackSiteSettings.address,
    email,
    emailHref: toEmailHref(email),
    phoneLabel: phone,
    phoneHref: toPhoneHref(phone),
    careersEmail: settings?.careersEmail || fallbackSiteSettings.careersEmail,
    mapHref: settings?.mapHref || fallbackSiteSettings.mapHref,
    hours: settings?.hours || fallbackSiteSettings.hours
  };
}

async function fetchWithFallback<T>(query: string, fallback: T, params?: Record<string, string>) {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    const result = params
      ? await client.fetch<T | null>(query, params)
      : await client.fetch<T | null>(query);
    return result ?? fallback;
  } catch (error) {
    console.error("Failed to fetch Sanity content, using fallback data.", error);
    return fallback;
  }
}

export async function getBlogPosts() {
  if (!isSanityConfigured) {
    return fallbackBlogPosts;
  }

  try {
    const posts = await client.fetch<SanityBlogPost[]>(blogPostsQuery);
    if (!posts?.length) {
      return fallbackBlogPosts;
    }

    return posts.map(normalizePost);
  } catch (error) {
    console.error("Failed to fetch Sanity blog posts, using fallback data.", error);
    return fallbackBlogPosts;
  }
}

export async function getBlogPostBySlug(slug: string) {
  if (!isSanityConfigured) {
    return fallbackBlogPosts.find((post) => post.slug === slug);
  }

  try {
    const post = await client.fetch<SanityBlogPost | null>(blogPostBySlugQuery, { slug });
    return post ? normalizePost(post) : fallbackBlogPosts.find((entry) => entry.slug === slug);
  } catch (error) {
    console.error(`Failed to fetch Sanity blog post "${slug}", using fallback data.`, error);
    return fallbackBlogPosts.find((entry) => entry.slug === slug);
  }
}

export async function getBlogPostSlugs() {
  if (!isSanityConfigured) {
    return fallbackBlogPosts.map((post) => post.slug);
  }

  try {
    const slugs = await client.fetch<string[]>(blogPostSlugsQuery);
    if (!slugs?.length) {
      return fallbackBlogPosts.map((post) => post.slug);
    }

    return slugs;
  } catch (error) {
    console.error("Failed to fetch Sanity blog slugs, using fallback data.", error);
    return fallbackBlogPosts.map((post) => post.slug);
  }
}

export async function getHomePageContent() {
  const content = await fetchWithFallback(homePageQuery, fallbackHomePage);

  return {
    heroLabel: content.heroLabel || fallbackHomePage.heroLabel,
    heroTitle: content.heroTitle || fallbackHomePage.heroTitle,
    heroDescription: content.heroDescription || fallbackHomePage.heroDescription,
    journalHeading: content.journalHeading || fallbackHomePage.journalHeading,
    journalDescription: content.journalDescription || fallbackHomePage.journalDescription,
    stats: content.stats?.length ? content.stats : fallbackHomePage.stats,
    whyColodam: content.whyColodam?.length ? content.whyColodam : fallbackHomePage.whyColodam,
    testimonials: content.testimonials?.length
      ? content.testimonials
      : fallbackHomePage.testimonials
  } satisfies HomePageContent;
}

export async function getServicesPageContent() {
  const content = await fetchWithFallback(servicesPageQuery, fallbackServicesPage);

  return {
    heroTitle: content.heroTitle || fallbackServicesPage.heroTitle,
    heroDescription: content.heroDescription || fallbackServicesPage.heroDescription,
    introTitle: content.introTitle || fallbackServicesPage.introTitle,
    introDescription: content.introDescription || fallbackServicesPage.introDescription,
    principles: content.principles?.length ? content.principles : fallbackServicesPage.principles
  } satisfies ServicesPageContent;
}

export async function getServices() {
  if (!isSanityConfigured) {
    return fallbackServices;
  }

  try {
    const services = await client.fetch<SanityService[]>(servicesQuery);
    if (!services?.length) {
      return fallbackServices;
    }

    return sortByReference(services.map(normalizeService), (service) => service.slug, serviceOrder);
  } catch (error) {
    console.error("Failed to fetch Sanity services, using fallback data.", error);
    return fallbackServices;
  }
}

export async function getServiceBySlug(slug: string) {
  if (!isSanityConfigured) {
    return fallbackServices.find((service) => service.slug === slug);
  }

  try {
    const service = await client.fetch<SanityService | null>(serviceBySlugQuery, { slug });
    return service ? normalizeService(service) : fallbackServices.find((entry) => entry.slug === slug);
  } catch (error) {
    console.error(`Failed to fetch Sanity service "${slug}", using fallback data.`, error);
    return fallbackServices.find((entry) => entry.slug === slug);
  }
}

export async function getServiceSlugs() {
  if (!isSanityConfigured) {
    return fallbackServices.map((service) => service.slug);
  }

  try {
    const slugs = await client.fetch<string[]>(serviceSlugsQuery);
    if (!slugs?.length) {
      return fallbackServices.map((service) => service.slug);
    }

    return slugs;
  } catch (error) {
    console.error("Failed to fetch Sanity service slugs, using fallback data.", error);
    return fallbackServices.map((service) => service.slug);
  }
}

export async function getTeamPageContent() {
  const content = await fetchWithFallback(teamPageQuery, fallbackTeamPage);

  return {
    heroTitle: content.heroTitle || fallbackTeamPage.heroTitle,
    heroDescription: content.heroDescription || fallbackTeamPage.heroDescription
  } satisfies TeamPageContent;
}

export async function getTeamMembers() {
  if (!isSanityConfigured) {
    return fallbackTeamMembers;
  }

  try {
    const members = await client.fetch<TeamMember[]>(teamMembersQuery);
    if (!members?.length) {
      return fallbackTeamMembers;
    }

    return sortByReference(
      members.map((member) => normalizeTeamMember(member)),
      (member) => member.name,
      teamOrder
    );
  } catch (error) {
    console.error("Failed to fetch Sanity team members, using fallback data.", error);
    return fallbackTeamMembers;
  }
}

export async function getContactPageContent() {
  const content = await fetchWithFallback(contactPageQuery, fallbackContactPage);

  return {
    heroTitle: content.heroTitle || fallbackContactPage.heroTitle,
    heroDescription: content.heroDescription || fallbackContactPage.heroDescription,
    panelTitle: content.panelTitle || fallbackContactPage.panelTitle,
    panelDescription: content.panelDescription || fallbackContactPage.panelDescription
  } satisfies ContactPageContent;
}

export async function getSiteSettings() {
  if (!isSanityConfigured) {
    return fallbackSiteSettings;
  }

  try {
    const settings = await client.fetch(siteSettingsQuery);
    return normalizeSiteSettings(settings);
  } catch (error) {
    console.error("Failed to fetch Sanity site settings, using fallback data.", error);
    return fallbackSiteSettings;
  }
}
