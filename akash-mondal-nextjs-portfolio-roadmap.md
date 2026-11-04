# Akash Mondal — Next.js Portfolio Website

> **Project type:** Personal portfolio / professional profile  
> **Framework:** Next.js (App Router) + React + TypeScript  
> **Styling:** Tailwind CSS + project-level CSS design tokens  
> **Primary goal:** Turn the approved dark, orange-accented portfolio concept into a fast, responsive, accessible, deployable website that presents Akash's System Engineering experience and DevOps learning journey accurately.

---

## 1. Project brief

Build a polished one-page professional portfolio based on the supplied visual reference. The first screen should closely follow the reference composition: a black/charcoal background, orange accent, compact header, large personal introduction on the left, profile portrait on the right, strong calls to action, and a three-part statistics panel.

The rest of the page should extend the same visual language into About, Skills, Experience, Projects, and Contact sections. The site must work on desktop, tablet, and mobile—not just resemble the desktop mock-up.

### 1.1 Primary outcomes

1. Give recruiters and hiring managers a quick understanding of Akash's professional background.
2. Show credible Systems Engineering experience and relevant infrastructure/operations knowledge.
3. Present current DevOps and cloud learning as hands-on labs or learning projects, not as production experience unless that is verified.
4. Make the CV, GitHub, LinkedIn, and contact route easy to find.
5. Provide a clean foundation that can be extended with project detail pages, certifications, blog posts, or a technical notes section later.

### 1.2 Audience

- Recruiters and technical hiring managers.
- Infrastructure, cloud, and DevOps team members.
- Professional contacts who receive the portfolio link.

### 1.3 Success criteria

- The home page visually matches the approved reference at common desktop widths.
- Every navigation item and CTA has a working destination/action.
- All sections remain readable and usable on a 360px-wide mobile viewport.
- CV download works and serves the latest approved PDF.
- Contact form validates input and gives clear success/error feedback.
- No unverified experience, certifications, client names, project results, or performance metrics are published.
- Production build, lint, type checks, and core browser tests pass.

---

## 2. Product scope and decisions

### 2.1 MVP scope

The first release is a **single-page portfolio** at `/` with these sections:

1. Home / Hero
2. About Me
3. Skills
4. Experience
5. Portfolio / Projects
6. Contact Me
7. Footer

Navigation links scroll to section IDs. A small number of supporting routes can be included without changing the single-page experience:

- `/projects/[slug]` — optional project detail pages; build only after the MVP is stable.
- `/privacy` — optional privacy notice if the contact form or analytics requires one.
- `/not-found` is handled through the normal Next.js not-found convention rather than a custom public route.

### 2.2 Not included in the first release

- User accounts, authentication, or an admin dashboard.
- A database or CMS.
- A comments system.
- A blog engine (can be added later).
- Paid third-party integrations unless separately approved.
- Fabricated client testimonials, client logos, project outcomes, or certification badges.

### 2.3 Recommended implementation choices

| Area | Decision |
|---|---|
| Framework | Latest stable Next.js release at project setup; use App Router |
| Language | TypeScript, strict mode |
| UI | React Server Components by default; Client Components only for interactive elements |
| CSS | Tailwind CSS for layout/utilities; CSS variables for theme tokens and custom effects |
| Icons | `lucide-react` for consistent, accessible icon components |
| Images | Next.js `Image` component for the profile image and project thumbnails |
| Fonts | `next/font` with a clean sans-serif family such as Inter or Geist Sans |
| Form validation | Zod (and React Hook Form only if the form grows more complex) |
| Contact delivery | Next.js Route Handler + an email provider such as Resend; keep provider swappable |
| Hosting | Vercel initially; use a custom domain when available |
| Source control | Git + GitHub |
| Package manager | npm for this project unless the repository already standardizes on another manager |

**Version policy:** Do not copy old pinned versions from tutorials. At project setup, use the current stable `create-next-app` defaults, commit the lockfile, and avoid canary/experimental packages unless a feature specifically requires them. The current Next.js installation guide lists Node.js 20.9 as the minimum and documents TypeScript, Tailwind CSS, ESLint, App Router, and Turbopack in the default setup. See [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation).

---

## 3. Reference design and visual direction

### 3.1 Overall visual concept

- **Theme:** Premium dark portfolio with a technical, modern feel.
- **Mood:** Confident, minimal, professional, approachable.
- **Primary accent:** Bright orange / amber.
- **Background:** Almost-black with subtle charcoal geometric shapes and gradients.
- **Composition:** Spacious two-column hero on desktop; stacked layout on mobile.
- **Visual priority:** Name and role first, profile portrait second, then calls to action and proof points.

