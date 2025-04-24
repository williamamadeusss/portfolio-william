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
        gray: "#f1f6fa",
        primary: "#F59E0B",
        background: "#f0f0f0",
        backgroundBlack: "#202020",
        "neutral-color": {
          100: "#1B1916",
          80: "#484744",
          60: "#767573",
          40: "#A4A3A2",
          20: "#D1D1D0",
          10: "#E8E8E8",
          5: "#F4F4F3",
        },
        // primary: "#2563EB",
      },
      fontSize: {
        xsmall: ["10px", { letterSpacing: "0.5px" }],
        small: ["12px", { letterSpacing: "0.4px" }],
        medium: ["20px", { letterSpacing: "0.5px" }],
        large: ["16px", { letterSpacing: "0.5px" }],
        title: "1.75rem",
        heading: "2.5rem",
        mediumHeading: ["2.25rem", { letterSpacing: "0.4px", lineHeight: "1" }],
        bigHeading: ["4.75rem", { letterSpacing: "0.4px", lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
export default config;
