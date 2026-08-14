import Header from "@/portfolio/components/Header";
import Footer from "@/portfolio/components/Footer";
import ProjectDetailPage from "@/portfolio/components/ProjectDetailPage";
import { projects } from "@/portfolio/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ id: project.id })); }
export default async function ProjectRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <main className="site-shell"><Header /><ProjectDetailPage id={id} /><Footer /></main>;
}
