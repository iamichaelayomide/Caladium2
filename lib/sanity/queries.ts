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

export const homePageQuery = groq`*[_type == "homePage"][0]{
  heroLabel,
  heroTitle,
  heroDescription,
  journalHeading,
  journalDescription,
  stats,
  whyCaladium,
  testimonials
}`;

export const servicesPageQuery = groq`*[_type == "servicesPage"][0]{
  heroTitle,
  heroDescription,
  introTitle,
  introDescription,
  principles
}`;

export const servicesQuery = groq`*[_type == "service"] | order(_createdAt asc) {
  "slug": slug.current,
  name,
  shortName,
  tagline,
  summary,
  cardDescription,
  image,
  features,
  detailParagraphs,
  subServices,
  relatedSlugs
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  "slug": slug.current,
  name,
  shortName,
  tagline,
  summary,
  cardDescription,
  image,
  features,
  detailParagraphs,
  subServices,
  relatedSlugs
}`;

export const serviceSlugsQuery = groq`*[_type == "service" && defined(slug.current)][].slug.current`;

export const teamPageQuery = groq`*[_type == "teamPage"][0]{
  heroTitle,
  heroDescription
}`;

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(_createdAt asc) {
  name,
  title,
  bio,
  image,
  linkedin
}`;

export const contactPageQuery = groq`*[_type == "contactPage"][0]{
  heroTitle,
  heroDescription,
  panelTitle,
  panelDescription
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  seoDescription,
  address,
  contactEmail,
  contactPhone,
  careersEmail,
  mapHref,
  hours
}`;
