import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  Brain,
  Sparkles,
  PieChart,
  Cloud,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import skillsData from "@/data/skills.json";
import { SectionHeader } from "./SectionHeader";
import type { SkillGroup } from "@/types/portfolio";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  BarChart3,
  Brain,
  Sparkles,
  PieChart,
  Cloud,
  Database,
  Wrench,
};

export function Skills() {
  const groups = skillsData as SkillGroup[];
  return (
    <section id="skills" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="A modern stack across data, ML, and AI."
          description="Tools I reach for to ship analytics, models, and AI features end-to-end."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => {
            const Icon = ICONS[g.icon] ?? Code2;
            return (
              <motion.div
                key={g.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-9 w-9 rounded-lg bg-accent text-brand flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{g.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
