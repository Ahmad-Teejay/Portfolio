import { motion } from "framer-motion";

const STATS = [
  { label: "Projects Built", value: "Multiple" },
  { label: "Technologies", value: "Frontend & Backend" },
  { label: "Focus", value: "Full-Stack Web Apps" },
];

const STACK_MENTIONS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Authentication",
  "Git/GitHub",
  "Tailwind CSS",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              About Me
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-ink/80 dark:text-paper/80">
              I'm a developer focused on building modern web applications that combine clean user
              interfaces, reliable backend systems, and great user experiences.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 dark:text-paper/70">
              I enjoy turning ideas into real-world software, and I currently work with{" "}
              {STACK_MENTIONS.join(", ")}.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-ink/10 p-5 dark:border-paper/10"
                >
                  <p className="font-display text-lg font-semibold text-amber-dim dark:text-amber">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-ink/50 dark:text-paper/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
