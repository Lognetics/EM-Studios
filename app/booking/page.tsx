import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";

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
        subtitle="Share your vision with us. Every great image begins with a single conversation."
        image="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Form */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <span className="eyebrow">Tell Us Your Story</span>
            <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
              Begin Your EM Studios Session
            </h2>
            <p className="mt-6 leading-relaxed text-warmgray">
              Complete the form and we'll respond within 48 hours to schedule a discovery call.
              There's no obligation — just the first step toward preserving something that matters.
            </p>
            <ul className="mt-10 space-y-4 text-sm text-warmgray">
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

          <Reveal delay={0.1} className="lg:col-span-8">
            <BookingForm />
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="Questions" title="Frequently Asked" />
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}
