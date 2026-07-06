import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-hero text-hero-foreground py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">AG<span className="text-brand">.</span></span>
          <span className="text-sm text-white/60">
            © {new Date().getFullYear()} {"Anshika Gupta"}. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: Github, href: "https://github.com", label: "GitHub" },
            { Icon: Mail, href: "mailto:hello@example.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
