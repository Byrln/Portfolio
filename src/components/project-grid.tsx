"use client";

import { useState } from "react";
import { type Project, projects } from "@/lib/data/projects";
import ProjectCard from "./project-card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import WipProjectCard from "./WipProjectCard";

interface ProjectGridProps {
  initialProjects?: Project[];
}

export default function ProjectGrid({
  initialProjects = projects,
}: ProjectGridProps) {
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredProjects = initialProjects;

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleProjects.length < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {visibleProjects.length === 0 && <WipProjectCard />}
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="flex justify-center pt-8">
          <Button
            onClick={loadMore}
            size="lg"
            className="group bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 px-8 border-none"
          >
            See More
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      )}
      {/* 
      <div className="text-center text-gray-400 text-sm">
        Showing {visibleProjects.length} of {filteredProjects.length} projects
      </div> */}
    </div>
  );
}
