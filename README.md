# Mohan S — Engineering Portfolio

A responsive, single-page portfolio for **Mohan S**, a B.Tech Artificial Intelligence and Machine Learning student at Saveetha Engineering College. The site presents a factual, expandable record of technical skills, projects, internship experience, certifications, achievements, and contact details.

## Live portfolio structure

| Section | Purpose |
|---|---|
| Hero | Professional positioning, résumé download, and key professional links. |
| About | Education, location, coursework, and development focus. |
| Technical Skills | Skills grouped by programming, web/data, core engineering, and AI/cloud/security. |
| Projects | Extendable project records for NAMMANADU, the Smart Grocery Expiry Prediction & Alert System, and InferChain. |
| Experience | Cybersecurity & Ethical Hacking internship at Zybeak Technologies Pvt. Ltd. |
| Volunteering | National Service Scheme (NSS) volunteer record, active from February 2024. |
| Certifications & Achievements | A clear record of documented learning and competition participation. |
| Contact | Accessible email, phone, LinkedIn, GitHub, and location links. |

## Design direction

The interface follows an **Engineering Ledger** system: warm archival-paper surfaces, ink-navy typography, oxidized-copper signals, fine ledger rules, and an asymmetric editorial layout. It deliberately avoids stock student-portfolio patterns, overused gradients, and distracting motion.

## Technology

| Layer | Choice |
|---|---|
| Application | React 19 with TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS 4 base with custom responsive CSS tokens |
| Icons | Lucide React |
| Routing | Wouter |

## Local development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Create a production build:

```bash
pnpm check
pnpm build
```

## Project layout

```text
client/
  index.html              # Document metadata and favicon
  src/
    App.tsx               # App shell and routing
    index.css             # Design tokens and responsive portfolio styling
    pages/
      Home.tsx            # Single-page portfolio sections and content
server/                   # Static hosting compatibility layer
ideas.md                  # Chosen design system and implementation guidance
```

## Content policy

All biographical, education, skills, existing projects, internship, certification, and achievement content comes from Mohan S’s supplied résumé. The NAMMANADU project and National Service Scheme (NSS) volunteering record are included from user-provided factual updates. The project intentionally contains **no invented experience, testimonials, clients, metrics, skills, or achievements**. The project cards are structured to support additional factual technical detail as it becomes available.

## Updating content

Portfolio content is maintained in `client/src/pages/Home.tsx`. Update the relevant data collection or section directly, keeping all additions factual and verifiable. Visual system tokens and responsive rules are maintained in `client/src/index.css`.

## License

This repository is intended as the personal portfolio of Mohan S. Reuse of personal content or branding should occur only with permission.
