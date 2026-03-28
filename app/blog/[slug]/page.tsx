import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlogPostBySlug, getBlogPostSlugs, getBlogPosts } from "@/lib/sanity/fetch";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = await getBlogPosts();
  const related = allPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8 pt-28 pb-[4rem] md:pt-32 md:pb-20 xl:pt-40 xl:pb-24">
        <div aria-hidden className="hero-glow absolute inset-0 opacity-75" />
        <div className="container-shell relative">
          <p className="text-sm text-white/45">Home &gt; Blog &gt; {post.title}</p>
          <div className="mt-6 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-label text-accent">
            {post.category}
          </div>
          <h1 className="mt-5 max-w-5xl font-bricolage text-[clamp(2.6rem,10vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-white">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/55">
            <div className="flex items-center gap-3">
              <Image
                src={
                  post.authorImage ||
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
                }
                alt={post.author}
                width={56}
                height={56}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">By {post.author}</p>
                <p>
                  {post.date} - {post.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[34px] border border-white/10">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1600}
              height={900}
              className="max-h-[18rem] w-full object-cover sm:max-h-[24rem] xl:max-h-[34rem]"
            />
          </div>

          <div className="mt-12 grid gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-12">
            <article className="prose caladium-prose max-w-none text-[17px] leading-8">
              {post.body.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {post.body.sections.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.quote ? <blockquote>{section.quote}</blockquote> : null}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </article>

            <aside className="surface-panel h-fit rounded-[28px] p-6 xl:sticky xl:top-28">
              <p className="text-label text-white/40">Reading this for a reason?</p>
              <p className="mt-4 font-bricolage text-2xl font-semibold leading-tight text-white">
                Let&apos;s turn the insight into a decision path.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/58">
                Book a strategy call if this article points to an issue your leadership team is
                actively working through.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-[#ffd18a]"
              >
                Contact Caladium
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/8 bg-[#070a10]">
        <div className="container-shell">
          <h2 className="font-bricolage text-[clamp(2rem,4vw,2.25rem)] font-semibold text-white">
            Related reading
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="surface-panel group overflow-hidden rounded-[28px]"
              >
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  width={700}
                  height={520}
                  className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-5">
                  <p className="text-label text-accent">{item.category}</p>
                  <h3 className="mt-4 font-bricolage text-2xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
