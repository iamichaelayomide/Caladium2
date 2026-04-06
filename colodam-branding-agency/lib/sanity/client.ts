import { createClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId: projectId || "missing-project-id",
  dataset,
  apiVersion,
  useCdn: false,
  token
});

export { isSanityConfigured };
