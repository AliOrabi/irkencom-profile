---
target: home page (Header, Navebar items, Hero section, and all sections, Footer)
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-17T15-52-37Z
slug: src-app-locale-page-tsx
---
---
target: "src/app/[locale]/page.tsx"
slug: "src-app-locale-page-tsx"
total_score: 17
max_score: 32
na_heuristics: "7,10"
p0_count: 1
p1_count: 2
p2_count: 2
p3_count: 0
date: "2026-08-17"
---

# Design Critique: Homepage (Header, Hero, Sections, Footer)

Method: single-context (browser inspection & deterministic detector)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Hero CTA links to dead `#platform` anchor; form submission loading feedback is minimal. |
| 2 | Match System / Real World | 2 | Benefits section copy is copied from fintech payment processors (PCI-DSS, transaction routing) rather than PropTech/Mobility. |
| 3 | User Control and Freedom | 3 | Mobile menu and bilingual EN/AR RTL switching operate smoothly. |
| 4 | Consistency and Standards | 2 | Button radii drift (squarish MUI styling vs `rounded-full` pill rule); "Logo 1-5" raw placeholders. |
| 5 | Error Prevention | 3 | Form includes basic email regex and required field guards. |
| 6 | Recognition Rather Than Recall | 2 | Dead anchor targets (`#platform`, `#mobility`) fail silently upon click. |
| 7 | Flexibility and Efficiency | n/a | Marketing landing page surface (Persuade mode). |
| 8 | Aesthetic and Minimalist Design | 2 | Subheading text contrast is low over daylight video; form inputs are washed out; footer lacks visual grounding. |
| 9 | Error Recovery | 3 | Inline error states exist for invalid form submissions. |
| 10 | Help and Documentation | n/a | Not applicable for marketing conversion surface. |
| **Total** | | **17/32** | **Acceptable (53%)** |

## Design Specificity Verdict

**LLM Assessment**:
The visual direction has strong raw elements (generous container cards, smooth Space Grotesk/Inter typography, and vibrant offset color cards), but suffers from copy and component drift. The Benefits section borrows generic payment gateway copy rather than showcasing Irken's asset-light parking and mobility intelligence. Furthermore, button shapes violate the documented Airy Fintech pill rule (`rounded-full`) due to legacy MUI component encapsulation.

**Deterministic Scan**:
Deterministic detector identified 1 advisory styling finding in `CaseStudies.tsx` (undocumented color `#94A3B8`).

## Priority Issues

- **[P0] Hero Subheading & Form Input Contrast**: Hero copy text and form placeholder text fail WCAG AA readability on light/video backgrounds.
- **[P1] Benefits Section Copy Mismatch**: Replace payment gateway terminology with authentic PropTech & smart parking capabilities.
- **[P1] Button Anatomy & Radius Standardization**: Replace conflicting MUI button containers with unified shadcn pill buttons.
- **[P2] Broken Navigation Anchors & Placeholder Logos**: Fix dead links pointing to `#platform` and `#mobility`; upgrade "Logo 1-5" pills.
- **[P2] Footer Grounding & Visual Hierarchy**: Provide clear section anchoring and input polish for the footer.
