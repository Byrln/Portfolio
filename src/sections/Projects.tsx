import { SectionHeader } from "@/components/SectionHeader";
import ProjectGrid from "@/components/project-grid";
import type { Project } from "@/lib/data/projects";
import fs from "fs";
import path from "path";

function getProjectsFromPublic(): Project[] {
  const dir = path.join(process.cwd(), "public", "projects");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".png"));
  } catch {
    files = [];
  }

  const defaultAccent = "#14b8a6"; // teal-500
  const defaultTechs = ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"];
  // Shared Mongolian descriptions used across cards and detail pages
  const mnDescriptions = mnShortDescriptions;

  return files.map((file) => {
    const nameNoExt = file.replace(/\.[^/.]+$/, "");
    const domain = nameNoExt.toLowerCase();
    const previewImage = `/projects/${file}`;

    // Try to load optional JSON sidecar for richer metadata
    const jsonPath = path.join(dir, `${nameNoExt}.json`);
    let meta: Partial<Project & { longDescription?: string }> = {};
    try {
      if (fs.existsSync(jsonPath)) {
        const raw = fs.readFileSync(jsonPath, "utf-8");
        meta = JSON.parse(raw);
      }
    } catch {
      meta = {};
    }
    const defaultDescription = meta.description ?? mnDescriptions[domain] ?? `Энэхүү төслийн вэб сайтыг Next.js, Tailwind CSS, TypeScript, PostgreSQL ашиглан бүтээсэн. UX болон гүйцэтгэлд анхаарч, SEO-г сайжруулсан.`;
    return {
      id: domain,
      company: meta.company ?? domain,
      year: meta.year ?? "",
      title: meta.title ?? domain,
      description: defaultDescription,
      achievements: meta.achievements ?? [],
      previewImage,
      liveUrl: meta.liveUrl ?? `https://${domain}`,
      technologies: meta.technologies && meta.technologies.length > 0 ? meta.technologies : defaultTechs,
      category: meta.category ?? "web",
      accentColor: meta.accentColor ?? defaultAccent,
    } satisfies Project;
  });
}
export const ProjectsSection = () => {
  const items = getProjectsFromPublic();
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Бодит Үр Дүн"
          title="Онцлох Төслүүд"
          description="Санааг хэрхэн бодит, сонирхолтой дижитал туршлага болгон хувиргасныг хараарай."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          <ProjectGrid initialProjects={items} />
        </div>
      </div>
    </section>
  );
};
import { mnShortDescriptions } from "@/lib/data/projectDescriptions";
