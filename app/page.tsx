import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { PROJECTS, SERVICES } from "@/lib/content";

const FEATURED = PROJECTS.slice(0, 5);

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* About Preview */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80"
              alt="EM Studios at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-cinematic hover:scale-105"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About EM Studios"
              title="More Than Photography. We Preserve Time."
              intro="Photography is more than capturing a moment—it is preserving a feeling, a memory, and a story that deserves to live beyond the present. At EM Studios, every frame is approached with intention, artistry, and authenticity."
            />
            <Reveal delay={0.15}>
              <Link href="/about" className="mt-10 inline-block">
                <span className="btn-outline border-ink/30 text-ink hover:bg-ink hover:text-ivory">
                  Learn More About EM Studios
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container-luxe">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured Work"
              title="Selected Stories Through The Lens"
            />
            <Reveal>
              <Link href="/portfolio" className="link-underline text-ink">
                View Full Portfolio →
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 3) * 0.1}
                className={`group relative overflow-hidden ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <Link href={`/portfolio/${p.slug}`} className="block">
                  <div
                    className={`relative overflow-hidden ${
                      i === 0 ? "aspect-square sm:aspect-[4/3.5]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-cinematic group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="eyebrow">{p.category}</span>
                      <h3 className="mt-2 font-serif text-2xl text-ivory">{p.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-luxe text-ivory/70">
                        {p.client} · {p.year}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Signature Services"
            title="Photography Crafted With Purpose"
            intro="From editorial fashion to intimate portraits, every service is designed to tell your story with artistry and intention."
            align="center"
          />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-beige md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 3) * 0.08}
                className="group bg-ivory p-10 transition-colors duration-500 hover:bg-ink"
              >
                <Link href="/services" className="block">
                  <span className="font-serif text-5xl text-beige transition-colors duration-500 group-hover:text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-ink transition-colors duration-500 group-hover:text-ivory">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-warmgray transition-colors duration-500 group-hover:text-ivory/70">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-block text-xs uppercase tracking-luxe text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Explore →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose EM Studios — Stats */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Why Clients Choose EM Studios"
            title="A Legacy Measured In Moments"
            align="center"
            light
          />
          <div className="mt-16">
            <Stats />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bronze/10 py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow="Testimonials" title="In Their Words" align="center" />
        </div>
        <div className="container-luxe">
          {/* dark band for contrast */}
        </div>
        <div className="mt-12">
          <div className="container-luxe">
            <div className="rounded-sm bg-ink px-6 py-16 md:px-16">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA subtitle="Let's preserve what matters most—your story, your emotion, your moment in time." />
    </>
  );
}
