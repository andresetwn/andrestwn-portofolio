/**
 * Locale support for the portfolio.
 *
 * The site is a single static page with no locale routing, so the active
 * locale lives in client state (persisted to localStorage) rather than in the
 * URL. English is the default.
 */

export type Locale = "en" | "id";

export const defaultLocale: Locale = "en";

export const locales: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
];

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "id";
}
