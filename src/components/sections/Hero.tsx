import React from "react";
import Image from "next/image";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { StatCard } from "@/components/ui/StatCard";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden scroll-mt-24"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#17171B]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171B] border border-[rgba(255,255,255,0.1)] text-xs sm:text-sm font-medium text-[#FF6A00]">
              <Terminal size={14} className="text-[#FF6A00]" />
              <span>{profileData.eyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08]">
              {profileData.firstName}{" "}
              <span className="text-[#FF6A00] drop-shadow-[0_0_35px_rgba(255,106,0,0.4)]">
                {profileData.lastName}
              </span>
            </h1>

            <p className="text-lg sm:text-2xl font-semibold text-[#B8B8BE]">
              {profileData.role}
            </p>

            <p className="text-base sm:text-lg text-[#9E9EA6] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profileData.intro}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Hire Me
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={profileData.resumePdfUrl}
                download="akash-mondal-resume.pdf"
                icon={<Download size={18} />}
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#757580]">
                Find Me On:
              </span>
              <SocialLinks
                githubUrl={profileData.githubUrl}
                linkedinUrl={profileData.linkedinUrl}
                email={profileData.email}
              />
            </div>
          </div>

          {/* Right Column: Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-[4/5] max-w-full">
              {/* Orange circular glow and ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FF6A00]/20 to-transparent blur-2xl -z-10" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#FF6A00]/40 via-transparent to-[#FF6A00]/10 p-[1.5px] -z-10" />

              {/* Portrait container */}
              <div className="relative w-full h-full rounded-2xl bg-[#141418] border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-2xl flex items-center justify-center">
                <Image
                  src={profileData.avatarUrl}
                  alt={`Portrait of ${profileData.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Floating Status Pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#17171B]/90 backdrop-blur-md border border-[#FF6A00]/30 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-xs font-semibold text-[#F5F5F5]">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Part Statistics Panel */}
        <div className="mt-20 pt-10 border-t border-[rgba(255,255,255,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileData.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

