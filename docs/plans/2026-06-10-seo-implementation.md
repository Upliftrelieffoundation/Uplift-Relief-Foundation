# SEO Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix title tags, H1s, page content, and page speed for Uplift Relief Foundation website.

**Architecture:** Next.js 16 App Router with metadata API. Title/H1 fixes are metadata changes in layout + page files. Content changes are copy expansions in component files. Speed changes are config + image attribute updates.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4

---

### Task 1: Remove hardcoded `<title>` from layout.tsx

**Files:**
- Modify: `app/layout.tsx:99`

**Step 1: Remove redundant hardcoded title**

The `<title>` tag on line 99 duplicates the metadata API `title` field which is already set at line 13-16 and auto-injected by Next.js. Remove it.

In `app/layout.tsx`, remove the `<title>Uplift Relief Foundation</title>` line.

Also fix the className typo on the html tag (line 97 has mismatched quotes: `className={'data-scroll-behavior="smooth'}` should be `className="data-scroll-behavior-smooth"` or similar valid value).

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds, no title-related warnings.

---

### Task 2: Update default metadata title with keywords

**Files:**
- Modify: `app/layout.tsx:13-15`

**Step 1: Rewrite default title**

Change from:
```ts
title: {
  default: "Uplift Relief Foundation | Rescue. Educate. Transform.",
  template: "%s | Uplift Relief Foundation",
},
```

To include geo + keyword rich:
```ts
title: {
  default: "Uplift Relief Foundation | NGO in Nagpur for Street Dog Rescue & Free Education",
  template: "%s | Uplift Relief Foundation Nagpur",
},
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

---

### Task 3: Fix homepage H1 to include English keywords

**Files:**
- Modify: `app/Components/Home/Hero.tsx:52-55`

**Step 1: Rewrite H1 to include English subtitle with keywords**

Current H1 is Sanskrit-only. The H1 should be the main heading of the page. Keep the Sanskrit brand tagline but add an English keyword-rich element.

Change:
```tsx
<h1 className="mb-7 text-white">
  जीवनम् उद्धर।
  <em>भविष्यं पुनर्लिख।</em>
</h1>
```

To incorporate keywords visibly on the page. One approach: use the Sanskrit as the visual heading but add a keyword-rich subtitle as a `<p>` tag before or after it (since H1 is already used). Or change to wrap both:

```tsx
<div className="mb-7">
  <h1 className="text-white mb-4">
    जीवनम् उद्धर। <em>भविष्यं पुनर्लिख।</em>
  </h1>
  <p className="text-gold-bright text-lg font-semibold">
    Nagpur's Trusted NGO for Street Dog Rescue & Free Child Education
  </p>
</div>
```

Note: The `<h1>` remains on the Sanskrit tagline for brand identity, and the keyword-rich text sits as a subtitle/standfirst within the same visual hierarchy.

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

---

### Task 4: Update page-specific metadata with keywords

**Files:**
- Modify: `app/(pages)/about/page.tsx:6-10`
- Modify: `app/(pages)/donate/page.tsx:5-8`
- Modify: `app/(pages)/work/page.tsx:6-9`
- Modify: `app/(pages)/impact/page.tsx:7-10`
- Modify: `app/(pages)/stories/page.tsx:5-9`

**Step 1: Rewrite each page's metadata**

About page:
```ts
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Uplift Relief Foundation — a grassroots NGO in Nagpur rescuing street dogs and providing free education for underprivileged children since 2026.",
};
```

Donate page:
```ts
export const metadata: Metadata = {
  title: "Donate",
  description: "Support street dog rescue and free child education in Nagpur. Donate to Uplift Relief Foundation — 100% transparent NGO. Monthly or one-time giving.",
};
```

Work page:
```ts
export const metadata: Metadata = {
  title: "Our Work",
  description: "Uplift Relief Foundation runs 24/7 street dog rescue operations and free education centres for underprivileged children across Nagpur, India. See our programs.",
};
```

Impact page:
```ts
export const metadata: Metadata = {
  title: "Impact & Transparency",
  description: "2,400+ animals rescued, 1,850+ children educated. See the measurable impact of Uplift Relief Foundation's work in Nagpur — complete financial transparency.",
};
```

Stories page:
```ts
export const metadata: Metadata = {
  title: "Field Stories",
  description: "Real stories from the ground: street dog rescues, education breakthroughs, and community transformation by Uplift Relief Foundation in Nagpur.",
};
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds, all pages have keyword-rich titles and descriptions.

---

### Task 5: Expand homepage content

**Files:**
- Modify: `app/Components/Home/Intro.tsx:35-42`

**Step 1: Expand the Intro section copy**

Current copy is minimal. Expand the two paragraphs to be more descriptive (add ~100 more words):

Replace the two `<p>` elements with richer copy:

```tsx
<p className="body-lg text-[rgba(11,20,37,0.7)]!">
  Uplift Relief Foundation is a grassroots NGO based in Nagpur, Maharashtra, 
  dedicated to two urgent causes: rescuing and rehabilitating injured street 
  animals, and providing free, quality education to underprivileged children 
  who would otherwise be denied the chance to learn.
</p>
<p className="body-lg text-[rgba(11,20,37,0.7)]!">
  Our street dog rescue team operates 24/7 — responding to accidents, abuse cases, 
  and disease outbreaks across Nagpur. Every animal receives veterinary care, 
  shelter, and rehabilitation. In parallel, our free education centres give 
  children from slums and low-income families access to tuition, school supplies, 
  mentorship, and life-skills training.
</p>
<p className="body-lg text-[rgba(11,20,37,0.7)]!">
  Founded by young changemakers in 2026, we believe compassion — when backed by 
  relentless action — transforms entire communities. 100% of public donations 
  go directly to our programs, with full transparency on every rupee spent.
</p>
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

---

### Task 6: Expand Work page content

**Files:**
- Modify: `app/(pages)/work/page.tsx` (add a content section or expand existing)

**Step 1: Add detailed program descriptions to Work page**

The Work page currently renders `WorkHeroSection` + `WorkCausesSection` + `CtaSection`. Look at `WorkCausesSection` to see if it can be expanded. If needed, add a new text section between hero and causes.

Let me check what WorkCausesSection looks like first, then decide.

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

---

### Task 7: Configure page speed optimizations

**Files:**
- Modify: `next.config.ts`

**Step 1: Update next.config.ts with optimization settings**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://*.supabase.co;",
        },
      ],
    },
  ],
};

export default nextConfig;
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

---

### Task 8: Add lazy loading to below-fold images

**Files:**
- Modify: `app/Components/Home/Intro.tsx` (volunteer_team image)
- Modify: `app/Components/Home/Causes.tsx` (dog_rescue, children_class images)

**Step 1: Add loading="lazy" + sizes to below-fold images**

In `Intro.tsx`, the volunteer_team image is in the "Who We Are" section which appears after the Hero. Add:
```tsx
loading="lazy"
sizes="(max-width: 768px) 100vw, 50vw"
```

In `Causes.tsx`, both cause images are below the fold. Add:
```tsx
loading="lazy"
sizes="(max-width: 768px) 100vw, 50vw"
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

---

### Task 9: Final build verification

**Step 1: Full build**

Run: `npm run build`
Expected: Build succeeds with no errors.

**Step 2: Lint check**

Run: `npm run lint`
Expected: No lint errors.
