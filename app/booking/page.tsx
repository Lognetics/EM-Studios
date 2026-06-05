import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import { PAGE_HERO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Let's create something timeless. Book your fashion, portrait, lifestyle, brand, or event photography session with EM Studios.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Let's Create Something Timeless"
        highlight={["Timeless"]}
        subtitle="Share your vision with us. Every great image begins with a single conversation."
        image={PAGE_HERO.booking}
      />

      {/* Form */}
      <section className="relative overflow-hidden bg-charcoal py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-radial-glow blur-3xl" />
        <div className="container-luxe relative z-10 grid gap-16 lg:grid-cols-12">
          <Reveal variant="right" className="lg:col-span-4">
            <span className="eyebrow">Tell Us Your Story</span>
            <h2 className="mt-4 font-serif text-3xl text-ivory md:text-4xl">
              Begin Your EM Studios Session
            </h2>
            <p className="mt-6 leading-relaxed text-ivory/60">
              Complete the form and we'll respond within 48 hours to schedule a discovery call.
              There's no obligation — just the first step toward preserving something that matters.
            </p>
            <p className="mt-4 leading-relaxed text-ivory/60">
              Not sure which service fits, or working to a specific date or budget? Tell us as much
              or as little as you like — we'll help shape the rest together.
            </p>
            <ul className="mt-10 space-y-4 text-sm text-ivory/70">
              {[
                "Response within 48 hours",
                "Complimentary discovery call",
                "Tailored creative plan",
                "Worldwide availability",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="left" delay={0.1} className="lg:col-span-8">
            <div className="rounded-sm border border-white/5 bg-ink/60 p-8 md:p-10">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-onyx py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" highlight={["Asked"]} />
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}
