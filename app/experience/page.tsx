import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
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
        subtitle="From the first conversation to the final frame, every step is intentional — designed to make the process feel as timeless as the imagery it creates."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Client Journey"
            title="Six Steps To Something Timeless"
            intro="A clear, considered process so you always know what comes next — and never feel anything less than cared for."
          />

          {/* Vertical timeline */}
          <div className="relative mt-20">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-ink/10 md:left-1/2" />
            <div className="space-y-14 md:space-y-0">
              {EXPERIENCE_STEPS.map((step, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal
                    key={step.n}
                    delay={0.05}
                    className="relative md:grid md:min-h-[180px] md:grid-cols-2 md:gap-16"
                  >
                    {/* Node */}
                    <div className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ivory text-xs font-medium text-gold md:left-1/2 md:-translate-x-1/2">
                      {step.n}
                    </div>

                    <div
                      className={`pl-16 md:pl-0 ${
                        left ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                      }`}
                    >
                      <h3 className="font-serif text-2xl text-ink md:text-3xl">{step.title}</h3>
                      <p className="mt-4 leading-relaxed text-warmgray">{step.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Promise band */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxe text-center">
          <Reveal className="mx-auto max-w-3xl">
            <span className="eyebrow">Our Promise</span>
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-ivory md:text-4xl">
              You will never feel like a transaction. You will feel like the subject of a story
              worth telling.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA title="Begin Your Journey With EM Studios." buttonLabel="Book A Session" />
    </>
  );
}