### 3.2 Design tokens

Use CSS custom properties in `src/app/globals.css`. Values below are starting points; tune them against the reference image and contrast checks.

| Token | Suggested value | Usage |
|---|---|---|
| `--color-bg` | `#0B0B0D` | Main page background |
| `--color-bg-soft` | `#111114` | Alternate section background |
| `--color-surface` | `#17171B` | Cards and stats panel |
| `--color-surface-raised` | `#202025` | Hovered/raised cards |
| `--color-accent` | `#FF6A00` | Orange headings, icons, active states |
| `--color-accent-hover` | `#FF8500` | Hover/focus accent |
| `--color-text` | `#F5F5F5` | Main text |
| `--color-text-muted` | `#B8B8BE` | Paragraphs and supporting text |
| `--color-border` | `rgba(255,255,255,0.12)` | Subtle borders |
| `--color-focus` | `#FFC078` | Visible keyboard focus ring |

Design rules:

- Use orange for emphasis, not for every element.
- Keep body text comfortably readable; muted text must still pass contrast checks.
- Use restrained shadows and orange glow effects around the hero portrait only.
- Prefer 8–16px card radii and consistent spacing values.
- Avoid unnecessary gradients, glass effects, or decorative animation that reduce readability.
- Use a consistent content width of approximately 1200–1280px, centered with responsive side padding.

### 3.3 Typography

- Use one primary sans-serif family, with a small set of weights (regular, medium, semibold, bold).
- Desktop hero name: large, bold, approximately 64–80px depending on viewport.
- Hero role: approximately 26–34px on desktop.
- Section headings: approximately 36–48px on desktop.
- Body copy: 16–18px with line-height around 1.6.
- Mobile headings must scale down without clipping or awkward wrapping.
- Use `next/font` rather than a blocking external font stylesheet.

### 3.4 Shared layout rules

- Header content and sections align to the same centered container.
- Use generous vertical section spacing (roughly 80–120px desktop; 56–80px mobile).
- Give anchor sections a `scroll-margin-top` so the sticky header does not cover headings.
- Keep button heights, border radii, and icon alignment consistent.
- Use a clear hover state and a visible keyboard focus state for every interactive element.

---

## 4. Page structure and detailed UI/UX requirements

## 4.1 Header / navigation

**Desktop layout**

- Left: `AM` monogram logo, followed by `Akash Mondal` wordmark.
- Center: Home, About Me, Skills, Experience, Portfolio, Contact Me.
- Right: orange `Download CV` button with download icon.
- Header remains visible while scrolling (sticky or fixed, with a subtle dark translucent background after scroll).

**Mobile layout**

- Show the AM monogram / short brand text on the left.
- Show a menu button on the right.
- Open a keyboard-accessible mobile navigation panel or drawer.
- Close the menu after a navigation link is selected and after Escape is pressed.
- Prevent the menu from covering the page without a usable close control.

**Functional rules**

- Each navigation link scrolls to its matching section ID.
- Active section styling may be implemented with Intersection Observer; do not make it a release blocker if the basic anchor navigation is reliable.
- `Download CV` downloads `/files/akash-mondal-resume.pdf` (or opens it in a new tab if the browser handles PDFs that way).
- Do not show social icons or menu items that have no real destination.

## 4.2 Hero section

**Desktop composition**

- Two-column grid, approximately 55% text / 45% image.
- Left content vertically centered within the hero.
- Right profile portrait is large, cropped cleanly, and layered over an orange circular ring/glow.
- Use dark angular background shapes sparingly near the outer edges, matching the reference.

**Copy baseline**

- Eyebrow: `Hi! I am`
- Name: `Akash Mondal` (Akash in off-white; Mondal in orange).
- Role: `System Engineer | DevOps Enthusiast`.
- Intro: `I work with systems and infrastructure, and I am building my skills in cloud platforms, automation, and DevOps practices to create reliable, scalable environments.`

This copy is a starting point. Update it after reviewing the final CV. Do not claim to be a production DevOps Engineer unless the work history supports that title.

**Hero actions**

- Primary: `Hire Me` — scrolls to Contact Me or opens a verified email link.
- Secondary: `Download CV` — downloads the approved PDF.

**Social links**

- GitHub
- LinkedIn
- Optional: a verified technical blog / YouTube profile
- Only render a platform icon when the real profile URL is supplied and tested.
- Each icon link needs an accessible label and should open external destinations safely (`rel="noreferrer"` when using a new tab).

**Portrait requirements**

