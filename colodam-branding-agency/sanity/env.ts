export const apiVersion = "2026-03-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const studioUrl = "/studio";

export const isSanityConfigured = Boolean(projectId && dataset);
