import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        base: '#242424',
        main: '#fafafa',
        accent: '#27b863',
      },
      gridTemplateRows: {
        main: '5rem auto auto',
        home: '1fr auto auto auto',
      },
      gridTemplateColumns: {
        header: 'auto auto 1fr',
      },
    },
  },
  plugins: [],
} satisfies Config;
