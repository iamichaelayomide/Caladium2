import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Service Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({ name: "shortName", title: "Short Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "cardDescription",
      title: "Card Description",
      type: "text",
      rows: 3
    }),
    defineField({ name: "image", title: "Image URL", type: "url" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "detailParagraphs",
      title: "Detail Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 3 })]
    }),
    defineField({
      name: "subServices",
      title: "Sub-services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3
            })
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description"
            }
          }
        })
      ]
    }),
    defineField({
      name: "relatedSlugs",
      title: "Related Service Slugs",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline"
    }
  }
});
