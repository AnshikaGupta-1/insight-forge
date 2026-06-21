import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import experienceData from "@/data/experience.json";
import { SectionHeader } from "./SectionHeader";
import type { Experience as TExperience } from "@/types/portfolio";

export function Experience() {
  const items = experienceData as TExperience[];
  return (
    <section id="experience" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow="Work Experience" title="Where I've shipped." />
        <div className="mt-12 relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />
          <div className="space-y-10">
            {items.map((exp, i) => (
              <motion.article
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-start ${
                  i % 2 === 0 ? "" : "lg:[&>div:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 lg:pl-0 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                  <span className="inline-block rounded-md bg-accent text-brand px-2.5 py-1 text-xs font-semibold">
                    {exp.duration}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className={`mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground ${
                    i % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <MapPin size={12} /> {exp.location}
                  </p>
                </div>

                <div className={`pl-12 lg:pl-0 ${i % 2 === 0 ? "" : "lg:pr-12"}`}>
                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <ul className="space-y-2.5">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 lg:left-1/2 top-2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-brand ring-4 ring-background" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
