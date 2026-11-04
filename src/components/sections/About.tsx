import React from "react";
import { Server, ShieldCheck, Cloud, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#111114] scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Bridging Enterprise Infrastructure"
          highlight="& Modern DevOps"
          description="A dedicated System Engineer with a proven track record of maintaining high-availability Unix/Linux environments and engineering automated cloud solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Chips */}
          <div className="lg:col-span-7 space-y-6 text-[#B8B8BE] text-base sm:text-lg leading-relaxed">
            {profileData.aboutParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            {/* Core Capability Chips */}
            <div className="pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] mb-3">
                Core Domains of Competence:
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.aboutChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-[#17171B] text-[#F5F5F5] border border-[rgba(255,255,255,0.08)] hover:border-[#FF6A00]/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mr-2" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                size="md"
                href="#experience"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                View My Experience
              </Button>
            </div>
          </div>

          {/* Right Column: Key Pillars / Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] hover:border-[#FF6A00]/40 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[#FF6A00]/10 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] mb-4 group-hover:scale-110 transition-transform">
                <Server size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5]">
                Enterprise Systems Administration
              </h3>
              <p className="mt-2 text-sm text-[#9E9EA6] leading-relaxed">
                Deep expertise in Linux (RHEL, Ubuntu, CentOS), HP-UX, and Unix server administration, storage allocation (LVM), and kernel configurations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] hover:border-[#FF6A00]/40 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[#FF6A00]/10 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5]">
                High Availability &amp; Reliability
              </h3>
              <p className="mt-2 text-sm text-[#9E9EA6] leading-relaxed">
                Ensuring continuous service availability, rapid emergency triage, automated log monitoring, and disaster recovery replication.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] hover:border-[#FF6A00]/40 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[#FF6A00]/10 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00] mb-4 group-hover:scale-110 transition-transform">
                <Cloud size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5]">
                DevOps &amp; Cloud Continuous Learning
              </h3>
              <p className="mt-2 text-sm text-[#9E9EA6] leading-relaxed">
                Hands-on practice designing scalable Azure/AWS network topologies, containerizing services via Docker, and codifying infrastructure with Terraform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

