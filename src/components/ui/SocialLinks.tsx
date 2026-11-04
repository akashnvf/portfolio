import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  className?: string;
  iconSize?: number;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  githubUrl,
  linkedinUrl,
  email,
  className,
  iconSize = 18,
}) => {
  const links = [
    {
      name: "GitHub",
      href: githubUrl,
      icon: <GithubIcon size={iconSize} />,
      label: "View Akash Mondal's GitHub Profile",
      external: true,
    },
    {
      name: "LinkedIn",
      href: linkedinUrl,
      icon: <LinkedinIcon size={iconSize} />,
      label: "Connect with Akash Mondal on LinkedIn",
      external: true,
    },
    {
      name: "Email",
      href: `mailto:${email}`,
      icon: <Mail size={iconSize} />,
      label: `Send email to ${email}`,
      external: false,
    },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          aria-label={item.label}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="w-10 h-10 rounded-lg bg-[#17171B] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#B8B8BE] hover:text-[#FF6A00] hover:border-[#FF6A00] hover:bg-[#202025] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC078]"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
