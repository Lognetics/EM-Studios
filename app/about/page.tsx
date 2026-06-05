import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import ParallaxImage from "@/components/ParallaxImage";
import CTA from "@/components/CTA";
import { VALUES, PAGE_HERO, FOUNDER_IMAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Where creativity meets timeless storytelling. The story, philosophy, mission, and vision behind EM Studios.",
};

const STORY = [
  "Timeless moments. At EM Studios, we believe that every moment deserves more than remembrance—it deserves preservation. I discovered a world where time stands still. A world where a fraction of a second can hold an entire story, where emotion becomes tangible, and where memories outlive the moment that created them.",
  "Photography is not merely a profession for me; it is my way of crystallizing time itself—transforming fleeting experiences into timeless visual narratives. Every photograph is a conversation between light, emotion, and memory. It is an opportunity to preserve the beauty of human connection, celebrate individuality, and create something that will continue to speak long after the moment has passed.",
  "As a fashion photographer, I am drawn to the artistry of design, the confidence behind every silhouette, and the stories woven into every fabric. Through portrait photography, I seek to reveal the authentic essence of the people I photograph—their strength, character, vulnerability, and uniqueness. As a visual storyteller, I document moments with intention, crafting images that evoke emotion and leave a lasting impression.",
  "EM Studios was built on the belief that photography should do more than capture what something looked like—it should capture what it felt like. Whether working with brands, creatives, entrepreneurs, couples, or individuals, my goal remains the same: to create imagery that is timeless, meaningful, and deeply human.",
  "Photography gives me a profound sense of purpose. It allows me to leave my print on the blueprint of time, preserving stories that might otherwise fade away. Through every frame, I strive to create work that transcends trends, connects generations, and reminds us that some moments deserve to last forever.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EM Studios"
        title="Where Creativity Meets Timeless Storytelling"
        highlight={["Timeless"]}
        image={PAGE_HERO.about}
      />

      {/* Founder Story — dark */}
      <section className="bg-charcoal py-24 md:py-36">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal variant="fade">
                <span className="eyebrow">Founder Story</span>
              </Reveal>
              <TextReveal
                text="Leaving My Print On The Blueprint Of Time"
                highlight={["Print", "Time"]}
                className="mt-5 font-serif text-4xl leading-tight text-ivory md:text-5xl"
              />
              <Reveal variant="scale" delay={0.1}>
                <ParallaxImage
                  src={FOUNDER_IMAGE}
                  alt="Founder of EM Studios"
                  amount={40}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="mt-10 aspect-[4/5] rounded-sm"
                />
              </Reveal>
            </div>
          </div>

          <div className="space-y-7 lg:col-span-7 lg:pt-2">
            {STORY.map((para, i) => (
              <Reveal key={i} variant="up" delay={i * 0.04}>
                <p
                  className={`leading-relaxed ${
                    i === 0
                      ? "font-serif text-xl text-ivory md:text-2xl md:leading-relaxed"
                      : "text-base text-ivory/60 md:text-lg"
                  }`}
                >
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal variant="fade">
              <p className="border-l-2 border-gold pl-6 font-serif text-xl italic text-gold">
                Welcome to EM Studios—where stories are preserved, emotions are celebrated, and time
                becomes timeless.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy — dark with image */}
      <section className="relative overflow-hidden bg-onyx py-28 md:py-40">
        <Image
          src={PAGE_HERO.philosophy}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/70 to-onyx" />
        <div className="container-luxe relative z-10 text-center">
          <SectionHeading
            eyebrow="Philosophy"
            title="We Capture Feelings, Not Just Photographs"
            highlight={["Feelings,"]}
            intro="EM Studios was built on the belief that photography should preserve emotion, identity, and meaning—not merely appearance. We chase the truth of a moment, not just its surface."
            align="center"
          />
        </div>
      </section>

      {/* Mission & Vision — light break */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="container-luxe grid gap-px overflow-hidden rounded-sm bg-beige md:grid-cols-2">
          <Reveal variant="up" className="bg-ivory p-10 md:p-14">
            <span className="eyebrow text-bronze before:bg-bronze/50">Our Mission</span>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-ink md:text-3xl">
              To create timeless imagery that captures emotion, preserves memories, and tells
              authentic stories that resonate across generations.
            </p>
          </Reveal>
          <Reveal variant="up" delay={0.1} className="bg-ivory p-10 md:p-14">
            <span className="eyebrow text-bronze before:bg-bronze/50">Our Vision</span>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-ink md:text-3xl">
              To become a globally recognized visual storytelling studio known for creating imagery
              that transcends trends and preserves human experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Values — dark */}
      <section className="bg-ink py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Core Values"
            title="The Principles Behind Every Frame"
            highlight={["Frame"]}
            align="center"
          />
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} variant="up" delay={i * 0.08} className="group border-t border-white/10 pt-6 transition-colors hover:border-gold/50">
                <span className="font-serif text-3xl text-gold-sheen">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-xl text-ivory">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's Create Something Timeless Together."
        highlight={["Timeless"]}
        buttonLabel="Start Your Story"
        href="/booking"
      />
    </>
  );
}
