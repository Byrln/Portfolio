"use client";

import { useState } from "react";
import Link from "next/link";
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "../data/projects";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <section className="work" id="work" data-od-id="work-section">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">02 / Сонгосон ажлууд</span>
        </div>
        <div className="work-heading">
          <h2 data-od-id="work-heading">
            Бүтээсэн
            <br />
            төслүүд
          </h2>
          <p>
            Бизнесийн бодит асуудлыг код, контент, интерфэйсээр шийдсэн
            ажлуудаас.
          </p>
        </div>
        <div
          className="filters"
          data-od-id="project-filters"
          role="group"
          aria-label="Төслийн шүүлтүүр"
        >
          {projectFilters.map((filter) => (
            <button
              className={`filter${activeFilter === filter.value ? " active" : ""}`}
              type="button"
              key={filter.value}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="projects" data-od-id="project-list" aria-live="polite">
          {visibleProjects.map((project) => (
            <article
              className={`project-card${project.featured ? " featured" : ""}`}
              data-category={project.category}
              data-od-id={`project-card-${project.id}`}
              key={project.id}
            >
              <div className="project-meta">
                <span className="project-no">{project.number}</span>
                <p className="project-date">{project.discipline}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link
                  className="project-link"
                  href={`/projects/${project.id}`}
                  aria-label="Төслийг үзэх"
                >
                  Дэлгэрэнгүй үзэх →
                </Link>
              </div>
              <div className="project-visual">
                <img src={project.image} alt={project.alt} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
