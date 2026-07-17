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
      className="fixed right-4 top-4 z-50 flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2.5 transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20"
    >
      <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
        {dark ? "Тёмная" : "Светлая"}
      </span>
      <div className="relative h-5 w-9 rounded-full bg-white/10 transition-colors">
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-md transition-all duration-300 ${
            dark ? "left-0.5" : "left-[18px]"
          }`}
        />
      </div>
    </button>
  );
}
