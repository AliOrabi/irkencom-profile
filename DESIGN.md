---
name: Irken Solutions
description: Leading Digital Transformation in Parking
colors:
  primary: "#569BAA"
  primary-hover: "#457A87"
  background: "#FFFFFF"
  background-dark: "#1A2530"
  card: "#F8FAFC"
  card-dark: "#2C4A5B"
  text-primary: "#0F172A"
  text-muted: "#94A3B8"
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
  md: "6px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
---

# Design System: Irken Solutions

## Overview

**Creative North Star: "The Frictionless Flow"**

The Irken Solutions visual system embodies digital transformation within the Mobility and smart parking sector. It reflects an asset-light, seamless, and intelligent ecosystem. The aesthetic balances a deep, technical interface designed for operational prolonged use (Ergonomic Soft Dark) with precision-driven typography and vibrant, authoritative accents that command trust and clarity.

**Key Characteristics:**
- Consultative and authoritative tone.
- Flat and restrained surfaces to emphasize operational data.
- Crisp, geometric typography matching the exactness of the tech.
- Strict consistency (e.g., 6px radius) to convey reliability.

## Colors

The palette grounds the interface in a deep technical aesthetic while highlighting action and data clarity.

### Primary
- **Irken Teal** (#569BAA): Used for primary CTAs, active states, and brand highlights. Indicates forward momentum and intelligence.
- **Irken Teal Hover** (#457A87 / #4A8B9C): Hover states and interactive highlights.

### Neutral
- **FAAC Navy** (#1A2530): The primary dark canvas. Reduces eye strain for operational dashboards.
- **Deep Teal** (#2C4A5B): Used for elevated cards and modules on dark backgrounds.
- **Slate 50** (#F8FAFC): Background for light-mode cards.
- **Slate White** (#F1F5F9): Primary text on dark backgrounds for high legibility.
- **Slate Grey** (#94A3B8): Secondary text, borders, and microcopy.
- **Slate 900** (#0F172A): Primary text for light backgrounds.

### Named Rules
**The Strict Semantics Rule.** Warm colors (reds, oranges, yellows) are strictly prohibited outside of explicit semantic feedback (errors, warnings) to maintain the cool, operational authority.

## Typography

Arabic-first (RTL) paired with European precision.

**Display Font:** Space Grotesk (with Inter fallback)
**Body Font:** Inter
**Arabic Font:** Tajawal (Geometric Naskh)

**Character:** Highly legible, modern, and data-friendly to support both marketing persuasion and dense operational interfaces.

### Hierarchy
- **Display** (800 weight, 56px): Hero section titles.
- **Headline** (700 weight, 40px): Main section headers.
- **Title** (600 weight, 24px): Card titles and sub-sections.
- **Body** (400 weight, 16px/18px): Standard operational text and reading copy.
- **Label** (400 weight, 12px): Metadata and UI labels.

### Named Rules
**The Bilingual Symmetry Rule.** Arabic content is treated with the same geometric precision as English, adjusting base sizes slightly to ensure equal visual weight and legibility in RTL layouts.

## Layout

The spatial model relies on clean container boundaries, generous whitespace in marketing views, and tighter, high-density grids for dashboard and operational views. 

## Elevation & Depth

Flat and Restrained.

### Shadow Vocabulary
- **Flat at Rest:** No shadows on default containers. Depth is established through color contrast (e.g., Deep Teal on FAAC Navy).
- **Glow Accent** (`0 4px 14px 0 rgba(37, 99, 235, 0.3)`): A subtle colored shadow used strictly on primary actions or active states to indicate interactivity.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Depth is primarily conveyed through tonal layering (color). Shadows appear only as a response to state (hover, focus, or active).

## Shapes

Approachable but precise.

**Radius:** Strictly 6px (`rounded-md`). 
Sharp corners (0px) are prohibited to maintain a partner-focused, approachable feel. Overly rounded pills are avoided to maintain enterprise authority.

## Components

### Buttons
- **Shape:** 6px radius.
- **Primary:** Irken Teal background, white uppercase text with wide tracking (`1.5px`). No borders.
- **Hover / Focus:** Darkens slightly, shifts up (`translateY(-1px)`), and gains a subtle shadow.
- **Secondary / Ghost:** Transparent background, slate border, slate text.

### Cards / Containers
- **Corner Style:** 6px radius.
- **Background:** Deep Teal (dark mode) or Slate 50 (light mode).
- **Shadow Strategy:** Flat.

### Tech Badge
- **Style:** Brand secondary background with 50% opacity, border, uppercase teal text with 2px tracking. Includes an infinite scanline animation to signal active technology.

## Do's and Don'ts

### Do:
- **Do** maintain a strict 6px border radius on all interactive elements.
- **Do** use FAAC Navy as the default canvas for a deep-tech, operational feel.
- **Do** ensure WCAG AA compliant contrast (4.5:1) for all text.

### Don't:
- **Don't** use warm colors for decoration; reserve them for warnings and errors.
- **Don't** apply shadows to static cards or structural containers.
- **Don't** use sharp 0px corners.
