import React from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B0B0D] scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Skills & Stack"
            title="Technical Competencies"
            highlight="& Toolkit"
            description="Verified enterprise systems administration tools, combined with practical cloud and DevOps labs."
            className="mb-0"
          />

          {/* Badge Legend */}
          <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] self-start md:self-end">
            <span className="text-xs text-[#8E8E98] mr-1">Proficiency Level:</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#064E3B]/50 text-[#34D399] border border-[#059669]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Pro Experience
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#7C2D12]/50 text-[#FB923C] border border-[#EA580C]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
              Hands-on Lab
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#1E3A8A]/50 text-[#93C5FD] border border-[#2563EB]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              Currently Learning
            </span>
          </div>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

