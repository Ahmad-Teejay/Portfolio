import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import Button from "./ui/Button.jsx";
import SocialLinks from "./ui/SocialLinks.jsx";

const ROLES = ["Frontend Engineer", "Backend Engineer", "Full Stack Developer"];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="font-display text-xl font-medium sm:text-2xl">
      I am a{" "}
      <span className="relative inline-block min-w-[220px] align-bottom text-amber">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[index]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="inline-block"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mx-auto aspect-square w-56 sm:w-72 lg:w-full lg:max-w-sm">
      <div className="absolute -inset-3 rounded-full border border-amber/30" aria-hidden="true" />
      {!imgError ? (
        <img
          src="/profile.jpg"
          alt="Portrait of Ahmad Muhammad Tijjani"
          onError={() => setImgError(true)}
          className="h-full w-full rounded-full border-4 border-paper-soft object-cover shadow-xl dark:border-ink-soft"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center rounded-full border-4 border-paper-soft bg-ink font-display text-4xl font-bold text-amber shadow-xl dark:border-ink-soft"
          role="img"
          aria-label="Ahmad Muhammad Tijjani — replace with /public/profile.jpg"
        >
          AT
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <p className="font-mono text-sm text-amber-dim dark:text-amber">Hi, I'm Ahmad Muhammad Tijjani</p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            I Build Modern Digital Experiences
          </h1>

          <div className="mt-5">
            <RotatingRole />
          </div>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink/70 dark:text-paper/70 lg:mx-0">
            An aspiring Full-Stack Developer passionate about building modern, scalable, and
            user-friendly web applications with React, Next.js, TypeScript, MongoDB, REST APIs, and
            modern web technologies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button as="a" href="#projects" variant="primary">
              View My Work <ArrowUpRight size={16} />
            </Button>
            <Button
              as="a"
              href="/Ahmad-Muhammad-Tijjani-CV.pdf"
              download
              variant="outline"
            >
              Download CV <Download size={16} />
            </Button>
          </div>

          <SocialLinks className="mt-8 justify-center lg:justify-start" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ProfilePhoto />
        </motion.div>
      </div>
    </section>
  );
}
