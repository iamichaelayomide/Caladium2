import type { BlogPost } from "@/lib/site-data";
import { blogPosts as fallbackBlogPosts } from "@/lib/site-data";

import { client, isSanityConfigured } from "@/lib/sanity/client";
import {
  blogPostBySlugQuery,
  blogPostSlugsQuery,
  blogPostsQuery
} from "@/lib/sanity/queries";

type SanityBlogPost = Omit<BlogPost, "coverImage"> & {
  slug: string;
  coverImage?: string | null;
  authorImage?: string | null;
};

const fallbackCoverImage = fallbackBlogPosts[0]?.coverImage ?? "";

function normalizePost(post: SanityBlogPost): BlogPost {
  return {
    ...post,
    coverImage: post.coverImage || fallbackCoverImage
  };
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