- Use a genuine, approved photo of Akash for the production website.
- The generated portrait in the design concept is a visual placeholder; it must not be presented as a real photograph of Akash unless he confirms it is an accurate, approved image.
- Prefer a high-resolution portrait with a plain/dark background, good lighting, and enough empty space for cropping.
- Store an optimized WebP or AVIF version under `public/images/`.
- Provide descriptive alt text (for example, `Portrait of Akash Mondal`) only when the image is a real portrait of him; decorative background shapes should have empty alt text or be implemented in CSS.

**Stats panel**

Three columns on desktop, stacked or compact on mobile:

1. `5+` — `Years Experience` (confirm dates against CV before publishing).
2. `DevOps` — `Learner & Practitioner` (do not convert this into a number or claim of professional DevOps tenure).
3. `100%` — `Passion for Innovation` (aspirational brand statement, not a measured business metric).

## 4.3 About Me section

**Purpose:** Explain the professional story beyond the hero headline.

**Suggested content structure**

- Short heading: `About Me`.
- Two or three concise paragraphs covering:
  - Systems Engineering and infrastructure support background.
  - Experience with enterprise systems, Linux/Unix environments, troubleshooting, monitoring, backup/recovery, and service availability—only include items that match the approved CV.
  - Current focus on cloud and DevOps tools through structured learning and practical labs.
- Optional highlight chips: `Systems Engineering`, `Linux / Unix`, `Infrastructure Operations`, `Cloud & DevOps Learning`.
- Optional `View My Experience` link to the Experience section.

**Content safety:** Do not disclose employer-confidential architecture, IP addresses, hostnames, customer names, production screenshots, or internal incident details.

## 4.4 Skills section

Show skills as grouped cards, not as arbitrary percentage bars. Percentages imply measurable proficiency and should not be invented.

**Suggested groups**

1. **Systems & Operating Systems** — Linux, HP-UX, Unix/Solaris (only list systems actually used).
2. **Cloud Platforms** — Microsoft Azure and AWS fundamentals; identify which services have been practiced in labs.
3. **Containers & Orchestration** — Docker, Kubernetes / AKS (label as learning or lab experience where appropriate).
4. **Infrastructure as Code** — Terraform (show current hands-on level honestly).
5. **Version Control & Automation** — Git, GitHub, shell scripting, PowerShell, CI/CD concepts (only list tools used).
6. **Infrastructure Operations** — troubleshooting, monitoring, backup/recovery, high availability, change coordination (validate wording against CV).

**UX requirements**

- Each group has a short description and 3–6 skill chips.
- Optional proficiency labels: `Professional Experience`, `Hands-on Lab`, `Currently Learning`.
- Use the same label system across the page and project cards.
- Avoid unsupported skill ratings such as 90% or expert.

## 4.5 Experience section

Use a vertical timeline or clean role cards.

Each entry should contain:

- Job title.
- Employer / project label, only if permitted for public use.
- Location (optional).
- Start and end dates; use `Present` for the current role.
- Two to five concise responsibility / outcome bullets.
- Relevant tools and technologies.

**Writing guidance**

- Start bullets with action verbs: operated, monitored, supported, troubleshot, coordinated, maintained, automated.
- Quantify only when the result is documented and approved.
- Avoid publishing internal client names, system identifiers, IPs, or confidential project data.
- Keep professional Systems Engineering experience separate from DevOps training/labs.

## 4.6 Portfolio / Projects section

Use a responsive grid of project cards. Each card should answer: What was built? Why? Which tools were used? What did Akash personally do? What is the current status?

**Recommended initial project candidates**

These are candidates based on the learning path and must be marked `In Progress`, `Lab`, or `Completed` according to the actual repository state. Do not show a project as completed merely because it is listed here.

| Candidate project | Possible stack | Required proof before publishing |
|---|---|---|
| Azure infrastructure lab | Azure CLI, VNet, VM, NSG, Storage, RBAC | Sanitized source, diagram, deployment notes, cleanup steps |
| Terraform resource group / infrastructure lab | Terraform, AzureRM provider | Working `.tf` files, successful plan/apply evidence, destroy instructions |
| Docker web server lab | Docker, Nginx, Linux | Dockerfile or run commands, port mapping, tested result |
| AWS networking lab | AWS VPC, subnet, route table, security group, EC2 | Architecture diagram, sanitized code, cost cleanup notes |
| CI/CD pipeline (future) | GitHub Actions, Next.js or container image | Successful workflow run and clear pipeline explanation |

**Project card fields**

- Title.
- One- or two-sentence summary.
- Status badge: `Completed`, `In Progress`, or `Planned`.
- Stack tags.
- Thumbnail / diagram.
- `View Details` link (internal project route if available).
- `Source Code` link only when a public repository exists.
- `Live Demo` link only when a real deployment exists.

