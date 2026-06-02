import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import BeforeAfter from "@/components/BeforeAfter";
import CTA from "@/components/CTA";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Photography crafted with purpose — fashion, portrait, lifestyle, brand, and event photography, plus full creative direction.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Photography Crafted With Purpose"
        highlight={["Purpose"]}
        subtitle="Every service is designed around a single idea: imagery that is timeless, meaningful, and deeply human."
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Intro */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What We Offer"
            title="A Full Spectrum Of Visual Storytelling"
            highlight={["Storytelling"]}
            intro="Whether you need a single striking portrait or a fully art-directed campaign, each service is tailored to your story—and held to the same obsessive standard of craft."
          />
        </div>
      </section>

      {/* Services — alternating dark editorial rows */}
      <section>
        {SERVICES.map((service, i) => {
          const reversed = i % 2 === 1;
          const bg = i % 2 === 0 ? "bg-charcoal" : "bg-onyx";
          return (
            <div key={service.slug} className={bg}>
              <div className="container-luxe grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
                <Reveal
                  variant={reversed ? "left" : "right"}
                  className={reversed ? "lg:order-2" : ""}
                >
                  <ParallaxImage
                    src={service.img}
                    alt={service.title}
                    amount={40}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="aspect-[4/3] rounded-sm"
                  />
                </Reveal>
                <Reveal variant="up" delay={0.1} className={reversed ? "lg:order-1" : ""}>
                  <span className="eyebrow">0{i + 1} — Service</span>
                  <h2 className="mt-4 font-serif text-3xl text-ivory md:text-4xl">{service.title}</h2>
                  <p className="mt-5 leading-relaxed text-ivory/60 md:text-lg">
                    {service.description}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-luxe text-ivory/80 transition-colors hover:border-gold hover:text-gold"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" className="link-underline mt-8 inline-block text-gold">
                    Enquire About {service.title} →
                  </Link>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* Before & After premium feature */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-radial-glow blur-3xl" />
        <div className="container-luxe relative z-10">
          <SectionHeading
            eyebrow="The Craft"
            title="Before & After — The Art Of The Edit"
            highlight={["Edit"]}
            intro="Drag the slider to see how each frame is refined with a careful, timeless hand—never over-processed, always true to the moment."
            align="center"
          />
          <Reveal variant="scale" className="mx-auto mt-14 max-w-4xl">
            <BeforeAfter
              before="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
              after="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80&sat=-20"
            />
          </Reveal>
        </div>
      </section>

      <CTA
        title="Ready To Begin Your Project?"
        highlight={["Project?"]}
        subtitle="Tell us what you have in mind. We'll shape it into something timeless."
        buttonLabel="Book A Session"
      />
    </>
  );
}
