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
        // primary: "#2563EB",
      },
      // fontSize: {
      //   xs: ["10px", { letterSpacing: "0.5px" }],
      //   sm: ["12px", { letterSpacing: "0.4px" }],
      //   md: ["14px", { letterSpacing: "0.25px" }],
      //   lg: ["16px", { letterSpacing: "0.5px" }],
      //   xl: ["20px", { letterSpacing: "0.5px" }],
      //   xxl: "28px",
      //   title: "48px",
      //   display: "40px",
      // },
    },
  },
  plugins: [],
};
export default config;
