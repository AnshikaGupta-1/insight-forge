import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const pos = window.scrollY + 120;
      for (const s of [...SECTIONS].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= pos) {
          setActive(s.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className={`text-lg font-bold tracking-tight ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          AG<span className="text-brand">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? active === s.id
                      ? "text-brand"
                      : "text-foreground/70 hover:text-foreground"
                    : active === s.id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-brand rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden lg:inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
        >
          Contact Me
        </button>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-white border-b border-border shadow-md"
          >
            <ul className="px-6 py-3 flex flex-col">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className={`w-full text-left py-3 text-sm font-medium ${
                      active === s.id ? "text-brand" : "text-foreground/80"
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
