"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const go = (dir: number) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="mx-auto mt-14 max-w-3xl text-center">
      <div className="min-h-[220px] md:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-serif text-5xl leading-none text-gold">“</span>
            <p className="mt-2 font-serif text-2xl italic leading-relaxed text-ivory md:text-3xl">
              {active.quote}
            </p>
            <footer className="mt-8">
              <p className="text-sm font-medium uppercase tracking-luxe text-gold">
                {active.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-luxe text-ivory/50">{active.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="text-ivory/60 transition-colors hover:text-gold"
        >
          ←
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                i === index ? "scale-125 bg-gold" : "bg-ivory/30"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="text-ivory/60 transition-colors hover:text-gold"
        >
          →
        </button>
      </div>
    </div>
  );
}
