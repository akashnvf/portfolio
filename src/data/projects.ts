import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "azure-infrastructure-lab",
    slug: "azure-infrastructure-lab",
    title: "Azure Virtual Network & Secure VM Lab",
    summary:
      "Designed and deployed a segmented Azure Virtual Network featuring public/private subnets, custom Network Security Groups (NSGs), and Linux virtual machines with SSH key authentication.",
    status: "Completed",
    stack: ["Microsoft Azure", "Azure CLI", "VNet", "Linux VM", "NSG", "RBAC"],
    image: "/images/project-azure-lab.svg",
    repositoryUrl: "https://github.com/akashnvf",
    featured: true,
    highlights: [
      "Configured custom VNet with isolated private subnet and perimeter security rules",
      "Enforced least-privilege role-based access control (RBAC) and network security rules",
      "Documented complete deployment validation checklist and teardown script to prevent idle costs",
    ],
    details: {
      objective: "Build a secure, segmented cloud networking topology on Microsoft Azure for enterprise workloads.",
      architectureDescription:
        "A dual-subnet VNet inside an isolated Resource Group. Inbound traffic is filtered strictly via NSG rules, exposing only port 22 through a dedicated bastion/jump host.",
      keyLearnings: [
        "Network Security Group precedence and effective security rules",
        "Cost-aware lifecycle management via automated resource destruction",
      ],
    },
  },
  {
    id: "terraform-iac-lab",
    slug: "terraform-iac-lab",
    title: "Terraform Multi-Resource Cloud Provisioning",
    summary:
      "Engineered reusable HashiCorp Terraform modules to automatically provision cloud resource groups, storage accounts, network components, and virtual machines in a declarative workflow.",
    status: "Completed",
    stack: ["Terraform", "HCL", "AzureRM Provider", "Git", "IaC"],
    image: "/images/project-terraform-lab.svg",
    repositoryUrl: "https://github.com/akashnvf",
    featured: true,
    highlights: [
      "Authored modular HCL code with parameterized variable definitions and output exports",
      "Practiced state file management, plan diff verification, and idempotency testing",
      "Implemented clean destroy safeguards and environment separation variables",
    ],
    details: {
      objective: "Eliminate manual cloud portal configuration through repeatable Infrastructure as Code pipelines.",
      architectureDescription:
        "Modular Terraform structure dividing compute, networking, and storage into clean reusable modules with strict variable type constraints.",
      keyLearnings: [
        "Handling terraform state and locking safely",
        "Writing maintainable modules that adhere to DRY principles",
      ],
    },
  },
  {
    id: "docker-web-server-lab",
    slug: "docker-web-server-lab",
    title: "Containerized Nginx & Micro-Service Environment",
    summary:
      "Built and optimized lightweight container images using Alpine Linux and multi-stage Dockerfiles. Configured reverse proxying, volume persistence, and custom container networks.",
    status: "Completed",
    stack: ["Docker", "Docker Compose", "Nginx", "Alpine Linux", "Bash"],
    image: "/images/project-docker-lab.svg",
    repositoryUrl: "https://github.com/akashnvf",
    featured: true,
    highlights: [
      "Reduced final image footprint by over 60% using multi-stage Alpine build patterns",
      "Configured custom bridge networking and persistent host-volume mounts for web assets",
      "Created Docker Compose definitions for coordinated multi-service local testing",
    ],
    details: {
      objective: "Containerize web application workloads with minimal attack surface and fast startup times.",
      architectureDescription:
        "Multi-stage Dockerfile compiling static assets in build stage and packaging into an unprivileged Alpine Nginx runtime container.",
      keyLearnings: [
        "Layer caching optimization in Docker build contexts",
        "Managing non-root user privileges inside production containers",
      ],
    },
  },
  {
    id: "aws-networking-lab",
    slug: "aws-networking-lab",
    title: "AWS VPC Architecture & Compute Isolation",
    summary:
      "Deploying a highly-available AWS Virtual Private Cloud spanning multiple availability zones with internet gateways, NAT gateways, route tables, and private compute instances.",
    status: "In Progress",
    stack: ["AWS", "VPC", "EC2", "NAT Gateway", "Route Tables", "IAM"],
    image: "/images/project-aws-lab.svg",
    repositoryUrl: "https://github.com/akashnvf",
    featured: false,
    highlights: [
      "Configuring dual-AZ public and private subnet topologies",
      "Validating outbound internet access from private EC2 instances through managed NAT",
      "Applying AWS IAM least-privilege instance profiles",
    ],
    details: {
      objective: "Master AWS enterprise cloud networking best practices and fault isolation.",
      architectureDescription:
        "VPC with 2 public subnets and 2 private subnets across two Availability Zones, with dedicated route table associations.",
      keyLearnings: [
        "Routing table propagation and CIDR block subnet planning",
        "Security group stateful inspection vs. network ACL stateless filtering",
      ],
    },
  },
  {
    id: "cicd-pipeline-lab",
    slug: "cicd-pipeline-lab",
    title: "GitHub Actions Automated CI/CD Pipeline",
    summary:
      "Constructing automated continuous integration workflows to execute code linting, security scans, unit tests, and Docker container build/push triggers on code merge.",
    status: "Planned",
    stack: ["GitHub Actions", "CI/CD", "Docker Hub", "YAML", "Bash"],
    image: "/images/project-cicd-lab.svg",
    repositoryUrl: "https://github.com/akashnvf",
    featured: false,
    highlights: [
      "Automated lint and build triggers on pull requests to ensure trunk stability",
      "Secure handling of registry tokens and deployment credentials via GitHub Secrets",
      "Release artifact tagging and automated changelog generation",
    ],
    details: {
      objective: "Standardize automated testing and deployment gates for web and infrastructure repos.",
      architectureDescription:
        "GitHub Actions workflow pipeline with parallel lint/test jobs leading to conditional container builds.",
      keyLearnings: [
        "Workflow triggers and matrix builds",
        "Zero-trust credential injection with OIDC",
      ],
    },
  },
];

