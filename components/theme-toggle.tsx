"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed right-4 top-4 z-50 flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-3 transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20"
    >
      <span className="text-sm font-medium text-white/80">
        {dark ? "Тёмная тема" : "Светлая тема"}
      </span>
      <div className="relative h-6 w-11 rounded-full bg-white/15 transition-colors">
        <div
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
            dark ? "left-0.5" : "left-[22px]"
          }`}
        />
      </div>
    </button>
  );
}
