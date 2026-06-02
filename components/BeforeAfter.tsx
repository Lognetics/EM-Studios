"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
};

/** Interactive before/after editing showcase with a draggable divider. */
export default function BeforeAfter({
  before,
  after,
  beforeLabel = "Original",
  afterLabel = "EM Studios Edit",
}: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-sm bg-ink"
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <Image src={after} alt={afterLabel} fill sizes="100vw" className="object-cover" />
      <span className="absolute right-4 top-4 z-10 rounded-full bg-ink/60 px-3 py-1 text-[10px] uppercase tracking-luxe text-ivory">
        {afterLabel}
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={before} alt={beforeLabel} fill sizes="100vw" className="object-cover grayscale" />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-ink/60 px-3 py-1 text-[10px] uppercase tracking-luxe text-ivory">
          {beforeLabel}
        </span>
      </div>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 z-20 w-px cursor-ew-resize bg-gold"
        style={{ left: `${pos}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ink/80 text-gold backdrop-blur">
          <span className="text-xs">◀ ▶</span>
        </div>
      </div>

      {/* Range input for accessibility / precise control */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before and after"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
