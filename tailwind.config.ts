import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "aurea-bold": ["var(--font-aurea-bold)", ...defaultTheme.fontFamily.sans],
      "aurea-regular": ["var(--font-aurea-regular)", ...defaultTheme.fontFamily.sans],
      "aurea-ultra-roman": ["var(--font-aurea-ultra-roman)", ...defaultTheme.fontFamily.sans],
      "aeonik": ["var(--font-aeonik)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      maxWidth: {
        '2xl': '1440px',
      },
      colors: {
        primary: "#E1773A",
        secondary: "#DA3832",
        tertiary: "#6C9F54",
        sand : "#F7DFB0",
        sandHeavy : "#E2AD67"
      },
      backgroundImage: {
        "background": "url('/background.webp')",
        "background-mobile": "url('/bg-feature-mobile.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
