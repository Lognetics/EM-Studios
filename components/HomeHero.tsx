"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HERO_IMAGES } from "@/lib/content";

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-onyx">
      {/* Cross-fading montage of slow-motion frames */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={HERO_IMAGES[index]}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-slow-zoom object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* layered darkening + glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/40 to-onyx/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(8,8,8,0.55)_100%)]" />

      <div className="container-luxe relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="inline-block text-xs uppercase tracking-wider2 text-gold"
        >
          Fashion · Portrait · Lifestyle · Brand · Events
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-4xl font-serif text-5xl leading-[1.02] text-ivory sm:text-6xl lg:text-8xl"
        >
          Timeless Moments.
          <br />
          <span className="italic text-gold-sheen">Preserved Forever.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg"
        >
          At EM Studios, every image is crafted to preserve emotion, identity, and human
          connection—transforming fleeting moments into timeless visual narratives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/portfolio" className="btn-gold">
            View Portfolio
          </Link>
          <Link
            href="/booking"
            className="btn-outline border-ivory/40 text-ivory hover:border-gold hover:bg-gold hover:text-ink"
          >
            Book A Session
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-gold" : "w-4 bg-ivory/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
