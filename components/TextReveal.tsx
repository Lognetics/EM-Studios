"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** highlight these words with the gold sheen gradient */
  highlight?: string[];
};

/** Word-by-word staggered reveal for headlines. */
export default function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  highlight = [],
}: Props) {
  const words = text.split(" ");
  const norm = (w: string) => w.replace(/[.,—]/g, "").toLowerCase();
  const hi = highlight.map((h) => h.toLowerCase());

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.06, delayChildren: delay }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={`inline-block ${hi.includes(norm(word)) ? "italic text-gold-sheen" : ""}`}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: { y: "0%", opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
