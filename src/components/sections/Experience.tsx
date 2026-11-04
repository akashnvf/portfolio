import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#111114] scroll-mt-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional Systems"
          highlight="Experience"
          description="A verifiable history of enterprise server operations, systems maintenance, and infrastructure support."
        />

        <div className="relative border-l-2 border-[rgba(255,255,255,0.1)] ml-4 sm:ml-8 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.current
                    ? "bg-[#FF6A00] border-[#0B0B0D] shadow-[0_0_12px_#FF6A00]"
                    : "bg-[#17171B] border-[#757580] group-hover:border-[#FF6A00]"
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] hover:border-[#FF6A00]/40 transition-all duration-300 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-[rgba(255,255,255,0.06)]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-[#FF8500] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-[#B8B8BE]">
                      <span className="inline-flex items-center gap-1.5 text-[#F5F5F5] font-medium">
                        <Briefcase size={15} className="text-[#FF6A00]" />
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-[#8E8E98]">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="self-start sm:self-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                        exp.current
                          ? "bg-[#7C2D12]/50 text-[#FB923C] border-[#EA580C]/40"
                          : "bg-[#202025] text-[#B8B8BE] border-[rgba(255,255,255,0.08)]"
                      }`}
                    >
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#B8B8BE] leading-relaxed">
                      <CheckCircle size={17} className="text-[#FF6A00] shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded bg-[#111114] text-[#E0E0E6] border border-[rgba(255,255,255,0.06)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

