import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import ParallaxImage from "@/components/ParallaxImage";
import CTA from "@/components/CTA";
import { APPROACH, ARTICLES, MARQUEE_WORDS, PAGE_HERO, PROJECTS, SERVICES } from "@/lib/content";

const FEATURED = PROJECTS.slice(0, 5);
const LATEST = ARTICLES.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Marquee ticker */}
      <section className="border-y border-white/5 bg-onyx py-8">
        <Marquee items={MARQUEE_WORDS} />
      </section>

      {/* About Preview — dark, parallax */}
      <section className="relative overflow-hidden bg-charcoal py-24 md:py-36">
        <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-radial-glow blur-3xl" />
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="right">
            <ParallaxImage
              src={PAGE_HERO.aboutPreview}
              alt="EM Studios at work"
              amount={50}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/5] rounded-sm"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About EM Studios"
              title="More Than Photography. We Preserve Time."
              highlight={["Time."]}
              intro="Photography is more than capturing a moment—it is preserving a feeling, a memory, and a story that deserves to live beyond the present. At EM Studios, every frame is approached with intention, artistry, and authenticity."
            />
            <Reveal variant="fade" delay={0.2}>
              <p className="mt-6 leading-relaxed text-ivory/60">
                We work with brands, creatives, entrepreneurs, couples, and individuals who believe
                their story is worth telling beautifully. Whatever the subject, the goal never
                changes: imagery that is timeless, meaningful, and deeply human.
              </p>
            </Reveal>
            <Reveal variant="up" delay={0.3}>
              <Link href="/about" className="mt-10 inline-block">
                <span className="btn-outline border-ivory/30 text-ivory hover:border-gold hover:bg-gold hover:text-ink">
                  Learn More About EM Studios
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Manifesto — light break */}
      <section className="bg-ivory py-28 md:py-40">
        <div className="container-luxe text-center">
          <Reveal variant="fade">
            <span className="eyebrow eyebrow-center text-bronze before:bg-bronze/50">
              Our Belief
            </span>
          </Reveal>
          <TextReveal
            text="We don't simply take photographs. We preserve what it felt like to be there."
            highlight={["felt"]}
            className="mx-auto mt-8 max-w-4xl font-serif text-3xl leading-tight text-ink md:text-5xl md:leading-[1.15]"
          />
          <Reveal variant="fade" delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-warmgray md:text-lg">
              A photograph should do more than record an appearance. It should hold the emotion, the
              energy, and the quiet truth of a moment—so that years from now, a single frame can
              return you to exactly how it felt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach — dark */}
      <section className="bg-ink py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Approach"
            title="How A Timeless Image Is Made"
            highlight={["Timeless"]}
            intro="Three principles guide every project—from the first conversation to the final, art-directed frame."
          />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/5 bg-white/5 md:grid-cols-3">
            {APPROACH.map((item, i) => (
              <Reveal
                key={item.n}
                variant="up"
                delay={i * 0.12}
                className="group bg-charcoal p-10 transition-colors duration-500 hover:bg-graphite"
              >
                <span className="font-serif text-5xl text-gold-sheen">{item.n}</span>
                <h3 className="mt-6 font-serif text-2xl text-ivory">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-ivory/60">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work — dark */}
      <section className="bg-onyx py-24 md:py-36">
        <div className="container-luxe">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Featured Work" title="Selected Stories Through The Lens" highlight={["Stories"]} />
            <Reveal variant="fade">
              <Link href="/portfolio" className="link-underline text-gold">
                View Full Portfolio →
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p, i) => (
              <Reveal
                key={p.slug}
                variant="scale"
                delay={(i % 3) * 0.1}
                className={`group relative overflow-hidden rounded-sm ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <Link href={`/portfolio/${p.slug}`} className="block">
                  <div className={`relative overflow-hidden ${i === 0 ? "aspect-square sm:aspect-[4/3.5]" : "aspect-[4/5]"}`}>
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.4s] ease-cinematic group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="eyebrow">{p.category}</span>
                      <h3 className="mt-2 font-serif text-2xl text-ivory">{p.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-luxe text-ivory/60">
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

      {/* Signature Services — light break */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Signature Services"
            title="Photography Crafted With Purpose"
            highlight={["Purpose"]}
            intro="From editorial fashion to intimate portraits, every service is designed to tell your story with artistry and intention."
            align="center"
            onLight
          />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-beige md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.slug}
                variant="up"
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

      {/* Stats — dark with glow */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-radial-glow blur-3xl" />
        <div className="container-luxe relative z-10">
          <SectionHeading
            eyebrow="Why Clients Choose EM Studios"
            title="A Legacy Measured In Moments"
            highlight={["Moments"]}
            align="center"
          />
          <div className="mt-16">
            <Stats />
          </div>
        </div>
      </section>

      {/* Testimonials — dark */}
      <section className="bg-charcoal py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading eyebrow="Testimonials" title="In Their Words" align="center" />
          <div className="mt-12 rounded-sm border border-white/5 bg-ink/60 px-6 py-16 md:px-16">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Journal teaser — dark */}
      <section className="bg-onyx py-24 md:py-36">
        <div className="container-luxe">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="From The Journal" title="Notes On Light & Story" highlight={["Story"]} />
            <Reveal variant="fade">
              <Link href="/journal" className="link-underline text-gold">
                Read The Journal →
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {LATEST.map((a, i) => (
              <Reveal key={a.slug} variant="up" delay={i * 0.1} className="group">
                <Link href="/journal" className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={a.img}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-luxe text-ivory/50">
                    <span className="text-gold">{a.category}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-ivory transition-colors group-hover:text-gold">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/55">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA subtitle="Let's preserve what matters most—your story, your emotion, your moment in time." />
    </>
  );
}
