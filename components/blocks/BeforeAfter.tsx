"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BeforeAfter as BeforeAfterType } from "@/types/content";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  comparison: BeforeAfterType;
  className?: string;
}

export function BeforeAfter({ comparison, className }: BeforeAfterProps) {
  const [sliderX, setSliderX] = useState(50);
  const [dragging, setDragging] = useState(false);

  function handleMove(clientX: number, rect: DOMRect) {
    const x = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderX(x);
  }

  return (
    <div className={cn("my-10", className)}>
      {comparison.label && (
        <div className="text-[12px] text-ink-subtle mb-3 font-medium">{comparison.label}</div>
      )}

      <div
        className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] cursor-col-resize select-none"
        onMouseMove={(e) => {
          if (dragging) handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
        onMouseDown={(e) => {
          setDragging(true);
          handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          handleMove(touch.clientX, e.currentTarget.getBoundingClientRect());
        }}
      >
        {/* After (bottom layer) */}
        <div className="absolute inset-0 bg-canvas-raised">
          {comparison.after.src ? (
            <Image src={comparison.after.src} alt={comparison.after.alt} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-canvas-overlay">
              <span className="text-ink-subtle text-sm">After: {comparison.after.alt}</span>
            </div>
          )}
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 bg-canvas-raised overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
        >
          {comparison.before.src ? (
            <Image src={comparison.before.src} alt={comparison.before.alt} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#0f0f18]">
              <span className="text-ink-subtle text-sm">Before: {comparison.before.alt}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-white/40 shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          style={{ left: `${sliderX}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-3 bg-gray-600 rounded-full" />
              <div className="w-0.5 h-3 bg-gray-600 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full glass-subtle text-[11px] text-white/70 pointer-events-none">
          Before
        </div>
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full glass-subtle text-[11px] text-white/70 pointer-events-none">
          After
        </div>
      </div>
    </div>
  );
}
