import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

/** Editorial section heading: eyebrow + serif title + optional intro. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: Props) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-4 font-serif text-3xl leading-tight md:text-5xl ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            light ? "text-ivory/70" : "text-warmgray"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
