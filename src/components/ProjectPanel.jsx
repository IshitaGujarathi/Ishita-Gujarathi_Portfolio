import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

export default function ProjectPanel({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mission-panel-title"
        >
          <div className="absolute inset-0 bg-void/80" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl max-h-[85vh] overflow-y-auto bg-void border border-bone/[0.15] text-bone"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-bone/[0.12] bg-void px-6 py-4">
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-rust-bright">
                Mission {project.missionNumber}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close mission details"
                className="flex h-8 w-8 items-center justify-center border border-bone/[0.15] text-bone-muted hover:text-bone hover:border-bone/40 transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              <div>
                <h3 id="mission-panel-title" className="font-display text-2xl font-bold text-bone">
                  {project.name}
                </h3>
                <p className="mt-2 text-[14.5px] text-bone-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <p className="kicker-invert mb-2">Objective</p>
                <p className="text-[14px] text-bone-muted leading-relaxed">{project.objective}</p>
              </div>

              <div>
                <p className="kicker-invert mb-2">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag-invert">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="kicker-invert mb-2">Features</p>
                <ul className="space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13.5px] text-bone-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-rust-bright" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="kicker-invert mb-3">Links</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-invert !text-[12px]"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-invert !text-[12px]"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
