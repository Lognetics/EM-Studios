# EM Studios

A premium photography studio website — *"Where Stories Are Preserved, Emotions Are Celebrated, and Time Becomes Timeless."*

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — cinematic rotating hero, about preview, featured work, services, stats, testimonials, CTA |
| `/about` | Founder story, philosophy, mission, vision, core values |
| `/portfolio` | Filterable masonry gallery with lightbox |
| `/portfolio/[slug]` | Individual project story pages (auto-generated per project) |
| `/services` | All services + creative direction + before/after editing slider |
| `/experience` | The 6-step client journey timeline |
| `/journal` | Photography journal with category filtering |
| `/client-stories` | Mini-documentary client stories |
| `/booking` | Functional booking form + FAQs |
| `/contact` | Contact details + message form |

## Design System

Defined in [`tailwind.config.ts`](tailwind.config.ts) and [`app/globals.css`](app/globals.css):

- **Colors** — `ink` `#0B0B0B`, `ivory` `#FAF9F6`, `gold` `#C8A86B`, `beige` `#EDE7DD`, `warmgray` `#6F6F6F`, `bronze` `#8B6F47`
- **Type** — Playfair Display (serif headings) + Inter (sans body), loaded via `next/font`
- **Motion** — cinematic easing `cubic-bezier(0.16, 1, 0.3, 1)`, scroll reveals, slow-zoom imagery

## Content

All copy, projects, services, testimonials, articles, and client stories live in a single file:
**[`lib/content.ts`](lib/content.ts)** — edit there to update the whole site.

### Photography

Images are tasteful **Unsplash placeholders** (configured in [`next.config.mjs`](next.config.mjs)).
To use real EM Studios photography, replace the `img` / `src` URLs in `lib/content.ts`
(and the inline hero/section images), or drop files into `public/` and point to them.

## Booking Form

The booking form posts to [`app/api/booking/route.ts`](app/api/booking/route.ts), which validates
the submission and confirms receipt. It currently logs enquiries server-side — wire the marked
`TODO` to an email provider (Resend/SendGrid) or **Supabase** to persist and notify.

## Premium Features Included

- Cinematic loading curtain ([`components/Loader.tsx`](components/Loader.tsx))
- Before/After editing slider ([`components/BeforeAfter.tsx`](components/BeforeAfter.tsx))
- Filterable masonry portfolio + lightbox
- Scroll-triggered reveals throughout
- Rotating hero montage + testimonial carousel

## Roadmap (from the strategy doc, deferred for v1)

- Client portal (galleries, downloads, approvals, payments) — Supabase + auth
- Virtual exhibition room / interactive legacy wall
- Moodboard generator
- Journal article detail pages (currently the grid links back to the index)
