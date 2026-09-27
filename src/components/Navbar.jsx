import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { LEVELS } from "../data/journey.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import { resumePath } from "../data/links.js";

const NAV_LINKS = [
  { id: "beginning", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(LEVELS.map((l) => l.id));
  const activeLevel = LEVELS.find((l) => l.id === activeId) ?? LEVELS[0];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-void border-b border-bone/10">
      <div className="shell flex items-center justify-between h-[60px]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-display text-[15px] font-bold text-bone tracking-tight"
        >
          ISHITA<span className="text-rust-bright">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className="font-mono text-[12px] tracking-[0.08em] uppercase text-bone-muted hover:text-bone transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={resumePath}
            download
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] uppercase text-bone-muted border border-bone/[0.15] px-2.5 py-1.5 hover:text-bone hover:border-bone/40 transition-colors"
          >
            <Download size={12} />
            Resume
          </a>

          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-bone-muted border border-bone/[0.15] px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rust-bright" />
            LVL {activeLevel.level}
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 border border-bone/[0.15] text-bone"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-void border-t border-bone/10">
          <ul className="shell flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="border-b border-bone/8 last:border-0">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className="block py-3.5 font-mono text-[13px] tracking-[0.06em] uppercase text-bone-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={resumePath}
                download
                className="btn-outline-invert w-full justify-center"
              >
                <Download size={13} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
