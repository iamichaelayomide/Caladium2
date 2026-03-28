import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string"
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string"
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string"
    })
  ],
  preview: {
    prepare: () => ({
      title: "Site Settings"
    })
  }
});
