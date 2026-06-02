"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "fade" | "scale" | "blur";

const build = (variant: Variant): Variants => {
  const map: Record<Variant, Record<string, number | string>> = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: 40 },
    right: { x: -40 },
    fade: {},
    scale: { scale: 0.92 },
    blur: { y: 24, filter: "blur(14px)" },
  };
  return {
    hidden: { opacity: 0, ...map[variant] },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  };
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  variant?: Variant;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
  once?: boolean;
};

/** Scroll-triggered reveal with directional/blur/scale variants and cinematic easing. */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  variant = "up",
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={build(variant)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
