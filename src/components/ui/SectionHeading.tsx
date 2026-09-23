"use client";

import { type ReactNode } from "react";
import { Reveal, motion } from "@/components/motion/MotionWrapper";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Section heading block: small cyan eyebrow, gradient title, optional intro.
 * Animates as a unit on scroll into view.
 */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";

  return (
    <Reveal className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-4"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0" />
          <span className="eyebrow">{eyebrow}</span>
          {isCenter && (
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0" />
          )}
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]"
        >
          {title}{" "}
          {highlight && <span className="text-gradient-accent">{highlight}</span>}
        </motion.h2>

        {intro && (
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {intro}
          </motion.p>
        )}
      </motion.div>
    </Reveal>
  );
}
