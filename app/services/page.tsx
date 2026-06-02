import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
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
        subtitle="Every service is designed around a single idea: imagery that is timeless, meaningful, and deeply human."
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services — alternating editorial rows */}
      <section className="bg-ivory">
        {SERVICES.map((service, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={service.slug}
              className={`border-b border-ink/5 ${i === 0 ? "" : ""}`}
            >
              <div className="container-luxe grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2 lg:gap-20">
                <Reveal
                  className={`relative aspect-[4/3] overflow-hidden ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-cinematic hover:scale-105"
                  />
                </Reveal>
                <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                  <span className="eyebrow">0{i + 1} — Service</span>
                  <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 leading-relaxed text-warmgray md:text-lg">
                    {service.description}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-ink/15 px-4 py-2 text-xs uppercase tracking-luxe text-ink"
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
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Craft"
            title="Before & After — The Art Of The Edit"
            intro="Drag the slider to see how each frame is refined with a careful, timeless hand — never over-processed, always true to the moment."
            align="center"
            light
          />
          <Reveal className="mx-auto mt-14 max-w-4xl">
            <BeforeAfter
              before="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
              after="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80&sat=-20"
            />
          </Reveal>
        </div>
      </section>

      <CTA
        title="Ready To Begin Your Project?"
        subtitle="Tell us what you have in mind. We'll shape it into something timeless."
        buttonLabel="Book A Session"
      />
    </>
  );
}