**Project detail page (optional second release)**

- Problem / learning objective.
- Architecture diagram.
- Prerequisites.
- Implementation steps.
- Key configuration (with secrets removed).
- Validation / screenshots.
- Cost and cleanup notes for cloud resources.
- What was learned / what would be improved.
- Links to repository and live demo.

## 4.7 Contact section

**Layout**

- Heading: `Let's Work Together` or `Contact Me`.
- Short invitation sentence.
- Contact form on one side; verified email and social links on the other.

**Form fields**

- Name — required.
- Email — required, valid email format.
- Subject — optional or required; select one and keep it consistent.
- Message — required, sensible minimum and maximum length.
- Submit button: `Send Message`.

**Form states**

- Idle: clear labels and button.
- Submitting: disable duplicate submissions and show progress text.
- Success: show a friendly confirmation and clear the form only after the server confirms success.
- Validation error: show a field-level message.
- Server/provider error: show a retry message and a fallback email link.

**Backend and abuse protection**

- Implement `POST /api/contact` using a Next.js Route Handler.
- Validate and normalize all input on the server with Zod.
- Keep email-provider API keys in server-only environment variables; never expose them through `NEXT_PUBLIC_*` variables.
- Add basic spam protection (honeypot and/or rate limiting supported by the hosting provider).
- Do not store messages in a database for the MVP unless there is a clear need and a privacy policy.
- Use a provider such as Resend only after account setup, domain verification, and sender configuration.
- If no provider is configured, provide a visible email fallback rather than a fake successful submit.

## 4.8 Footer

- AM monogram / `Akash Mondal`.
- Short role line: `System Engineer | DevOps Enthusiast`.
- Quick links to the main sections.
- Verified social links.
- Copyright line with the current year generated at build/runtime in a hydration-safe way.
- Optional `Back to top` link.

---

## 5. Responsive design requirements

Design and test at minimum these viewport widths:

| Viewport | Expected behavior |
|---|---|
| 1440px desktop | Full header, two-column hero, three-column stats, 3-column project grid where space allows |
| 1024px laptop/tablet landscape | Compact spacing, hero remains two-column only if portrait and copy fit comfortably |
| 768px tablet | Navigation may switch to mobile menu; hero can stack or use narrower columns |
| 390px mobile | Single-column content, mobile menu, portrait resized/cropped cleanly, CTAs wrap or stack |
| 360px small mobile | No horizontal overflow; all text, buttons, cards, and form controls remain usable |

**Mobile-specific rules**

- Do not simply shrink the desktop layout.
- The portrait should not push the name or main CTA far below the first screen unnecessarily.
- Buttons should be full-width or comfortably tappable where appropriate.
- Stats cards should stack or use a readable compact layout.
- Skill chips and project cards must wrap without clipping.
- Contact form labels and error text must remain visible.
- Use a mobile menu with a clear open/close state.

---

## 6. Interaction and motion requirements

- Smooth scrolling for internal navigation, while respecting `prefers-reduced-motion`.
- Subtle hover transitions on buttons, social icons, skill cards, and project cards.
- Small fade/slide reveal effects may be used for sections, but content must remain visible when JavaScript or animation is unavailable.
- No auto-playing video or sound.
- No cursor-following effects, excessive parallax, or animation that interferes with reading.
- Use semantic links for navigation and actions; use buttons for state-changing controls.
- Open external links in a new tab only when useful, and always provide an accessible name.

---

## 7. Content and data requirements

Keep profile content in typed data files instead of repeating it throughout JSX. This makes future edits straightforward.

### 7.1 Profile information to confirm

Before launch, verify:

- Full display name and preferred role headline.
- Exact total Systems Engineering experience and employment dates.
- Current and previous job titles.
- Employer names and which project descriptions can be public.
- Education details, if they should appear.
- Certifications and issue dates, if any.
- Professional email address.
- GitHub and LinkedIn URLs.
- Approved CV PDF.
- Actual portrait photo and permission to publish it.

### 7.2 Suggested content files

- `src/data/profile.ts` — name, headline, intro, contact details, social links.
- `src/data/skills.ts` — skill groups and skill-level labels.
- `src/data/experience.ts` — professional timeline.
- `src/data/projects.ts` — project cards and detail content.

### 7.3 Accuracy rules

- Clearly distinguish professional production experience from self-directed labs and training.
- Do not describe a tool as production experience if it was only covered in a course.
- Do not publish made-up project counts, client counts, client testimonials, or ratings.
- Do not publish internal company/customer information without written permission.
- Check every external URL and CV link before release.

