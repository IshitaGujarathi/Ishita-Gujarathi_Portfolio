import { useState } from "react";
import SectionLabel from "./SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectPanel from "./ProjectPanel.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const [active, setActive] = useState(null);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects">
      <div className="bg-paper text-ink py-24 sm:py-28">
        <div className="shell">
          <SectionLabel
            level="04"
            label="First Real Builds"
            title="At some point, tutorials stop being enough."
            description="So I started building."
            theme="paper"
          />
        </div>
      </div>

      <div className="bg-void text-bone py-16 sm:py-20">
        <div className="shell">
          <div className="space-y-6">
            {featured && <ProjectCard project={featured} featured onOpen={setActive} />}
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setActive} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectPanel project={active} onClose={() => setActive(null)} />
    </section>
  );
}
