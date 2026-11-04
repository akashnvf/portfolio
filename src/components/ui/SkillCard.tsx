import React from "react";
import { SkillCategory, SkillLevel } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  category: SkillCategory;
  className?: string;
}

const getBadgeStyles = (level: SkillLevel) => {
  switch (level) {
    case "Professional Experience":
      return {
        badge: "bg-[#064E3B]/40 text-[#34D399] border-[#059669]/30",
        dot: "bg-[#10B981]",
      };
    case "Hands-on Lab":
      return {
        badge: "bg-[#7C2D12]/40 text-[#FB923C] border-[#EA580C]/30",
        dot: "bg-[#FF6A00]",
      };
    case "Currently Learning":
      return {
        badge: "bg-[#1E3A8A]/40 text-[#60A5FA] border-[#2563EB]/30",
        dot: "bg-[#3B82F6]",
      };
  }
};

export const SkillCard: React.FC<SkillCardProps> = ({ category, className }) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] p-6 transition-all duration-300 hover:border-[#FF6A00]/40 hover:bg-[#1C1C22] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between",
        className
      )}
    >
      <div>
        <h3 className="text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#FF6A00] rounded-sm" />
          {category.title}
        </h3>
        <p className="mt-2 text-sm text-[#B8B8BE] leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {category.skills.map((skill) => {
          const style = getBadgeStyles(skill.level);
          return (
            <div
              key={skill.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111114] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] transition-colors group"
            >
              <span
                className={cn("w-2 h-2 rounded-full shrink-0", style.dot)}
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-medium text-[#F5F5F5]">
                {skill.name}
              </span>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded border",
                  style.badge
                )}
                title={skill.level}
              >
                {skill.level === "Professional Experience"
                  ? "Pro"
                  : skill.level === "Hands-on Lab"
                  ? "Lab"
                  : "Learning"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

