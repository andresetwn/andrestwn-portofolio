"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Globe,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { profile, gmailCompose } from "@/data/profile";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { fadeUp, staggerContainer, easeOut } from "@/lib/motion";

const iconMap = { Mail, Linkedin, Github, Globe } as const;

/** Circular photo frame — pop in with a slight settle. */
const avatarIn: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLocale();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center pt-28 pb-20 sm:pt-32"
    >
      <div className="container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >

          {/* Circular photo frame */}
          <motion.div variants={avatarIn} className="group relative mt-2 mb-8">
            {/* Outer pulsing glow */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-blue-500/25 blur-2xl motion-reduce:hidden"
              style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
            />

            {/* Rotating gradient ring */}
            {shouldReduceMotion ? (
              <span
                aria-hidden="true"
                className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-blue-500 via-cyan-300 to-blue-600"
              />
            ) : (
              <motion.span
                aria-hidden="true"
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3B82F6, #22D3EE, #60A5FA, #3B82F6)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            )}

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-navy-850 sm:h-44 sm:w-44">
                <Image
                  src={profile.avatar}
                  alt={t.hero.portraitAlt.replace("{{name}}", profile.name)}
                  width={176}
                  height={176}
                  priority
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
                {/* Subtle inner vignette for depth */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(3,7,18,0.55)]"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg font-semibold text-slate-300 sm:text-xl lg:text-2xl"
          >
            {t.hero.rolePrefix}{" "}
            <span className="text-gradient-accent">{t.hero.roleHighlight}</span>
          </motion.p>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-2 text-sm text-slate-500"
          >
            <MapPin className="h-4 w-4 text-cyan-400/70" />
            <span>{profile.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a href="#projects" className="btn-primary group w-full sm:w-auto">
              {t.hero.viewWork}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              <Mail className="h-4 w-4" />
              {t.hero.getInTouch}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-3"
          >
            {socialsMap.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-cyan-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={fadeUp}
            className="mt-14 grid w-full max-w-lg grid-cols-3 divide-x divide-blue-500/10 rounded-2xl border border-blue-500/10 bg-navy-850/40 px-2 py-5 backdrop-blur-sm"
          >
            {profile.stats.map((stat) => (
              <div key={stat.labelKey} className="px-2 text-center">
                <dt className="sr-only">
                  {t.hero.stats[stat.labelKey]}
                </dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {t.hero.stats[stat.labelKey]}
                </p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2 text-slate-600"
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-[0.25em]">
            {t.hero.scroll}
          </span>
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const socialsMap = [
  { label: "Email", href: gmailCompose, icon: "Mail" },
  { label: "LinkedIn", href: profile.linkedin, icon: "Linkedin" },
  { label: "GitHub", href: profile.github, icon: "Github" },
  { label: "Portfolio", href: profile.portfolio, icon: "Globe" },
];
