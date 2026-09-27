import { LEVELS } from "../data/journey.js";
import { useActiveSection } from "../hooks/useActiveSection.js";

/**
 * A fixed vertical rail, visible from lg breakpoints up, that shows every
 * chapter of the journey and highlights the one currently in view. This is
 * the visual through-line that ties the whole site's "levels" concept
 * together — a wayfinding device, not a decoration.
 */
export default function JourneyRail() {
  const activeId = useActiveSection(LEVELS.map((l) => l.id));
  const activeIndex = LEVELS.findIndex((l) => l.id === activeId);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Journey progress"
      className="hidden lg:flex fixed left-7 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
    >
      <div className="relative flex flex-col items-center gap-[18px]">
        <div className="absolute left-1/2 top-1 bottom-1 w-px -translate-x-1/2 bg-[#8B8672]/[0.35]" />
        {LEVELS.map((lvl, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;
          return (
            <button
              key={lvl.id}
              type="button"
              onClick={() => scrollTo(lvl.id)}
              className="group relative flex items-center"
              aria-current={isActive ? "true" : undefined}
              aria-label={`Level ${lvl.level} — ${lvl.label}`}
            >
              <span
                className={`relative z-10 block rounded-full border transition-all duration-300 ${
                  isActive
                    ? "h-2.5 w-2.5 bg-rust border-rust"
                    : isPast
                    ? "h-1.5 w-1.5 bg-[#8B8672] border-[#8B8672]"
                    : "h-1.5 w-1.5 bg-transparent border-[#8B8672]/60"
                }`}
              />
              <span
                className={`pointer-events-none absolute left-5 whitespace-nowrap font-mono text-[11px] tracking-wide bg-[#15140F] text-[#F2EEE3] px-2 py-1 transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-90"
                }`}
              >
                {lvl.level} — {lvl.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
