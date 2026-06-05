# HARVIONIX

A modern, interactive corporate landing page built with React, TypeScript, Vite, and Tailwind CSS.

The project presents a polished brand experience for a technology-driven company, featuring an animated hero section, interactive map visuals, industry and service showcases, leadership profiles, and company value highlights.

## Key Features

- Responsive React single-page application with smooth scrolling navigation
- Cinematic animated hero layout with floating brand capsules and holographic map visuals
- Structured company sections: Who We Are, Industries, Services, Projects, Leadership, and Values
- Tailwind CSS styling with glassmorphism, gradient accents, and motion-friendly UI
- Vite-powered development and build workflow for fast hot-reload and production builds

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React icons
- `@vitejs/plugin-react`
- `@tailwindcss/vite`

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the site.

## Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `index.html` — application entry HTML
- `vite.config.ts` — Vite configuration with React and Tailwind plugins
- `package.json` — scripts and dependencies
- `src/main.tsx` — React app bootstrap
- `src/App.tsx` — main landing page composition and scroll behavior
- `src/components/` — reusable sections and UI components
- `src/assets/` — static assets and images
- `src/index.css` — global styling entrypoint
- `src/types.ts` — shared TypeScript definitions
- `src/data.ts` — content data used across the page

## Notes

This repository is designed as a visually rich corporate landing page. The current structure is well-suited for extensions such as backend integration, AI-driven content, or additional brand sections.
