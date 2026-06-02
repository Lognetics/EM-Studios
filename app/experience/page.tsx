import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import CTA from "@/components/CTA";
import { EXPERIENCE_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "The EM Studios experience — a thoughtful six-step client journey from discovery call to final delivery.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Journey"
        title="The EM Studios Experience"
        highlight={["Experience"]}
        subtitle="From the first conversation to the final frame, every step is intentional—designed to make the process feel as timeless as the imagery it creates."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-charcoal py-24 md:py-36">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Client Journey"
            title="Six Steps To Something Timeless"
            highlight={["Timeless"]}
            intro="A clear, considered process so you always know what comes next—and never feel anything less than cared for."
          />

          {/* Vertical timeline */}
          <div className="relative mt-20">
            <div className="absolute left-[19px] bottom-2 top-2 w-px bg-white/10 md:left-1/2" />
            <div className="space-y-14 md:space-y-0">
              {EXPERIENCE_STEPS.map((step, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal
                    key={step.n}
                    variant={left ? "right" : "left"}
                    delay={0.05}
                    className="relative md:grid md:min-h-[190px] md:grid-cols-2 md:gap-16"
                  >
                    {/* Node */}
                    <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ink text-xs font-medium text-gold shadow-glow-sm md:left-1/2 md:-translate-x-1/2">
                      {step.n}
                    </div>

                    <div
                      className={`pl-16 md:pl-0 ${
                        left ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                      }`}
                    >
                      <h3 className="font-serif text-2xl text-ivory md:text-3xl">{step.title}</h3>
                      <p className="mt-4 leading-relaxed text-ivory/60">{step.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Promise band — dark with glow */}
      <section className="relative overflow-hidden bg-onyx py-28 md:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />
        <div className="container-luxe relative z-10 text-center">
          <Reveal variant="fade">
            <span className="eyebrow eyebrow-center">Our Promise</span>
          </Reveal>
          <TextReveal
            text="You will never feel like a transaction. You will feel like the subject of a story worth telling."
            highlight={["story"]}
            className="mx-auto mt-8 max-w-4xl font-serif text-2xl italic leading-relaxed text-ivory md:text-4xl md:leading-snug"
          />
        </div>
      </section>

      <CTA title="Begin Your Journey With EM Studios." highlight={["Journey"]} buttonLabel="Book A Session" />
    </>
  );
}
