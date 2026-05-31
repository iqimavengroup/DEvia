import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3D7BAD',
          'light-blue': '#A8C4D8',
          navy: '#1E3D56',
          white: '#FFFFFF',
          cream: '#EDE4D3',
          gold: '#C4993A',
          charcoal: '#1A1A1A',
          'section-bg': '#EAF2F8',
          'wa-green': '#25D366',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to top, rgba(30,61,86,0.85) 0%, rgba(30,61,86,0.3) 50%, rgba(30,61,86,0.1) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
