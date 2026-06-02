import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
};

/** Full-width cinematic hero used at the top of interior pages. */
export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-ink">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60 animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
      <div className="container-luxe relative z-10 pb-20 pt-40">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-ivory md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/75">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
