import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import certData from "@/data/certifications.json";
import { SectionHeader } from "./SectionHeader";
import type { Certification } from "@/types/portfolio";

export function Certifications() {
  const items = certData as Certification[];
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Verified credentials."
          description="Programs I've completed across cloud, data, and AI."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
            >
              {c.type !== "image" && c.embedUrl ? (
                <div className="aspect-square w-full mb-4 rounded-lg overflow-hidden bg-secondary">
                  <iframe
                    src={c.embedUrl}
                    title={c.name}
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              ) : c.image ? (
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="aspect-square w-full mb-4 object-contain rounded-lg bg-secondary p-3"
                />
              ) : (
                <div className="aspect-square w-full mb-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <Award size={48} className="text-brand" strokeWidth={1.5} />
                </div>
              )}
              <h3 className="text-sm font-semibold text-foreground leading-snug">
                {c.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.provider}</p>
              <p className="text-xs text-muted-foreground">{c.date}</p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark"
                >
                  Verify <ExternalLink size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.credly.com/users/anshika-gupta.289018c2/edit/badges/credly"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand hover:bg-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors"
          >
            View All Certifications <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
