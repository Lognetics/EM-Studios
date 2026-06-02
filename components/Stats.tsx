import Reveal from "./Reveal";
import { STATS } from "@/lib/content";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.1} className="text-center">
          <div className="font-serif text-4xl text-gold md:text-6xl">{s.value}</div>
          <div className="mt-3 text-xs uppercase tracking-luxe text-ivory/60">{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
