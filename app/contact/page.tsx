import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { SITE, PAGE_HERO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your story with EM Studios. Reach out by email or phone, or send us a message to begin a timeless collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start Your Story"
        highlight={["Story"]}
        subtitle="Whether you have a project in mind or simply want to say hello, we'd love to hear from you."
        image={PAGE_HERO.contact}
      />

      <section className="bg-charcoal py-20 md:py-28">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          {/* Details */}
          <Reveal variant="right" className="lg:col-span-5">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="mt-4 font-serif text-3xl text-ivory md:text-4xl">
              We'd Love To Hear From You
            </h2>
            <p className="mt-6 leading-relaxed text-ivory/60">
              Reach out directly, or send a message and we'll respond within 48 hours. We work with
              clients worldwide and welcome projects of every scale.
            </p>

            <div className="mt-12 space-y-8">
              <div className="border-t border-white/10 pt-5">
                <span className="eyebrow">Email</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block font-serif text-2xl text-ivory transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="border-t border-white/10 pt-5">
                <span className="eyebrow">Phone</span>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-2 block font-serif text-2xl text-ivory transition-colors hover:text-gold"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="border-t border-white/10 pt-5">
                <span className="eyebrow">Studio</span>
                <p className="mt-2 font-serif text-xl leading-relaxed text-ivory">{SITE.address}</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <span className="eyebrow">Follow</span>
                <div className="mt-3 flex flex-wrap gap-4">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-ivory/80 hover:text-gold"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal variant="left" delay={0.1} className="lg:col-span-7">
            <div className="rounded-sm border border-white/5 bg-ink/60 p-8 md:p-10">
              <h3 className="font-serif text-2xl text-ivory">Send A Message</h3>
              <div className="mt-8">
                <BookingForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
