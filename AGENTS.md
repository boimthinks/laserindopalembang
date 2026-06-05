# Cutting Laser Palembang — Project Context

## Overview
Astro 5 SSG website for Cutting Laser Palembang (subdomain of Sriwijaya Grafika). 32 static pages with SEO/GEO optimization for Palembang market and an Interactive SVG Builder for custom laser-cutting motif design.

**Domain:** `cutting.sriwijayagrafika.com`

---

## Tech Stack
| Layer | Tech |
|-------|------|
| Framework | Astro 5 (SSG) |
| Styling | Tailwind CSS v4 + `@tailwindcss/typography` |
| UI Islands | React 19 (SVG Builder only) |
| Content | Local TypeScript data files + MDX |
| Sitemap | `@astrojs/sitemap` |

---

## Brand Config — `src/config/site.ts`
Single source of truth for all contact, social, address & brand data.

- **Colors:** Primary `#224da8` (Deep Blue), Accent `#ff6634` (Orange)
- **Contact:** `0812-3456-7890` (TEMP — update before going live)
- **WhatsApp:** `6281234567890`
- **Address:** Jl. AMD Jl. Pertanian No.105, Talang Jambe, Sukarami, Palembang 30155
- **Social:** Instagram, Facebook, Pinterest

---

## Site Structure (32 pages)

### Static Pages (8)
- `/` — Beranda
- `/harga` — Harga & Biaya
- `/faq` — FAQ
- `/kontak` — Kontak
- `/tentang` — Tentang Kami
- `/portfolio` — Portofolio
- `/builder` — Interactive SVG Builder

### Dynamic Routes (24)
- `/layanan/[slug]` — 5 layanan (pagar, kanopi, partisi, railing, fasad)
- `/material/[slug]` — 5 material (besi, stainless, akrilik, kayu-mdf, acp-pvc)
- `/blog/[slug]` — 14 blog articles + `/blog` index

---

## Key Architecture

### Data Flow
- All data files in `src/data/` — services, motifs, faq, pricing, materials, blog
- Single config at `src/config/site.ts`
- No database or external CMS — fully static

### Route Patterns
- Separate data files (not inline arrays) to avoid Astro build variable-hoisting in `[slug].astro`
- Three separate `[slug].astro` pages for `/layanan/`, `/material/`, `/blog/`

### Components
| Component | Scope |
|-----------|-------|
| `BaseLayout.astro` | Global HTML shell, fonts, SEO Head |
| `SEOHead.astro` | Per-page meta/title/description |
| `Schema.astro` | JSON-LD (LocalBusiness, FAQ, Article, Service, Product, BreadcrumbList) |
| `Header.astro` | Nav + mobile hamburger menu |
| `Footer.astro` | Contact, social links, address |
| `CTABanner.astro` | WhatsApp CTA strip |
| `ScrollReveal.astro` | Intersection Observer animations |
| `MotifPicker.tsx` | React — motif category/type selector |
| `Controls.tsx` | React — material, variant, size, repeat, price estimate |
| `SVGWorkspace.tsx` | React — main builder with single + 2×2 tiled preview |

### SVG Builder
- 15 motif categories × 5 variants (V1–V5) = 75 parametric designs
- 9:16 base viewBox (450×800)
- Deterministic pseudo-random (seedRand) — identical SVG on every render
- Preview: Single panel + 2×2 tiled seamless layout
- Download as SVG, order via WhatsApp

---

## Progress Status

### ✅ Done
- [x] Project init: Astro 5 + Tailwind v4 + React + MDX + Sitemap
- [x] Single config file (`src/config/site.ts`)
- [x] Base layout + SEOHead + Schema components
- [x] UI components: Header, Footer, CTABanner, ScrollReveal
- [x] Data files: services, motifs, faq, pricing, materials, blog
- [x] All 32 pages generated
- [x] Portfolio page with category filter + builder CTA
- [x] SVG Builder:
  - [x] 15 motif categories, 5 algorithmic variants each
  - [x] Single panel (9:16) + 2×2 tiled preview
  - [x] Variant selector (V1–V5), material picker, size, repeat, price estimate
  - [x] Download SVG + WhatsApp order
- [x] 14 GEO-optimized blog articles
- [x] `.gitignore` initialized

### ✅ Git
- [x] Git repo initialized
- [x] AGENTS.md created
- [x] Initial commit

### 🔜 Before Launch
- [ ] Replace temp phone `0812-3456-7890` with real number in `site.ts`
- [ ] Replace temp WhatsApp `6281234567890` with real number
- [ ] Replace placeholder SVG portfolio images with real documentation photos
- [ ] Verify all JSON-LD schemas render correctly
- [ ] Test deploy on Netlify/Vercel
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics / Search Console verification

### 🔮 Future Plans
- Switch blog from inline data to MDX for easier content management
- Add pagination to blog index
- Add before/after image comparison for portfolio
- Add customer testimonials section
- Consider Google Sheets CMS if non-technical staff need to edit content

---

## Reminders
- Component `<style>` blocks CANNOT use `@apply` in Tailwind v4 — use inline utility classes
- React islands must use `client:load` for interactive components
- `src/config/site.ts` is the single source of truth — don't hardcode contact info elsewhere
