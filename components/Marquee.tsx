type Props = {
  items: string[];
  className?: string;
  fast?: boolean;
};

/** Infinite horizontal ticker — duplicates content for a seamless loop. */
export default function Marquee({ items, className = "", fast = false }: Props) {
  const row = [...items, ...items];
  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div className={`flex w-max ${fast ? "animate-marquee-fast" : "animate-marquee"}`}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-serif text-2xl text-ivory/80 md:text-4xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
