# **Irken Solutions Master Brand Guidelines & Design System**

**Version:** 1.0.0

**Brand Guardian:** AI Core Systems / ArchitectUX

**Target Audience:** B2B Enterprise (Parking operators,  Real estate developers, municipalities, mobility businesses)

**Brand Pillars:** Deep-Tech Architecture, Asset-Light Scalability, Data-Driven Yield Optimization

## **🎯 1\. Brand Strategy & Foundation**

### **Purpose**

To architect and engineer scalable digital infrastructure for tomorrow's smart cities in the MENA region, converting underutilized physical spaces into highly profitable digital assets.

### **Vision**

To completely transform urban mobility and asset management in Egypt by deploying intelligent, hardware-minimal software ecosystems.

### **Mission**

To empower real estate developers, municipalities, and parking operators with an Asset-Light digital infrastructure that dynamically optimizes space utilization, reduces operational costs, and eliminates urban congestion.

### **Core Values**

1. **Architectural Precision:** We engineer systems rooted in data, logic, and structural integrity. *(Behavior: We eliminate manual guesswork and rely on algorithmic capacity calculation.)*  
2. **Operational Fluidity:** We remove friction from physical infrastructure. *(Behavior: We deploy Asset-Light integrations that require minimal hardware upgrades.)*  
3. **Elite Intelligence:** We build venture-grade technology. *(Behavior: We project quiet confidence and prioritize deep-tech aesthetics over consumer trends.)*

**Personality:** Authoritative, Visionary, Precise, Engineered, Uncompromising.

### **Positioning Statement**

For Egyptian enterprises and municipalities seeking to maximize infrastructure yield, Irken Solutions is the premier venture-building technology firm that provides a seamless, Asset-Light digital ecosystem to digitize and optimize physical parking assets.

**Competitive Differentiation:** An uncompromising Asset-Light operational model that dynamically calculates real-time availability by measuring static total capacity against active booking volume, rather than relying on flawed binary toggles or expensive hardware sensors.

## **🖼️ 2\. Logo System & Usage**

The corporate logo projects uncompromising architectural precision, distinguishing the B2B enterprise firm from the consumer-facing marketplace.

### **Master Logo Assets**

| Variation | Asset Preview | Primary Use Case |
| :---- | :---- | :---- |
| **Horizontal (Primary)** |  | Corporate website header, official B2B documentation, API portals, email signatures. |
| **Stacked (Secondary 1\)** |  | Investor pitch deck covers, vertical print materials, social media cards. |
| **Stacked (Secondary 2\)** |  | Alternate layouts requiring a centered, stacked visual hierarchy. |
| **Monogram (Icon Only)** | \!\[Monogram\](Monogram (Icon Only).png) | Favicons, social media avatars, discrete UI watermarks in the Data-Driven Dashboard. |

### **Structural Constraints**

* **The Container:** A sharp, 90-degree square (0rem border radius) reflecting structural integrity.  
* **The Symbol:** Three sharp, diagonal rectangles (never rounded pills) representing digital data flows and server infrastructure.  
* **Clear Space:** The minimum protective padding around the entire logo must equal the height of the capital "I" in the "IRKEN" wordmark.  
* **Minimum Size:** To ensure legibility of the "SOLUTIONS" tag, the horizontal logo must never be rendered smaller than 150px wide in digital formats.  
* **Prohibitions:** Never round the corners of the container. Never apply drop shadows or gradients. Never render the logo in consumer-friendly warm colors (e.g., red or orange).

## **🎨 3\. Visual Identity & CSS Architecture**

### **Primary Color Palette (Dark Mode Default)**

Our "Deep Tech" palette instantly positions Irken Solutions alongside global SaaS and infrastructure leaders, optimizing screen legibility for operators.

| Color Name | Hex Code | RGB | Usage |
| :---- | :---- | :---- | :---- |
| **Space Navy** | \#0A192F | 10, 25, 47 | Primary corporate background. Conveys depth, security, and elite tech. |
| **Electric Cyan** | \#64FFDA | 100, 255, 218 | Active states, primary CTAs, active booking data visualization, and grid lines. |
| **Onyx** | \#112240 | 17, 34, 64 | Elevated UI cards, feature containers, and operator dashboard modules. |
| **Ice Blue** | \#CCD6F6 | 204, 214, 246 | Primary headings (H1, H2, H3) and main body text on dark backgrounds. |
| **Slate Grey** | \#8892B0 | 136, 146, 176 | Secondary text, microcopy, form labels, and UI container borders. |
| **Corporate White** | \#FAFAFA | 250, 250, 250 | Strictly for high-contrast highlights or alternate light-mode documents. |

### **Core CSS Tokens (Deep Tech Theme)**

