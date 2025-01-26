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
        'base-color': '#2F2B2A',
        'base-sub-color': '#D4D5D9',
        'main-color': '#36B385',
        'accent-color': '#5632A6',
        'black-color': '#141312',
        'white-color': '#EDEEF2',
      },
    },
  },
  plugins: [],
} satisfies Config;
