import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { PROJECTS } from "@/lib/content";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.story,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // A small gallery for the detail view — reuse other frames as supporting imagery.
  const gallery = PROJECTS.filter((p) => p.slug !== project.slug)
    .slice(0, 4)
    .map((p) => p.img);

  const related = PROJECTS.filter(
    (p) => p.category === project.category && p.slug !== project.slug
  ).slice(0, 3);

  return (
    <>
      {/* Hero image */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-ink">
        <Image
          src={project.img}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="container-luxe relative z-10 pb-16 pt-40">
          <Reveal>
            <Link href="/portfolio" className="link-underline text-ivory/70">
              ← Back to Portfolio
            </Link>
            <span className="eyebrow mt-8 block">{project.category}</span>
            <h1 className="mt-4 font-serif text-5xl text-ivory md:text-7xl">{project.title}</h1>
          </Reveal>
        </div>
      </section>

      {/* Meta + Story */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12">
          <Reveal variant="right" className="lg:col-span-4">
            <dl className="space-y-8">
              {[
                ["Client", project.client],
                ["Date", project.year],
                ["Location", project.location],
                ["Category", project.category],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-white/10 pt-4">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 font-serif text-xl text-ivory">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal variant="left" delay={0.1} className="lg:col-span-8">
            <span className="eyebrow">The Story Behind The Shoot</span>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-ivory md:text-3xl">
              {project.story}
            </p>
            <p className="mt-8 leading-relaxed text-ivory/55">
              Every project at EM Studios begins with intention. From the first discovery call
              through creative planning, the session itself, and the final art-directed delivery,
              this story was crafted to feel as timeless as the moment it preserves — a collaboration
              between light, emotion, and memory.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full gallery */}
      <section className="bg-onyx py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {gallery.map((src, i) => (
              <Reveal
                key={i}
                variant="scale"
                delay={(i % 2) * 0.1}
                className={`relative overflow-hidden rounded-sm ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={src}
                  alt={`${project.title} frame ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-cinematic hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-ink py-20 md:py-28">
          <div className="container-luxe">
            <h2 className="font-serif text-3xl text-ivory md:text-4xl">More In {project.category}</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-ivory">{p.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-luxe text-ivory/55">
                    {p.client} · {p.year}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
