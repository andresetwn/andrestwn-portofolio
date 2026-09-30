"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

/**
 * Segmented EN / ID language switch: the two codes sit side by side and the
 * active one carries a sliding pill, mirroring the Navbar's active nav
 * indicator. Full language names stay available to screen readers through
 * `aria-label`.
 */
export function LanguageToggle() {
  const { locale, locales, t, setLocale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="group"
      aria-label={t.language.aria}
      className="inline-flex items-center gap-0.5 rounded-lg border border-blue-400/20 bg-white/[0.03] p-0.5"
    >
      {locales.map((entry) => {
        const isActive = entry.code === locale;
        return (
          <button
            key={entry.code}
            type="button"
            onClick={() => setLocale(entry.code)}
            aria-pressed={isActive}
            aria-label={entry.label}
            className={`relative inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-md px-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
              isActive ? "text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="language-active"
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-md border border-blue-400/30 bg-blue-500/15"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 380, damping: 30 }
                }
              />
            )}
            {entry.short}
          </button>
        );
      })}
    </div>
  );
}
