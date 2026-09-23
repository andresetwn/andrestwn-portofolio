"use client";

import { useState } from "react";
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
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import {
  dataProjects,
  webProjects,
  type Project,
} from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
};

type Filter = "All" | "Data Analysis" | "Web Application";

const filters: Filter[] = ["All", "Data Analysis", "Web Application"];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const projects: Project[] =
    filter === "Data Analysis"
      ? dataProjects
      : filter === "Web Application"
        ? webProjects
        : [...dataProjects, ...webProjects];

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected"
        highlight="Projects"
        intro="A mix of data analysis projects and web applications"
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
              {f}
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
        layout
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] ?? Boxes;
            const isData = project.category === "Data Analysis";
            const tags = project.tools ?? project.features ?? [];
            return (
              <motion.article
                key={project.slug}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="card-surface card-hover group flex h-full flex-col overflow-hidden p-6"
              >
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
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-cyan-300/90">
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 flex flex-col gap-2">
                  {project.highlights.slice(0, 3).map((h, i) => (
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
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
