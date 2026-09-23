import { motion } from "framer-motion";
import { technologies } from "../data/technologies.js";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Tech Stack
        </h2>

        <div className="mt-12 space-y-8">
          {technologies.map((group, gi) => (
            <div key={group.group}>
              <p className="text-sm font-medium text-ink/50 dark:text-paper/50">{group.group}</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {group.items.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, delay: (gi * group.items.length + i) * 0.02 }}
                    className="cursor-default rounded-lg border border-ink/10 bg-paper-soft px-3.5 py-2 font-mono text-sm text-ink/80 transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber-dim dark:border-paper/10 dark:bg-ink-soft dark:text-paper/80 dark:hover:text-amber"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
