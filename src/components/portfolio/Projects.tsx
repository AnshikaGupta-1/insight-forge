import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  X,
  Leaf,
  ShieldCheck,
  Stethoscope,
  Users,
  MessageSquare,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import projectsData from "@/data/projects.json";
import { SectionHeader } from "./SectionHeader";
import type { Project } from "@/types/portfolio";

const ICONS: Record<string, LucideIcon> = {
  Leaf,
  ShieldCheck,
  Stethoscope,
  Users,
  MessageSquare,
  Sparkles,
};

function ProjectThumb({ project }: { project: Project }) {
  const Icon = ICONS[project.icon] ?? Sparkles;
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex items-center justify-center`}>
      <Icon size={56} className="text-white/90" strokeWidth={1.4} />
      <div className="absolute inset-0 hero-grid opacity-40" />
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const projects = projectsData as Project[];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Selected work in data, ML, and AI."
            description="Production-style projects showing problem framing, modeling, and shipped outcomes."
          />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ProjectThumb project={p} />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent text-brand px-2 py-0.5 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div className="flex items-center gap-1">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setActive(p)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark"
                  >
                    View Details <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-card border border-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-md bg-white/10 backdrop-blur text-white hover:bg-white/20"
        >
          <X size={18} />
        </button>
        <div className="relative aspect-[16/8] overflow-hidden">
          <ProjectThumb project={project} />
        </div>
        <div className="p-6 lg:p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              ["Problem", project.problem],
              ["Solution", project.solution],
              ["Challenges", project.challenges],
              ["Results", project.results],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-wide uppercase text-brand">{label}</p>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{val}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-brand">Tech Stack</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90"
            >
              <Github size={16} /> View on GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brand text-white px-4 py-2 text-sm font-semibold hover:bg-brand-dark"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
