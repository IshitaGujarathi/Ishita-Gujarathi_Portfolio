import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { PIPELINE_STEPS } from "../data/journey.js";

export default function Pipeline() {
  return (
    <section id="ship" className="bg-paper text-ink py-24 sm:py-32">
      <div className="shell">
        <SectionLabel
          level="07"
          label="Ship It"
          title="A project isn't done until it's reachable by someone else."
          theme="paper"
        />

        <div className="flex flex-wrap items-center gap-x-4 gap-y-8">
          {PIPELINE_STEPS.map((item, i) => (
            <div key={item.step} className="flex items-center gap-x-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-start border-l-2 border-rust pl-3"
              >
                <span className="font-display font-bold text-lg sm:text-xl text-ink tracking-tight">
                  {item.step}
                </span>
                <span className="font-mono text-[11px] text-ink-muted mt-1">{item.tool}</span>
              </motion.div>
              {i < PIPELINE_STEPS.length - 1 && (
                <ArrowRight size={16} className="text-ink-faint shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
