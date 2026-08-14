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
<!-- END:agents-long-memory -->
