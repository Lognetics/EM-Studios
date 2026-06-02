import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { CLIENT_STORIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "Stories beyond the photograph — mini documentaries of the people, brands, and moments EM Studios has had the privilege to capture.",
};

export default function ClientStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="Stories Beyond The Photograph"
        subtitle="Behind every gallery is a person, a brand, a moment. These are their stories — told the way they were lived."
        image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-ivory">
        {CLIENT_STORIES.map((story, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={story.slug} className="border-b border-ink/5">
              <div className="container-luxe grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
                <Reveal
                  className={`relative aspect-[4/5] overflow-hidden ${reversed ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={story.img}
                    alt={story.client}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-cinematic hover:scale-105"
                  />
                </Reveal>
                <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                  <span className="eyebrow">{story.category}</span>
                  <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">{story.title}</h2>
                  <p className="mt-2 text-sm uppercase tracking-luxe text-gold">{story.client}</p>
                  <p className="mt-6 leading-relaxed text-warmgray md:text-lg">{story.summary}</p>
                  <blockquote className="mt-8 border-l-2 border-gold pl-6">
                    <p className="font-serif text-xl italic text-ink">“{story.testimonial}”</p>
                  </blockquote>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      <CTA
        title="Your Story Could Be Next."
        subtitle="Let's create something worth remembering—together."
        buttonLabel="Start Your Story"
      />
    </>
  );
}
