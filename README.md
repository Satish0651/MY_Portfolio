# Satish Kumar — Portfolio

A dashboard-style personal portfolio for **Satish Kumar** — GIS Solutions Engineer specialising in Enterprise GIS, AI (RAG), and Presales.

- Live: https://my-portfolio-satish0651.vercel.app (after first Vercel deploy)
- Source: https://github.com/Satish0651/MY_Portfolio

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a two-tone (dark navy hero + light body) design system
- **Framer Motion** for scroll reveals, counters, and micro-interactions
- **lucide-react** for icons; **clsx + tailwind-merge** for class composition
- Pure SVG for all data-viz (India map, donut, sparkline, project previews) — zero image assets

## Features

- **Dashboard hero**: greeting, animated headline, CTAs, contact pills + India map (with pulsing city markers + route overlays) and 4 live data tiles (Total Sites / Fiber Coverage stat cards, Site Status donut, Growth sparkline)
- **About row**: 3 cards — About + gradient SK avatar, Core Expertise checklist, Technical Skills grouped by category
- **Featured Projects**: 4 cards with live SVG previews (chatbot UI, KPI dashboard, map, storymaps) + `/projects/[slug]` detail pages with Problem / Solution / Impact
- **Impact stats strip**: animated counters on navy band (8+ Years, 20+ Projects, 10+ Clients, 60% Efficiency, 5+ AI Solutions)
- **Certifications + Tools & Platforms** logo grids
- **Skills section** with grouped checklists
- **Experience timeline** with alternating cards and current-role indicator
- **Contact CTA** card with email / LinkedIn / GitHub
- **AI Assistant chatbot** (floating bottom-right) — trained on the profile, answers questions about experience, projects, skills, contact, and more. Zero-cost client-side knowledge base with suggested follow-up chips.
- SEO: `metadata`, JSON-LD `Person` schema, `sitemap.ts`, `robots.ts`, dynamic OG image
- Mobile-first, fully responsive; respects `prefers-reduced-motion`

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Editing content

All profile data lives in [`lib/data.ts`](lib/data.ts) — profile, skills, experience, projects, metrics, tools, certifications. The chatbot's knowledge base in [`lib/chatbot/knowledge.ts`](lib/chatbot/knowledge.ts) auto-derives answers from this data, so updating the site = editing one file.

## Deployment (Vercel)

1. Push to GitHub: this repo is `Satish0651/MY_Portfolio`.
2. Go to https://vercel.com/new and **Import Git Repository**.
3. Select `Satish0651/MY_Portfolio`. Framework auto-detects as Next.js — no env vars needed. Click **Deploy**.
4. Every push to `main` auto-deploys. Production URL appears under **Project → Domains**.

Optional:
- Add a custom domain in Vercel → Project → Domains.
- Toggle Vercel Analytics in one click.

## Folder structure

```
app/                    # routes, layout, metadata, sitemap, robots, OG
components/
  hero/                 # Hero + India map + stat tiles + donut + growth chart
  about/                # 3-card About / Expertise / Skills row
  projects/             # Project cards + SVG previews
  skills/               # Skills grid
  experience/           # Vertical timeline
  stats/                # Impact stats strip (animated counters)
  certs/                # Certifications + Tools & Platforms grids
  contact/              # CTA section
  chatbot/              # Floating AI assistant widget
  layout/               # Navbar, Footer, ScrollProgress
  ui/                   # Reveal primitive
lib/
  data.ts               # All profile content
  chatbot/
    knowledge.ts        # Chatbot knowledge base (auto-derived from data.ts)
    answer.ts           # Matcher / answer engine
  hooks/                # usePrefersReducedMotion, useCountUp
  utils.ts              # cn() helper
```

## License

Personal portfolio — content © Satish Kumar. Code may be used as inspiration with credit.
