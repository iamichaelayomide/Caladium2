import groq from "groq";

export const blogPostsQuery = groq`*[_type == "post"] | order(_createdAt desc) {
  "slug": slug.current,
  category,
  date,
  readTime,
  title,
  excerpt,
  coverImage,
  author,
  authorImage,
  body
}`;

export const blogPostBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  "slug": slug.current,
  category,
  date,
  readTime,
  title,
  excerpt,
  coverImage,
  author,
  authorImage,
  body
}`;

export const blogPostSlugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
