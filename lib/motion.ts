import type { Variants, Transition } from "framer-motion";

// Shared easing — matches Framer's default "snappy" curve
export const ease = [0.22, 1, 0.36, 1] as const;
export const easeSoft = [0.25, 0.1, 0.25, 1] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
};

// Fade up — the base atom used everywhere
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease },
  },
};

// Stagger container — wraps groups of fadeUp children
export function staggerContainer(stagger = 0.07, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  };
}

// Fade in only (no movement) — for backgrounds, borders, dividers
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: easeSoft } },
};

// Slide in from left — sidebar items
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -12, filter: "blur(3px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease },
  },
};

// Scale up — cards, blocks appearing in view
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.97, filter: "blur(2px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease },
  },
};

// Viewport trigger config for scroll-reveal
export const viewport = { once: true, margin: "-60px" };
