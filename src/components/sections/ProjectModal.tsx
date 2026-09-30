"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import type { Project } from "@/data/profile";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { easeOut } from "@/lib/motion";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const copy = project ? t.projects.items[project.i18nKey] : null;

  // Trap focus & lock scroll while open. A portal is not needed — the modal
  // is fixed-position, and rendering it here keeps it inside LocaleProvider.
  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project || !copy) return null;

  const isData = project.category === "Data Analysis";
  const stack = copy.techStack ?? [];

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: easeOut }}
      role="dialog"
      aria-modal="true"
      aria-label={t.projects.dialogAria}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        className="card-surface relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.4, ease: easeOut }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.projects.dialogClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-navy-900/80 text-slate-300 backdrop-blur-sm transition-colors duration-200 hover:border-blue-400/50 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex-1 overflow-y-auto">
          {/* Preview image */}
          {project.image && (
            <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-blue-500/10 bg-navy-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-top"
                priority
              />
            </div>
          )}

          <div className="p-6 sm:p-8">
            {/* Title + category */}
            <div className="flex flex-wrap items-center gap-3 pr-10">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                {project.title}
              </h2>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                  isData
                    ? "border-cyan-400/25 bg-cyan-500/10 text-cyan-200"
                    : "border-blue-400/20 bg-blue-500/10 text-blue-200"
                }`}
              >
                {isData ? t.projects.categories.data : t.projects.categories.web}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-cyan-300/90">
              {copy.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              {copy.description}
            </p>

            {/* Tech stack */}
            {stack.length > 0 && (
              <section className="mt-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.projects.techStack}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-blue-400/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights */}
            <section className="mt-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.projects.features}
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {copy.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Sub-projects */}
            {project.children && project.children.length > 0 && (
              <section className="mt-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.projects.subProjects}
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {project.children.map((child) => {
                    const childCopy = t.projects.items[child.i18nKey];
                    if (!childCopy) return null;
                    return (
                      <div
                        key={child.slug}
                        className="overflow-hidden rounded-xl border border-blue-500/10 bg-navy-900/40"
                      >
                        {child.image && (
                          <div className="relative aspect-[16/9] w-full bg-navy-900">
                            <Image
                              src={child.image}
                              alt={child.title}
                              fill
                              sizes="(max-width: 640px) 100vw, 320px"
                              className="object-cover object-top"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <h4 className="text-sm font-semibold text-white">
                            {child.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">
                            {childCopy.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Links */}
            {(project.link || project.repo) && (
              <div className="mt-8 flex flex-wrap gap-3 border-t border-blue-500/10 pt-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    {isData ? t.projects.viewReport : t.projects.liveDemo}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {t.projects.sourceCode}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
