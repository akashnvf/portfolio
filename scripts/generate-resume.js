const fs = require("fs");
const path = require("path");

const content = `BT
/F1 22 Tf
50 760 Td
(AKASH MONDAL) Tj
/F2 11 Tf
0 -22 Td
(System Engineer | IMS Engineer | DevOps Enthusiast) Tj
0 -16 Td
(Email: akash.nvf@gmail.com  |  Location: Gurugram, India) Tj
0 -14 Td
(LinkedIn: linkedin.com/in/akash-mondal-0b7b6b277  |  GitHub: github.com/akashnvf) Tj
0 -26 Td
/F1 13 Tf
(PROFESSIONAL SUMMARY) Tj
/F2 10 Tf
0 -15 Td
(System Engineer with 5+ years of experience across enterprise Unix/Linux server operations and telecom IMS) Tj
0 -13 Td
(infrastructure management. Served as IMS Engineer from Jan 2022 to Aug 2023, managing IP Multimedia Subsystem) Tj
0 -13 Td
(platforms, before transitioning into a System Engineer role. Over the past year, actively working on DevOps) Tj
0 -13 Td
(tooling - Docker, Terraform, CI/CD, Azure, AWS - with a strong ambition to join a dedicated DevOps team.) Tj
0 -23 Td
/F1 13 Tf
(CORE COMPETENCIES & TECHNICAL SKILLS) Tj
/F2 10 Tf
0 -15 Td
(Operating Systems: Red Hat Enterprise Linux (RHEL), HP-UX, Solaris/Unix, Ubuntu, CentOS) Tj
0 -13 Td
(Telecom: IMS Core, VoLTE, SIP Protocol, Telecom Network Management, Change & Incident Management) Tj
0 -13 Td
(Infrastructure: High Availability (HA), LVM Storage, Backup/Recovery, System Monitoring, Patching) Tj
0 -13 Td
(Cloud & DevOps (Active): Microsoft Azure (VNet, VMs, NSG, RBAC), AWS (VPC, EC2, S3)) Tj
0 -13 Td
(Containers & IaC: Docker, Multi-stage builds, Docker Compose, Terraform (AzureRM / AWS)) Tj
0 -13 Td
(Automation & Scripting: Bash Shell Scripting, PowerShell, Git, GitHub Actions CI/CD) Tj
0 -23 Td
/F1 13 Tf
(PROFESSIONAL EXPERIENCE) Tj
/F2 10 Tf
0 -15 Td
/F1 11 Tf
(System Engineer  |  Echelon Edge Private Limited  |  Gurugram, India          Aug 2023 - Present) Tj
/F2 10 Tf
0 -13 Td
(- Operate and maintain enterprise Linux, HP-UX, and Unix server environments for mission-critical platforms.) Tj
0 -13 Td
(- Diagnose and resolve complex server incidents, filesystem degradations, and connectivity issues within SLA.) Tj
0 -13 Td
(- Manage storage allocation, LVM configurations, and automated backup/restore verification cycles.) Tj
0 -13 Td
(- Coordinate OS patching, firmware updates, kernel upgrades, and DR testing across production nodes.) Tj
0 -13 Td
(- Actively working on DevOps tooling (Docker, Terraform, CI/CD, Azure/AWS) for 1+ year with goal to) Tj
0 -13 Td
(  join a dedicated DevOps engineering team.) Tj
0 -19 Td
/F1 11 Tf
(IMS Engineer  |  Echelon Edge Private Limited  |  Gurugram, India             Jan 2022 - Aug 2023) Tj
/F2 10 Tf
0 -13 Td
(- Managed IP Multimedia Subsystem (IMS) infrastructure for telecom-grade voice and data services.) Tj
0 -13 Td
(- Monitored IMS core network elements, performed fault diagnosis, coordinated resolutions to minimise) Tj
0 -13 Td
(  service disruption and meet SLA commitments.) Tj
0 -13 Td
(- Executed configuration changes, software upgrades, and routine maintenance on IMS nodes.) Tj
0 -13 Td
(- Developed operational documentation, runbooks, and incident reports for IMS platform events.) Tj
0 -19 Td
/F1 11 Tf
(Associate System Engineer  |  IT Infrastructure Support & Services  |  India   2019 - Dec 2021) Tj
/F2 10 Tf
0 -13 Td
(- Monitored server health, disk thresholds, and application logs using enterprise monitoring tools.) Tj
0 -13 Td
(- Authored Bash maintenance scripts to automate routine housekeeping and log rotations.) Tj
0 -13 Td
(- Supported incident response and coordinated maintenance during scheduled release windows.) Tj
0 -23 Td
/F1 13 Tf
(EDUCATION) Tj
/F2 10 Tf
0 -15 Td
(Bachelor of Technology (B.Tech)) Tj
0 -23 Td
/F1 13 Tf
(DEVOPS LAB PROJECTS) Tj
/F2 10 Tf
0 -15 Td
(- Azure Virtual Network & Secure Linux VM Lab (Terraform + Azure CLI + NSG + RBAC)) Tj
0 -13 Td
(- Terraform Multi-Resource Cloud Provisioning (Modular HCL, AzureRM Provider, State Management)) Tj
0 -13 Td
(- Containerized Nginx & Micro-Service Environment (Docker + Alpine + Docker Compose)) Tj
0 -13 Td
(- AWS VPC Architecture & Compute Isolation (Multi-AZ, EC2, NAT Gateway, IAM)) Tj
0 -13 Td
(- GitHub Actions Automated CI/CD Pipeline (Build, Test, Lint, Docker Hub push)) Tj
0 -23 Td
/F1 13 Tf
(CAREER OBJECTIVE) Tj
/F2 10 Tf
0 -15 Td
(To leverage 5+ years of enterprise systems and telecom infrastructure experience alongside 1+ year of) Tj
0 -13 Td
(active DevOps practice to transition into a full-time DevOps Engineer role, contributing to cloud-native) Tj
0 -13 Td
(automation, CI/CD pipeline development, and infrastructure-as-code initiatives.) Tj
ET`;

const streamLength = Buffer.byteLength(content, "utf8");

let pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Length ${streamLength} >>
stream
${content}
endstream
endobj
`;

const xrefOffset = Buffer.byteLength(pdf, "binary");

pdf += `xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000325 00000 n 
0000000401 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
${xrefOffset}
%%EOF
`;

const outDir = path.join(__dirname, "../public/files");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, "akash-mondal-resume.pdf"), pdf, "binary");
console.log("PDF created successfully at public/files/akash-mondal-resume.pdf");
