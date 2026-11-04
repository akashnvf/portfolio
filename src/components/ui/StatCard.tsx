import React from "react";
import { cn } from "@/lib/utils";
import { StatItem } from "@/types/portfolio";

interface StatCardProps {
  stat: StatItem;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, className }) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] p-6 transition-all duration-300 hover:border-[#FF6A00]/50 hover:bg-[#202025] hover:-translate-y-1 shadow-lg",
        className
      )}
    >
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-[#FF6A00]/10 rounded-full blur-xl group-hover:bg-[#FF6A00]/25 transition-all duration-300 pointer-events-none" />
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF6A00] tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
        {stat.value}
      </div>
      <div className="mt-2 text-base sm:text-lg font-bold text-[#F5F5F5]">
        {stat.label}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-[#B8B8BE] leading-relaxed">
        {stat.description}
      </div>
    </div>
  );
};

