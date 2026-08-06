# Irken Solutions - Master Project Context

This document serves as the absolute source of truth and primary context for all AI Agents (Design and Engineering teams) working on the Irken Solutions corporate website and future digital products. All agents MUST adhere to these architectural, stylistic, and structural rules.

## 1. Brand & Aesthetic (Design Team)

**Agency Roles Responsible**: Brand Guardian, UX Architect, UI Designer.

### Theme & Colors
- **Aesthetic**: FAAC-inspired Ergonomic Soft Dark Mode. Deep-tech but accessible and comfortable for daily use.
- **Primary Background**: `FAAC Navy / Slate (#1A2530)` - The primary canvas. No pure black.
- **Surface / Card Background**: `Deep Teal (#2C4A5B)` - Used for elevated modules and cards.
- **Primary Accent**: `FAAC Teal (#569BAA)` - Used for CTAs, buttons, and active interactive elements.
- **Hover/Secondary Accent**: `Light Teal (#4A8B9C)`.
- **Text (Primary)**: `Slate White (#F1F5F9)` - Prevents high-contrast eye strain.
- **Text (Secondary/Muted)**: `Slate Grey (#94A3B8)`.
- **Prohibitions**: NO warm colors (red, orange, yellow) except for strict error states.

### UI Guidelines
- **Border Radius**: Approachable, rounded corners. Use `rounded-md` (`0.375rem` / `6px`) globally. Strict `0px` radius is PROHIBITED as it is too aggressive.
- **Shadows & Depth**: Soft, teal-tinted drop shadows (e.g., `rgba(86, 155, 170, 0.25)`). No harsh grey/black shadows on dark mode.
- **Typography**: Space Grotesk / Tajawal for Headings (H1, H2, H3). Inter / Tajawal for Body.
- **Icons**: All icons must be rendered without borders.
- **Accessibility**: Minimum WCAG 2.1 AA contrast ratio (4.5:1). Screen-reader support and keyboard focus outlines are mandatory.

## 2. Frontend Architecture (Engineering Team)

**Agency Roles Responsible**: Frontend Developer, UX Architect.

### Framework & Stack
- **Core**: Next.js (App Router), React, TypeScript.
- **UI Base**: `shadcn/ui` is the baseline component layer.
- **Styling**: Tailwind CSS (all tokens configured in `tailwind.config.js`). CSS Modules are prohibited unless absolutely necessary.
- **State Management**: React Context API for global UI state; Zustand for complex client state if needed.

### Implementation Rules
- **Performance**: Strict adherence to Core Web Vitals. Largest Contentful Paint (LCP) must be < 2.5s.
- **Images**: All images must be optimized via `next/image` with proper `priority` flags for LCP elements.
- **Components**: Build reusable, semantic components. Use `memo` and `useMemo` / `useCallback` for heavy tables or data grids to prevent unnecessary re-renders.
- **Responsive**: Mobile-first grid/flexbox layouts. Base (Mobile: 320px+), `md` (Tablet: 768px+), `lg` (Desktop: 1024px+).
  - Use Tailwind CSS (`sm:`, `md:`, `lg:`) for pure styling changes.
  - Use `src/hooks/useMediaQuery.ts` (or `useIsMobile`, `useIsTablet`, `useIsDesktop`) ONLY when conditional rendering (mounting/unmounting heavy components) is strictly required.

## 3. Backend & Data Architecture (Engineering Team)

**Agency Roles Responsible**: Backend Architect, Senior Developer.

### API Layer
- **Routes**: Next.js Route Handlers (`app/api/...`) for backend logic.
- **Contracts**: Strict TypeScript interfaces for all requests and responses. Standardized error shapes: `{ error: string, code: number }`.
- **Validation**: All inputs must be strictly validated before processing (e.g., using Zod).

### Scalability & Security
- **Security-First**: Principle of least privilege. Implement strict rate-limiting on sensitive routes.
- **Database Rules**: All database schemas must use UUIDs for primary keys. Timestamps (`created_at`, `updated_at`) are mandatory. Indexes must be planned for all foreign keys.
- **Resilience**: Implement timeouts and graceful degradation for all external API calls.

## 4. Agent Workflow Rules

Whenever a task is assigned:
1. **Understand Context**: Read this file (`PROJECT_CONTEXT.md`) and `Irken Solutions Design System.md`.
2. **Use the MCP Tool**: When a new component is needed, use the `shadcn` MCP server to fetch it instead of building from scratch.
3. **Override Shadcn Defaults**: ANY component added from shadcn MUST be manually updated to respect our `rounded-md` radius, teal shadows, and FAAC color tokens.
4. **Think Systematically**: Will this change break the responsive grid? Does the color meet contrast requirements? Is the API route secure?
5. **Validate**: Never push changes without verifying that the dev server builds cleanly and tests pass.
6. **Consistency**: Use the Tailwind classes configured in the `tailwind.config.js` over hardcoded hex values.

---
**Last Updated**: August 2026
**Status**: Active & Enforced
