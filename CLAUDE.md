# D Evia Kwasa Damansara — Landing Page

## Project Overview

A marketing landing page for **D Evia**, a property development located at **Kwasa Damansara, Selangor, Malaysia**. The page is a showcase + WhatsApp lead capture site targeting prospective property buyers.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Cloudflare Pages (via `@cloudflare/next-on-pages` adapter)
- **Package manager:** npm

## Key Config for Cloudflare Pages

```js
// next.config.js — required for Cloudflare Pages compatibility
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
```

Build command: `npx @cloudflare/next-on-pages`  
Output directory: `.vercel/output/static`  
Node compatibility flag must be enabled in Cloudflare dashboard.

## Page Sections (top to bottom)

1. **Hero / Banner** — Full-width visual with project name, tagline, and WhatsApp CTA button
2. **Gallery** — Photo/render carousel or grid of the development
3. **Amenities / Facilities** — Icons + descriptions of key facilities
4. **Floor Plans** — Unit types, built-up sizes, layout images
5. **Location Map** — Embedded Google Map centered on Kwasa Damansara + nearby landmarks callout
6. **Register Interest** — Simple form (Name, Phone, Email) that submits via WhatsApp deep link
7. **Developer Info / Footer** — About the developer, legal disclaimer, footer links

## WhatsApp Integration

All primary CTAs link to WhatsApp. Use this number throughout:

```
+60123714815
```

WhatsApp deep link format:
```
https://wa.me/60123714815?text=Hi%2C%20I%27m%20interested%20in%20D%20Evia%20Kwasa%20Damansara
```

The "Register Interest" form should pre-fill a WhatsApp message with the user's name and unit interest on submit (client-side redirect, no backend needed).

## Language

English only. All copy, labels, error messages, and UI text in English.

## Brand Assets

All visual assets (logo, renders, color palette, floor plan images) are sourced from the PDF brochure: `D Evia Kwasa Damansara.pdf` in the project root. Extract images/pages from this PDF and place them in `public/assets/`.

Likely brand colors to confirm from PDF:
- Extract dominant colors from the brochure cover for the palette
- Use as Tailwind custom colors in `tailwind.config.ts`

## Project Structure

```
/
├── public/
│   └── assets/          # Extracted images from PDF (logo, renders, floor plans)
├── src/
│   └── app/
│       ├── page.tsx      # Main landing page
│       ├── layout.tsx    # Root layout with metadata/SEO
│       └── globals.css
│   └── components/
│       ├── Hero.tsx
│       ├── Gallery.tsx
│       ├── Amenities.tsx
│       ├── FloorPlans.tsx
│       ├── LocationMap.tsx
│       ├── RegisterForm.tsx
│       └── Footer.tsx
├── CLAUDE.md
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## SEO Metadata

- **Title:** `D Evia Kwasa Damansara | New Launch Property`
- **Description:** `D Evia at Kwasa Damansara – a premier residential development in Selangor. Register your interest today.`
- **OG image:** Use hero render from PDF assets
- Use `next/metadata` in `layout.tsx`

## Development Commands

```bash
npm run dev        # Start local dev server
npm run build      # Build for production
npx @cloudflare/next-on-pages  # Build for Cloudflare Pages
```

## Constraints & Notes

- No backend/API routes — all lead capture is via WhatsApp redirect
- Keep the bundle lean; avoid heavy dependencies
- The PDF is image-based (Photoshop-exported), so assets must be extracted manually from it
- Mobile-first layout — most Malaysian property buyers browse on mobile
- Sticky WhatsApp floating button should appear on all sections (bottom-right)
