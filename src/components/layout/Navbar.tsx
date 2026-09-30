"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { profile, gmailCompose } from "@/data/profile";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section currently in view to highlight nav items.
  useEffect(() => {
    const ids = t.nav.items.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.1, 0.4] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [t.nav.items]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <div
          className={`absolute inset-x-0 top-0 h-16 transition-all duration-300 ${
            scrolled
              ? "border-b border-blue-500/10 bg-navy-950/80 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
          aria-hidden="true"
        />

        {/* Brand */}
        <a
          href="#hero"
          onClick={close}
          className="relative z-10 flex items-center gap-2.5 rounded-lg px-1 py-1"
          aria-label={`${profile.name} — home`}
        >
          <span className="hidden text-lg font-semibold tracking-tight text-white sm:block">
            andrestwn
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="relative z-10 hidden items-center gap-0.5 lg:flex">
          {t.nav.items.map((link) => {
            const href = `#${link.id}`;
            const isActive = active === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-lg border border-blue-400/20 bg-blue-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA + language toggle + mobile toggle */}
        <div className="relative z-10 flex items-center gap-2">
          <LanguageToggle />

          <a
            href="#contact"
            className="hidden btn-primary !py-2 !px-4 sm:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-400/20 bg-white/[0.03] text-slate-200 transition-colors hover:border-blue-400/40 hover:bg-white/[0.07] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 origin-top lg:hidden"
          >
            <div className="mx-4 overflow-hidden rounded-2xl border border-blue-500/15 bg-navy-900/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <ul className="flex flex-col gap-1 p-3">
                {t.nav.items.map((link, i) => {
                  const href = `#${link.id}`;
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.3 }}
                    >
                      <a
                        href={href}
                        onClick={close}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          active === href
                            ? "bg-blue-500/10 text-white"
                            : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="border-t border-blue-500/10 p-3">
                <a href="#contact" onClick={close} className="btn-primary w-full">
                  <Sparkles className="h-4 w-4" />
                  {t.nav.cta}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 pb-4 pt-1 text-xs text-slate-500">
                <a
                  href={gmailCompose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-300"
                >
                  {profile.email}
                </a>
                <span aria-hidden="true">•</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
