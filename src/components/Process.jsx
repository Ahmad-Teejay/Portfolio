import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the problem, users, and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Plan the interface, architecture, and user experience.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the frontend, backend, APIs, and database systems.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Test, optimize, fix issues, and continuously improve the product.",
  },
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-content px-6">
        <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          How I Build
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-paper/10 dark:bg-paper/10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-paper p-7 dark:bg-ink"
            >
              <p className="font-display text-2xl font-semibold text-amber-dim dark:text-amber">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
