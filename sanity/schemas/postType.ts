import { defineArrayMember, defineField, defineType } from "sanity";

const categories = ["Strategy", "SME", "Report", "Founders", "Operations", "Market Entry"];

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: categories.map((value) => ({ title: value, value }))
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "date",
      title: "Display Date",
      type: "string",
      description: "Example: March 2025",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "Example: 6 min read",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
        }),
        defineField({
          name: "coverImage",
          title: "Cover Image URL",
          type: "url",
          validation: (rule) => rule.required()
        }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (rule) => rule.required()
        }),
        defineField({
          name: "authorImage",
          title: "Author Image URL",
          type: "url"
        }),
    defineField({
      name: "body",
      title: "Body",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "intro",
          title: "Intro Paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 3 })],
          validation: (rule) => rule.min(1)
        }),
        defineField({
          name: "sections",
          title: "Sections",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "heading",
                  title: "Heading",
                  type: "string",
                  validation: (rule) => rule.required()
                }),
                defineField({
                  name: "paragraphs",
                  title: "Paragraphs",
                  type: "array",
                  of: [defineArrayMember({ type: "text", rows: 3 })],
                  validation: (rule) => rule.min(1)
                }),
                defineField({
                  name: "bullets",
                  title: "Bullets",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })]
                }),
                defineField({
                  name: "quote",
                  title: "Quote",
                  type: "text",
                  rows: 3
                })
              ],
              preview: {
                select: {
                  title: "heading",
                  subtitle: "paragraphs.0"
                }
              }
            })
          ],
          validation: (rule) => rule.min(1)
        })
      ]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage"
    }
  }
});
