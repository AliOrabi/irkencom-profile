---
name: Irken Solutions
description: Digital Transformation in Parking & Urban Mobility
colors:
  primary: "#569BAA"
  primary-hover: "#457A87"
  canvas-light: "#FFFFFF"
  canvas-subtle: "#F8FAFC"
  canvas-dark: "#0F172A"
  navy-ground: "#1A2530"
  text-dark: "#0F172A"
  text-muted: "#64748B"
  text-light: "#FFFFFF"
  border-light: "#E2E8F0"
typography:
  display:
    fontFamily: "var(--font-en-heading), Space Grotesk, Inter, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-en-heading), Space Grotesk, Inter, sans-serif"
    fontWeight: 700
  title:
    fontFamily: "var(--font-en-heading), Space Grotesk, Inter, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "var(--font-en-body), Inter, sans-serif"
    fontWeight: 400
  arabic:
    fontFamily: "var(--font-ar), Tajawal, system-ui, sans-serif"
    fontWeight: 500
rounded:
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-light}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  card-standard:
    backgroundColor: "{colors.canvas-light}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-hero:
    backgroundColor: "{colors.canvas-light}"
    rounded: "{rounded.xl}"
    padding: "40px"
---

# Design System: Irken Solutions

## Overview

**Creative North Star: "Airy Fintech & Frictionless Flow"**

The Irken Solutions visual system embodies digital transformation within the Mobility and smart parking sector. The design merges clean, approachable whitespace with high-trust precision (inspired by modern consumer fintech platforms like Paymob). It emphasizes extreme legibility, generous organic curves, tactile pill buttons, and soft floating depth.

**Key Characteristics:**
- **Bright & Approachable Canvas:** Clean white (`#FFFFFF`) and slate 50 (`#F8FAFC`) backgrounds for primary marketing sections.
- **Generous Radii & Pill Geometry:** Soft containers (`24px` to `32px` radii) paired with pill-shaped (`rounded-full`) buttons and badges.
- **Offset Layering Depth:** White cards resting on offset geometric colored blocks to generate structured depth without muddy drop shadows.
- **Cinematic Dark Accents:** Deep FAAC Navy (`#1A2530`) and rich slate (`#0F172A`) reserved for high-contrast hero video overlays and grounded footers.
- **Bilingual Typographic Harmony:** Space Grotesk and Inter paired seamlessly with Tajawal for English and Arabic RTL layouts.

## Colors

The palette balances clean white canvases with authoritative Irken Teal accents and grounded FAAC Navy foundations.

