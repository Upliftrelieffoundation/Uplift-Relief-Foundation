# SEO Optimization Design — Uplift Relief Foundation

## Overview

Comprehensive SEO fixes across the Uplift Relief Foundation Next.js 16 site. Four workstreams: title/H1 metadata, page content expansion, page speed optimization, and AMP alternative (Core Web Vitals).

## 1. Title Tags & H1 Keywords

### Current Problems
- Hardcoded `<title>` in `layout.tsx:99` duplicates Next.js metadata API
- Default title "Uplift Relief Foundation | Rescue. Educate. Transform." lacks geo-keywords
- Homepage H1 is Sanskrit-only, no English keyword coverage
- Page titles omit primary keywords: "NGO Nagpur", "Street Dog Rescue", "Free Education"

### Fixes
- Remove hardcoded `<title>` from `layout.tsx`
- Rewrite default title: "Uplift Relief Foundation | NGO in Nagpur for Street Dog Rescue & Free Education"
- Rewrite homepage H1: combine Sanskrit tagline with English subtitle containing keywords
- Page-specific title updates:
  - About: "About Uplift Relief Foundation | NGO Nagpur Animal Rescue & Child Education"
  - Donate: "Donate to Uplift Relief Foundation | Support Animal Rescue & Child Education in Nagpur"
  - Work: "Our Work | Street Dog Rescue & Free Education Programs in Nagpur"
  - Impact: "Our Impact | Uplift Relief Foundation Nagpur — Transparency Report"
  - Stories: "Field Stories | Animal Rescue & Education Success Stories Nagpur"

## 2. Page Content Expansion

### Current Problems
- Homepage sections average ~50 words
- About page is minimal (intro + quote only)
- Work page lacks detailed program descriptions
- No dedicated SEO copy for key programs

### Fixes
- Expand Home/Intro section with 100-150 words on dual-mission narrative
- Add program detail sections to Work page (rescue ops, education curriculum)
- Add narrative context to Impact page (per-metric storytelling)
- Ensure all pages have minimum 300 words of body copy

## 3. Page Speed Optimization

### Current Problems
- `next.config.ts` is nearly empty
- Images lack explicit `loading=lazy` on below-fold content
- No CDN/cache configuration
- No bundle optimization

### Fixes
- Configure `next.config.ts`: images domains, optimizePackageImports for lucide-react
- Add `loading="lazy"` + `sizes` attributes to below-fold images
- Enable PPR (Partial Prerendering) if available
- Configure `Content-Security-Policy` headers

## 4. AMP Alternative

AMP was dropped in Next.js 16. Replaced with standard mobile performance optimization:
- Core Web Vitals optimization (LCP, CLS, INP)
- Responsive image optimization with next/image
- Streaming and progressive hydration
- Service worker for caching (future)

## Implementation Order

1. Title/H1/metadata fixes (quick wins, ~15 min)
2. Page content expansion (~45 min)
3. Speed/performance config (~30 min)

## Verification

- `npm run build` must succeed
- Titles render correctly in `<head>`
- H1 text is visible and keyword-rich
- Images lazy-load below fold
