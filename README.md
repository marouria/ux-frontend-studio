# Marie Leuliette — UX & Frontend Portfolio

Personal portfolio showcasing UX research and frontend development work. Built with React, TypeScript, and Tailwind CSS.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured work, about intro, contact |
| `/work` | Work index — all case studies |
| `/work/:slug` | Case study detail page |
| `/about` | Background, skills, experience, certifications |
| `/contact` | Contact and social links |

## Tech stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **React Router v6** — client-side routing
- **Tailwind CSS** — styling
- **shadcn/ui** + **Radix UI** — accessible UI components
- **Framer Motion** — animations
- **TanStack Query** — async state management

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |

## Project structure

```
src/
├── components/       # Shared components (Navbar, Footer, ContactSection…)
│   └── ui/           # shadcn/ui primitives
├── data/
│   └── projects.ts   # Case study content
├── hooks/            # Custom React hooks
└── pages/            # Route-level components
    ├── Index.tsx
    ├── Work.tsx
    ├── CaseStudy.tsx
    ├── About.tsx
    └── Contact.tsx
public/
└── about.jpg         # Profile photo
```

## Contact

- Email: marie.leuliette@gmail.com
- LinkedIn: [marieleuliette](https://www.linkedin.com/in/marieleuliette/)
- GitHub: [marouria](https://github.com/marouria)
- Malt: [marieleuliette](https://www.malt.fr/profile/marieleuliette)
