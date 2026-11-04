import React from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle2, Clock, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project, ProjectStatus } from "@/types/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const getStatusBadge = (status: ProjectStatus) => {
  switch (status) {
    case "Completed":
      return {
        label: "Completed",
        icon: <CheckCircle2 size={12} className="text-[#10B981]" />,
        style: "bg-[#064E3B]/80 text-[#34D399] border-[#059669]/40",
      };
    case "In Progress":
      return {
        label: "In Progress",
        icon: <Clock size={12} className="text-[#FF8500]" />,
        style: "bg-[#7C2D12]/80 text-[#FB923C] border-[#EA580C]/40",
      };
    case "Planned":
      return {
        label: "Planned Lab",
        icon: <Calendar size={12} className="text-[#60A5FA]" />,
        style: "bg-[#1E3A8A]/80 text-[#93C5FD] border-[#2563EB]/40",
      };
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const statusInfo = getStatusBadge(project.status);

  return (
    <article
      className={cn(
        "group rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] overflow-hidden flex flex-col transition-all duration-300 hover:border-[#FF6A00]/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1",
        className
      )}
    >
      {/* Project Thumbnail Image */}
      {project.image && (
        <div className="relative w-full aspect-video bg-[#111114] overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
          <Image
            src={project.image}
            alt={`${project.title} architecture diagram`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 right-3 z-10">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md border shadow-md",
                statusInfo.style
              )}
            >
              {statusInfo.icon}
              <span>{statusInfo.label}</span>
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#FF8500] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-[#B8B8BE] leading-relaxed">
            {project.summary}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-xs text-[#9E9EA6]">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#FF6A00] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#111114] text-[#E0E0E6] border border-[rgba(255,255,255,0.06)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.repositoryUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.repositoryUrl}
                external
                icon={<GithubIcon size={14} />}
                className="flex-1"
              >
                Source Code
              </Button>
            )}
            {project.demoUrl ? (
              <Button
                variant="primary"
                size="sm"
                href={project.demoUrl}
                external
                icon={<ExternalLink size={14} />}
                className="flex-1"
              >
                Live Demo
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                href="#contact"
                icon={<ExternalLink size={14} />}
                className="flex-1 text-xs"
              >
                Inquire Lab
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
