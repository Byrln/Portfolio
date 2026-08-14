/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data/projects";

type ProjectPageProps = { params: { id: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.id);
  if (!project) return { title: "Төсөл олдсонгүй · Баяржавхлан" };
  return {
    title: `${project.title} · Баяржавхлан`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.id);
  if (!project) notFound();

  return (
    <main className="case-study-page">
      <div className="page-shell">
        <Link href="/#projects" className="case-back-link"><ArrowLeft size={16} /> Бүх төслүүд рүү буцах</Link>
        <div className="case-hero">
          <div>
            <p className="eyebrow">{project.sector}</p>
            <h1>{project.title}</h1>
            <p className="case-summary">{project.summary}</p>
            <div className="case-hero__actions">
              {project.liveUrl ? (
                <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live site <ArrowUpRight size={17} weight="bold" />
                </a>
              ) : (
                <span className="case-upcoming">Удахгүй · Бүтээн байгуулалт үргэлжилж байна</span>
              )}
            </div>
          </div>
          <div className="case-hero__image">
            <img src={project.images[0]} alt={`${project.title} төслийн үндсэн зураг`} />
          </div>
        </div>

        <div className="case-grid">
          <section>
            <p className="case-label">Бизнесийн хэрэгцээ</p>
            <h2>Юуг илүү ойлгомжтой болгох шаардлагатай байсан бэ?</h2>
            <p>{project.businessNeed}</p>
          </section>
          <section>
            <p className="case-label">Хүргэсэн шийдэл</p>
            <h2>Зорилгыг хэрэгжих урсгал болгосон нь</h2>
            <p>{project.solution}</p>
          </section>
        </div>

        <section className="case-detail-band">
          <div>
            <p className="case-label">Миний оролцоо</p>
            <p className="case-detail-strong">{project.role}</p>
          </div>
          <div>
            <p className="case-label">Гол боломжууд</p>
            <ul>
              {project.features.map((feature) => <li key={feature}><CheckCircle size={17} weight="fill" />{feature}</li>)}
            </ul>
          </div>
          <div>
            <p className="case-label">Технологи</p>
            <div className="case-tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </div>
        </section>

        <section className="case-gallery">
          <div className="case-gallery__heading">
            <p className="case-label">Дүрслэл</p>
            <h2>Бүтээгдэхүүн бодит хэрэглээнд.</h2>
          </div>
          <div className="case-gallery__grid">
            {project.images.map((image, index) => (
              <img key={image} src={image} alt={`${project.title} төслийн зураг ${index + 1}`} />
            ))}
          </div>
        </section>

        <div className="case-bottom-cta">
          <p>Таны бизнесийн дараагийн дижитал алхам?</p>
          <Link href="/#contact">Холбоо барих <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </main>
  );
}
