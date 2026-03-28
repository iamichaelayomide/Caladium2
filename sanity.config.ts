import "dotenv/config";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { dataset, projectId, studioUrl } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Caladium CMS",
  projectId: projectId || "missing-project-id",
  dataset,
  basePath: studioUrl,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes
  }
});
