import { motion } from "framer-motion";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="bg-ink/[0.02] py-24 dark:bg-paper/[0.03]">
      <div className="mx-auto max-w-content px-6">
        <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What I Do
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-ink/10 bg-paper-soft p-6 transition-colors hover:border-amber/40 dark:border-paper/10 dark:bg-ink-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/15 text-amber-dim dark:text-amber">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
