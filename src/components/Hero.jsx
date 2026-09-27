import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2 } from "lucide-react";
import { socials } from "../data/links.js";

const BOOT_LINES = [
  "initializing developer.exe",
  "loading curiosity...",
  "loading Java...",
  "loading SQL...",
  "loading React...",
  "loading Spring Boot...",
  "loading DSA...",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-void text-bone flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="shell w-full grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="kicker-invert mb-6"
          >
            Level 00 — Start
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-extrabold leading-[0.98] text-bone text-[13vw] sm:text-6xl lg:text-7xl tracking-tight"
          >
            Ishita
            <br />
            Gujarathi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 font-mono text-sm tracking-[0.14em] uppercase text-rust-bright"
          >
            Software Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 max-w-xl border-l border-bone/[0.15] pl-5"
          >
            <p className="text-lg sm:text-xl text-bone leading-snug">
              Every developer has a starting point.
            </p>
            <p className="mt-3 text-bone-muted leading-relaxed">
              I started with curiosity. I stayed for the challenge. I built my
              way forward.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-7 font-mono text-[12.5px] text-bone-muted"
          >
            Computer Engineering student · Java Full Stack Developer · Builder · Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#beginning"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("beginning")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-solid-invert"
            >
              Start My Journey
              <ArrowRight size={15} className="btn-arrow" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-invert"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-10 flex items-center gap-3"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center border border-bone/[0.15] text-bone-muted hover:text-bone hover:border-bone/40 transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center border border-bone/[0.15] text-bone-muted hover:text-bone hover:border-bone/40 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="flex h-9 w-9 items-center justify-center border border-bone/[0.15] text-bone-muted hover:text-bone hover:border-bone/40 transition-colors"
            >
              <Code2 size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-bone/[0.12] bg-void-raised px-5 py-5 font-mono text-[12.5px] leading-7"
        >
          <p className="text-bone-muted mb-2 text-[11px] tracking-wide">boot_sequence.log</p>
          {BOOT_LINES.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.18 }}
              className="text-bone-muted"
            >
              <span className="text-rust-bright mr-2">&gt;</span>
              {line}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 + BOOT_LINES.length * 0.18 }}
            className="mt-1 text-bone"
          >
            status: READY TO BUILD
            <span className="cursor-block ml-1.5 animate-blink" />
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
