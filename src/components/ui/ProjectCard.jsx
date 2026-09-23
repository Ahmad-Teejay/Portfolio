import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const CYCLE_MS = 3200;

function CardImage({ src, name, onError }) {
  return (
    <img
      src={src}
      alt={`${name} project screenshot`}
      onError={onError}
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  );
}

function ImageCarousel({ images, name }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [erroredSrcs, setErroredSrcs] = useState(() => new Set());

  const validImages = images.filter((src) => !erroredSrcs.has(src));

  useEffect(() => {
    if (paused || validImages.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % validImages.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, validImages.length]);

  // Keep index in range if the active image errors out and the list shrinks.
  useEffect(() => {
    if (index >= validImages.length) setIndex(0);
  }, [validImages.length, index]);

  const markErrored = (src) => {
    setErroredSrcs((prev) => new Set(prev).add(src));
  };

  if (validImages.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center font-display text-sm text-ink/40 dark:text-paper/40">
        {name} — add images to /public/projects
      </div>
    );
  }

  const current = validImages[index];

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <CardImage src={current} name={name} onError={() => markErrored(current)} />
        </motion.div>
      </AnimatePresence>

      {validImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {validImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1} of ${name}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-amber" : "w-1.5 bg-paper/70 dark:bg-ink/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const { name, description, images, tech, features, github, demo } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper-soft transition-shadow hover:shadow-lg dark:border-paper/10 dark:bg-ink-soft"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5 dark:bg-paper/5">
        <ImageCarousel images={images} name={name} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-lg font-semibold">{name}</h3>
        <p className="text-sm leading-relaxed text-ink/70 dark:text-paper/70">{description}</p>

        {features.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 text-xs text-ink/60 dark:text-paper/60">
            {features.slice(0, 4).map((f) => (
              <li key={f} className="rounded-md bg-ink/5 px-2 py-1 dark:bg-paper/10">
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-amber/30 px-2.5 py-0.5 font-mono text-[11px] text-amber-dim dark:text-amber"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/80 hover:text-amber dark:text-paper/80"
            aria-label={`${name} source code on GitHub`}
          >
            <Github size={16} /> Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/80 hover:text-amber dark:text-paper/80"
            aria-label={`${name} live demo`}
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
