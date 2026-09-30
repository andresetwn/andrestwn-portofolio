"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type LocaleContent } from "@/data/content";
import {
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";

const STORAGE_KEY = "portfolio-locale";

type LocaleContextValue = {
  locale: Locale;
  locales: typeof locales;
  t: LocaleContent;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * The site is a single static page with no locale routing, so the active
 * locale is client state persisted to localStorage. English is the default,
 * so the server render and the first client render agree; the stored or
 * browser preference is then applied in an effect. `document.documentElement
 * .lang` is kept in sync so the browser announces the right language.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // Pick up the persisted preference (or the browser's language) once.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocale(stored);
      return;
    }

    const browser = navigator.language.slice(0, 2);
    if (isLocale(browser)) setLocale(browser);
  }, []);

  // Reflect the active locale on <html> for a11y, and persist the choice.
  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, locales, t: content[locale], setLocale }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
