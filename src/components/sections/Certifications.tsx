import { BadgeCheck, GraduationCap, FileBadge, Check } from "lucide-react";
import { certifications, trainings, languages } from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/MotionWrapper";

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications &"
        highlight="Learning"
        intro="Professional credentials and structured training that keep my analytical skills sharp."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {certifications.map((cert, i) => (
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
                  {cert.title}
                </h3>

                <div className="mt-3 flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-cyan-300">
                    {cert.issuer}
                  </span>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-200">
                    <Check className="h-3 w-3" />
                    {cert.note}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.2}>
          <div className="card-surface card-hover h-full p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.07] text-cyan-300">
              <GraduationCap className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-white">
              Training Programs
            </h3>

            <ul className="mt-4 flex flex-col gap-3">
              {trainings.map((t) => (
                <li
                  key={t.title}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-slate-200">{t.title}</span>
                    <span className="text-xs text-slate-500">{t.issuer}</span>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-cyan-300/80">
                    {t.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="card-surface card-hover h-full p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.07] text-cyan-300">
              <FileBadge className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-white">Languages</h3>

            <ul className="mt-4 flex flex-col gap-3">
              {languages.map((lang) => (
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
