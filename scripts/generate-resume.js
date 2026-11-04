const fs = require("fs");
const path = require("path");

const content = `BT
/F1 22 Tf
50 740 Td
(AKASH MONDAL) Tj
/F2 11 Tf
0 -22 Td
(System Engineer | DevOps Enthusiast) Tj
0 -18 Td
(Email: akash.nvf@gmail.com  |  Location: India  |  LinkedIn: linkedin.com/in/akash-mondal) Tj
0 -28 Td
/F1 14 Tf
(PROFESSIONAL SUMMARY) Tj
/F2 10 Tf
0 -16 Td
(Experienced System Engineer with 5+ years supporting mission-critical Unix/Linux environments.) Tj
0 -14 Td
(Strong expertise in enterprise infrastructure, proactive monitoring, backup/recovery, and incident) Tj
0 -14 Td
(troubleshooting. Actively building hands-on competencies in Azure, AWS, Docker, and Terraform.) Tj
0 -24 Td
/F1 14 Tf
(CORE COMPETENCIES & TECHNICAL SKILLS) Tj
/F2 10 Tf
0 -16 Td
(Operating Systems: Red Hat Enterprise Linux (RHEL), HP-UX, Solaris/Unix, Ubuntu, CentOS) Tj
0 -14 Td
(Infrastructure: High Availability (HA), LVM Storage, Backup/Recovery, Monitoring, Patching) Tj
0 -14 Td
(Cloud & DevOps (Labs): Microsoft Azure (VNet, VMs, NSG, RBAC), AWS (VPC, EC2, S3)) Tj
0 -14 Td
(Containers & IaC: Docker, Multi-stage builds, Docker Compose, Terraform (AzureRM)) Tj
0 -14 Td
(Automation & Scripting: Bash Shell Scripting, PowerShell, Git, GitHub Actions) Tj
0 -24 Td
/F1 14 Tf
(PROFESSIONAL EXPERIENCE) Tj
/F2 10 Tf
0 -16 Td
/F1 11 Tf
(System Engineer  |  Enterprise Infrastructure Services                     2021 - Present) Tj
/F2 10 Tf
0 -14 Td
(- Operate enterprise Unix/Linux environments ensuring 99.9%+ availability for business workloads.) Tj
0 -14 Td
(- Lead troubleshooting for OS degradation, filesystem alerts, and connectivity issues.) Tj
0 -14 Td
(- Perform scheduled OS kernel patching, storage configuration (LVM), and backup verification.) Tj
0 -14 Td
(- Coordinate disaster recovery testing and ensure adherence to security standards.) Tj
0 -20 Td
/F1 11 Tf
(Associate System Engineer  |  IT Infrastructure Support                     2019 - 2021) Tj
/F2 10 Tf
0 -14 Td
(- Monitored server health, disk thresholds, and application logs using enterprise monitoring tools.) Tj
0 -14 Td
(- Authored Bash maintenance scripts to automate routine housekeeping and log rotations.) Tj
0 -14 Td
(- Supported incident response and coordinated maintenance during scheduled release windows.) Tj
0 -24 Td
/F1 14 Tf
(EDUCATION & LAB PROJECTS) Tj
/F2 10 Tf
0 -16 Td
(- Bachelor of Technology (B.Tech)) Tj
0 -14 Td
(- Azure Virtual Network & Secure Linux VM Lab (Terraform + Azure CLI)) Tj
0 -14 Td
(- Containerized Nginx & Micro-Service Environment (Docker + Alpine)) Tj
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

