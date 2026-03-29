import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "heroLabel", title: "Hero Label", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "journalHeading",
      title: "Journal Section Heading",
      type: "string"
    }),
    defineField({
      name: "journalDescription",
      title: "Journal Section Description",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "stats",
      title: "Homepage Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "suffix", title: "Suffix", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3
            })
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "description"
            }
          }
        })
      ]
    }),
    defineField({
      name: "whyCaladium",
      title: "Why Caladium Section",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "id", title: "ID", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
            defineField({
              name: "bullets",
              title: "Bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })]
            })
          ]
        })
      ]
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
            defineField({ name: "image", title: "Image", type: "url" })
          ]
        })
      ]
    })
  ],
  preview: {
    prepare: () => ({ title: "Home Page" })
  }
});
