import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel.jsx";
import { CURRENTLY_BUILDING, LOOKING_FOR } from "../data/journey.js";

export default function CurrentStatus() {
  return (
    <section id="status" className="bg-void text-bone py-24 sm:py-32">
      <div className="shell">
        <SectionLabel level="10" label="Current Status" title="Status check" theme="void" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="border border-bone/[0.15] bg-void-raised max-w-2xl"
        >
          <StatusRow label="Current level" value="Software Engineering Candidate" emphasis />
          <StatusRow label="Status" value="Ready for the next challenge" accent />
          <StatusRow
            label="Currently building"
            value={
              <span className="flex flex-wrap gap-2">
                {CURRENTLY_BUILDING.map((item) => (
                  <span key={item} className="tag-invert">
                    {item}
                  </span>
                ))}
              </span>
            }
          />
          <StatusRow
            label="Looking for"
            value={
              <span className="flex flex-wrap gap-2">
                {LOOKING_FOR.map((role) => (
                  <span key={role} className="tag-invert">
                    {role}
                  </span>
                ))}
              </span>
            }
            last
          />
        </motion.div>
      </div>
    </section>
  );
}

function StatusRow({ label, value, emphasis, accent, last }) {
  return (
    <div className={`px-6 py-5 sm:px-8 ${!last ? "border-b border-bone/[0.12]" : ""}`}>
      <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-bone-muted mb-2">
        {label}
      </p>
      {typeof value === "string" ? (
        <p
          className={`font-display font-bold ${emphasis ? "text-xl sm:text-2xl" : "text-lg"} ${
            accent ? "text-rust-bright" : "text-bone"
          }`}
        >
          {value}
        </p>
      ) : (
        value
      )}
    </div>
  );
}
