import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-onyx text-ivory">
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-radial-glow blur-2xl" />

      <div className="container-luxe relative z-10 py-20">
        {/* Footer message */}
        <div className="max-w-3xl">
          <Link href="/" className="font-serif text-3xl">
            EM<span className="text-gold">.</span>Studios
          </Link>
          <p className="mt-6 text-lg leading-relaxed text-ivory/65">
            Photography is more than an image—it is a legacy preserved in light, emotion, and
            memory. Every frame tells a story, every story deserves to be remembered, and every
            moment deserves to become timeless.
          </p>
          <p className="mt-6 font-serif text-xl italic text-gold">
            Timeless Stories. Authentic Emotion. Lasting Impact.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <h4 className="eyebrow eyebrow-center before:hidden">Explore</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow eyebrow-center before:hidden">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/60">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
              <li className="leading-relaxed">{SITE.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow eyebrow-center before:hidden">Follow</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/60">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow eyebrow-center before:hidden">Begin</h4>
            <p className="mt-5 text-sm leading-relaxed text-ivory/60">
              Your story deserves to be remembered.
            </p>
            <Link href="/booking" className="btn-gold mt-6">
              Book Your Session
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-luxe text-ivory/40 md:flex-row md:items-center">
          <span>© {SITE.name} — All Rights Reserved</span>
          <span>Where Time Becomes Timeless</span>
        </div>
      </div>
    </footer>
  );
}
