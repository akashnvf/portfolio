import { ExperienceItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "system-engineer-lead",
    role: "System Engineer",
    company: "Enterprise Infrastructure & Telecom Services",
    location: "Gurugram / India",
    period: "2021 — Present",
    current: true,
    bullets: [
      "Operate and maintain enterprise Linux, HP-UX, and Unix server environments hosting mission-critical business platforms.",
      "Diagnose and resolve complex server incidents, filesystem degradations, and connectivity issues within strict SLA targets.",
      "Execute scheduled OS patching, firmware updates, kernel upgrades, and change coordination across distributed production nodes.",
      "Manage storage allocation, logical volume configurations (LVM), and automated backup/restore verification cycles.",
      "Collaborate with database and application teams to ensure high availability, redundancy, and disaster recovery readiness.",
    ],
    technologies: ["RHEL Linux", "HP-UX", "Bash", "LVM", "System Monitoring", "HA Clustering", "DR Planning"],
  },
  {
    id: "system-engineer-associate",
    role: "Associate System Engineer",
    company: "IT Infrastructure Support & Services",
    location: "India",
    period: "2019 — 2021",
    current: false,
    bullets: [
      "Monitored server health, system logs, CPU/memory thresholds, and network connectivity using enterprise monitoring tools.",
      "Troubleshot hardware faults, OS level services, and user access management tasks across multi-vendor Unix/Linux servers.",
      "Authored operational Bash and shell utility scripts to automate repetitive system housekeeping and log-rotation routines.",
      "Coordinated with cross-functional support teams during critical system maintenance windows and disaster drills.",
    ],
    technologies: ["Unix/Linux", "Shell Scripting", "System Administration", "Log Analysis", "Incident Response"],
  },
];

