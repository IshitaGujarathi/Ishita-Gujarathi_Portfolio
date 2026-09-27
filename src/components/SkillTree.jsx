import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { SKILL_TREE } from "../data/journey.js";
import { skillCategories } from "../data/skills.js";

export default function SkillTree() {
  const [open, setOpen] = useState(() => new Set());

  const toggle = (key) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <section id="skills" className="bg-void text-bone py-24 sm:py-32">
      <div className="shell">
        <SectionLabel
          level="02"
          label="Foundations"
          title="This is how I unlocked them."
          description="Not a list of skills — a tree. Each branch grew out of a real need in a project or a problem I was trying to solve."
          theme="void"
        />

        <div className="flex flex-col items-center mb-10">
          <div className="tag-invert">Software Engineering — Root</div>
          <div className="mt-3 h-8 w-px bg-bone/[0.15]" />
        </div>

        <div className="grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4 border border-bone/10">
          {SKILL_TREE.map((branch) => (
            <div key={branch.id} className="bg-void px-5 py-6 sm:px-6 sm:py-7">
              <div className="mb-4">
                <p className="font-display text-base font-bold text-bone">{branch.name}</p>
                <span className="stamp-invert mt-2">{branch.state}</span>
              </div>
              <p className="text-[13.5px] text-bone-muted leading-relaxed mb-5">
                {branch.blurb}
              </p>

              <ul className="space-y-2">
                {branch.nodes.map((node) => {
                  const key = `${branch.id}:${node.name}`;
                  const isOpen = open.has(key);
                  return (
                    <li key={key} className="border-t border-bone/10 pt-2">
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-3 py-1.5 text-left group"
                      >
                        <span className="text-[13.5px] text-bone group-hover:text-rust-bright transition-colors">
                          {node.name}
                        </span>
                        {isOpen ? (
                          <Minus size={13} className="shrink-0 text-bone-muted" />
                        ) : (
                          <Plus size={13} className="shrink-0 text-bone-muted" />
                        )}
                      </button>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.25 }}
                          className="text-[12.5px] text-bone-muted leading-relaxed pb-2 overflow-hidden"
                        >
                          {node.detail}
                        </motion.p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-bone-muted mb-5">
            Full inventory
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.label}>
                <p className="text-[13px] text-bone-muted mb-2.5">{category.label}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="tag-invert">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
