import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";
import { PAGE_HERO } from "@/lib/content";

type Props = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  highlight?: string[];
};

const CTA_IMAGE = PAGE_HERO.cta;

/** Reusable cinematic call-to-action band used to close pages. */
export default function CTA({
  title = "Your Story Deserves To Be Remembered.",
  subtitle,
  buttonLabel = "Book Your Session",
  href = "/booking",
  highlight = ["Remembered."],
}: Props) {
  return (
    <section className="relative overflow-hidden bg-onyx">
      <Image src={CTA_IMAGE} alt="" fill sizes="100vw" className="object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-transparent to-onyx" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />

      <div className="container-luxe relative z-10 py-28 text-center md:py-40">
        <div className="mx-auto max-w-3xl">
          <Reveal variant="fade">
            <span className="eyebrow eyebrow-center">Begin Your Story</span>
          </Reveal>
          <TextReveal
            text={title}
            highlight={highlight}
            className="mt-6 font-serif text-3xl leading-tight text-ivory md:text-6xl"
          />
          {subtitle && (
            <Reveal variant="fade" delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/65">
                {subtitle}
              </p>
            </Reveal>
          )}
          <Reveal variant="up" delay={0.3}>
            <Link href={href} className="btn-gold mt-10">
              {buttonLabel}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
