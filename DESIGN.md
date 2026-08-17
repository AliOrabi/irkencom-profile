---
name: Irken Solutions
description: Leading Digital Transformation in Parking
colors:
  primary: "#569BAA"
  primary-hover: "#457A87"
  background: "#FFFFFF"
  background-dark: "#1A2530"
  card: "#FFFFFF"
  card-dark: "#2C4A5B"
  text-primary: "#0F172A"
  text-muted: "#64748B"
typography:
  headline:
    fontFamily: "var(--font-en-heading), Inter, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "var(--font-en-body), Inter, sans-serif"
    fontWeight: 400
  arabic:
    fontFamily: "var(--font-ar), system-ui, sans-serif"
rounded:
  md: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "9999px"
    padding: "16px 32px"
---

# Design System: Irken Solutions

## Overview

**Creative North Star: "Airy Fintech & Frictionless Flow"**

The Irken Solutions visual system embodies digital transformation within the Mobility and smart parking sector. We've pivoted from a rigid, heavy "developer tool" aesthetic to an approachable, modern, and airy consumer-fintech design (inspired by Paymob). It focuses on extreme legibility, generous curves, and soft depth to build instant trust and accessibility.

**Key Characteristics:**
- Bright, airy, and approachable tone.
- Generous border radii (24px - 32px) and pill-shaped interactive elements.
- Soft, highly diffused drop shadows that make surfaces appear to float.
- Offset geometric background patterns (white cards resting on brightly colored blocks).
- Crisp, bold typography with tight tracking for headlines.

## Colors

The palette leverages bright, airy whitespace, reserving our primary teal for high-impact CTAs and deep navy for targeted contrasting sections (like footers).

### Primary
- **Irken Teal** (#569BAA): Used for primary CTAs, active states, and brand highlights.
- **Irken Teal Hover** (#457A87 / #4A8B9C): Hover states and interactive highlights.

### Neutral
- **Slate White / White** (#FFFFFF): The primary canvas for all marketing and consumer-facing pages.
- **Slate 50** (#F8FAFC): Used for subtle section separations or container backgrounds.
- **FAAC Navy** (#1A2530): Reserved for high-contrast footer CTAs or deep operational dashboards. 
- **Deep Teal** (#2C4A5B): Used for elevated cards on dark backgrounds.
- **Slate 500** (#64748B): Secondary text and descriptive copy.
- **Slate 900** (#0F172A): Primary text for light backgrounds (headlines).

### Named Rules
**The Light Canvas Rule.** General marketing sections must default to clean white (`#FFFFFF`) or Slate 50 (`#F8FAFC`). Avoid heavy, dark technical backgrounds for general landing page sections.

**The Offset Layering Rule.** Introduce brightly colored, solid geometric background shapes (cyan/blue) placed offset behind primary white cards to create depth. Use soft, diffused background blobs/gradients to break up empty white space.

## Typography

Arabic-first (RTL) paired with European precision.

**Display Font:** Space Grotesk (with Inter fallback)
**Body Font:** Inter
**Arabic Font:** Tajawal (Geometric Naskh)

### Hierarchy
- **Display** (800 weight, 56px-72px): Hero section titles. Must use tight tracking (`tracking-tight`).
- **Headline** (700 weight, 40px-48px): Main section headers.
- **Title** (600 weight, 24px): Card titles and sub-sections.
- **Body** (400 weight, 16px/18px): Standard operational text and reading copy.
- **Label** (600 weight, 12px-14px): Metadata, UI labels, and pill badges.

### Named Rules
**The Bilingual Symmetry Rule.** Arabic content is treated with the same geometric precision as English, adjusting base sizes slightly to ensure equal visual weight and legibility in RTL layouts.

## Layout

The spatial model relies on clean container boundaries and generous whitespace in marketing views. Sections should feel focused and not overly dense. Consolidate small data points into clean 3-column benefit grids.

## Elevation & Depth

Soft, floating, and airy.

### Shadow Vocabulary
- **Floating Shadows:** Cards resting on light backgrounds should utilize expansive, highly diffused, low-opacity drop shadows (e.g., `shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]`) to feel like they are floating.
- **Glow Accent:** Subtle colored shadows used on primary actions or active states to indicate interactivity.

### Named Rules
**The Soft Depth Rule.** Break the "Flat-By-Default" rule. Use soft, diffused shadows or offset solid geometric blocks to create a feeling of floating depth.

## Shapes

Highly approachable and smooth.

### Named Rules
**The Generous Curve Rule.** Standard structural cards and containers must use `24px` (`rounded-3xl`) or `32px` radii. Sharp corners are strictly prohibited. Buttons and small interactive badges must be fully pill-shaped (`rounded-full`).

## Components

### Buttons
- **Shape:** Pill-shaped (`rounded-full`).
- **Primary:** Irken Teal background, white text, bold. Soft glowing hover shadow.
- **Secondary:** White or Slate 50 background, Slate border, Slate 900 text.

### Cards / Containers
- **Corner Style:** `rounded-3xl` (24px) or `rounded-[2rem]` (32px).
- **Background:** White.
- **Shadow Strategy:** Soft diffused shadows (`shadow-soft-xl`) or Offset solid background blocks.

## Do's and Don'ts

### Do:
- **Do** use massive border radii (`24px+`) and pill shapes for a friendly aesthetic.
- **Do** use abundant white/light-gray space for marketing sections.
- **Do** use soft, diffused shadows to make elements float.
- **Do** consolidate text-heavy sections into clean grids with offset background cards.

### Don't:
- **Don't** use strict 6px radii.
- **Don't** make surfaces completely flat and devoid of depth.
- **Don't** clutter the homepage with overly dense, text-heavy sections.
