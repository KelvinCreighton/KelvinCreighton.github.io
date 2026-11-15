"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={
        mounted && resolvedTheme === "dark"
          ? "Use light theme"
          : "Use dark theme"
      }
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      disabled={!mounted}
    >
      <span aria-hidden="true">
        {mounted && resolvedTheme === "dark" ? "☼" : "◐"}
      </span>
    </button>
  );
}
