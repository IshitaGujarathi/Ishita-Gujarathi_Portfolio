import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { DSA_PATH } from "../data/journey.js";
import { socials } from "../data/links.js";

export default function DSAJourney() {
  return (
    <section id="dsa" className="bg-paper text-ink py-24 sm:py-32">
      <div className="shell">
        <SectionLabel
          level="03"
          label="Learning to Think"
          title="Writing code is one thing. Learning how to think about problems is another."
          theme="paper"
        />

        <p className="sm:hidden font-mono text-[11px] text-ink-faint mb-4">
          swipe to follow the trail →
        </p>

        <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 pb-6">
          <div className="relative flex items-center gap-x-12 sm:gap-x-16 w-max py-10">
            <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-ink/25" />
            {DSA_PATH.map((topic, i) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative z-10 flex flex-col items-center w-[92px] shrink-0"
              >
                {i % 2 === 0 ? (
                  <>
                    <span className="mb-3 font-mono text-[11.5px] text-ink-muted whitespace-nowrap">
                      {topic}
                    </span>
                    <span className="h-3 w-3 rounded-full bg-ink ring-4 ring-paper" />
                  </>
                ) : (
                  <>
                    <span className="h-3 w-3 rounded-full bg-ink ring-4 ring-paper" />
                    <span className="mt-3 font-mono text-[11.5px] text-ink-muted whitespace-nowrap">
                      {topic}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-4 max-w-lg text-ink-muted leading-relaxed">
          These are the topics I&rsquo;ve practiced as part of ongoing DSA
          preparation — arrays and strings first, then progressively into
          trees and graphs.
        </p>

        <a
          href={socials.dsaRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline mt-8"
        >
          Explore DSA Journey
          <ArrowRight size={15} className="btn-arrow" />
        </a>
      </div>
    </section>
  );
}
