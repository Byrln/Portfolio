import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import NotFound from "@/app/not-found";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    company,
    year,
    title,
    achievements,
    previewImage,
    liveUrl,
    accentColor,
    technologies,
    description,
  } = project;

  return (
    <div className="rounded-3xl overflow-hidden bg-[#1A232E] text-white p-5 md:p-6 flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.01] group">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        <div className="md:col-span-5 lg:col-span-4 w-full">
          <div className="relative w-full aspect-video md:aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={
                previewImage.length === 0 ? "/placeholder.jpg" : previewImage
              }
              alt={`${title} preview`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {previewImage.length === 0 && (
              <div className="py-10 text-center">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  404
                </h1>
                <h2 className="text-2xl font-semibold text-white">
                  Oops Image not found
                </h2>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#1A232E] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="flex flex-col md:col-span-7 lg:col-span-8">
          <div className="flex items-center gap-2 mb-3 justify-between w-full">
            <div className="flex items-center gap-2">
              <span style={{ color: accentColor }} className="font-medium">
                {company}
              </span>
              <span style={{ color: accentColor }} className="font-medium">
                •
              </span>
              <span style={{ color: accentColor }} className="font-medium">
                {year}
              </span>
            </div>
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-opacity-80 transition-all group-hover:shadow-md w-full sm:w-auto justify-center"
              style={{ backgroundColor: `${accentColor}30` }}
            >
              <span className="relative z-10">Дэлгэрэнгүй</span>
              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight group-hover:text-white transition-colors mb-2">
            {title}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3 sm:line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs transition-colors hover:bg-gray-700"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                +{technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-800 my-4" />

      <div className="flex flex-col flex-1">
        <ul className="space-y-2 mb-4">
          {achievements.slice(0, 2).map((achievement, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-300 text-sm sm:text-base"
            >
              <span
                className="mt-1 rounded-full bg-opacity-20 transition-transform group-hover:scale-110"
                style={{ color: accentColor }}
              >
                <Check size={16} />
              </span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
