import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <p className="text-brand text-xs font-semibold tracking-[0.18em] uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base lg:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
