# Irken Solutions Web Platform

Official website and digital profile for Irken Solutions ([irken.com.eg](https://irken.com.eg)). The platform showcases smart parking management systems, access control solutions, LPR technologies, and provider integrations across the MENA region.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19, Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Internationalization**: Custom bilingual layout with English (LTR) and Arabic (RTL) support
- **Hosting**: Vercel

## Project Structure

```
├── public/                 # Static assets and brand logos
├── src/
│   ├── app/                # Next.js App Router pages and route handlers
│   │   ├── about/          # Company overview and team
│   │   ├── contact/        # Inquiries and lead forms
│   │   ├── insights/       # Industry articles and dynamic post routes
│   │   ├── providers/      # Provider integrations (e-payment, reservations)
│   │   ├── services/       # Service pages and parking calculator
│   │   └── api/            # API endpoints (leads, integrations)
│   ├── components/         # Shared UI components and section layouts
│   ├── config/             # Navigation hierarchy and site metadata
│   ├── context/            # Language and theme context providers
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Data fixtures and utility functions
├── vercel.json             # Vercel deployment and framework configuration
└── tailwind.config.js      # Design tokens and theme settings
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AliOrabi/irkencom-profile.git
   cd irkencom-profile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy the template file to create your local environment config:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required public and service variables. Do not commit `.env.local` to source control.

4. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — Starts the Next.js development server.
- `npm run build` — Creates an optimized production build.
- `npm run start` — Runs the compiled production build locally.
- `npm run lint` — Runs ESLint to check for code quality and syntax issues.

## Design System

The UI uses a dark theme with teal accents:

- **Background Canvas**: `#1A2530` (FAAC Navy)
- **Card Surfaces**: `#2C4A5B` (Deep Teal)
- **Accent & CTAs**: `#569BAA` (Teal)
- **Border Radius**: `rounded-md` (6px) across all UI cards and inputs
- **Typography**: Space Grotesk / Tajawal for headings; Inter / Tajawal for body copy
- **Iconography**: Borderless Lucide icons

## Deployment

The application deploys to Vercel via Git integration on the `main` branch. Deployment settings are defined in [`vercel.json`](./vercel.json).

To trigger a manual build or deploy:
```bash
npm run build
```

## License

All rights reserved. Proprietary software of Irken Solutions.
