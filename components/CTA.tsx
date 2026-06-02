import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

type Props = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
};

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80";

/** Reusable cinematic call-to-action band used to close pages. */
export default function CTA({
  title = "Your Story Deserves To Be Remembered.",
  subtitle,
  buttonLabel = "Book Your Session",
  href = "/booking",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="container-luxe relative z-10 py-28 text-center md:py-36">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl leading-tight text-ivory md:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
              {subtitle}
            </p>
          )}
          <Link href={href} className="btn-gold mt-10">
            {buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
