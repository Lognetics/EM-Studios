import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
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
        highlight={["Beyond"]}
        subtitle="Behind every gallery is a person, a brand, a moment. These are their stories — told the way they were lived."
        image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80"
      />

      <section>
        {CLIENT_STORIES.map((story, i) => {
          const reversed = i % 2 === 1;
          const bg = i % 2 === 0 ? "bg-charcoal" : "bg-onyx";
          return (
            <div key={story.slug} className={bg}>
              <div className="container-luxe grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
                <Reveal
                  variant={reversed ? "left" : "right"}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <ParallaxImage
                    src={story.img}
                    alt={story.client}
                    amount={45}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[4/5] rounded-sm"
                  />
                </Reveal>
                <Reveal variant="up" delay={0.1} className={reversed ? "lg:order-1" : ""}>
                  <span className="eyebrow">{story.category}</span>
                  <h2 className="mt-4 font-serif text-3xl text-ivory md:text-4xl">{story.title}</h2>
                  <p className="mt-2 text-sm uppercase tracking-luxe text-gold">{story.client}</p>
                  <p className="mt-6 leading-relaxed text-ivory/60 md:text-lg">{story.summary}</p>
                  <blockquote className="mt-8 border-l-2 border-gold pl-6">
                    <p className="font-serif text-xl italic text-ivory">“{story.testimonial}”</p>
                  </blockquote>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      <CTA
        title="Your Story Could Be Next."
        highlight={["Next."]}
        subtitle="Let's create something worth remembering—together."
        buttonLabel="Start Your Story"
      />
    </>
  );
}