---

## 8. Technical architecture

### 8.1 Rendering approach

- Use the Next.js App Router.
- Keep the main portfolio page server-rendered / statically generated where possible.
- Use Client Components only for mobile navigation, active-section tracking (if implemented), contact form interactions, and optional motion.
- Keep static content in TypeScript data modules.
- Use a Route Handler only for the contact endpoint.

### 8.2 Suggested folder structure

```text
akash-portfolio/
├── public/
│   ├── images/
│   │   ├── akash-profile.webp
│   │   ├── project-azure-lab.webp
│   │   └── project-docker-lab.webp
│   ├── files/
│   │   └── akash-mondal-resume.pdf
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Optional second release
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx             # Optional
│   │   ├── error.tsx               # Optional route error boundary
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── SocialLinks.tsx
│   │       ├── StatCard.tsx
│   │       ├── SkillCard.tsx
│   │       └── ProjectCard.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── projects.ts
│   ├── lib/
│   │   ├── contact-schema.ts
│   │   └── utils.ts
│   └── types/
│       └── portfolio.ts
├── tests/
│   └── e2e/
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The exact filenames may differ slightly depending on the `create-next-app` version. Keep the structure consistent and avoid creating abstractions that are not needed.

### 8.3 Component responsibility

| Component | Responsibility |
|---|---|
| `Header` | Brand, desktop nav, CV CTA, sticky state |
| `MobileNav` | Accessible mobile menu and close behavior |
| `Hero` | Name, role, intro, CTAs, portrait, stats |
| `SocialLinks` | Reusable accessible external profile links |
| `SectionHeading` | Shared section title / subtitle styling |
| `About` | Professional summary |
| `Skills` | Grouped skills and level labels |
| `Experience` | Timeline / role cards |
| `Projects` | Project grid |
| `ProjectCard` | Project summary, status, stack, links |
| `Contact` | Contact details and form UI |
| `Footer` | Quick links, socials, copyright |

### 8.4 Suggested TypeScript data model

```ts
export type SkillLevel = "Professional Experience" | "Hands-on Lab" | "Currently Learning";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  image?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  featured: boolean;
};
```

Use equivalent interfaces/types for experience entries and profile links. Validate external URLs before displaying them.

---

## 9. Development environment and setup

### 9.1 Prerequisites

- Windows 10/11, macOS, or Linux.
- Node.js 20.9 or newer; use a currently supported LTS release compatible with the selected Next.js version.
- npm (bundled with Node.js).
- VS Code or another editor.
- Git and a GitHub account.
- Modern browser (Chrome / Edge / Firefox).

### 9.2 Create the project (Windows PowerShell)

```powershell
# Go to your development workspace
cd "$HOME\OneDrive - Echelon Edge Private Limited\Desktop\DEVOPS\DevOpsInsiders\practice"

# Create the app with the current default Next.js setup
npx create-next-app@latest akash-portfolio --yes

# Open the project
cd akash-portfolio

# Start local development
npm run dev
```

Open `http://localhost:3000` in the browser.

The current `create-next-app` defaults include TypeScript, Tailwind CSS, ESLint, App Router, Turbopack, and the `@/*` import alias. Check the prompts/defaults shown by the installed CLI before accepting them because defaults can change between releases.

### 9.3 Install project libraries

Start with the smallest dependency set:

```powershell
npm install lucide-react zod
```

Add a form library, animation library, or email SDK only when the implementation needs it. Avoid installing multiple icon libraries or multiple CSS frameworks.

### 9.4 Development commands

```powershell
npm run dev       # Local development server
npm run lint      # Lint the codebase (if script is configured)
npx tsc --noEmit  # TypeScript check
npm run build     # Production build
npm run start     # Run the production build locally
```

If a script is missing from `package.json`, add it deliberately or use the command documented by the current project scaffold.

---

## 10. Implementation roadmap

The work is divided into milestones. Complete and verify each milestone before moving to the next one.

### Phase 0 — Content and asset preparation

**Tasks**

- Confirm CV, experience dates, role names, education, and public-safe project descriptions.
- Confirm professional email and social profile URLs.
- Select a real approved profile photo; crop and optimize it.
- Prepare the latest CV PDF.
- Collect project repository URLs, architecture diagrams, and sanitized screenshots.
- Save the supplied design image as `docs/design-reference.png` in the repository for visual comparison.

**Exit criteria**

- All public profile data is verified.
- No confidential client/company information is included.
- Portrait and CV files are approved.

### Phase 1 — Project bootstrap and baseline

**Tasks**

