import { getCliClient } from "sanity/cli";

import { blogPosts } from "../lib/site-data";

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

async function seed() {
  console.log(`Seeding Sanity project ${projectId} / dataset ${dataset}`);

  const docs = blogPosts.map((post) => ({
    _id: `post.${post.slug}`,
    _type: "post",
    title: post.title,
    slug: {
      _type: "slug",
      current: post.slug
    },
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    author: post.author,
    authorImage:
      post.authorImage ||
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    body: post.body
  }));

  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Seeded ${doc.title}`);
  }

  const created = await client.fetch<{ _id: string; title: string }[]>(
    `*[_type == "post"] | order(_createdAt desc) { _id, title }`
  );

  console.log(`Verified ${created.length} post documents in Sanity.`);
  created.forEach((post) => console.log(`- ${post._id}: ${post.title}`));
  console.log(`Done. Seeded ${docs.length} blog posts into Sanity.`);
}

seed().catch((error) => {
  console.error("Blog seed failed.");
  console.error(error);
  process.exit(1);
});
