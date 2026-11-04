"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectStatus } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

type FilterTab = "All" | ProjectStatus;

const TABS: FilterTab[] = ["All", "Completed", "In Progress", "Planned"];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((p) => p.status === activeTab);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#0B0B0D] scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Portfolio & Labs"
            title="Infrastructure & DevOps"
            highlight="Practice Labs"
            description="Documented hands-on projects highlighting cloud topology, Infrastructure as Code, containerization, and CI/CD automation."
            className="mb-0"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] self-start md:self-end">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC078]",
                  activeTab === tab
                    ? "bg-[#FF6A00] text-black shadow-md shadow-[#FF6A00]/20"
                    : "text-[#B8B8BE] hover:text-[#F5F5F5] hover:bg-[#202025]"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

