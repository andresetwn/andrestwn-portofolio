import type { Variants } from "framer-motion";

/**
 * Shared easing — smooth and professional, never bouncy enough to feel game-y.
 */
export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

/**
 * Children fade in one after another as the section scrolls into view.
 *
 * The stagger used to be 0.08s with a 0.05s `delayChildren`; on sections with
 * many children (skills chips, project cards) the last items only appeared
 * well after the section was visible, which reads as lag rather than
 * choreography. This is tight enough to feel like one motion.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.02 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.025 },
  },
};

/** Shared viewport config — animate once, keep perf high. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
