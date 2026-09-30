"use client";

import { BadgeCheck, GraduationCap, FileBadge, Check } from "lucide-react";
import { certifications, trainings } from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/MotionWrapper";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function Certifications() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        eyebrow={t.certifications.eyebrow}
        title={t.certifications.title}
        highlight={t.certifications.highlight}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const copy = t.certifications.items[cert.i18nKey];
          return (
            <Reveal key={cert.title} delay={0.1 * (i + 1)}>
              <div className="card-surface card-hover relative h-full overflow-hidden p-6">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25">
                    <BadgeCheck className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 text-base font-semibold leading-snug text-white">
                    {copy.title}
                  </h3>

                  <div className="mt-3 flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-cyan-300">
                      {copy.issuer}
                    </span>
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-200">
                      <Check className="h-3 w-3" />
                      {t.certifications.note}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal delay={0.2}>
          <div className="card-surface card-hover h-full p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.07] text-cyan-300">
              <GraduationCap className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-white">
              {t.certifications.training}
            </h3>

            <ul className="mt-4 flex flex-col gap-3">
              {trainings.map((tr) => {
                const trCopy = t.certifications.trainings[tr.i18nKey];
                return (
                  <li
                    key={tr.i18nKey}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-slate-200">
                        {trCopy?.title ?? tr.i18nKey}
                      </span>
                      <span className="text-xs text-slate-500">
                        {trCopy?.issuer}
                      </span>
                    </div>
                    {tr.year && (
                      <span className="shrink-0 text-xs font-medium text-cyan-300/80">
                        {tr.year}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="card-surface card-hover h-full p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.07] text-cyan-300">
              <FileBadge className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-white">
              {t.certifications.languages}
            </h3>

            <ul className="mt-4 flex flex-col gap-3">
              {t.certifications.languagesList.map((lang) => (
                <li
                  key={lang}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="font-medium text-slate-200">{lang}</span>
                  <Check className="h-4 w-4 text-cyan-400/70" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
