"use client"

import { useState } from "react"
import { type Project, projects } from "@/lib/data/projects"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ProjectGridProps {
  initialProjects?: Project[]
}

export default function ProjectPage({ initialProjects = projects }: ProjectGridProps) {
  const [filter, setFilter] = useState<string>("all")
  const [visibleCount, setVisibleCount] = useState<number>(6) // Show 6 rows (12 items) initially

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "design", name: "UI/UX Design" },
    { id: "marketing", name: "Marketing" },
    { id: "ai", name: "AI & Machine Learning" },
  ]

  const filteredProjects =
    filter === "all" ? initialProjects : initialProjects.filter((project) => project.category === filter)

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMoreProjects = visibleProjects.length < filteredProjects.length

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6) // Load 12 more items (6 more rows)
  }

  return (
    <div className="h-100vh container space-y-8 pb-16 lg:py-24">
      <div className="flex flex-wrap justify-center gap-3 p-2 bg-gray-800/50 rounded-xl backdrop-blur-sm">
        {categories.map((category) => {
          const isActive = filter === category.id
          return (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id)
                setVisibleCount(6) // Reset visible count when changing filters
              }}
              className={`
                px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 relative
                ${isActive ? "text-gray-900" : "text-gray-300 hover:text-white"}
              `}
            >
              {/* Active background pill */}
              {isActive && <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg" />}

              {/* Button text */}
              <span className={`relative z-10 ${isActive ? "font-semibold" : ""}`}>{category.name}</span>

              {/* Show count indicator for active category */}
              {isActive && (
                <span className="ml-2 relative z-10 bg-gray-900/30 text-white text-xs px-2 py-0.5 rounded-full">
                  {filteredProjects.length}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
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

      <div className="text-center text-gray-400 text-sm">
        Showing {visibleProjects.length} of {filteredProjects.length} projects
      </div>
    </div>
  )
}
