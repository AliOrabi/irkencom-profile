# **Website Brand Schema: irken.com.eg**

## **Digital Transformation Company**

This document outlines the core color palette, neutral shades, and typography system for the irken. website, derived from the brand logo.

## **1\. Core Color Palette**

The core palette consists of three colors: the primary dark purple, a new secondary tech blue, and the vibrant red accent.

| Role | Color | Hex Code | Tailwind Config | Usage |
| :---- | :---- | :---- | :---- | :---- |
| **Primary Brand** | \<div style="width:100px; height:20px; background-color:\#3E3A59; border-radius:4px;"\>\</div\> | \#3E3A59 | brand-primary | Main headlines (H1/H2), dark navigation, footers, primary text on light backgrounds, "Secondary" buttons. Conveys trust and expertise. |
| **Secondary Brand** | \<div style="width:100px; height:20px; background-color:\#007BFF; border-radius:4px;"\>\</div\> | \#007BFF | brand-secondary | Secondary buttons, info callouts, active states, link highlights. Communicates technology, clarity, and reliability. |
| **Primary Accent** | \<div style="width:100px; height:20px; background-color:\#F43D3D; border-radius:4px;"\>\</div\> | \#F43D3D | brand-accent | **Primary CTA buttons**, key highlights, icons, alert states. Used to draw maximum attention and drive action. |

## **2\. Expanded Website Palette (Neutrals)**

Neutrals are used for backgrounds, body text, and dividers to ensure a clean, readable, and professional layout.

| Role | Color | Hex Code | Tailwind Config | Usage |
| :---- | :---- | :---- | :---- | :---- |
| **Neutral White** | \<div style="width:100px; height:20px; background-color:\#FFFFFF; border: 1px solid \#eee; border-radius:4px;"\>\</div\> | \#FFFFFF | neutral-white | Main page and section backgrounds. Text color on dark backgrounds. |
| **Neutral Light** | \<div style="width:100px; height:20px; background-color:\#F5F5F7; border: 1px solid \#eee; border-radius:4px;"\>\</div\> | \#F5F5F7 | neutral-light | Secondary backgrounds to differentiate sections (e.g., testimonials, feature grids). |
| **Neutral Medium** | \<div style="width:100px; height:20px; background-color:\#A9A9A9; border-radius:4px;"\>\</div\> | \#A9A9A9 | neutral-medium | Borders, dividers, placeholder text, and disabled element states. |
| **Neutral Dark** | \<div style="width:100px; height:20px; background-color:\#1A1A1A; border-radius:4px;"\>\</div\> | \#1A1A1A | neutral-dark | **Primary Body Text.** Used for all paragraphs ( \<p\> ) and sub-headings (H3+) for maximum readability. |

## **3\. Typography System**

The typography is designed for clarity, readability, and a modern, professional feel.

* **Font Family:** Inter  
* **Google Fonts Link:** \<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900\&display=swap" rel="stylesheet"\>  
* **Body Text:** 1.125rem (18px) with 400 (Regular) weight, color neutral-dark (\#1A1A1A).

### **Typographic Scale**

| Element | Font Size | Font Weight | Color | Tailwind Classes (Example) |
| :---- | :---- | :---- | :---- | :---- |
| **Hero H1** | 3.5rem (56px) | 800 (Extra Bold) | brand-primary | text-5xl md:text-6xl font-extrabold text-brand-primary |
| **H2 (Section)** | 2.5rem (40px) | 700 (Bold) | brand-primary | text-4xl font-bold text-brand-primary |
| **H3 (Sub-heading)** | 1.5rem (24px) | 600 (Semi-Bold) | neutral-dark | text-2xl font-semibold text-neutral-dark |
| **Paragraph (Body)** | 1.125rem (18px) | 400 (Regular) | neutral-dark | text-lg font-normal text-neutral-dark |
| **Link** | 1.125rem (18px) | 600 (Semi-Bold) | brand-accent | text-lg font-semibold text-brand-accent hover:underline |
| **Small/Caption** | 0.875rem (14px) | 400 (Regular) | neutral-medium | text-sm font-normal text-neutral-medium |

**Note:** The full range of Inter (weights 300-900) is loaded. Feel free to use 300 (Light) or 500 (Medium) for stylistic variations where appropriate.

## **4\. Button & Interaction Styles**

Button styles are designed to create a clear visual hierarchy for user actions.

| Button Type | Background | Text Color | Border | Hover State | Tailwind Classes (Base) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Primary CTA** | brand-accent (\#F43D3D) | neutral-white (\#FFFFFF) | None | Darken bg | btn btn-primary-cta |
| **Secondary** | brand-primary (\#3E3A59) | neutral-white (\#FFFFFF) | None | Lighten bg | btn btn-secondary |
| **Info / Active** | brand-secondary (\#007BFF) | neutral-white (\#FFFFFF) | None | Darken bg | btn btn-info |
| **Tertiary (Ghost)** | transparent | brand-primary (\#3E3A59) | 1px solid brand-primary | bg brand-primary, text neutral-white | btn btn-tertiary |

Base Button Class:  
.btn { @apply py-3 px-6 rounded-lg font-semibold transition-all duration-200; }