- Create the Next.js project with TypeScript, Tailwind CSS, ESLint, and App Router.
- Confirm `npm run dev` works locally.
- Set up Git and make the initial commit.
- Add the folder structure and typed content data modules.
- Set up global theme tokens, font, base styles, and page container.

**Exit criteria**

- Clean starter page runs locally.
- No TypeScript or lint errors.
- Project structure is documented in the README.

### Phase 2 — Design system and header

**Tasks**

- Implement design tokens, typography, buttons, section headings, and card styles.
- Build desktop header and responsive mobile menu.
- Add keyboard focus states, menu Escape handling, and anchor navigation.
- Verify sticky header does not cover section headings.

**Exit criteria**

- Header visually matches the concept.
- All nav items scroll to the right sections.
- Mobile menu works with keyboard and touch.

### Phase 3 — Hero section

**Tasks**

- Build the two-column hero layout.
- Add AM monogram, name, title, intro, social icons, and action buttons.
- Add the real portrait with orange ring/glow and responsive crop.
- Add the stats panel.
- Wire `Hire Me` and `Download CV` to real actions.

**Exit criteria**

- Desktop hero visually matches the approved design reference.
- Mobile hero has no clipping or horizontal scrolling.
- CV and contact actions work.
- Portrait is authentic and approved.

### Phase 4 — About, Skills, and Experience

**Tasks**

- Implement About section with concise, verified professional copy.
- Implement categorized skill cards with honest experience labels.
- Implement experience timeline from approved CV dates and duties.
- Add section spacing and responsive layout.

**Exit criteria**

- All claims are traceable to CV, verified work, or documented labs.
- Skills are grouped consistently and do not use fabricated percentage scores.
- Timeline is readable at mobile and desktop widths.

### Phase 5 — Projects / Portfolio

**Tasks**

- Implement project data types and project card component.
- Add only projects with a repository, notes, screenshots, or other evidence.
- Add status labels and technology chips.
- Add project detail routes only if at least one project needs more than a card summary.
- Check every repository and demo URL.

**Exit criteria**

- No planned project is presented as completed.
- Each published project clearly explains Akash's contribution.
- Source and demo buttons never point to placeholders.

### Phase 6 — Contact form

**Tasks**

- Build accessible form fields and validation messages.
- Add server-side Zod validation in `/api/contact`.
- Configure the selected email delivery provider using server-only secrets.
- Add spam protection and sensible message length limits.
- Implement loading, success, validation-error, and server-error states.
- Provide an email fallback.

**Exit criteria**

- Valid test message reaches the configured mailbox.
- Invalid data is rejected server-side.
- API keys are not exposed in browser bundles or source control.
- Form does not report success when the provider fails.

### Phase 7 — SEO, accessibility, performance, and polish

**Tasks**

- Add title, description, metadata base URL, Open Graph image, favicon, robots, and sitemap.
- Add semantic HTML landmarks and heading order.
- Test keyboard-only navigation and visible focus.
- Check image dimensions, alt text, and responsive loading.
- Respect reduced-motion preference.
- Optimize large assets and remove unused dependencies.
- Run Lighthouse or equivalent audits.

**Exit criteria**

- No broken links or missing images.
- No critical accessibility issues.
- Metadata and social preview are correct.
- Performance is acceptable on mobile and desktop.

### Phase 8 — Testing and production readiness

**Tasks**

- Run lint, type check, and production build.
- Run browser smoke tests at desktop and mobile sizes.
- Test all nav anchors, social links, CV download, project links, and form states.
- Test not-found and error handling.
- Confirm environment variables in hosting settings.
- Review final site content and spelling with the owner.

**Exit criteria**

- All release-blocking checks pass.
- No placeholder links or accidental debug content remain.
- Production build completes successfully.

### Phase 9 — GitHub and deployment

**Tasks**

- Push source code to a private or public GitHub repository as desired.
- Import the repository into Vercel.
- Confirm framework detection, build command, output settings, and environment variables.
- Deploy a preview, test it, then promote to production.
- Configure the custom domain and DNS when available.
- Verify HTTPS, canonical URL, social preview, and form delivery.

**Exit criteria**

- Public URL loads securely.
- Contact form and CV download work on the deployed site.
- Production deployment can be repeated from GitHub commits.

---

## 11. Quality assurance checklist

### Visual QA

- [ ] Desktop hero resembles the reference: dark background, orange highlight, left text, right portrait.
- [ ] Header alignment and CTA spacing are consistent.
- [ ] Orange accent is consistent across links, buttons, icons, and active states.
- [ ] Cards and sections use consistent spacing, borders, and radii.
- [ ] No text overlaps the portrait or background effects.

