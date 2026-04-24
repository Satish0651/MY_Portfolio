# Satish Kumar — Portfolio

A premium, dark-themed personal portfolio for **Satish Kumar** — GIS Solutions Engineer specialising in Enterprise GIS, AI (RAG), and Presales.

Live: https://my-portfolio-satish0651.vercel.app (after first Vercel deploy)
Source: https://github.com/Satish0651/MY_Portfolio

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom neon design system + glassmorphism
- **Framer Motion** for scroll reveals, counters, and micro-interactions
- **Three.js + react-three-fiber + drei** for the 3D wireframe globe + particle field in the hero
- **lucide-react** for icons; **clsx + tailwind-merge** for class composition

## Features

- Full-viewport 3D hero (lazy-loaded, SSR-off, respects `prefers-reduced-motion`)
- Animated gradient typography with character-stagger reveal
- Section reveal on scroll with intersection observer + Framer Motion
- Animated circular skill rings, animated counters with sparklines, alternating timeline
- Project case-studies as cards + modals + shareable `/projects/[slug]` pages
- SEO: `metadata`, JSON-LD `Person` schema, `sitemap.ts`, `robots.ts`, dynamic OG image
- Mobile-first, fully responsive
- Lighthouse target: 95+ across the board

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Editing content

All copy lives in [`lib/data.ts`](lib/data.ts) — profile, skills, experience, projects, metrics, presales flow, education, certs. Updating the site = editing one file.

## Deployment (Vercel)

1. Push to GitHub: this repo is `Satish0651/MY_Portfolio`.
2. Go to https://vercel.com/new and **Import Git Repository**.
3. Select `Satish0651/MY_Portfolio`. Framework auto-detects as Next.js. Click **Deploy**.
4. Every push to `main` auto-deploys. Production URL appears under **Project → Domains**.

Optional:
- Add a custom domain in Vercel → Project → Domains.
- Toggle Vercel Analytics in one click.

## Folder structure

```
app/                    # routes, layout, metadata, sitemap, robots, OG
components/
  hero/                 # Hero section + 3D scene
  about/                # Journey
  skills/               # Infographic skill grid
  projects/             # Cards + modal
  experience/           # Vertical timeline
  metrics/              # Animated counter dashboard
  presales/             # Flow diagram
  contact/              # CTA section
  layout/               # Navbar, Footer, ScrollProgress
  ui/                   # Primitives (GlassCard, GradientText, NeonButton, ...)
lib/
  data.ts               # All content
  hooks/                # usePrefersReducedMotion, useCountUp
  utils.ts              # cn() helper
```

## License

Personal portfolio — content © Satish Kumar. Code may be used as inspiration with credit.
