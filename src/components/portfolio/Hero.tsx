import { motion } from "framer-motion";
import { Download, ArrowRight, Linkedin, Github, Mail, BarChart3, Database, Code2, Brain } from "lucide-react";
import profilePhoto from "@/assets/profile/profile-photo.png";

export function Hero() {
  return (
    <section id="home" className="relative hero-bg text-hero-foreground overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand font-semibold text-sm tracking-wide mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              <span className="whitespace-nowrap">
                <span className="text-brand">{'{'}</span>
                <span> Anshika Gupta </span>
                <span className="text-brand">{'}'}</span>
              </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-semibold text-blue-400">
             Data Scientist <span className="text-white/30">|</span> Data Analyst{" "} <span className="text-white/30">|</span> AI Engineer{" "} <span className="text-white/30">|</span> Machine Learning Engineer
          </p>
          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
            I transform data into actionable insights and build intelligent solutions using
            Machine Learning, Analytics, SQL, Cloud Technologies, and Generative AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/AnshikaGuptaResume.pdf"
              download="AnshikaGuptaResume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-brand hover:bg-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors"
            >
              Download Resume <Download size={16} />
            </a>
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View My Work <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/anshika-gupta-01972b27a", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com/AnshikaGupta-1", label: "GitHub" },
              { Icon: Mail, href: "mailto:anshikagupta379@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-indigo-900/40 shadow-2xl shadow-blue-900/40">
            <div className="absolute inset-0 hero-grid opacity-60" />
            <img
              src={profilePhoto}
              alt="Profile portrait"
              width={1024}
              height={1024}
              className="relative w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
          </div>

          {[
            { Icon: BarChart3, className: "top-6 -left-6", delay: 0 },
            { Icon: Database, className: "top-10 -right-6", delay: 0.4 },
            { Icon: Code2, className: "bottom-16 -left-8", delay: 0.8 },
            { Icon: Brain, className: "bottom-6 -right-4", delay: 1.2 },
          ].map(({ Icon, className, delay }, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
              className={`absolute ${className} hidden sm:flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-950/60 text-blue-300 backdrop-blur-md shadow-lg`}
            >
              <Icon size={22} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
