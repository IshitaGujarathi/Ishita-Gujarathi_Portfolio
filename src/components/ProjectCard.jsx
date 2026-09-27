import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, featured, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group relative border border-bone/[0.15] bg-void-raised transition-all duration-250 hover:border-rust-bright/50 hover:-translate-y-0.5 ${
        featured ? "p-7 sm:p-9" : "p-6 sm:p-7"
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <span className="kicker-invert">Mission {project.missionNumber}</span>
        <span className="stamp-invert">{project.status}</span>
      </div>

      <h3
        className={`font-display font-bold text-bone leading-tight ${
          featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {project.name}
      </h3>

      <p className="mt-4 border-l border-bone/20 pl-4 text-[13.5px] text-bone-muted italic leading-relaxed max-w-md">
        {project.narrative}
      </p>

      <div className="mt-5">
        <p className="font-mono text-[11px] tracking-wide text-bone-muted mb-1.5">Objective</p>
        <p className="text-[14px] text-bone leading-relaxed">{project.objective}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, featured ? project.stack.length : 4).map((tech) => (
          <span key={tech} className="tag-invert">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => onOpen(project)} className="btn-outline-invert !text-[12px]">
          View Mission Brief
          <ArrowRight size={13} className="btn-arrow" />
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} — view source on GitHub`}
          className="flex h-9 w-9 items-center justify-center border border-bone/[0.15] text-bone-muted hover:text-bone hover:border-bone/40 transition-colors"
        >
          <Github size={14} />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} — view live demo`}
            className="flex h-9 w-9 items-center justify-center border border-bone/[0.15] text-bone-muted hover:text-bone hover:border-bone/40 transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
