import { BlogFilterGrid } from "@/components/blog/BlogFilterGrid";
import { PageHero } from "@/components/shared/PageHero";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumb="Home > Blog"
        label="Our Journal"
        title="Field notes, strategy thinking, and operating insight."
        description="Explore practical perspectives on African business strategy, market entry, operating design, leadership, and transformation."
      />

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <BlogFilterGrid posts={blogPosts} />
        </div>
      </section>
    </>
  );
}
