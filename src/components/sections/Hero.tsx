"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Globe,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";

const iconMap = { Mail, Linkedin, Globe } as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

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
          {/* Availability badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              {profile.role}
            </span>
</motion.div>

          {/* Name */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-7 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg font-semibold text-slate-300 sm:text-xl lg:text-2xl"
          >
            Data Analyst &amp;{" "}
            <span className="text-gradient-accent">Data Enthusiast</span>
          </motion.p>

          {/* Pitch */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.shortPitch}
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
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
            {socialsMap.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              <div key={stat.label} className="px-2 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
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
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
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
  { label: "Email", href: `mailto:${profile.email}`, icon: "Mail" },
  { label: "LinkedIn", href: profile.linkedin, icon: "Linkedin" },
  { label: "Portfolio", href: profile.portfolio, icon: "Globe" },
];
