import { defineField, defineType } from "sanity";

export const teamPageType = defineType({
  name: "teamPage",
  title: "Team Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4
    })
  ],
  preview: {
    prepare: () => ({ title: "Team Page" })
  }
});
