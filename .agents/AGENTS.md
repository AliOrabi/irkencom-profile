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

## 2. 📂 Key Files Modified & Created

1. `vercel.json` *(New)*: Explicitly defines the Next.js framework preset for Vercel builds.
2. `eslint.config.mjs` *(Updated)*: Configured with `FlatCompat` to support Next 15 rules with ESLint 9.
3. `package.json` & `package-lock.json` *(Updated)*: Added `@eslint/eslintrc: ^3`, synced locks, and bumped version to `v0.0.1`.
4. `src/app/insights/[slug]/page.tsx` *(Updated)*: Next 15 `async params` resolution and Next Image migration.
5. `src/app/insights/page.tsx` *(Updated)*: Migrated to Next Image with responsive layout.
6. `src/components/sections/BlogPreview.tsx` *(Updated)*: Replaced raw image tag with Next Image.
7. `src/app/about/page.tsx` *(Updated)*: Replaced founder avatar `<img>` tags with Next Image.

---

## 3. 🧪 Verification & Build Status

- **Build Test:** `npm run build` executed successfully.
- **Type Checking:** All 26 static and dynamic routes compiled with **0 errors and 0 type violations**.
- **Git State:** All fixes committed and pushed to `origin main` (Commits: `3466171`, `742eb54`, `ae679af`, `4698e79`, `b174cb6`).

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

## 2. 📂 Key Files Modified & Created

1. `DESIGN.md` *(Updated)*: Completely rewritten to codify the new Airy Fintech design rules, color assignments, and component aesthetics.
2. `src/app/globals.css` *(Updated)*: Adjusted root CSS variables (radii, utilities).
3. `src/app/[locale]/page.tsx` *(Updated)*: Simplified the layout tree to only render Hero, Logos, CoreFeatures, Benefits, CaseStudies, and the IntegrationForm CTA.
4. `src/components/sections/CoreFeaturesSection.tsx` *(New)*: Implements the offset background pattern.
5. `src/components/sections/BenefitsSection.tsx` *(New)*: Implements a clean 3-column benefit grid with centralized icons.
6. `src/components/layout/Header.tsx` *(Updated)*: Restyled for the light theme with updated logo logic.
7. `src/components/ui/Buttons.tsx` *(Updated)*: `PrimaryButton` and `GhostButton` updated to pill-shapes (`rounded-full`).

## 3. 🧪 Developer Notes for Future Agents
- **Do not hardcode colors in `tailwind.config.js`:** Always rely on HSL CSS variables mapping in `globals.css` to prevent dark mode desync.
- **Maintain whitespace:** Do not cram components. Give sections `py-24` or `py-32` padding to maintain the airy feel.
- **Logo Usage:** `newiRkenLogo.png` is the all-white logo for dark backgrounds. `irken-logo-ligth.png` is the dark-colored logo for light backgrounds.
<!-- END:agents-long-memory -->
