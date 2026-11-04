# Akash Mondal — Professional Portfolio

> **Role:** System Engineer | DevOps Enthusiast  
> **Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, Zod, Lucide Icons  
> **Visual Direction:** Modern dark/charcoal theme with vibrant orange accents (`#FF6A00`)

---

## 🌟 Overview

A responsive, accessible personal portfolio website built with the Next.js App Router. It highlights Akash Mondal's 5+ years of enterprise Systems Engineering experience alongside structured, verifiable DevOps & cloud learning labs (Azure, AWS, Terraform, Docker, CI/CD).

### Key Features

- **Dark & Orange Design System:** Built on customized design tokens (`--color-bg`, `--color-surface`, `--color-accent: #FF6A00`).
- **Hero Section:** Two-column desktop layout, custom portrait with backlight glow ring, active CTA buttons (`Hire Me`, `Download CV`), and 3-part statistics panel.
- **About Me Section:** Clear narrative separating verified enterprise infrastructure experience from cloud learning labs.
- **Skills Matrix:** Categorized technical competencies with honest proficiency level tags (`Professional Experience`, `Hands-on Lab`, `Currently Learning`).
- **Experience Timeline:** Detailed chronological history of enterprise systems support, SLA-driven incident response, and Unix/Linux administration.
- **Portfolio / Labs:** Responsive project cards with filter tabs, architecture diagram thumbnails, tech stack chips, and source links.
- **Interactive Contact Form:** Built with client and server-side Zod validation (`/api/contact`), honeypot spam prevention, accessible inputs, and fallback email links.
- **Downloadable CV:** Serves `/files/akash-mondal-resume.pdf` with download triggers.
- **SEO & Metadata:** Includes open-graph tags, Twitter cards, sitemap (`/sitemap.xml`), robots rules (`/robots.txt`), and custom 404 page.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (Node.js 26 LTS tested)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/akashnvf/akash-portfolio.git
cd akash-portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks & Build

```bash
# Type check
npx tsc --noEmit

# Lint check
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```text
├── public/
│   ├── files/
│   │   └── akash-mondal-resume.pdf     # Downloadable CV
│   └── images/
│       ├── akash-profile.svg           # Portrait vector
│       ├── project-azure-lab.svg       # Architecture diagram
│       ├── project-terraform-lab.svg   # IaC diagram
│       ├── project-docker-lab.svg      # Containerization diagram
│       ├── project-aws-lab.svg         # AWS VPC diagram
│       └── project-cicd-lab.svg        # CI/CD pipeline diagram
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts        # Server-side contact route handler
│   │   ├── globals.css                 # Theme tokens & Tailwind CSS
│   │   ├── layout.tsx                  # Root layout & SEO metadata
│   │   ├── page.tsx                    # Main portfolio page
│   │   ├── not-found.tsx               # 404 handler
│   │   ├── robots.ts                   # Search crawler directives
│   │   └── sitemap.ts                  # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/                     # Header, MobileNav, Footer
│   │   ├── sections/                   # Hero, About, Skills, Experience, Projects, Contact
│   │   └── ui/                         # Button, SectionHeading, SocialLinks, StatCard, etc.
│   ├── data/                           # Typed content data (profile, skills, experience, projects)
│   ├── lib/                            # Zod schemas & utility functions
│   └── types/                          # TypeScript interfaces
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🔒 Environment Variables

Copy `.env.example` to `.env.local`:

```dotenv
# Email Provider (Optional; server-side only)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=akash.nvf@gmail.com
CONTACT_FROM_EMAIL=Portfolio Website <noreply@your-domain.com>

# Canonical Public URL
NEXT_PUBLIC_SITE_URL=https://akashmondal.dev
```

---

## 📄 License

MIT License. Designed and engineered for Akash Mondal.
