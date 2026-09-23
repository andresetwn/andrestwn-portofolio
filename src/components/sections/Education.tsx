import { GraduationCap, MapPin } from "lucide-react";
import { profile, education, highSchool } from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const educationHistory = [education, highSchool];

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic"
        highlight="Background"
      />

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
        <div className="card-surface card-hover relative overflow-hidden p-6 sm:p-8">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8">
            {educationHistory.map((edu) => (
              <div
                key={edu.institution}
                className="flex flex-col gap-6 sm:flex-row sm:items-start"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {edu.institution}
                    </h3>
                    <p className="text-base font-medium text-cyan-300">
                      {edu.program}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <GraduationCap className="h-4 w-4" />
                        {edu.period}
                      </span>
                      {(edu.location ?? profile.location) && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {edu.location ?? profile.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-blue-400/20 bg-blue-500/[0.07] px-4 py-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        GPA
                      </span>
                      <span className="text-2xl font-bold text-gradient-accent">
                        {edu.gpa}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
