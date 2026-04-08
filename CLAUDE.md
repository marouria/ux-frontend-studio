# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build → dist/
npm run lint       # ESLint
npm test           # Run tests once (Vitest)
npm run test:watch # Run tests in watch mode
npm run preview    # Preview production build
```

There are currently no test files in `src/`. Tests use Vitest + jsdom + @testing-library/react.

## Architecture

Single-page React app (React 18 + TypeScript + Vite) deployed to GitHub Pages at `marieleuliette.com`.

**Routing** — React Router v6 with these routes:

| Path | Page |
|------|------|
| `/` | `Index.tsx` — hero, featured work, about intro, contact |
| `/work` | `Work.tsx` — all case studies |
| `/work/:slug` | `CaseStudy.tsx` — case study detail |
| `/about` | `About.tsx` |
| `/contact` | `Contact.tsx` |

**Content** — all case study data lives in `src/data/projects.ts` as a typed `Project[]` array. `CaseStudy.tsx` looks up the project by `slug` from `useParams()`. To add or edit a case study, only `projects.ts` needs to change.

**Components** — `src/components/ui/` contains shadcn/ui primitives (generated, avoid editing directly). Page-level shared components (`Navbar`, `Footer`, `HeroSection`, etc.) live in `src/components/`.

**Styling** — Tailwind CSS with `font-display` (headings) and `font-body` (body text) utility classes used throughout. Animations use Framer Motion with a shared `fadeUp` pattern (`{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }`).

**Aliases** — `@/` maps to `src/`.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds on push to `main` and deploys to GitHub Pages. The `CNAME` file is copied into `dist/` during the build step to preserve the custom domain.
