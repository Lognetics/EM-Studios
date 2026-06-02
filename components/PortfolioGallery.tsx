"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PORTFOLIO_CATEGORIES, PROJECTS, type Category } from "@/lib/content";

type Filter = "All" | Category;

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="container-luxe py-20 md:py-28">
      {/* Filter system */}
      <div className="no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 md:flex-wrap md:justify-center">
        {(["All", ...PORTFOLIO_CATEGORIES] as Filter[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap rounded-full border px-6 py-2.5 text-xs uppercase tracking-luxe transition-all duration-400 ease-cinematic ${
              filter === cat
                ? "border-ink bg-ink text-ivory"
                : "border-ink/15 text-warmgray hover:border-ink/40 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry gallery */}
      <motion.div layout className="masonry mt-14">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.figure
              layout
              key={p.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer overflow-hidden"
            >
              <button
                onClick={() => setLightbox(PROJECTS.indexOf(p))}
                className="block w-full"
                aria-label={`Open ${p.title}`}
              >
                <div className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-cinematic group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 ease-cinematic group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="eyebrow">{p.category}</span>
                    <h3 className="mt-1 font-serif text-2xl text-ivory">{p.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-luxe text-ivory/70">
                      {p.client} · {p.year}
                    </p>
                  </figcaption>
                </div>
              </button>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 text-2xl text-ivory/70 transition-colors hover:text-gold"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] max-h-[78vh] w-full">
                <Image
                  src={PROJECTS[lightbox].img}
                  alt={PROJECTS[lightbox].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-6 flex flex-col items-center text-center">
                <span className="eyebrow">{PROJECTS[lightbox].category}</span>
                <h3 className="mt-2 font-serif text-3xl text-ivory">
                  {PROJECTS[lightbox].title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-luxe text-ivory/60">
                  {PROJECTS[lightbox].client} · {PROJECTS[lightbox].location} ·{" "}
                  {PROJECTS[lightbox].year}
                </p>
                <Link
                  href={`/portfolio/${PROJECTS[lightbox].slug}`}
                  className="link-underline mt-5 text-gold"
                >
                  View Project Story →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
