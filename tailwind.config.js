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
        // ── Irken Solutions Brand Tokens (UI/UX Pro Max) ─────────────
        brand: {
          primary:    'hsl(var(--background))',   // Maps to #FFFFFF (light) / #1A2530 (dark)
          secondary:  'hsl(var(--card))',         // Maps to #F8FAFC (light) / #2C4A5B (dark)
          accent:     'hsl(var(--primary))',      // Maps to #569BAA (Irken Teal)
          'accent-hover': '#457A87',              // Primary hover
          'on-accent': '#FFFFFF',
        },
        text: {
          primary:    'hsl(var(--foreground))',   // Maps to #0F172A (light)
          secondary:  'hsl(var(--muted-foreground))', // Maps to #94A3B8
          highlight:  'hsl(var(--primary))',      // Maps to #569BAA
        },
      },

      fontFamily: {
        enHeading: ['var(--font-en-heading)', 'Inter', 'sans-serif'],
        enBody:    ['var(--font-en-body)', 'Inter', 'sans-serif'],
        ar:        ['var(--font-ar)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent':    '0 4px 14px 0 rgba(37, 99, 235, 0.3)',
        'glow-accent-sm': '0 2px 8px 0 rgba(37, 99, 235, 0.15)',
        'glow-accent-lg': '0 10px 30px 0 rgba(37, 99, 235, 0.4)',
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
}
