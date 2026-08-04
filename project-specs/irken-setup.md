# Irken Solutions - Next.js Corporate Site Spec

## 1. Project Overview
Migrate the existing Irken Solutions corporate site (currently a single HTML file) into a scalable, robust Next.js (App Router) application utilizing Tailwind CSS v3 and shadcn/ui. The project serves B2B enterprise clients (real estate developers, municipalities, and parking operators) in Egypt and the MENA region.

## 2. Technical Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v3
- **Component Library:** shadcn/ui (customized for 0rem radius and Deep Tech color palette)
- **Language:** TypeScript
- **i18n:** Must support LTR (English) and RTL (Arabic) natively.

## 3. Design System Conformance (Strict)
- **Theme:** "Deep Tech" (Dark Mode Default)
  - Background: Space Navy (`#0A192F`)
  - Foreground: Ice Blue (`#CCD6F6`)
  - Cards/Elevated: Onyx (`#112240`)
  - Accent/CTAs: Electric Cyan (`#64FFDA`)
  - Text Secondary: Slate Grey (`#8892B0`)
- **Geometry:** 0rem border radius globally across all components (buttons, inputs, cards). No rounded corners.
- **Typography:**
  - English Headings: Space Grotesk
  - English Body: Inter
  - Arabic (Primary): Tajawal (Fallback: Cairo)
- **Visuals:** Grid patterns in backgrounds, terminal-like outputs for data displays, sharp edge containers.

## 4. Required Pages & Sections (Based on Reference HTML)
1. **Global Header:** Sticky navigation, Language Switch (EN/AR), "Request Integration" CTA, dropdown menus for Services, Service Providers, and Company.
2. **Hero Section:** "Unlocking Urban Potential" with terminal-style dashboard showcase (Systemic Yield Engine).
3. **Ticker Section:** Scrolling text for Urban Mobility keywords.
4. **Platform Section (Asset-Light Infrastructure):** 4-column feature grid.
5. **Mobility Ecosystem Section:** Diagram showing the flow from Static Asset -> Capacity Engine -> Frictionless Mobility.
6. **Digital Transformation Section:** 3-column steps (Audit, Deployment, Yield Digitization).
7. **Sectors Section:** Target audiences (Developers, Municipalities, Operators).
8. **Competitive Advantage:** Legacy vs Irken architecture comparison.
9. **Integration Form:** Contact form for enterprise integration.
10. **Global Footer:** Corporate links, Consumer Portal link, copyright.

## 5. Specific Features
- **Language Switcher:** A square toggle switch changing `dir="ltr"` to `dir="rtl"` and updating fonts and layout accordingly.
- **Micro-animations:** Data-route lines in the mobility diagram, pulsing "SYSTEM LIVE" indicators.

## 6. QA & Acceptance Criteria
- Must achieve 100% adherence to 0rem border radius rule, including all shadcn/ui components.
- Must display perfectly in both LTR and RTL modes.
- Must be fully responsive across desktop, tablet, and mobile.
