"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  resumePdfUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  resumePdfUrl,
  githubUrl,
  linkedinUrl,
  email,
}) => {
  // Close menu on Escape key press and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0B0B0D]/95 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(255,255,255,0.08)]">
        <Link
          href="#home"
          onClick={onClose}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#FF6A00] flex items-center justify-center text-black font-black text-base shadow-[0_0_15px_rgba(255,106,0,0.4)]">
            AM
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-[#F5F5F5]">Akash Mondal</span>
            <span className="text-xs text-[#FF6A00]">System Engineer</span>
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-10 h-10 rounded-lg bg-[#17171B] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#F5F5F5] hover:text-[#FF6A00] hover:border-[#FF6A00] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC078]"
        >
          <X size={20} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-xl font-semibold text-[#F5F5F5] hover:text-[#FF6A00] py-2 transition-colors border-b border-[rgba(255,255,255,0.04)]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action & Socials */}
        <div className="pt-8 space-y-6">
          <Button
            href={resumePdfUrl}
            download="akash-mondal-resume.pdf"
            variant="primary"
            size="lg"
            icon={<Download size={18} />}
            className="w-full"
            onClick={onClose}
          >
            Download CV
          </Button>

          <div className="flex items-center justify-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akash Mondal on GitHub"
              className="w-11 h-11 rounded-lg bg-[#17171B] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B8B8BE] hover:text-[#FF6A00]"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akash Mondal on LinkedIn"
              className="w-11 h-11 rounded-lg bg-[#17171B] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B8B8BE] hover:text-[#FF6A00]"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label={`Send email to ${email}`}
              className="w-11 h-11 rounded-lg bg-[#17171B] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B8B8BE] hover:text-[#FF6A00]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
