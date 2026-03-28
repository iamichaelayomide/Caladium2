import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "title",
      title: "Role Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "image",
      title: "Profile Image URL",
      type: "url"
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url"
    })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title"
    }
  }
});
