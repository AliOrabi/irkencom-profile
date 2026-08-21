<!-- BEGIN:shadcn-setup-rule -->
# Shadcn Design System Workflow
When instructed to unify, setup, or roll out a design system using shadcn, ALWAYS begin by executing the official shadcn initialization command (e.g., `npx shadcn@latest init`) to configure `components.json`, `tailwind.config.js`, and the global CSS correctly. DO NOT manually attempt to configure the base CSS variables or Tailwind tokens without first running this command. Proceed to manually refine or add components only after the initialization is complete and verified.
<!-- END:shadcn-setup-rule -->

<!-- BEGIN:agents-long-memory -->
# 📄 Comprehensive Executive Report: Deployment & Codebase Fixes (v0.0.1)

**Project:** `irken.com.eg` (`irkencom-profile`)  
**Environment:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Vercel  
**Status:** **Build Succeeded & Production Ready**  

---

## 1. 🎯 Summary of Root Causes & Resolutions

| Issue & Error | Root Cause | Fix & Resolution Applied |
| :--- | :--- | :--- |
| **Vercel Directory Listing (`Index of /`)** | Vercel preset was misidentified or missing repository-level framework definition. | Created `vercel.json` with `{"framework": "nextjs"}` to explicitly instruct Vercel's build container to use Next.js App Router defaults. |
| **Lockfile Out-of-Sync** | `package.json` had `"next": "^15.0.3"`, but `package-lock.json` retained `next@16.3.1` causing `npm ci` failures. | Ran `npm install --package-lock-only` to strictly sync all dependency locks with Next.js `^15.0.3` and committed to `main`. |
| **ESLint Module Resolution Error**<br>`Cannot find module 'eslint-config-next/core-web-vitals'` | ESLint 9 Flat Config (`eslint.config.mjs`) was using subpath imports that are not available in `eslint-config-next@15`. | Refactored `eslint.config.mjs` to use `@eslint/eslintrc` **`FlatCompat`**, and added `@eslint/eslintrc` to `devDependencies`. |
| **TypeScript PageProps Error**<br>`Type '{ params: { slug: string; } }' does not satisfy constraint 'PageProps'` | Next.js 15 dynamic route `params` are asynchronous `Promise` objects. | Updated `src/app/insights/[slug]/page.tsx` to `async function` and awaited `params: Promise<{ slug: string }>`. |
| **Image Optimization Warnings**<br>`@next/next/no-img-element` | Using raw `<img>` tags across team and insight components. | Replaced `<img>` with Next.js optimized `<Image>` components across `src/app/insights/[slug]/page.tsx`, `src/app/insights/page.tsx`, `src/components/sections/BlogPreview.tsx`, and `src/app/about/page.tsx`. |

---

# 📄 Comprehensive Executive Report: UI/UX Redesign & Architecture Pivot (v0.0.2)

**Project:** `irken.com.eg` (`irkencom-profile`)  
**Objective:** Transition from a dense "developer tool" aesthetic to an airy, approachable "consumer fintech" layout (inspired by modern platforms like Paymob).

## 1. 🎯 Summary of Changes & Design System Updates

| Change Area | Details |
| :--- | :--- |
| **Global Styling (`globals.css`)** | Transitioned to generous curves: updated global `--radius` to `1.5rem` (24px) for softer containers and used pill-shaped (`rounded-full`) borders for all buttons. |
| **The "Light Canvas" Rule** | Sections were migrated away from dark Navy/Slate backgrounds (`bg-brand-primary`) to clean whitespace (`bg-white` and `bg-slate-50`), maximizing legibility. |
| **Homepage Architecture** | Pruned the dense ~15 section homepage down to a clean 6-section flow, removing repetitive statistical and platform capability blocks in favor of high-impact visual sections. |
| **Offset Layer Pattern** | Introduced offset geometric patterns (white cards resting on cyan/purple/blue blocks) to create depth without relying on heavy or murky drop shadows. |
| **Header Refactor** | Updated `Header.tsx` to align with the light theme—utilizing a white blurred background on scroll, swapping to the dark-colored logo (`irken-logo-ligth.png`), and using `slate-500` for crisp navigation links. |

---

# 📄 Comprehensive Executive Report: Approved Design System & Polish (v0.0.3)

**Project:** `irken.com.eg` (`irkencom-profile`)  
**Creative North Star:** `"Airy Fintech & Frictionless Flow"`  
**Status:** **Approved Design System Committed**

## 1. 🎯 Core System Invariants & Rules

1. **Strict Pill Geometry (`The Strict Pill Rule`):**
   - All interactive buttons (`PrimaryButton`, `GhostButton`, `SecondaryButton` in `src/components/ui/Buttons.tsx`), badges, and tags MUST use `rounded-full` (9999px).
   - Never use MUI Emotion wrappers or squarish corners (`rounded-md` / 6px) for action elements.
2. **Generous Container Radii (`The Generous Curve Rule`):**
   - Standard structural cards and content containers use `24px` (`rounded-3xl`) or `32px` (`rounded-[2rem]`).
   - Floating form card uses `rounded-[2.5rem]`.
3. **Contrast & Light Canvas (`The Light Canvas Rule`):**
   - General marketing canvases default to clean white (`#FFFFFF`) or Slate 50 (`#F8FAFC`).
   - Video overlays in Hero use deep dark contrast (`from-[#0A1118]/95 via-[#0A1118]/85 to-[#0A1118]/65`) to ensure >4.5:1 text contrast for white display typography.
   - Footers are grounded with FAAC Navy (`#0F172A` / `#1A2530`).
4. **Core Business Model & Positioning (Authoritative):**
   - **What Irken IS:** Egypt's Digital Parking Network & Online Parking Reservation Marketplace (`irken.eg` + `irken.com.eg`). Transforming underutilized parking spaces into lean, revenue-generating digital assets.
   - **What Irken is NOT:** NOT a real estate development / PropTech construction company, NOT a payment gateway (GATS), and NOT a hardware manufacturer.
   - **Terminology Invariant (Strict):** Always use **"Reservation" / "Reserve"** instead of "Booking" / "Book".
   - **Two Primary Objectives:**
     1. **B2B Parking Operators & Asset Owners:** Increase occupancy (fill vacant spots), ensure discoverability on search engines, guarantee advance driver reservations & steady cashflow, and provide the Operator Control Panel (Free tier vs. Pro subscription with advanced analytics).
     2. **B2C Drivers (Vehicle Owners):** Consumer platform (`irken.eg`) to search, compare rates, reserve advance spots, pay online, and manage vehicle accounts.
   - **Primary Target Audience for `irken.com.eg`:** Licensed parking operators (private & public), parking asset investors seeking smart/cost-effective monetization, and licensed parking/valet professionals.
5. **No Dead Links:**
   - Navigation links must target active routes or anchors (`#solutions`, `/pricing`, `/contact`, `/services/...`).

## 2. 📂 Key Files & Artifacts
- [`DESIGN.md`](file:///d:/Company-website/irkencom-profile/DESIGN.md): Authoritative design tokens and system principles.
- [`.impeccable/design.json`](file:///d:/Company-website/irkencom-profile/.impeccable/design.json): Machine-readable sidecar with drop-in component snippets, tonal ramps, shadows, and motion tokens.
- [`src/components/ui/Buttons.tsx`](file:///d:/Company-website/irkencom-profile/src/components/ui/Buttons.tsx): Canonical pill button primitives.
<!-- END:agents-long-memory -->
