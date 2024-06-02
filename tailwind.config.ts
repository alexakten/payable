import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tight: "-0.020rem",
        tighter: "-0.040rem",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
