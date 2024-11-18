import type { Config } from "tailwindcss";

export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        main: "var(--main)",
        text: {
          DEFAULT: "var(--text)",
          t: "var(--text-t)",
          l: "var(--text-l)",
          s: "var(--text-s)",
        },
        link: {
          DEFAULT: "var(--link)",
          hover: "var(--link-hover)",
        },
        tag: "var(--tag)",
        hover: "var(--hover)",
      },
    },
    borderColor: { DEFAULT: "var(--border)" },
    boxShadow: {
      DEFAULT: "var(--shadow)",
    },
  },
  plugins: [],
} satisfies Config;
