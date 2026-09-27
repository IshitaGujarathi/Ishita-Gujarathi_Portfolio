import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

export default function Education() {
  return (
    <section id="education" className="bg-paper text-ink py-24 sm:py-32">
      <div className="shell">
        <SectionLabel level="08" label="Education" title="Academic background" theme="paper" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 border border-ink/[0.15] px-6 py-7 sm:px-8"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/20 text-ink">
            <GraduationCap size={22} />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-ink">
              R. C. Patel Institute of Technology
            </h3>
            <p className="text-ink-muted text-[14.5px] mt-1">
              Bachelor of Engineering — Computer Engineering
            </p>
          </div>
          <div className="shrink-0 border border-rust/40 px-5 py-2.5 text-center">
            <p className="font-display text-xl font-bold text-ink">8.96</p>
            <p className="font-mono text-[10.5px] tracking-wide text-ink-muted">SGPA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
