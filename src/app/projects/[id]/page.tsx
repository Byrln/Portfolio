"use client"
// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";


type Params = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: Params) {
  const project = projects.find((p) => String(p.id) === params.id);
   if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900">
  
      <div className="relative overflow-hidden">
        
        {/* Hero Section with Gradient Overlay */}
        <div className="relative h-[40vh] flex items-end" style={{ backgroundColor: project.accentColor + '10' }}>
            <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          /> 
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="container relative pb-12 z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span>{project.company}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h1 className="text-5xl font-bold text-white">{project.title}</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Key Achievements</h2>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 text-gray-300">
                      <span className="text-teal-400">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preview Image */}
              <div className="rounded-xl overflow-hidden border border-gray-800">
                          <Image
                            src={project.previewImage.length === 0 ? undefined : project.previewImage}
                            alt={`${project.title} preview`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {project.previewImage.length === 0 && (
                            <div className="py-10 text-center">
                              <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                404
                              </h1>
                              <h2 className="text-2xl font-semibold text-white">Oops Image not found</h2>
                            </div>
                          )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm space-y-4">
                <h2 className="text-xl font-semibold text-white">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-400 text-gray-900 hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 cursor-grab active:cursor-grabbing"
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Project Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium transition-all duration-300"
              >
                View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}