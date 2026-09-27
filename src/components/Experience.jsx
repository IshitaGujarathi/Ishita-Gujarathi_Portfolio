import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel.jsx";

const ENTRIES = [
  {
    title: "Deloitte Virtual Internship",
    text: "Completed a Deloitte virtual internship experience and gained exposure to professional problem-solving and technology-focused work.",
  },
  {
    title: "Full Stack Development",
    text: "Hands-on learning through building Java Spring Boot and React applications.",
  },
  {
    title: "DSA Practice",
    text: "Ongoing problem-solving practice across core data structures and algorithms.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-paper text-ink pb-24 sm:pb-32">
      <div className="shell">
        <SectionLabel
          level="09"
          label="Experience"
          title="Experience gained along the way"
          description="Learning activities, not job titles — presented as what they actually were."
          theme="paper"
        />

        <div className="border-t border-ink/[0.12]">
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border-b border-ink/[0.12] py-6 sm:flex sm:items-baseline sm:gap-8"
            >
              <p className="font-display font-bold text-ink sm:w-64 shrink-0">{entry.title}</p>
              <p className="mt-2 sm:mt-0 text-ink-muted leading-relaxed max-w-xl">{entry.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
