"use client";

import { useState } from "react";
import type { Project } from "@/lib/data/projects";
import ProjectCard from "./project-card";

export default function ProjectGrid({ initialProjects }: { initialProjects: Project[] }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleProjects = initialProjects.slice(0, visibleCount);

  return (
    <div className="project-grid">
      {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      {visibleCount < initialProjects.length && (
        <button type="button" className="project-filters__load-more" onClick={() => setVisibleCount((count) => count + 3)}>
          Илүү үзэх
        </button>
      )}
    </div>
  );
}
