import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4
    }),
    defineField({ name: "introTitle", title: "Intro Title", type: "string" }),
    defineField({
      name: "introDescription",
      title: "Intro Description",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "principles",
      title: "Bottom Principles",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "body",
              title: "Body",
              type: "text",
              rows: 4
            })
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "body"
            }
          }
        })
      ]
    })
  ],
  preview: {
    prepare: () => ({ title: "Services Page" })
  }
});