### Functional QA

- [ ] Every navigation link scrolls to the correct section.
- [ ] Mobile menu opens, closes, and handles Escape.
- [ ] Hire Me leads to a working contact destination.
- [ ] CV download serves the correct PDF.
- [ ] Social links open the intended profiles.
- [ ] Project repository/demo links are correct.
- [ ] Contact form validates, submits, and reports failure honestly.
- [ ] No dead buttons or placeholder `#` links remain.

### Responsive QA

- [ ] Test 1440px, 1024px, 768px, 390px, and 360px widths.
- [ ] No horizontal page overflow.
- [ ] Menu and CTAs are usable on touch devices.
- [ ] Hero portrait crops correctly at every breakpoint.
- [ ] Cards and form fields fit within the viewport.

### Accessibility QA

- [ ] All controls are keyboard reachable.
- [ ] Focus indicator is clearly visible.
- [ ] Icon-only links have accessible labels.
- [ ] Form fields have persistent labels and clear errors.
- [ ] Heading levels follow a logical order.
- [ ] Color contrast is checked, especially muted gray text on dark backgrounds.
- [ ] Animations respect `prefers-reduced-motion`.

### Security / privacy QA

- [ ] No secrets or API keys are committed.
- [ ] Server-only secrets do not use `NEXT_PUBLIC_` prefixes.
- [ ] Contact endpoint validates on the server.
- [ ] Spam protection is configured.
- [ ] No confidential employer/customer data is included.
- [ ] Analytics, if added, are disclosed appropriately and do not collect unnecessary personal data.

---

## 12. SEO and sharing requirements

- Set a descriptive page title, for example: `Akash Mondal | System Engineer & DevOps Enthusiast`.
- Write a unique meta description describing Systems Engineering, infrastructure, and current cloud/DevOps focus.
- Set `metadataBase` to the final canonical domain after domain setup.
- Add Open Graph and Twitter/X card metadata with a branded preview image.
- Add favicon and appropriate app icons.
- Generate `sitemap.xml` and `robots.txt` using Next.js metadata file conventions.
- Use meaningful section headings and descriptive link labels.
- Use descriptive image alt text; decorative graphics should not be announced by screen readers.
- Add Person structured data only with accurate public information; do not add a home address or other private details.

Official reference: [Next.js Metadata and OG Images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) (use the current documentation path if the page is reorganized).

---

## 13. Performance requirements

- Use `next/image` for the profile image and project images; specify dimensions or a stable aspect ratio to avoid layout shift.
- Prefer optimized WebP/AVIF assets and avoid uploading oversized originals.
- Use `next/font` for font loading.
- Keep most page content server-rendered; limit client JavaScript to actual interactive needs.
- Lazy-load below-the-fold imagery where appropriate.
- Avoid large animation packages unless the final design clearly benefits from them.
- Avoid unnecessary third-party scripts and trackers.
- Check the production build and real mobile performance, not only the local development server.

