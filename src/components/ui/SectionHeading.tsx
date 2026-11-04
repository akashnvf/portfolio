import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-3 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#FF6A00]",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
        {title}{" "}
        {highlight && <span className="text-[#FF6A00]">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#B8B8BE] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

