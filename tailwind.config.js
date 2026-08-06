/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ── Irken Solutions Brand Tokens (DESIGN.md canonical) ─────────────
        brand: {
          primary:    '#1A2530',   // FAAC Dark Navy/Slate — canvas background
          secondary:  '#2C4A5B',   // Deep Teal — elevated cards, modules
          accent:     '#569BAA',   // FAAC Teal — CTAs, active states, data viz
          'accent-hover': '#4A8B9C',
          'on-accent': '#FFFFFF',  // Text/icon color on Teal backgrounds
        },
        text: {
          primary:    '#F1F5F9',   // Slate-100 — headings, main body on dark
          secondary:  '#94A3B8',   // Slate-400 — microcopy, labels, borders
          highlight:  '#FFFFFF',   // Corporate White — max-contrast callouts
        },
      },

      fontFamily: {
        enHeading: ['var(--font-en-heading)', 'sans-serif'],
        enBody:    ['var(--font-en-body)', 'sans-serif'],
        ar:        ['var(--font-ar)', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent':    '0 4px 14px 0 rgba(86, 155, 170, 0.25)',
        'glow-accent-sm': '0 2px 8px 0 rgba(86, 155, 170, 0.15)',
        'glow-accent-lg': '0 10px 30px 0 rgba(86, 155, 170, 0.3)',
      },
      keyframes: {
        scanline: {
          '0%':   { left: '-100%' },
          '100%': { left: '100%' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'dash-flow': {
          '0%':   { strokeDashoffset: '20' },
          '100%': { strokeDashoffset: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        scanline:    'scanline 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.4s cubic-bezier(0.4,0,0.2,1) forwards',
        marquee: 'marquee 25s linear infinite',
        'marquee-rtl': 'marquee-rtl 25s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
