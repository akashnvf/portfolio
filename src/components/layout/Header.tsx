"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact Me", href: "#contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3.5 shadow-lg shadow-black/40"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <Link
              href="#home"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC078] rounded-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FF6A00] flex items-center justify-center text-black font-black text-base shadow-[0_0_15px_rgba(255,106,0,0.4)] group-hover:bg-[#FF8500] transition-colors">
                {profileData.monogram}
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-base text-[#F5F5F5] group-hover:text-[#FF8500] transition-colors">
                  {profileData.name}
                </span>
                <span className="text-[11px] text-[#B8B8BE] tracking-tight">
                  System Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#17171B]/70 border border-[rgba(255,255,255,0.08)] px-4 py-1.5 rounded-full backdrop-blur-md">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-[#B8B8BE] hover:text-[#FF6A00] hover:bg-[#202025]/60 rounded-full transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <Button
                href={profileData.resumePdfUrl}
                download="akash-mondal-resume.pdf"
                variant="primary"
                size="sm"
                icon={<Download size={15} />}
                className="hidden sm:inline-flex"
              >
                Download CV
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden w-10 h-10 rounded-lg bg-[#17171B] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#F5F5F5] hover:text-[#FF6A00] hover:border-[#FF6A00] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC078]"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        resumePdfUrl={profileData.resumePdfUrl}
        githubUrl={profileData.githubUrl}
        linkedinUrl={profileData.linkedinUrl}
        email={profileData.email}
      />
    </>
  );
};

