"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY, PORTFOLIO_CATEGORIES, type Category } from "@/lib/content";

type Filter = "All" | Category;

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  const step = useCallback(
    (dir: number) =>
      setLightbox((cur) =>
        cur === null ? null : (cur + dir + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  // Keyboard navigation for the lightbox.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  return (
    <div className="container-luxe py-20 md:py-28">
      {/* Filter system + count */}
      <div className="no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 md:flex-wrap md:justify-center">
        {(["All", ...PORTFOLIO_CATEGORIES] as Filter[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap rounded-full border px-6 py-2.5 text-xs uppercase tracking-luxe transition-all duration-400 ease-cinematic ${
              filter === cat
                ? "border-gold bg-gold text-ink"
                : "border-white/15 text-ivory/60 hover:border-gold/50 hover:text-ivory"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <p className="mt-6 text-center text-xs uppercase tracking-luxe text-ivory/40">
        {filtered.length} photographs
      </p>

      {/* Masonry gallery */}
      <motion.div layout className="masonry mt-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.figure
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer overflow-hidden rounded-sm"
              onClick={() => setLightbox(i)}
            >
              <div className="relative">
                <Image
                  src={item.src}
                  alt={`${item.category} photography by EM Studios`}
                  width={800}
                  height={1000}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-[1.4s] ease-cinematic group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow">{item.category}</span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-onyx/96 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 z-10 text-2xl text-ivory/70 transition-colors hover:text-gold"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <button
              aria-label="Previous"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 px-4 text-3xl text-ivory/60 transition-colors hover:text-gold md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              ‹
            </button>
            <button
              aria-label="Next"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 px-4 text-3xl text-ivory/60 transition-colors hover:text-gold md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              ›
            </button>
            <motion.div
              key={filtered[lightbox].id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[86vh] w-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[74vh] w-full">
                <Image
                  src={filtered[lightbox].src}
                  alt={`${filtered[lightbox].category} photography by EM Studios`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-luxe text-ivory/60">
                <span className="text-gold">{filtered[lightbox].category}</span>
                <span>·</span>
                <span>
                  {lightbox + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
