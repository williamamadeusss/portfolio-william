import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#8D6E63",
        secondary: "#A1887F",
        accent: "#D7CCC8",
        highlight: "#6D4C41",
        text: "#3E2723",
        jetblack: "#343434",
        ivory: "#FFFFF0",
        bone: "#F9F6EE",
        beige: "#F5F5DC",
      },
    },
  },
  plugins: [],
};
export default config;
