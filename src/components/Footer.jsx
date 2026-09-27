import { Github, Linkedin, Code2 } from "lucide-react";
import { socials } from "../data/links.js";

export default function Footer() {
  return (
    <footer className="bg-paper text-ink border-t border-ink/[0.12] py-9">
      <div className="shell flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="font-display text-[15px] font-bold text-ink">Ishita Gujarathi</p>
          <p className="text-[12.5px] text-ink-muted">
            Java Full Stack Developer | Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-8 w-8 items-center justify-center border border-ink/[0.15] text-ink-muted hover:text-ink hover:border-ink/40 transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-8 w-8 items-center justify-center border border-ink/[0.15] text-ink-muted hover:text-ink hover:border-ink/40 transition-colors"
          >
            <Linkedin size={14} />
          </a>
          <a
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
            className="flex h-8 w-8 items-center justify-center border border-ink/[0.15] text-ink-muted hover:text-ink hover:border-ink/40 transition-colors"
          >
            <Code2 size={14} />
          </a>
        </div>

        <p className="text-[12px] text-ink-faint order-first sm:order-last font-mono">
          © 2026 Ishita Gujarathi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
