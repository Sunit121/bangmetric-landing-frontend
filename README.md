# Bangmetric — landing pages (frontend only)

Standalone Next.js workspace containing **only** the three ServiceNow service
landing pages. No backend, no database, no API routes, no environment variables.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it lists the three pages.

| Page | Route |
| --- | --- |
| ITOM | `/it-operations-management` |
| SPM  | `/strategic-portfolio-management` |
| HRSD | `/hr-service-delivery` |

## What lives where

```
app/(landing)/
  layout.tsx                              shared shell (Navigation + Footer)
  landing.css                             all landing-page styles, scoped to .bm-landing
  it-operations-management/page.tsx
  strategic-portfolio-management/page.tsx
  hr-service-delivery/page.tsx

components/landing/                       section components used by all three pages
  Hero.tsx  Intro.tsx  WhatWeBuild.tsx  ThinkDifferently.tsx
  BangmetricWay.tsx  Results.tsx  Jumpstarts.tsx  ITOMWhyChoose.tsx
  BottomCTA.tsx  MotionReveal.tsx         (MotionReveal = framer-motion scroll reveal wrapper)

components/navigation.tsx, footer.tsx     shared site chrome
public/images/                            only the assets these pages reference
```

## Ground rules

- **Edit only** `app/(landing)/**` and `components/landing/**`.
- `navigation.tsx` and `footer.tsx` are shared with the rest of the live site —
  don't change them without asking.
- Header/footer links point to routes that don't exist in this workspace
  (`/services`, `/careers`, …). A 404 on those is expected, not a bug.
- `app/page.tsx` is a sandbox index only. It is not part of the real site.
- Styling is Tailwind + `landing.css`. Keep new styles inside the `.bm-landing`
  scope so they can't leak into the main site.

## Handing work back

Work on a branch and open a PR, or send a patch:

```bash
git checkout -b <your-change>
# ...edit...
git commit -am "describe the change"
git format-patch main --stdout > changes.patch
```
