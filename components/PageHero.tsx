import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  /** words within the title to render in gold italic */
  highlight?: string[];
};

/** Full-width cinematic hero used at the top of interior pages. */
export default function PageHero({ eyebrow, title, subtitle, image, highlight = [] }: Props) {
  const words = title.split(" ");
  const hi = highlight.map((h) => h.toLowerCase());

  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-onyx">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover opacity-50"
      />
      {/* layered vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-onyx/30" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-radial-glow blur-2xl" />

      <div className="container-luxe relative z-10 pb-20 pt-40">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-6 font-serif text-[2.35rem] leading-[1.1] text-ivory md:text-6xl md:leading-[1.04] lg:text-7xl">
            {words.map((w, i) => (
              <span key={i} className={hi.includes(w.replace(/[.,—]/g, "").toLowerCase()) ? "italic text-gold-sheen" : ""}>
                {w}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">{subtitle}</p>
          )}
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ivory/25 p-1.5">
          <span className="h-2 w-px animate-scroll-hint bg-gold" />
        </div>
      </div>
    </section>
  );
}
