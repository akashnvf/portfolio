import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "systems",
    title: "Systems & Operating Systems",
    description:
      "Proven foundation in enterprise server operating systems, core services, and administration.",
    skills: [
      { name: "Linux (RHEL / Ubuntu / CentOS)", level: "Professional Experience" },
      { name: "HP-UX Administration", level: "Professional Experience" },
      { name: "Unix / Solaris Operations", level: "Professional Experience" },
      { name: "Bash & Shell Scripting", level: "Professional Experience" },
      { name: "Storage & Volume Management (LVM)", level: "Professional Experience" },
      { name: "Kernel & System Tuning", level: "Professional Experience" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Platforms",
    description:
      "Core cloud architecture, networking, compute, and security implemented in practice labs.",
    skills: [
      { name: "Microsoft Azure (VNets, VMs, NSGs)", level: "Hands-on Lab" },
      { name: "Azure Blob Storage & RBAC", level: "Hands-on Lab" },
      { name: "AWS Core Services (VPC, EC2, S3)", level: "Hands-on Lab" },
      { name: "Cloud Security Groups & IAM", level: "Hands-on Lab" },
    ],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    description:
      "Modern containerization workflows, image optimization, and microservice deployment basics.",
    skills: [
      { name: "Docker Containerization", level: "Hands-on Lab" },
      { name: "Dockerfile & Image Optimization", level: "Hands-on Lab" },
      { name: "Docker Compose", level: "Hands-on Lab" },
      { name: "Kubernetes & AKS Concepts", level: "Currently Learning" },
    ],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    description:
      "Declarative provisioning and lifecycle management of repeatable cloud environments.",
    skills: [
      { name: "Terraform (HCL)", level: "Hands-on Lab" },
      { name: "AzureRM & AWS Providers", level: "Hands-on Lab" },
      { name: "Terraform State & Plan Verification", level: "Hands-on Lab" },
      { name: "Modular Infrastructure Layouts", level: "Currently Learning" },
    ],
  },
  {
    id: "automation",
    title: "Automation & Version Control",
    description:
      "Source control collaboration, operational scripts, and emerging CI/CD pipelines.",
    skills: [
      { name: "Git & GitHub Version Control", level: "Professional Experience" },
      { name: "PowerShell Scripting", level: "Professional Experience" },
      { name: "GitHub Actions Pipelines", level: "Currently Learning" },
      { name: "Automated Maintenance Tasks", level: "Professional Experience" },
    ],
  },
  {
    id: "operations",
    title: "Infrastructure Operations",
    description:
      "Mission-critical operational discipline, system reliability, and rapid incident response.",
    skills: [
      { name: "Incident & Performance Troubleshooting", level: "Professional Experience" },
      { name: "System Monitoring & Health Checks", level: "Professional Experience" },
      { name: "Backup, Restore & Disaster Recovery", level: "Professional Experience" },
      { name: "High Availability & Failover", level: "Professional Experience" },
      { name: "Change Coordination & Security Patching", level: "Professional Experience" },
    ],
  },
];

