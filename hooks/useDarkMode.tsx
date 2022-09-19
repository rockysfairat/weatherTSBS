import React, { useState, useEffect } from "react";

export function useDarkMode() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const colorTheme = theme == "dark" ? "light" : "dark";

  useEffect(() => {
    const root: HTMLElement = window.document.documentElement;
    root.classList.add("dark");
    root.classList.remove(colorTheme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
