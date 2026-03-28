import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { getTeamMembers, getTeamPageContent } from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function TeamPage() {
  const [pageContent, teamMembers] = await Promise.all([
    getTeamPageContent(),
    getTeamMembers()
  ]);

  return (
    <>
      <PageHero
        breadcrumb="Home > Team"
        label="Team"
        title={pageContent.heroTitle}
        description={pageContent.heroDescription}
      />

      <section className="section-padding bg-bg">
        <div className="container-shell grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.02}>
              <article className="surface-panel group overflow-hidden rounded-[30px]">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={700}
                    height={700}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-sm leading-7 text-white/82">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-bricolage text-[1.9rem] font-semibold leading-tight text-white">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/50">{member.title}</p>
                  </div>
                  <Link
                    href={member.linkedin}
                    className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/60 transition hover:border-accent/35 hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
