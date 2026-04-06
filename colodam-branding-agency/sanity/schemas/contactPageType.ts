import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4
    }),
    defineField({ name: "panelTitle", title: "Form Panel Title", type: "string" }),
    defineField({
      name: "panelDescription",
      title: "Form Panel Description",
      type: "text",
      rows: 4
    })
  ],
  preview: {
    prepare: () => ({ title: "Contact Page" })
  }
});
