import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel.jsx";
import { BEGINNING_STEPS } from "../data/journey.js";

export default function Beginning() {
  return (
    <section id="beginning" className="bg-paper text-ink py-24 sm:py-32">
      <div className="shell">
        <SectionLabel
          level="01"
          label="The Beginning"
          title="Every journey starts before the first line of code."
          theme="paper"
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl leading-[1.5] text-ink font-display font-medium max-w-xl"
          >
            My journey began in Computer Engineering — not with a plan to
            become a developer, but with a growing interest in how software
            is actually put together. That interest gradually turned into
            deliberate practice.
          </motion.p>

          <ol className="space-y-0 border-t border-ink/[0.12]">
            {BEGINNING_STEPS.map((step, i) => (
              <motion.li
                key={step.state}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="border-b border-ink/[0.12] py-6 flex gap-5"
              >
                <span className="font-mono text-[12px] text-ink-faint pt-0.5 w-6 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <p className="kicker mb-2">{step.state}</p>
                  <p className="text-ink-muted leading-relaxed">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
