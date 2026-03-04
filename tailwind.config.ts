// tailwind.config.ts
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
        darkBg: "#0a0a0a", // Şəkildəki əsas fon rəngi
        cardBg: "#161616", // Kartların fon rəngi
        cardBorder: "#262626", // Kartların incə kənarları
      },
    },
  },
  plugins: [],
};
export default config;