### Primary
- **Irken Teal** (#569BAA): Primary brand color for high-impact CTAs, active states, and glowing metrics.
- **Irken Teal Hover** (#457A87): Interactive hover states for primary buttons and interactive links.

### Neutral
- **Slate White** (#FFFFFF): Primary background for marketing sections, benefit cards, and floating forms.
- **Slate 50** (#F8FAFC): Subtle background canvas for alternating feature zones and form input backgrounds.
- **Slate 900** (#0F172A): Primary text color for light backgrounds and dark grounded footer background.
- **FAAC Navy** (#1A2530): Deep technical background for terminal widgets and high-contrast dark sections.
- **Slate 500 / Muted Text** (#64748B): Secondary typography, descriptions, and metadata.
- **Slate 200 / Border Light** (#E2E8F0): Crisp, clean container borders and form input strokes.

### Named Rules
**The Light Canvas Rule.** Primary marketing sections default to clean white (`#FFFFFF`) or Slate 50 (`#F8FAFC`). Avoid dense dark backgrounds on general marketing content.

**The Offset Layering Rule.** White feature cards rest on offset colored blocks (cyan, purple, blue) to create depth and visual structure without heavy drop shadows.

**The Contrast Guard Rule.** All text rendered on dark overlays must maintain a minimum 4.5:1 contrast ratio against the backdrop.

## Typography

Bilingual harmony combining modern European grotesk precision with geometric Arabic Naskh.

**Display Font:** Space Grotesk (fallback: Inter, sans-serif)
**Body Font:** Inter (fallback: system-ui, sans-serif)
**Arabic Font:** Tajawal (fallback: system-ui, sans-serif)

**Character:** Technical, confident, and highly legible across both LTR and RTL orientations.

### Hierarchy
- **Display** (800 weight, 56px–72px, line-height 1.1, tracking -0.02em): Hero display titles.
- **Headline** (700 weight, 36px–48px, line-height 1.2): Main section titles and feature group headers.
- **Title** (600 weight, 20px–24px, line-height 1.3): Card titles, feature highlights, and metric labels.
- **Body** (400 weight, 15px–16px, line-height 1.6): Standard descriptive paragraphs and reading copy.
- **Label** (600 weight, 12px–13px, tracking 0.14em, uppercase): Buttons, pill badges, and category indicators.

### Named Rules
**The Bilingual Symmetry Rule.** Arabic typography (Tajawal) is rendered with identical visual weight and baseline alignment as English headlines, with layout mirroring automatically handled in RTL.

## Layout

A balanced 12-column grid system with generous vertical padding (`py-20` to `py-28`) to maintain the airy, premium feel. Content containers are capped at `1280px` (`max-w-[1280px] mx-auto px-6 lg:px-8`).

## Elevation & Depth

Surfaces rely on soft tonal layering, crisp borders (`border-slate-200`), and subtle floating shadows.

### Shadow Vocabulary
- **Floating Surface** (`shadow-xl` / `0 20px 25px -5px rgba(0,0,0,0.05)`): Applied to floating lead forms and elevated interactive cards.
- **Pill Hover Shadow** (`hover:shadow-md` / `0 4px 6px -1px rgba(0,0,0,0.1)`): Subtle elevation lift on button hover (`hover:-translate-y-0.5`).

### Named Rules
**The Clean Float Rule.** Depth is created using clean white floating containers over light slate backgrounds rather than harsh multi-layer drop shadows.

## Shapes

Organic, friendly, and soft.

### Named Rules
**The Generous Curve Rule.** All structural cards and containers must use `24px` (`rounded-3xl`) or `32px` (`rounded-[2rem]`) corner radii. Sharp corners (0px–8px) are prohibited on cards.

**The Strict Pill Rule.** All interactive buttons, status tags, and sector badges must use full pill geometry (`rounded-full` / `9999px`).

## Components

### Buttons
- **Shape:** Pill-shaped (`rounded-full`).
- **Primary:** Irken Teal (`#569BAA`), white text, `px-7 py-3.5`, uppercase `text-xs font-semibold`, with hover lift (`hover:-translate-y-0.5 hover:shadow-md`).
- **Ghost:** Transparent background with subtle border, white or slate text, smooth hover tint.
- **Secondary:** White or Slate 50 background, Slate 200 border, Slate 900 text.

### Cards / Containers
- **Corner Style:** `rounded-3xl` (24px) or `rounded-[2.5rem]` (40px).
- **Background:** Pure white (`#FFFFFF`) with subtle border (`border-slate-200/80`).
- **Offset Layer:** Solid cyan/purple/blue background block offset by 12px behind the main card.

### Inputs / Form Fields
- **Style:** Slate 50 background (`bg-slate-50`), Slate 200 border (`border-slate-200`), `rounded-2xl`, `px-4 py-3.5`, `placeholder:text-slate-400`.
- **Focus:** White background (`focus:bg-white`), Irken Teal border (`focus:border-brand-accent`), focus ring 2px.

### Navigation Header
- **Top State:** Transparent on dark hero video with white logo (`irken-white.png`) and white navigation links.
- **Scrolled State:** White blurred background (`bg-white/90 backdrop-blur-md`) with dark logo (`irken-dark.png`) and `text-slate-700` links.
- **CTA:** "Request Integration" pill button anchored to `#integration`.

### Footer
- **Canvas:** FAAC Navy (`#0F172A` / `#1A2530`) with white logo (`irken-white.png`), `text-slate-400` body copy, inline newsletter subscription with pill submit button, and legal link bar.

## Do's and Don'ts

### Do:
- **Do** use `rounded-full` for all buttons, badges, and status pills.
- **Do** use `24px+` radii (`rounded-3xl`, `rounded-[2rem]`) for cards and containers.
- **Do** maintain generous vertical whitespace (`py-20` to `py-28`) across marketing sections.
- **Do** preserve authentic PropTech and smart mobility domain language (Zero CapEx, LPR Flow, Yield Intelligence).
- **Do** use inline SVG or uniform Lucide icons with 1.75–2px stroke weights.

### Don't:
- **Don't** use rectangular or squarish (4px–8px) buttons.
- **Don't** use dense, text-heavy developer UI blocks on public marketing surfaces.
- **Don't** hardcode ad-hoc hex colors in components; use semantic theme tokens and CSS variables.
- **Don't** create dead anchor links; always route to active anchors (`#solutions`, `#integration`) or live routes.
