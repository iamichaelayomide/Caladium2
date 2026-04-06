import { BlogFilterGrid } from "@/components/blog/BlogFilterGrid";
import { PageHero } from "@/components/shared/PageHero";
import { getBlogPosts } from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      <PageHero
        breadcrumb="Home > Blog"
        label="Our Journal"
        title="Field notes, strategy thinking, and operating insight."
        description="Explore practical perspectives on African business strategy, market positioning, operating design, leadership, and transformation."
      />

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <BlogFilterGrid posts={blogPosts} />
        </div>
      </section>
    </>
  );
}
