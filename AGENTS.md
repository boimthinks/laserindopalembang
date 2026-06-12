# Laserindo Palembang — Project Context

## Overview
Astro 5 SSG website for Laserindo Palembang (laserindopalembang.com). SEO/GEO optimized for Palembang market with motif detail pages for long-tail keyword coverage.

**Domain:** `laserindopalembang.com`

---

## Tech Stack
| Layer | Tech |
|-------|------|
| Framework | Astro 5 (SSG) |
| Styling | Tailwind CSS v4 + `@tailwindcss/typography` |
| Theme | Dark mode menyeluruh (`bg-brand-surface: #12121a`) |
| UI Islands | React 19 (SVG Builder only) |
| Content | Astro Content Collections (Markdown) & Local TS Data |
| Sitemap | `@astrojs/sitemap` |

---

## Brand Config — `src/config/site.ts`
Single source of truth for all contact, social, address & brand data.

- **Colors:** Primary `#f97316` (Orange Api), Accent `#f97316`, Dark Mode `#12121a` (Surface)
- **Contact:** `0852-1511-1125`
- **WhatsApp:** `6285215111125`
- **Email:** `info@laserindopalembang.com`
- **Address:** Jl. AMD Jl. Pertanian No.105, Talang Jambe, Sukarami, Palembang 30155
- **Social:** Instagram, Facebook, Pinterest
- **Hero tagline:** `by Sriwijaya Grafika — sejak 2008`

---

## Site Structure (60 pages)

### Static Pages (7)
- `/` — Beranda (hero image + dark overlay)
- `/harga` — Harga & Biaya
- `/faq` — FAQ
- `/kontak` — Kontak
- `/tentang` — Tentang Kami
- `/builder` — Interactive SVG Builder

### Dynamic Routes
- `/layanan/[slug]` — 6 layanan (pagar, kanopi, partisi, railing, fasad, plat-nama)
- `/layanan/[service]/motif/[motif]` — 28 motif detail pages (auto-generated from service data, unlimited)
- `/material/[slug]` — 5 material (besi, stainless, akrilik, kayu-mdf, acp-pvc)
- `/blog/[id]` — Blog articles via Content Collections

---

## Key Architecture

### Data Flow
- Blog content in `src/content/blog/` (Markdown)
- Global config in `src/content.config.ts` (Astro 5 Loaders)
- Other data in `src/data/` — services, serviceMotifs, motifs, faq, pricing, materials
- Single config at `src/config/site.ts`
- No database or external CMS — fully static
- **`serviceMotifs.ts`** auto-generates from `services.ts` — adding a motif name to `services.ts` automatically creates a new detail page

### Route Patterns
- `/layanan/[service]/motif/[motif].astro` — nested dynamic route for motif detail pages
- Three separate `[slug].astro` pages for `/layanan/`, `/material/`, `/blog/`

### Components
| Component | Scope |
|-----------|-------|
| `BaseLayout.astro` | Global HTML shell, fonts (Oxanium + Plus Jakarta Sans), SEO Head, Schema |
| `SEOHead.astro` | Per-page meta/title/description/OG image |
| `Schema.astro` | JSON-LD (WebSite, Organization, LocalBusiness, FAQ, Article, Service, Product, BreadcrumbList) |
| `Header.astro` | Nav + mobile hamburger menu (dark bg, orange accent), inline SVG logo |
| `Footer.astro` | Contact, social links, address (dark bg, all text zinc-400 except h4 white) |
| `CTABanner.astro` | WhatsApp CTA strip |
| `ScrollReveal.astro` | Intersection Observer + page enter animations |
| `ServiceCard.astro` | Reusable card: image + title + description + price range |
| `BlogCard.astro` | Card for blog index and homepage snippets |
| `MotifPicker.tsx` | React — motif category/type selector |
| `Controls.tsx` | React — material, variant, size, repeat, price estimate |
| `SVGWorkspace.tsx` | React — main builder with single + 2×2 tiled preview |

### Animations
- Page enter: fade-in + translateY via `body.page-loaded`
- Scroll reveal: `animate-fade-up`, `animate-stagger`, `animate-fade-in`, `animate-scale-in`
- IntersectionObserver in `ScrollReveal.astro`

---

## Image Assets

