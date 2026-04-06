import { getCliClient } from "sanity/cli";

import {
  contactDetails,
  services,
  stats,
  teamMembers
} from "../lib/site-data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET");
}

const client = getCliClient({
  apiVersion: "2026-03-01",
  projectId,
  dataset
});

const keyed = <T extends Record<string, unknown>>(items: T[], prefix: string) =>
  items.map((item, index) => ({
    _key: `${prefix}-${index + 1}`,
    ...item
  }));

async function seedSingletons() {
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteTitle: "Colodam",
    seoDescription:
      "Colodam helps African enterprises scale through strategy, organizational design, market entry, and financial advisory.",
    address: contactDetails.address,
    contactEmail: contactDetails.email,
    contactPhone: contactDetails.phoneLabel,
    careersEmail: contactDetails.careersEmail,
    mapHref: contactDetails.mapHref,
    hours: contactDetails.hours
  });

  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    heroLabel: "Colodam",
    heroTitle: "Strategy advisory with discipline, calm, and real operating depth.",
    heroDescription:
      "We help African businesses sharpen direction, align teams, and build the systems that turn growth ambition into measurable progress.",
    journalHeading: "Ideas, observations, and strategy notes from the field.",
    journalDescription:
      "Practical thinking for founders, operators, and executives building in African markets.",
    stats: keyed([...stats], "home-stat")
  });

  await client.createOrReplace({
    _id: "servicesPage",
    _type: "servicesPage",
    heroTitle: "Branding support designed to move the business forward.",
    heroDescription:
      "From strategic planning to operating model design and market entry, every Colodam engagement is structured for practical execution and durable outcomes.",
    introTitle: "Choose the engagement that matches the decision in front of you.",
    introDescription:
      "Each service page goes deeper into scope, deliverables, and how we approach the work with leadership teams.",
    principles: keyed([
      {
        title: "Architecture for strategy",
        body: "We treat strategy like architecture: foundations first, then structure, then the choices that make scaling more realistic."
      },
      {
        title: "Execution built into scope",
        body: "Recommendations are tied to operating realities, leadership ownership, and what teams can actually adopt."
      },
      {
        title: "Built for African context",
        body: "Our work is shaped by the realities of building, expanding, and leading in African markets."
      }
    ], "services-principle")
  });

  await client.createOrReplace({
    _id: "teamPage",
    _type: "teamPage",
    heroTitle: "Meet the Colodam team.",
    heroDescription:
      "A multidisciplinary group spanning strategy, finance, research, process engineering, market entry, and change leadership."
  });

  await client.createOrReplace({
    _id: "contactPage",
    _type: "contactPage",
    heroTitle: "Start the conversation before the issue gets heavier.",
    heroDescription:
      "Whether you need sharper strategy, operating redesign, or support navigating growth, reach out and we will structure the right next step.",
    panelTitle: "Tell us what the business is facing.",
    panelDescription:
      "We will use that context to shape the right conversation, scope, and advisory path."
  });
}

async function seedCollections() {
  for (const service of services) {
    await client.createOrReplace({
      _id: `service.${service.slug}`,
      _type: "service",
      ...service,
      subServices: keyed(service.subServices, `${service.slug}-subservice`),
      slug: {
        _type: "slug",
        current: service.slug
      }
    });
    console.log(`Seeded service ${service.name}`);
  }

  for (const member of teamMembers) {
    const id = member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    await client.createOrReplace({
      _id: `teamMember.${id}`,
      _type: "teamMember",
      ...member
    });
    console.log(`Seeded team member ${member.name}`);
  }
}

async function run() {
  console.log(`Seeding site content into ${projectId}/${dataset}`);
  await seedSingletons();
  await seedCollections();
  console.log("Done seeding site settings, pages, services, and team members.");
}

run().catch((error) => {
  console.error("Site content seed failed.");
  console.error(error);
  process.exit(1);
});

