import { motion } from "framer-motion";
import { BarChart3, Brain, Sparkles, LayoutDashboard, Cloud } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FACTS = [
  { Icon: BarChart3, title: "Data Analytics", desc: "SQL, dashboards, business KPIs." },
  { Icon: Brain, title: "Machine Learning", desc: "End-to-end ML model development." },
  { Icon: Sparkles, title: "Generative AI", desc: "LLMs, RAG, LangChain pipelines." },
  { Icon: LayoutDashboard, title: "Dashboard Development", desc: "Power BI & QuickSight." },
  { Icon: Cloud, title: "Cloud Technologies", desc: "AWS & Azure deployments." },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader eyebrow="About Me" title="Engineer focused on impact, not just models." />
        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed"
          >
            <p>
              I&apos;m a data and AI engineer who turns raw data into systems people can actually
              act on — analytics dashboards, ML models in production, and LLM-powered tooling.
            </p>
            <p>
              I&apos;ve shipped work across analytics, classical ML, and modern generative AI,
              from cleaning multi-source datasets to deploying retrieval-augmented assistants.
              I care about clarity, reliability, and measurable business impact.
            </p>
            <p>
              When I&apos;m not building, I&apos;m reading papers, sharpening SQL, or shipping
              side projects that explore where AI meets real-world data problems.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FACTS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-brand mb-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-snug">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
