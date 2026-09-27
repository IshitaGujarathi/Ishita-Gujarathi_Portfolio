import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel.jsx";
import { DEBUG_CYCLE } from "../data/journey.js";

export default function Growth() {
  return (
    <section id="growth" className="bg-paper text-ink py-24 sm:py-32">
      <div className="shell">
        <SectionLabel
          level="05"
          label="Break, Debug, Improve"
          title="Projects don't always work on the first attempt."
          description="Debugging backend APIs, tracing database issues, fixing deployment problems, untangling frontend-backend communication — every bug became part of the learning process."
          theme="paper"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-ink/[0.12] border border-ink/[0.12]">
          {DEBUG_CYCLE.map((item, i) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-paper px-5 py-6"
            >
              <span className="font-mono text-[11px] text-ink-faint">0{i + 1}</span>
              <p
                className={`mt-2 font-display font-bold text-[15px] tracking-tight ${
                  item.stage === "ERROR" ? "text-rust" : "text-ink"
                }`}
              >
                {item.stage}
              </p>
              <p className="mt-2 text-[12.5px] text-ink-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 max-w-lg text-ink-muted leading-relaxed">
          None of these projects worked perfectly on the first attempt — and
          that&rsquo;s the point.
        </p>
      </div>
    </section>
  );
}
