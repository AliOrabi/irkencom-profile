# Irken Solutions - Next.js Corporate Site Tasklist

## Phase 2: Technical Architecture
### [x] Task 1: Initialize shadcn/ui and Tailwind CSS v3
- Install shadcn/ui components base.
- Configure `components.json`.
- Modify `tailwind.config.ts` to include Deep Tech color variables and spacing.
- Update `globals.css` with the CSS variables mapped in the design system.

### [x] Task 2: Setup Core Layout and i18n support
- Configure `app/layout.tsx` to handle `dir` (LTR/RTL).
- Setup primary fonts: Tajawal (Arabic), Space Grotesk (Headings), Inter (Body) using `next/font/google`.
- Create a localized content architecture for text (e.g. data dictionary).

## Phase 3: Development
### [ ] Task 3: Global Header & Navigation
- Build sticky navigation with brand logo.
- Implement Language Switch toggle (EN/AR).
- Create dropdown menus for Services, Service Providers, and Company.
- Add "Request Integration" CTA.

### [ ] Task 4: Hero Section & Dashboard Showcase
- Build the "Unlocking Urban Potential" hero layout.
- Implement the "Systemic Yield Engine" terminal-style dashboard UI with pulsing live indicator.
- Apply grid pattern background globally.

### [ ] Task 5: Platform & Mobility Ecosystem Sections
- Build the 4-column feature grid for "Asset-Light Infrastructure".
- Implement the Mobility Ecosystem diagram with micro-animations (data-route lines).

### [ ] Task 6: Digital Transformation & Sectors Sections
- Build the 3-column steps for Digital Transformation.
- Build the Sectors feature cards.

### [ ] Task 7: Competitive Advantage & Integration Form
- Build the side-by-side legacy vs Irken comparison panel.
- Implement the Integration contact form.

### [ ] Task 8: Global Footer
- Build footer grid with corporate links, consumer portal box, and copyright.

## Phase 4: Final Integration & Validation
### [ ] Task 9: Final QA & LTR/RTL Audit
- Ensure `0rem` radius is respected everywhere.
- Verify Deep Tech color palette exact matches.
- Validate responsiveness and RTL rendering.
