"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20"
    >
      {dark ? (
        <Sun className="h-4 w-4 text-white/70" />
      ) : (
        <Moon className="h-4 w-4 text-white/70" />
      )}
    </button>
  );
}
