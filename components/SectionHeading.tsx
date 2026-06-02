import Reveal from "./Reveal";
import TextReveal from "./TextReveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  /** set true when placed on a light/ivory background */
  onLight?: boolean;
  /** words within the title to render in gold italic */
  highlight?: string[];
};

/** Editorial section heading: eyebrow + animated serif title + optional intro. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onLight = false,
  highlight = [],
}: Props) {
  const center = align === "center";
  return (
    <div className={`flex max-w-2xl flex-col ${center ? "mx-auto items-center text-center" : "items-start"}`}>
      {eyebrow && (
        <Reveal variant="fade">
          <span className={`eyebrow ${center ? "eyebrow-center" : ""}`}>{eyebrow}</span>
        </Reveal>
      )}
      <TextReveal
        text={title}
        highlight={highlight}
        className={`mt-5 font-serif text-3xl leading-[1.1] md:text-5xl ${
          onLight ? "text-ink" : "text-ivory"
        }`}
      />
      {intro && (
        <Reveal variant="fade" delay={0.15}>
          <p
            className={`mt-6 text-base leading-relaxed md:text-lg ${
              onLight ? "text-warmgray" : "text-ivory/65"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
