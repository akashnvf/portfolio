export type SkillLevel = "Professional Experience" | "Hands-on Lab" | "Currently Learning";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  bullets: string[];
  technologies: string[];
}

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  image?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlights?: string[];
  details?: {
    objective: string;
    architectureDescription: string;
    keyLearnings: string[];
  };
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  monogram: string;
  role: string;
  eyebrow: string;
  intro: string;
  aboutParagraphs: string[];
  aboutChips: string[];
  avatarUrl: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePdfUrl: string;
  stats: StatItem[];
}

