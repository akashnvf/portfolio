"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

const FOOTER_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-[rgba(255,255,255,0.08)] pt-16 pb-12 text-[#B8B8BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[rgba(255,255,255,0.06)]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FF6A00] flex items-center justify-center text-black font-black text-base shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                {profileData.monogram}
              </div>
              <div>
                <span className="font-bold text-lg text-[#F5F5F5]">
                  {profileData.name}
                </span>
                <p className="text-xs text-[#FF6A00] font-medium">
                  {profileData.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#9E9EA6] max-w-md leading-relaxed">
              Specialized in Systems Engineering, enterprise Unix/Linux operations, and cloud automation labs. Delivering robust, high-availability infrastructure environments.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FF6A00] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider mb-2">
              Connect
            </h4>
            <p className="text-xs text-[#9E9EA6]">
              Feel free to reach out for infrastructure engineering roles or technical collaboration.
            </p>
            <SocialLinks
              githubUrl={profileData.githubUrl}
              linkedinUrl={profileData.linkedinUrl}
              email={profileData.email}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8E98]">
          <p>
            © {currentYear} {profileData.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#FF6A00] transition-colors p-2 rounded-lg hover:bg-[#17171B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC078]"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

