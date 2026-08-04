/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0A192F',    // Space Navy
          secondary: '#112240',  // Onyx
          accent: '#64FFDA',     // Electric Cyan
        },
        text: {
          primary: '#CCD6F6',    // Ice Blue
          secondary: '#8892B0',  // Slate Grey
          highlight: '#FAFAFA',  // Corporate White
        }
      },
      fontFamily: {
        enHeading: ['var(--font-en-heading)', 'sans-serif'],
        enBody: ['var(--font-en-body)', 'sans-serif'],
        ar: ['var(--font-ar)', 'sans-serif'],
      },
      borderRadius: {
        // Enforcing absolute precision (0rem) brand rule
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
    },
  },
  plugins: [],
}
