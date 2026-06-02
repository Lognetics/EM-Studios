import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { STATS } from "@/lib/content";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/5 bg-white/5 md:grid-cols-4">
      {STATS.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 0.1}
          variant="scale"
          className="group bg-charcoal px-6 py-12 text-center transition-colors duration-500 hover:bg-graphite"
        >
          <AnimatedCounter
            value={s.value}
            className="font-serif text-4xl text-gold-sheen md:text-6xl"
          />
          <div className="mt-3 text-xs uppercase tracking-luxe text-ivory/55">{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