| Folder | Purpose |
|--------|---------|
| `public/img/layanan/` | 6 service hero images (used in homepage, layanan index, detail pages) |
| `public/img/motif/` | 28 motif images per service (`{serviceSlug}-{motifSlug}.webp`) — needs real photos |
| `public/hero_laserindo_palembang.webp` | Homepage hero background / default OG image |
| `public/favicon.svg` | SVG favicon |

### Motif Image Naming
Pattern: `{serviceSlug}-{motif-slug}.webp` where `motif-slug` is:
- lowercase, `&` → `dan`, remove special chars, spaces → hyphens
- Example `public/img/motif/pagar-geometris-minimalis.webp`

### Motif Image Placeholder Fallback
If motif image doesn't exist yet, `[slug].astro` falls back to `service.image`. No broken images.

---

## Formatting Conventions

### Price Format
All prices use `Rp. ` format (Rp dot space):
- `formatPrice()` in `src/lib/utils.ts` returns `Rp. 1.000.000`
- Hardcoded `priceRange` strings use `Rp. 800.000 - Rp. 3.000.000 / m²`

### Logo
Inline SVG in Header.astro and Footer.astro (white + orange accent paths).
No external image file for logo.

---

## Progress Status

### ✅ Done
- [x] Project init: Astro 5 + Tailwind v4 + React + MDX + Sitemap
- [x] Single config file (`src/config/site.ts`) with real contact/address
- [x] Dark mode menyeluruh — orange api (`#f97316`) only
- [x] Font Oxanium untuk h1, Plus Jakarta Sans untuk body
- [x] Inline SVG logo di navbar & footer
- [x] Base layout + SEOHead + Schema components
- [x] UI components: Header, Footer, CTABanner, ScrollReveal, ServiceCard
- [x] Hero image background + gradient overlay
- [x] Footer: semua teks zinc-400, h4 white
- [x] Page enter + scroll reveal animations
- [x] Data files: services, serviceMotifs, motifs, faq, pricing, materials, blog
- [x] 60 pages generated
- [x] 6 layanan detail pages with images (4:3 crop)
- [x] 28 motif detail pages (`/layanan/[service]/motif/[motif]`)
- [x] Motif cards with images on service detail page
- [x] Motif images in homepage "Motif Populer 2026" section
- [x] Harga page format `Rp. ` everywhere
- [x] OG image per page (motif/service-specific, fallback to hero)
- [x] Schema: WebSite, Organization, LocalBusiness, Service, Product, BreadcrumbList
- [x] SVG Builder data layer (15 motifs x 5 variants)
- [x] Migrasi Blog ke Astro Content Collections (Markdown)
- [x] Implementasi skema blog ketat (titleSeo, excerpt, pengantar, kesimpulan, imgPrompt)
- [x] Pembuatan Laserindo Knowledge Base (`src/data/laserindo-knowledge-base.md`)
- [x] Integrasi narasi brand Sriwijaya Grafika ke `src/config/site.ts`
- [x] Penambahan section "Update Terbaru" (Blog) di Homepage
- [x] .gitignore initialized
- [x] Git repo initialized
- [x] AGENTS.md updated

### 🔜 Before Launch
- [ ] Tulis ulang artikel blog pertama berdasarkan standar Knowledge Base
- [ ] Upload remaining motif images (Daun Tropis Lebar, dll) to `public/img/motif/`
- [ ] Verify all JSON-LD schemas render correctly
- [ ] Test deploy on Netlify/Vercel
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics / Search Console verification

### 🔮 Future Plans
- Add pagination to blog index
- Add before/after image comparison for portfolio
- Add customer testimonials section
- Consider Google Sheets CMS if non-technical staff need to edit content

---

## Reminders
- Component `<style>` blocks CANNOT use `@apply` in Tailwind v4 — use inline utility classes
- React islands must use `client:load` for interactive components
- `src/config/site.ts` is the single source of truth — don't hardcode contact info elsewhere
- All h1 use Oxanium + uppercase via global.css base styles
- Adding motif names to `services.ts` `motifs[]` array **automatically** generates new detail pages via `serviceMotifs.ts`
- Motif slug format: `&` → `dan`, remove `()`, spaces → hyphens
- Motif section on homepage uses explicit `motifImageMap` in `index.astro` frontmatter — update when adding new motif images
- Portfolio page was removed — all motif link references redirect to `/layanan` instead
- AI Writing: Rujuk `src/data/laserindo-knowledge-base.md` sebelum menulis blog. Dilarang Hanzi/Emoji.
- Blog images: Gunakan `imgPrompt` dari frontmatter untuk generate cover di AI Image Generator.
