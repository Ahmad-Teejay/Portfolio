import { motion } from "framer-motion";
import { projects, moreProjectsPlaceholder } from "../data/projects.js";
import ProjectCard from "./ui/ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="bg-ink/[0.02] py-24 dark:bg-paper/[0.03]">
      <div className="mx-auto max-w-content px-6">
        <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Featured Projects
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: projects.length * 0.06 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink/20 p-10 text-center dark:border-paper/20"
          >
            <p className="font-display text-lg font-semibold text-ink/60 dark:text-paper/60">
              {moreProjectsPlaceholder.name}
            </p>
            <p className="mt-2 text-sm text-ink/45 dark:text-paper/45">
              Add new entries to src/data/projects.js
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
