"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BarChart3,
  Globe,
  Users,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/profile";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Reveal } from "@/components/motion/MotionWrapper";
import { fadeUp, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  BarChart3,
  Globe,
  Users,
  GitBranch,
};

export function Skills() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        highlight={t.skills.highlight}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] ?? Code2;
          return (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="card-surface card-hover group p-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-lg shadow-blue-500/20`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-white">
                  {t.skills.categories[category.i18nKey]}
                </h3>
              </div>

              <motion.ul
                variants={staggerFast}
                className="mt-5 flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={fadeUp}
                    className="chip transition-colors duration-200 group-hover:border-cyan-400/30 group-hover:text-cyan-100"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