/\* Irken Solutions Design System Variables \*/  
:root {  
  /\* Brand Geometry Rule: Absolute Precision \*/  
  \--brand-radius: 0rem;              /\* Strictly enforced: No rounded corners \*/  
  \--brand-border-thin: 1px;  
  \--brand-border-thick: 2px;

  /\* Primary Brand Colors (Dark Mode Default) \*/  
  \--brand-primary: \#0A192F;          /\* Space Navy: Main background \*/  
  \--brand-secondary: \#112240;        /\* Onyx: Elevated UI cards/containers \*/  
  \--brand-accent: \#64FFDA;           /\* Electric Cyan: Active states, CTAs \*/  
    
  /\* Text & Neutral Palette \*/  
  \--brand-text-primary: \#CCD6F6;     /\* Ice Blue: Headings \*/  
  \--brand-text-secondary: \#8892B0;   /\* Slate Grey: Body text, borders \*/  
  \--brand-text-highlight: \#FAFAFA;   /\* Corporate White: Highlights \*/  
    
  /\* Brand Spacing System (4px Base Grid) \*/  
  \--brand-space-xs: 0.25rem;         /\* 4px \*/  
  \--brand-space-sm: 0.5rem;          /\* 8px \*/  
  \--brand-space-md: 1rem;            /\* 16px \*/  
  \--brand-space-lg: 2rem;            /\* 32px \*/  
  \--brand-space-xl: 4rem;            /\* 64px \*/  
  \--brand-space-2xl: 8rem;           /\* 128px \*/  
    
  /\* Container Architecture \*/  
  \--brand-container-max: 80rem;      /\* 1280px max-width for enterprise UI \*/  
}

/\* Global Component Overrides \*/  
\* {  
  border-radius: var(--brand-radius) \!important;  
}

### **Visual & UI Assets**

* **Strict Geometry:** Irken Solutions utilizes an uncompromising 0rem (0px) border radius globally. This visual rule separates the enterprise holding firm from the softer aesthetics typical of consumer apps.  
* **The Digital Blueprint Grid:** Backgrounds leverage a subtle matrix overlay to visualize infrastructure architecture. Implemented as a CSS linear-gradient with a 24px grid size, rendered in Electric Cyan at 5% opacity over Space Navy.  
* **Data Visualization:** Use dynamic area charts. The horizontal static line (Ice Blue) represents total space inventory; the filled area beneath (Electric Cyan) represents active bookings.  
* **Photography:** Focus on nighttime or twilight shots of modern Egyptian infrastructure (New Cairo skylines, smart parking structures). Slightly desaturate images with deep blue/cyan undertones. Avoid generic, bright daytime stock imagery.

## **🔠 4\. Typography System**

Our typography is natively Arabic-first (RTL) to establish authority in the Egyptian market, seamlessly paired with highly technical English typefaces.

* **Primary Arabic:** Tajawal (Fallback: Cairo). A geometric Naskh font.  
* **English Headings:** Space Grotesk. Used for English titles, numbers, and tech terminology.  
* **English Body:** Inter. Used for dense English documentation and dashboard UI elements.

| Hierarchy | Font Name (EN / AR) | Size | Weight | Color Token |
| :---- | :---- | :---- | :---- | :---- |
| **H1 (Hero)** | Space Grotesk / Tajawal | 56px | Bold / عريض | \--brand-text-primary |
| **H2 (Section)** | Space Grotesk / Tajawal | 36px | Medium / متوسط | \--brand-text-primary |
| **H3 (Card)** | Space Grotesk / Tajawal | 24px | Medium / متوسط | \--brand-text-highlight |
| **Body Text** | Inter / Tajawal | 16px | Regular / عادي | \--brand-text-secondary |
| **UI Labels** | Space Grotesk / Tajawal | 14px | Medium / متوسط | \--brand-accent (if active) |

## **🗣️ 5\. Voice & Messaging**

The tone is authoritative, visionary, and engineered. We speak with the quiet confidence of elite software architects, avoiding consumer marketing fluff when addressing B2B partners.

### **Core Messaging Framework**

* **Corporate Tagline:** Unlocking Urban Potential. *(إطلاق إمكانات المدينة)*  
* **Consumer Platform Tagline (irken.eg):** Smarter Parking. Better Cities. *(مواقف أذكى. مدن أفضل)*

### **Key Value Propositions**

1. Convert underutilized physical spaces into profitable revenue-generating assets without heavy infrastructure upgrades.  
2. Maximize yield and optimize space with automated, real-time capacity management.  
3. Reduce traffic congestion and build sustainable urban environments with intelligent mobility data.

### **Tone Variations by Audience**

* **Real Estate Developers:** Focus on ROI & Asset Utilization. *"Convert underutilized physical spaces into profitable digital assets via our Asset-Light integration."*  
* **Parking Operators:** Focus on Operational Efficiency. *"Manage inventory precisely through a Data-Driven Dashboard that dynamically calculates capacity against active bookings."*  
* **Drivers (irken.eg):** Focus on Speed & Frictionless UI. *"Find the nearest space instantly and pay seamlessly via your mobile device."*

## **🛡️ 6\. Brand Protection & Compliance**

### **Trademark Strategy**

The dual-brand architecture requires strict separation. The venture-building parent firm (**Irken Solutions**) and the two-sided marketplace (**irken.eg**) must be trademarked in Egypt as distinct intellectual properties to protect B2B equity from consumer market volatility.

### **UI Compliance Directives**

* Design and engineering teams are strictly prohibited from deviating from the 0rem border radius rule and the "Deep Tech" color palette.  
* Any UI components introduced by third-party libraries (e.g., Recharts, Tailwind UI, Material UI) **must be manually overridden** to strip away rounded corners, soft shadows, and non-compliant typefaces.

### **Monitoring Plan**

Quarterly visual and code-level audits of the Data-Driven Dashboard and B2B marketing materials to ensure 100% compliance with the Deep Tech aesthetic and architectural precision standards.

*End of Document. Mastered by ArchitectUX Core Systems.*