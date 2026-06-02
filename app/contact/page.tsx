import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { SITE } from "@/lib/content";

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
        subtitle="Whether you have a project in mind or simply want to say hello, we'd love to hear from you."
        image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          {/* Details */}
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
              We'd Love To Hear From You
            </h2>
            <p className="mt-6 leading-relaxed text-warmgray">
              Reach out directly, or send a message and we'll respond within 48 hours.
            </p>

            <div className="mt-12 space-y-8">
              <div className="border-t border-ink/10 pt-5">
                <span className="eyebrow">Email</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block font-serif text-2xl text-ink transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="border-t border-ink/10 pt-5">
                <span className="eyebrow">Phone</span>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-2 block font-serif text-2xl text-ink transition-colors hover:text-gold"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="border-t border-ink/10 pt-5">
                <span className="eyebrow">Studio</span>
                <p className="mt-2 font-serif text-xl leading-relaxed text-ink">{SITE.address}</p>
              </div>
              <div className="border-t border-ink/10 pt-5">
                <span className="eyebrow">Follow</span>
                <div className="mt-3 flex flex-wrap gap-4">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-ink"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-sm bg-beige/40 p-8 md:p-10">
              <h3 className="font-serif text-2xl text-ink">Send A Message</h3>
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
