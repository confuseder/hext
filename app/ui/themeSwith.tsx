"use client";

import { useTheme } from "next-themes";
import { Eclipse, Sun } from "lucide-react";

export default function ThemeSwitch({ className }: { className: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <span
      className={`${className}`}
      onClick={() => {
        setTheme(theme == "light" ? "dark" : "light");
      }}
    >
      {theme == "light" ? <Sun /> : <Eclipse />}
    </span>
  );
}
