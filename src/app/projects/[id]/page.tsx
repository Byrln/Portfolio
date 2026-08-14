import Header from "@/portfolio/components/Header";
import Footer from "@/portfolio/components/Footer";
import ProjectDetailPage from "@/portfolio/components/ProjectDetailPage";
import { projects } from "@/portfolio/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ id: project.id })); }
export default function ProjectRoute({ params }: { params: { id: string } }) { return <main className="site-shell"><Header /><ProjectDetailPage id={params.id} /><Footer /></main>; }
