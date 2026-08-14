/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={project.images[0]} alt={`${project.title} төслийн дүрслэл`} />
      </div>
      <div className="project-card__body">
        <div className="project-meta"><span>{project.sector}</span><span>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.status === "live" && <Link className="project-link" href={`/projects/${project.slug}`}>Case study →</Link>}
      </div>
    </article>
  );
}
