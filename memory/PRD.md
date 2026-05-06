# OJT E-Portfolio — PRD

## Original Problem Statement
> User asked to examine https://e-portfolio-julian.netlify.app/ and then rebuild it with their own details (placeholder content they can edit later).

## Goal
Rebuild Julian Bernard T. Alvarado's OJT (On-the-Job Training) E-Portfolio as a modern, minimal, easily-editable site for the user. All content lives in a single config file the user can edit — no backend or admin panel needed.

## User Choices
- **Aesthetic:** Modern Minimal — clean, lots of whitespace, elegant typography
- **Editing model:** Single config file (`/app/frontend/src/config/portfolio.config.js`)
- **All personal/internship/philosophy/career content:** Editable placeholders

## Architecture
- **Frontend only** (no backend usage). React + React Router + Tailwind.
- **Single source of truth:** `/app/frontend/src/config/portfolio.config.js`
- **Pages:**
  - `/` → Title + Document Index + Student Profile + Acknowledgment + Trainee Prayer + Personal Philosophy + Career Plan + Continue Reading
  - `/introduction` → Chapter I (Importance, Objectives, Time & Place)
  - `/company` → Chapter II (Nature, Mission/Vision/Goal, History, Org Structure)
  - `/work` → Chapter III (Weekly Report, DTR, Progress, Analysis)
  - `/assessment` → Chapter IV (Evaluation Form)
  - `/appendices` → A–Q grid of attachment slots

## Design System
- **Fonts:** Fraunces (display serif, optical sizing) · Geist (body sans) · JetBrains Mono (labels)
- **Palette:** Warm off-white paper · deep ink blue-black · muted terracotta accent
- **Texture:** Subtle paper grain overlay (SVG noise)
- **Motion:** Staggered rise-on-load animations · link-underline hover · soft hover transitions
- **Layout:** Asymmetric 12-col grid · max-w-canvas (1240px) · generous vertical rhythm

## What's Implemented (Jan 2026)
- [x] Single editable config file with all content
- [x] Layout (sticky blurred header, mobile drawer, 3-col footer)
- [x] Home/Title page with hero, document index card, student profile table, acknowledgment, prayer, philosophy (dark inverted section), career plan (3 pillar grid + commitment), jump-to-chapters grid
- [x] Reusable SectionHeader + ChapterSections components
- [x] All 4 chapter pages
- [x] Appendices A–Q grid
- [x] Smooth scroll-to-top on route change
- [x] Responsive (mobile, tablet, desktop)
- [x] data-testid coverage on all interactive + key UX elements

## How to Edit
Open `/app/frontend/src/config/portfolio.config.js` and edit any field. The change is reflected on save (hot reload).

## Backlog / Optional Next Steps
- P1: Per-appendix attachment uploads (PDFs/images) — would require backend
- P1: Weekly accomplishment log entries (structured array under `work.weekly`)
- P2: Print stylesheet for clean PDF export
- P2: Dark mode toggle
- P2: Photo gallery component for Appendix M & N
- P2: Admin panel for non-technical editing (auth + MongoDB persistence)

## Smart Enhancement Idea
Add a **public CV / resume page** at `/cv` populated from the same config — turn the portfolio into a single shareable career site, useful when applying for jobs (the "Immediate Goals" pillar already lists this).
