import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowDown } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { ARCHITECTURE_LAYERS } from "../data/journey.js";

export default function Architecture() {
  const [open, setOpen] = useState(0);

  return (
    <section id="architecture" className="bg-void text-bone py-24 sm:py-32">
      <div className="shell">
        <SectionLabel
          level="06"
          label="Full Stack"
          title="How a request actually moves through one of my applications."
          description="Click a layer to see what it's responsible for."
          theme="void"
        />

        <ol className="max-w-lg">
          {ARCHITECTURE_LAYERS.map((layer, i) => {
            const isOpen = open === i;
            return (
              <li key={layer.name}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between gap-4 border px-5 py-4 text-left transition-colors duration-200 ${
                    isOpen ? "border-rust-bright/60 bg-void-raised" : "border-bone/[0.15] hover:border-bone/[0.35]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-bone-muted">0{i + 1}</span>
                    <span className="font-display font-bold text-bone">{layer.name}</span>
                  </span>
                  {isOpen ? (
                    <Minus size={14} className="shrink-0 text-bone-muted" />
                  ) : (
                    <Plus size={14} className="shrink-0 text-bone-muted" />
                  )}
                </button>

                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-x border-b border-rust-bright/60 bg-void-raised px-5 py-4 text-[13.5px] text-bone-muted leading-relaxed"
                  >
                    {layer.detail}
                  </motion.p>
                )}

                {i < ARCHITECTURE_LAYERS.length - 1 && (
                  <div className="flex justify-start pl-5 py-1.5">
                    <ArrowDown size={13} className="text-bone-muted/50" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
