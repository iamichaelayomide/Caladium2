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
      name: "address",
      title: "Office Address",
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
    }),
    defineField({
      name: "careersEmail",
      title: "Careers Email",
      type: "string"
    }),
    defineField({
      name: "mapHref",
      title: "Google Maps URL",
      type: "url"
    }),
    defineField({
      name: "hours",
      title: "Working Hours",
      type: "string"
    })
  ],
  preview: {
    prepare: () => ({
      title: "Site Settings"
    })
  }
});
