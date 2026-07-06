import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  const r = schema.safeParse(form);

  if (!r.success) {
    const errs: Record<string, string> = {};

    for (const issue of r.error.issues) {
      errs[issue.path[0] as string] = issue.message;
    }

    setErrors(errs);
    return;
  }

  setErrors({});

  try {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    formData.append(
      "access_key",
      import.meta.env.VITE_ACCESS_KEY
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } else {
      console.error("Web3Forms Error:", data);
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something great together."
          description="Open to full-time roles, consulting, and interesting collaborations."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { Icon: Mail, label: "Email", value: "anshikagupta379@gmail.com", href: "mailto:anshikagupta379@gmail.com" },
              { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anshika-gupta-01972b27a", href: "https://www.linkedin.com/in/anshika-gupta-01972b27a" },
              { Icon: Github, label: "GitHub", value: "github.com/yourname/AnshikaGupta-1", href: "https://github.com/AnshikaGupta-1" },
              { Icon: MapPin, label: "Location", value: "Available worldwide / Remote / India" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md hover:border-brand/40 transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-accent text-brand flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
                  <p className="text-sm text-foreground font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={submit}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-sm space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your Name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Your Email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Your Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand hover:bg-brand-dark px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Message Sent
                </>
              ) : (
                <>
                  Send Message <Send size={14} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  value,
  error,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
