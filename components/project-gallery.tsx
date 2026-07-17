"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Image as ImageIcon } from "lucide-react";

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  image: string;
  links: Record<string, string>;
}

interface Category {
  id: string;
  label: string;
}

export function ProjectGallery({
  projects,
  categories,
}: {
  projects: Project[];
  categories: readonly Category[];
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`pill-btn text-xs ${
            activeCategory === "all" ? "border-violet-500/50 text-white" : ""
          }`}
        >
          Все
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`pill-btn text-xs ${
              activeCategory === cat.id ? "border-violet-500/50 text-white" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="glass-card group cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="mb-1 font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="line-clamp-3 text-sm text-white/50">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-3 py-16 text-white/30">
          <ImageIcon className="h-12 w-12 opacity-30" />
          <p className="text-sm">Нет проектов в этой категории</p>
        </div>
      )}

      {/* Project Popup */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto bg-black/90 backdrop-blur-xl border border-white/10">
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-white/40">
                Роль: {selectedProject.role}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              {/* Full Image */}
              <div className="overflow-hidden rounded-xl bg-white/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Full Description */}
              <p className="leading-relaxed text-white/60">
                {selectedProject.fullDescription}
              </p>

              {/* Links */}
              {Object.keys(selectedProject.links).length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {Object.entries(selectedProject.links).map(
                    ([key, href]) => (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-btn text-xs"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {key === "demo" ? "Смотреть" : key}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
