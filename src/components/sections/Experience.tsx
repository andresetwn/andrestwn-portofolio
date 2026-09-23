import {
  Code2,
  GraduationCap,
  Users,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { experiences } from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/MotionWrapper";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  GraduationCap,
  Users,
};

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional"
        highlight="journey"
        intro="Hands-on roles across software development, laboratory assistance, and student organization work."
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="relative">
          {/* Vertical timeline rail */}
          <div
            className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent sm:left-6"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-8">
            {experiences.map((exp, i) => {
              const Icon = iconMap[exp.icon] ?? Briefcase;
              return (
                <Reveal key={`${exp.organization}-${i}`} delay={i * 0.1}>
                  <li className="relative pl-16 sm:pl-20">
                    {/* Node */}
                    <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/30 bg-navy-850 text-cyan-300 shadow-lg shadow-blue-500/10 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div className="card-surface card-hover p-5 sm:p-6">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col gap-0.5">
                          <h3 className="text-base font-semibold text-white sm:text-lg">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-cyan-300">
                            {exp.organization}
                          </p>
                        </div>

                        <div className="flex flex-col gap-1 sm:items-end">
                          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-200">
                            <Briefcase className="h-3 w-3" />
                            {exp.type}
                          </span>
                          <span className="text-xs text-slate-500">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-4 flex flex-col gap-2.5">
                        {exp.points.map((point, pi) => (
                          <li
                            key={pi}
                            className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
}
