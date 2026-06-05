# HARVIONIX

A modern React + Vite landing page for a technology and innovation brand. This project is designed as a polished company front page with animated hero visuals, industry showcases, service listings, leadership profiles, values, and responsive interactions.

## Project Summary

HARVIONIX is presented as a premium digital experience built using TypeScript, React, Vite, and Tailwind CSS. The app includes:

- a cinematic hero section with floating capsules, holographic map visuals, and smooth scrolling
- an interactive company profile section
- industry-specific solution cards for agriculture, healthcare, and sustainability
- service offerings across AI, ML, cloud, IoT, data analytics, and automation
- project showcase cards with metrics-driven storytelling
- leadership profiles and brand values
- responsive layout optimized for desktop and mobile

## Key Features

- React 19 with TypeScript support
- Vite development server and optimized production build
- Tailwind CSS styling powered by `@tailwindcss/vite`
- iconography via `lucide-react`
- image bundling using Vite asset imports
- polished layout with glassmorphism, gradients, and motion effects
- component-based architecture for reusable sections

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons
- Express (dependency present for potential backend/preview workflows)
- dotenv for environment support

## Available Scripts

- `npm install` — install dependencies
- `npm run dev` — start the development server on `http://localhost:3000`
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run clean` — remove generated build files (`dist`, `server.js`)
- `npm run lint` — run TypeScript compile checks without emitting files

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Setup

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown in the terminal to view the site.

### Production Build

```bash
npm run build
```

### Preview Production Output

```bash
npm run preview
```

## Folder Structure

- `index.html` — app entry HTML template
- `package.json` — npm scripts and dependencies
- `tsconfig.json` — TypeScript compiler configuration
- `vite.config.ts` — Vite configuration with React and Tailwind support
- `src/main.tsx` — React root bootstrap
- `src/App.tsx` — main page composition and hero section layout
- `src/index.css` — global CSS and Tailwind imports
- `src/vite-env.d.ts` — Vite asset module declarations for image imports
- `src/assets/images/` — static image assets used by the site
- `src/components/` — landing page sections and UI components
- `src/data.ts` — content model for industries, services, projects, leadership, values, and stats
- `src/types.ts` — shared TypeScript interfaces for app data

## Component Overview

The app is composed of the following main components:

- `Header.tsx` — navigation bar with smooth section scrolling and mobile menu
- `BackgroundParticles.tsx` — animated particle backdrop for the hero area
- `InteractiveMap.tsx` — holographic world map visual in the hero section
- `WhoWeAre.tsx` — mission and brand introduction section with imagery
- `IndustriesGrid.tsx` — industry domain cards for Agriculture, Healthcare, and Sustainability
- `ServicesGrid.tsx` — service offerings cards covering AI, web, mobile, cloud, IoT, and analytics
- `ProjectShowcase.tsx` — featured projects with metrics and visual storytelling
- `Leadership.tsx` — executive team profiles and roles
- `CompanyValues.tsx` — corporate values and statistics visualization
- `Footer.tsx` — footer and copyright

## Data-Driven Content

The page content is defined in `src/data.ts`, including:

- `INDUSTRIES_DATA` — industry cards and feature points
- `SERVICES_DATA` — service offerings and descriptions
- `PROJECTS_DATA` — project highlights with metrics
- `LEADERS_DATA` — leadership team details
- `VALUES_DATA` — company values and icon names
- `STATS_DATA` — brand statistics and growth metrics

This data-driven structure makes it easy to update content without changing layout code.

## Notes

- Image imports are handled through Vite asset bundling, so assets are referenced with imports rather than raw `/src/...` paths.
- If you see stale TypeScript diagnostics after updating files, restart the editor TypeScript server or reload the window.
- The `clean` script uses `rm -rf`, which may require Git Bash, WSL, or another Unix-compatible shell on Windows.

## Customization

To update copy or industry content:

1. edit `src/data.ts`
2. modify the relevant string fields, titles, and points
3. rebuild or refresh the development server

To change the page layout:

- update component markup in `src/components/`
- adjust styles in `src/index.css`
- add new sections in `src/App.tsx`

---

Built as a visually rich React landing page for HARVIONIX, ready for deployment as a static site or integrated into a larger digital platform.