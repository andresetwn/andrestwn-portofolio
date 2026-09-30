"use client";

import {
  Sparkles,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Globe,
  MapPin,
} from "lucide-react";
import { profile, gmailCompose } from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function Contact() {
  const { t } = useLocale();

  const links = [
    {
      label: t.contact.links.email,
      value: profile.email,
      href: gmailCompose,
      icon: Mail,
    },
    {
      label: t.contact.links.linkedin,
      value: "Andre Setiawan",
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: t.contact.links.github,
      value: "andresetwn",
      href: profile.github,
      icon: Github,
    },
    {
      label: t.contact.links.portfolio,
      value: "PortoDataAnalisisAndre",
      href: profile.portfolio,
      icon: Globe,
    },
  ];

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        highlight={t.contact.highlight}
        intro={t.contact.intro}
      />

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
        <div className="card-surface card-hover overflow-hidden p-6 sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
              <Sparkles className="h-7 w-7" />
            </div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {t.contact.heading}
            </h3>

            <a
              href={gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 border-t border-blue-500/10 pt-8 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon;
              const content = (
                <span className="flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors group-hover:bg-white/[0.03]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/[0.07] text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col overflow-hidden">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {link.label}
                    </span>
                    <span className="truncate text-sm font-medium text-slate-200">
                      {link.value}
                    </span>
                  </span>
                </span>
              );

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group"
                >
                  {content}
                </a>
              ) : (
                <div key={link.label} className="group">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