Official reference: [Next.js Image Optimization](https://nextjs.org/docs/app/getting-started/images).

---

## 14. Security and environment configuration

### 14.1 Environment variables

Create `.env.example` with variable names only and safe placeholder values. Example:

```dotenv
# Contact form provider (server-side only)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=your-public-contact-inbox@example.com
CONTACT_FROM_EMAIL=Portfolio Website <noreply@your-verified-domain.com>

# Public canonical site URL; safe to expose if needed
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

- Keep the real `.env.local` out of Git.
- Never paste real keys into README, screenshots, client-side code, or public repositories.
- Verify sender-domain requirements with the selected email provider before production.
- Validate all untrusted form fields on the server.
- Add rate limiting / bot protection before public launch if the endpoint receives abuse.

### 14.2 Contact endpoint behavior

`POST /api/contact` should:

1. Parse JSON safely.
2. Validate the schema and reject invalid input with a 400 response.
3. Apply the honeypot / rate-limit check.
4. Send a message through the configured provider.
5. Return a generic success response only after provider acceptance.
6. Log server-side errors without logging unnecessary message content or secrets.

Next.js Route Handlers are public HTTP endpoints, so treat the contact endpoint as an internet-facing API and validate every request. See [Next.js Backend for Frontend / Route Handlers](https://nextjs.org/docs/app/guides/backend-for-frontend).

---

## 15. Git workflow and CI/CD

### 15.1 Branch strategy

- `main` — production-ready code.
- `develop` — optional integration branch if the project grows.
- `feature/<name>` — individual features such as `feature/hero-section` or `feature/contact-form`.
- Use small commits with clear messages.

Example commit messages:

```text
chore: scaffold Next.js portfolio
feat: add responsive header and navigation
feat: build hero section from design reference
feat: add skills and experience sections
feat: implement contact form endpoint
fix: improve mobile hero layout
perf: optimize profile and project images
```

### 15.2 CI checks

For GitHub Actions, start with a lightweight workflow that runs on pull requests and pushes to `main`:

1. Checkout repository.
2. Install the selected Node.js version.
3. Run `npm ci`.
4. Run lint.
5. Run TypeScript check.
6. Run `npm run build`.

Add Playwright browser tests after the initial site structure is stable. Vercel can provide preview deployments for pull requests.

---

## 16. Deployment and operations

### 16.1 Recommended first deployment

Use Vercel for the first production release because it has a direct Git-based Next.js deployment workflow. A different host can be selected later if cost, compliance, or infrastructure requirements change.

### 16.2 Deployment checklist

- [ ] GitHub repository is connected.
- [ ] Build completes successfully.
- [ ] Production environment variables are configured.
- [ ] Contact provider domain/sender is verified.
- [ ] Custom domain DNS is configured (if available).
- [ ] HTTPS works.
- [ ] CV PDF is present and downloadable.
- [ ] Contact form delivers to the correct mailbox.
- [ ] Social preview image displays correctly.
- [ ] `robots.txt` and sitemap reference the production domain.
- [ ] A preview deployment has been tested before production release.

### 16.3 Post-launch maintenance

- Review contact submissions and spam regularly.
- Update CV and experience whenever role or responsibilities change.
- Add projects only after the repository/demo is ready for public viewing.
- Keep dependencies updated and review Next.js security advisories.
- Re-test form delivery after email-provider or domain changes.
- Monitor hosting usage and email-provider quotas.

---

## 17. Definition of Done

The portfolio is considered complete when all of the following are true:

- [ ] It follows the supplied black/charcoal/orange design direction.
- [ ] It is responsive across desktop, tablet, and small mobile.
- [ ] It contains Home, About, Skills, Experience, Projects, Contact, and Footer sections.
- [ ] It uses accurate, owner-approved content.
- [ ] It uses an authentic, approved portrait or a clearly temporary placeholder before launch.
- [ ] The CV download works.
- [ ] All social and project links are real and verified.
- [ ] The contact form works end to end or a clear email fallback is provided.
- [ ] Keyboard navigation, focus, labels, and contrast have been checked.
- [ ] Metadata, Open Graph image, favicon, sitemap, and robots rules are configured.
- [ ] No secrets or confidential company/customer data are exposed.
- [ ] Lint, type check, production build, and smoke tests pass.
- [ ] Production deployment is live over HTTPS.

---

## 18. Items Akash must supply before public launch

1. Final CV PDF.
2. Approved profile photograph.
3. GitHub profile URL.
4. LinkedIn profile URL.
5. Public contact email (confirm whether `akash.nvf@gmail.com` should be displayed).
6. Exact employment dates, job titles, and approved experience descriptions.
7. At least two projects with accurate status and public evidence, or agreement to launch the Projects section with clearly labeled learning labs.
8. Preferred domain name, if purchasing or connecting one.
9. Email provider choice / access for contact-form delivery.

---

## 19. Official documentation references

Use official documentation as the source of truth because Next.js APIs and defaults can change:

- [Next.js App Router — Getting Started](https://nextjs.org/docs/app/getting-started)
- [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation)
- [Next.js Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Next.js Image Optimization](https://nextjs.org/docs/app/getting-started/images)
- [Next.js Metadata and OG Images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js Backend for Frontend / Route Handlers](https://nextjs.org/docs/app/guides/backend-for-frontend)
- [Next.js Deploying](https://nextjs.org/docs/app/getting-started/deploying)

---

## 20. Recommended build order at a glance

```text
Confirm content + portrait + CV
            ↓
Create Next.js App Router project
            ↓
Set theme tokens, typography, and shared UI
            ↓
Header + responsive navigation
            ↓
Hero section + portrait + stats + CTAs
            ↓
About + Skills + Experience
            ↓
Projects grid + evidence / detail pages
            ↓
Contact form + server-side validation + email provider
            ↓
SEO + accessibility + performance review
            ↓
Lint + type check + build + browser QA
            ↓
GitHub + Vercel preview + production deployment
            ↓
Post-launch content and dependency maintenance
```

**Final product principle:** The website should look polished like the reference, but credibility is more important than visual claims. Present established Systems Engineering experience confidently, label DevOps/cloud work according to its real status, and keep every public link and achievement verifiable.
