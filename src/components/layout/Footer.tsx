"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Mail, Linkedin, Globe } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export function Footer() {
  const [showTop, setShowTop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = [
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "Portfolio", href: profile.portfolio, icon: Globe },
  ];

  return (
    <footer className="relative border-t border-blue-500/10 bg-navy-950/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="container-px py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#hero"
              className="flex items-center gap-2.5"
              aria-label={`${profile.name} — back to top`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                AS
              </span>
              <span className="text-sm font-semibold tracking-tight text-white">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {profile.role} based in {profile.location}. Turning raw data into
              clear, actionable insights.
            </p>

            <ul className="mt-5 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-blue-400/40 hover:text-cyan-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-blue-500/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() =>
              shouldReduceMotion
                ? window.scrollTo({ top: 0 })
                : window.scrollTo({ top: 0, behavior: "smooth" })
            }
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ duration: 0.2 }}
            aria-label="Back to top"
            className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:scale-105 sm:bottom-8 sm:right-8"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
