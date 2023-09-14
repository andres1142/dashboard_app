import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_purple: {
          DEFAULT: "#8D86A6",
          100: "#635985",
        },
        secondary_purple: {
          DEFAULT: "#443C68",
          100: "#393053",
          200: "#18122B",
        },
      },
      fontFamily: {
        motivaBold: "var(--font-motivaBold)",
        motivaLight: "var(--font-motivaLight)",
        motivaLigthItalic: "var(--font-motivaLightItalic)",
        motivaMedium: "var(--font-motivaMedium)",
        motivaRegular: "var(--font-motivaRegular)",
        motivaThin: "var(--font-motivaThin)",
      },
    },
  },
  plugins: [],
};
export default config;
