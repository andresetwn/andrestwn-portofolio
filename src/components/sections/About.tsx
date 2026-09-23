import { about } from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Heading + highlight chips */}
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="About"
            title="Turning data into"
            highlight="insights"
            align="left"
          />

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {about.highlights.map((h) => (
                <span key={h} className="chip">
                  {h}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-3">
          <Reveal delay={0.15}>
            <div className="card-surface p-6 sm:p-8">
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg text-center">
                {about.paragraphs[0]}
              </p>

              <div className="my-6 flex items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 bg-blue-500/15" />
                <span className="text-sm font-medium text-cyan-300/80">
                  Data Analyst | Web Developer
                </span>
                <span className="h-px flex-1 bg-blue-500/15" />
              </div>

              <p className="text-base leading-relaxed text-slate-300 sm:text-lg text-center">
                {about.paragraphs[1]}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
