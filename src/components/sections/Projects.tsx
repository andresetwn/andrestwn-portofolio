"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShoppingCart,
  Bike,
  MessageSquareText,
  Building2,
  BookOpen,
  Boxes,
  ClipboardList,
  CalendarCheck,
  Calculator,
  Wrench,
  ArrowUpRight,
  Github,
  type LucideIcon,
} from "lucide-react";
import {
  dataProjects,
  webProjects,
  type Project,
} from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Bike,
  MessageSquareText,
  Building2,
  BookOpen,
  Boxes,
  ClipboardList,
  CalendarCheck,
  Calculator,
  Wrench,
};

type Filter = "All" | "Data Analysis" | "Web Application";

const filters: Filter[] = ["All", "Data Analysis", "Web Application"];

export function Projects() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const projects: Project[] =
    filter === "All"
      ? [...dataProjects, ...webProjects]
      : [...dataProjects, ...webProjects].filter(
          (p) => p.category === filter || p.alsoIn?.includes(filter),
        );

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        highlight={t.projects.highlight}
        intro={t.projects.intro}
      />

      {/* Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => {
          const isActive = filter === f;
          const count =
            f === "All"
              ? dataProjects.length + webProjects.length
              : f === "Data Analysis"
                ? dataProjects.length
                : webProjects.length;
          const label =
            f === "All"
              ? t.projects.filters.all
              : f === "Data Analysis"
                ? t.projects.filters.data
                : t.projects.filters.web;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={isActive}
              className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="projects-filter"
                  className="absolute inset-0 -z-10 rounded-full border border-blue-400/30 bg-blue-500/15"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {label}
              <span
                className={`text-xs ${
                  isActive ? "text-cyan-300" : "text-slate-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project) => {
            const copy = t.projects.items[project.i18nKey];
            const Icon = iconMap[project.icon] ?? Boxes;
            const isData = project.category === "Data Analysis";
            const tags = copy.tags;
            return (
              <motion.button
                type="button"
                key={project.slug}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(project)}
                aria-label={`${project.title} — ${t.projects.dialogAria}`}
                className="card-surface card-hover group relative flex h-full cursor-pointer flex-col overflow-hidden p-0 text-left"
              >
                {/* Thumbnail */}
                {project.image ? (
                  <div className="relative block aspect-[16/8] w-full overflow-hidden border-b border-blue-500/10 bg-navy-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {project.children && project.children.length > 0 && (
                      <span className="absolute bottom-2 left-2 rounded-full border border-blue-400/30 bg-navy-950/80 px-2 py-0.5 text-[11px] font-medium text-cyan-200 backdrop-blur-sm">
                        {project.children.length} {t.projects.subProjects.toLowerCase()}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="flex aspect-[16/8] items-center justify-center border-b border-blue-500/10 bg-gradient-to-br from-navy-800/60 to-navy-900/60">
                    <Icon className="h-10 w-10 text-blue-400/50" />
                  </div>
                )}

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Top row: icon + category */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${
                        isData
                          ? "from-blue-600 to-cyan-500"
                          : "from-navy-600 to-navy-500"
                      } text-white shadow-lg shadow-blue-500/15`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                        isData
                          ? "border-cyan-400/25 bg-cyan-500/10 text-cyan-200"
                          : "border-blue-400/20 bg-blue-500/10 text-blue-200"
                      }`}
                    >
                      {isData
                        ? t.projects.categories.data
                        : t.projects.categories.web}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-cyan-300/90">
                    {copy.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {copy.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 flex flex-col gap-2">
                    {copy.highlights.slice(0, 3).map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-500"
                      >
                        <span
                          className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan-400/70"
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-blue-500/10 pt-4">
                      {tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-blue-400/15 bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {tags.length > 5 && (
                        <span className="rounded-md border border-blue-400/15 bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-slate-500">
                          +{tags.length - 5}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer links */}
                  <div className="mt-5 flex items-center justify-end gap-4 border-t border-blue-500/10 pt-4">
                    {project.link &&
                      (isData ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
                        >
                          {t.projects.viewReport}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 transition-colors duration-200 hover:text-cyan-200"
                        >
                          {t.projects.liveDemo}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                      >
                        <Github className="h-3.5 w-3.5" />
                        {t.projects.sourceCode}
                      </a>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
