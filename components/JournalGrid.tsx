"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ARTICLES, JOURNAL_CATEGORIES } from "@/lib/content";

export default function JournalGrid() {
  const [cat, setCat] = useState("All");

  const filtered = useMemo(
    () => (cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat)),
    [cat]
  );

  return (
    <div className="container-luxe py-20 md:py-28">
      <div className="no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 md:flex-wrap md:justify-center">
        {JOURNAL_CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`whitespace-nowrap rounded-full border px-6 py-2.5 text-xs uppercase tracking-luxe transition-all duration-400 ease-cinematic ${
              cat === c
                ? "border-ink bg-ink text-ivory"
                : "border-ink/15 text-warmgray hover:border-ink/40 hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((a) => (
            <motion.article
              layout
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link href="/journal" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-luxe text-warmgray">
                  <span className="text-gold">{a.category}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-ink transition-colors group-hover:text-gold">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warmgray">{a.excerpt}</p>
                <span className="mt-4 inline-block text-xs uppercase tracking-luxe text-ink">
                  {a.date}
                </span>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
