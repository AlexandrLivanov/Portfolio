"use client";

import { Menu } from "lucide-react";

export function SideMenu() {
  const toggleMenu = () => {
    const menu = document.getElementById("side-menu");
    if (menu) menu.classList.toggle("translate-x-0");
  };

  const handleNav = (id: string) => {
    const menu = document.getElementById("side-menu");
    if (menu) menu.classList.toggle("translate-x-0");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed left-4 top-4 z-50">
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white shadow-lg transition-all hover:scale-105"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div
        id="side-menu"
        className="fixed left-0 top-0 z-40 h-full w-64 -translate-x-full transform border-r border-border/40 bg-background/95 backdrop-blur-xl transition-transform duration-300"
      >
        <div className="flex h-full flex-col gap-2 p-6 pt-20">
          <button
            onClick={() => handleNav("about")}
            className="rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            Обо мне
          </button>
          <button
            onClick={() => handleNav("experience")}
            className="rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            Опыт работы
          </button>
          <button
            onClick={() => handleNav("skills")}
            className="rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            Навыки
          </button>
          <button
            onClick={() => handleNav("projects")}
            className="rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
          >
            Портфолио
          </button>
        </div>
      </div>
    </>
  );
}
