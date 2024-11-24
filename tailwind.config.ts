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
        g: {
          DEFAULT: "var(--g)", // Background color
          m: "var(--g-m)", // Main window background
          b: "var(--g-b)", // Button color
          s: "var(--g-s)",
          p: "var(--g-p)",
          c: "var(--g-c)", // Code block color
          n: "var(--g-n)", // Hover background
          t: "var(--g-t)",
          l: "var(--g-l)",
          i: "var(--g-i)",
          r: "var(--g-r)",
        },
        c: {
          DEFAULT: "var(--c)", // Different font colors
          a: "var(--c-a)",
          s: "var(--c-s)",
          m: "var(--c-m)",
        },
        h6: "var(--h6)",
        border: {
          DEFAULT: "var(--b)", // Border
          t: "var(--b-t)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--r)", // Border radius
      },
      spacing: {
        "scroll-y": "var(--s-y)", // Scrollbar
        "scroll-x": "var(--s-x)",
      },
      maxWidth: {
        mx: "var(--w)", // Main screen max width
      },
      boxShadow: {
        DEFAULT: "var(--s)", // Shadow
      },
      borderColor: {
        DEFAULT: "var(--b)",
      },
    },
  },
  plugins: [],
} satisfies Config;
