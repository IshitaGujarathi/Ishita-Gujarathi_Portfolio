import { motion } from "framer-motion";

/**
 * Every chapter of the journey opens with the same device: a small mono
 * kicker, an oversized level number set at low opacity for scale contrast,
 * and the chapter title. theme="paper" for light sections, "void" for dark.
 */
export default function SectionLabel({ level, label, title, description, theme = "paper" }) {
  const isVoid = theme === "void";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mb-14 sm:mb-16"
    >
      <span
        aria-hidden="true"
        className={`select-none block font-display font-extrabold leading-none text-[5.5rem] sm:text-[8rem] ${
          isVoid ? "text-bone/[0.07]" : "text-ink/[0.06]"
        }`}
      >
        {level}
      </span>

      <div className="-mt-10 sm:-mt-14 max-w-2xl">
        <p className={isVoid ? "kicker-invert mb-3" : "kicker mb-3"}>
          Level {level} — {label}
        </p>
        {title && (
          <h2
            className={`font-display text-[1.9rem] sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] ${
              isVoid ? "text-bone" : "text-ink"
            }`}
          >
            {title}
          </h2>
        )}
        {description && (
          <p className={`mt-4 leading-relaxed ${isVoid ? "text-bone-muted" : "text-ink-muted"}`}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
