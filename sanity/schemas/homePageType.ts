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
            defineField({ name: "value", title: "Value", type: "number" }),
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
    })
  ],
  preview: {
    prepare: () => ({ title: "Home Page" })
  }
});
