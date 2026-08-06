# Irken Solutions Comprehensive Design System

## 🎯 1. Brand Strategy & Foundation

### Brand Foundation
**Purpose**: To drive comprehensive digital transformation in the parking sector.
**Vision**: To transform traditional parking business models into modern, smart parking ecosystems across the MENA region using an Asset-Light approach.
**Mission**: To empower traditional parking operators and real estate developers to modernize their assets seamlessly and profitably through our consultative, Asset-Light digital infrastructure.
**Values**: 
1. **Transformative Partnership**: We guide our clients through digital transformation.
2. **Architectural Precision**: We engineer systems rooted in data and logic.
3. **Operational Fluidity**: We remove friction from physical infrastructure.
4. **Elite Intelligence**: We build venture-grade technology.
**Personality**: Consultative, Authoritative, Visionary, Partner-focused, Transformative.

### Brand Positioning & Messaging
**Target Audience**: B2B Enterprise (Traditional parking operators, Real estate developers, municipalities, mobility businesses in Egypt and MENA).
**Positioning Statement**: For Egyptian enterprises seeking to modernize their assets, Irken Solutions provides a seamless, zero-cost, Asset-Light ecosystem to optimize physical parking spaces.
**Tagline**: Leading Digital Transformation in Parking. *(قيادة التحول الرقمي في مواقف السيارات)*

## 🎨 2. Visual Identity & Color System

The default mode is **Ergonomic Soft Dark**, ensuring a deep-tech aesthetic comfortable for operational use.

### Base Color Tokens
**Primary Backgrounds**:
- `FAAC Navy / Slate`: `#1A2530` (The primary canvas)
- `Deep Teal`: `#2C4A5B` (Elevated cards and modules)

**Brand Accents (The Transformation Color)**:
- `FAAC Teal`: `#569BAA` (Primary CTAs, active states)
- `Light Teal`: `#4A8B9C` (Hover states and interactive highlights)

**Typography & Neutrals**:
- `Slate White`: `#F1F5F9` (Primary text for high legibility on dark)
- `Slate Grey`: `#94A3B8` (Secondary text, borders, microcopy)

**Semantic Colors**:
- **Success**: `#10b981` (Validated states)
- **Warning**: `#f59e0b` (Alert states)
- **Error**: `#ef4444` (Strict error states only - PROHIBIT warm colors otherwise)

## 📐 3. Mathematical Typography Scale

Arabic-first (RTL) paired with European precision.

### Typefaces
- **Primary / Arabic**: Tajawal (Geometric Naskh)
- **Headings (EN)**: Space Grotesk (Technical, geometric)
- **Body UI (EN)**: Inter (High legibility for data)

### Font Scale (Pixel-Perfect Values)
- **xs**: `0.75rem` / `12px` (UI Labels, Metadata)
- **sm**: `0.875rem` / `14px` (Secondary Text, Navigation)
- **base**: `1rem` / `16px` (Body Text)
- **lg**: `1.125rem` / `18px` (Large Body)
- **xl**: `1.25rem` / `20px` (H4)
- **2xl**: `1.5rem` / `24px` (H3 Card Titles)
- **3xl**: `1.875rem` / `30px` (H2 Section Titles)
- **4xl**: `2.25rem` / `36px` (H1 Hero Subtitles)
- **5xl**: `3rem` / `48px` (Hero Primary)

**Font Weights**: `400` (Regular), `500` (Medium), `600` (Semi-bold), `700` (Bold).

## 📏 4. Spacing & Layout System

### The 4px Base Grid
- **space-1**: `0.25rem` / `4px`
- **space-2**: `0.5rem` / `8px`
- **space-3**: `0.75rem` / `12px`
- **space-4**: `1rem` / `16px` (Default UI gap)
- **space-6**: `1.5rem` / `24px`
- **space-8**: `2rem` / `32px` (Section inner padding)
- **space-12**: `3rem` / `48px`
- **space-16**: `4rem` / `64px` (Section gaps)

### Responsive Breakpoints
Mobile-first approach.
- **Mobile (Base)**: 320px - 639px
- **Tablet (sm)**: 640px+ (Max container `640px`)
- **Tablet Landscape (md)**: 768px+ (Max container `768px`)
- **Desktop (lg)**: 1024px+ (Max container `1024px`)
- **Widescreen (xl)**: 1280px+ (Max container `1280px`)

## 🧱 5. Component Architecture & UI Elements

### Baseline Framework
- **shadcn/ui**: All UI elements (Buttons, Inputs, Cards, etc.) MUST be scaffolded using the `shadcn/ui` MCP tools. We do not build base components from scratch.
- **Strict Override Rule**: Once a `shadcn/ui` component is generated, its Tailwind classes must be manually audited and overridden to match the exact mathematical constraints outlined below (e.g., overriding `rounded-xl` to `rounded-md`, stripping warm colors).

### Shapes & Depth
- **Border Radius**: Strictly `rounded-md` (`0.375rem` / `6px`) globally to maintain the approachable, partner-focused feel. `0px` radius is PROHIBITED.
- **Shadows**: Soft, teal-tinted dropshadows for depth.
  - `shadow-sm`: `0 1px 2px 0 rgba(86, 155, 170, 0.15)`
  - `shadow-md`: `0 4px 6px -1px rgba(86, 155, 170, 0.25)`
  - `shadow-lg`: `0 10px 15px -3px rgba(86, 155, 170, 0.35)`

### Interactive States (Mandatory)
All interactive elements MUST implement these strict states:
1. **Default**: Base color (`#569BAA` for primary).
2. **Hover**: Slight transform (`translateY(-1px)`) + Secondary Accent (`#4A8B9C`) + `shadow-md`.
3. **Active/Press**: Scale down (`scale-95`).
4. **Focus**: Visible focus ring. `outline-2 outline-offset-2 outline-[#569BAA]`.
5. **Disabled**: `opacity-60 cursor-not-allowed pointer-events-none`.

### Core Components
- **Buttons**: Must follow the interactive states above. Min-height `44px` for touch targets.
- **Cards**: Background `#2C4A5B`, border `1px solid rgba(148, 163, 184, 0.2)`. Hover lifts with `shadow-md`.
- **Inputs**: Background `#1A2530`, text `#F1F5F9`. Focus must trigger the teal focus ring.
- **Icons**: All icons must be rendered without borders.

## ♿ 6. Accessibility (A11y) Standards

- **WCAG AA Compliance**: Ensure 4.5:1 color contrast ratio for normal text and 3:1 for large text. The primary text (`#F1F5F9`) against the navy background (`#1A2530`) easily passes.
- **Touch Targets**: Minimum 44px for all interactive elements (buttons, mobile menus).
- **Keyboard Navigation**: Full semantic HTML and ARIA labels. No `:focus` state removal without a suitable replacement.
- **Motion**: Respect user preferences for reduced motion (`@media (prefers-reduced-motion)`).

## 🛡️ 7. Brand Protection & Enforcement

- **Strict Adherence**: UI Designers and Frontend Developers must adhere to these mathematical scales. Avoid arbitrary pixel values.
- **Third-Party Libraries**: Any imported UI components must be overridden to match the `rounded-md` radius and teal-tinted shadows.
- **Monitoring**: Automated QA processes should flag hardcoded colors or missing focus states.