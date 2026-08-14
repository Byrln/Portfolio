"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { ArrowUpRight, Clock, GlobeHemisphereWest } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data/projects";

const filters = [
  { label: "Бүгд", value: "all" },
  { label: "Аялал ба hospitality", value: "travel" },
  { label: "Худалдаа", value: "commerce" },
  { label: "Уул уурхай ба дэд бүтэц", value: "industry" },
];

function matchesFilter(sector: string, filter: string) {
  if (filter === "all") return true;
  if (filter === "travel") return sector.includes("Аялал") || sector.includes("Зочлох");
  if (filter === "commerce") return sector.includes("Худалдаа");
  return sector.includes("Уул уурхай") || sector.includes("Дэд бүтэц");
}

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project.sector, activeFilter)),
    [activeFilter]
  );

  return (
    <section className="projects-section" id="projects">
      <div className="page-shell">
        <div className="section-intro section-intro--work">
          <div>
            <p className="eyebrow">Сонгосон ажлууд</p>
            <h2>Бизнесийн зорилго<br />биелдэг бүтээгдэхүүнүүд.</h2>
          </div>
          <p>
            Салбар бүрийн хэрэгцээ өөр. Харин сайн дижитал бүтээгдэхүүн үргэлж нэг
            зүйлийг хийдэг: бизнесийн дараагийн алхмыг хялбар болгодог.
          </p>
        </div>

        <div className="project-filters" role="group" aria-label="Төслийн шүүлтүүр">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter.value}
              className={activeFilter === filter.value ? "is-active" : ""}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className={`project-card ${project.status === "upcoming" ? "project-card--upcoming" : ""}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <div className="project-card__image">
                <img src={project.images[0]} alt={`${project.title} төслийн дүрслэл`} />
                {project.status === "upcoming" && <span className="project-status"><Clock size={14} weight="bold" /> Удахгүй</span>}
              </div>
              <div className="project-card__body">
                <div className="project-meta">
                  <span>{project.sector}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-card__footer">
                  {project.status === "live" && project.liveUrl ? (
                    <>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <GlobeHemisphereWest size={16} weight="bold" /> Шууд үзэх <ArrowUpRight size={15} weight="bold" />
                      </a>
                      <Link href={`/projects/${project.slug}`} className="case-link">Case study</Link>
                    </>
                  ) : (
                    <span className="project-coming">Аяллын бизнесүүдэд зориулж бүтээж байна</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
