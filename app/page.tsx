import {
  profile,
  stats,
  experience,
  skills,
  projects,
  projectCategories,
  education,
} from "@/lib/data";
import { ProjectGallery } from "@/components/project-gallery";
import {
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Mail,
  MessageSquare,
  Send,
  Image,
  ExternalLink,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { SideMenu } from "@/components/side-menu";
import { RevealSection } from "@/components/reveal-section";
import { AnimatedCounter } from "@/components/animated-counter";

export default function Home() {
  return (
    <div className="relative min-h-screen z-10">
      <SideMenu />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-16 overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            
            {/* Left — Text */}
            <div className="flex-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
                {profile.name}
              </h1>
              <p className="text-xl sm:text-2xl text-white/60 mb-2">
                {profile.title}
              </p>
              <p className="gradient-text text-lg sm:text-xl font-medium mb-8">
                {profile.tagline}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
                <a href={`tel:${profile.phone}`} className="pill-btn">
                  <Phone className="h-3 w-3" />
                  {profile.phone}
                </a>
                <a href={`mailto:${profile.email}`} className="pill-btn">
                  <Mail className="h-3 w-3" />
                  {profile.email}
                </a>
              </div>

              <a
                href="https://drive.google.com/drive/folders/1n1yExstearYnEaTfkah6Hmr6ZPMj8LS4?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Скачать резюме и портфолио PDF
              </a>
            </div>

            {/* Right — Photo */}
            <div className="shrink-0">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-112 w-112 sm:h-128 sm:w-128 lg:h-144 lg:w-144 object-contain"
                />
              ) : (
                <div className="flex h-80 w-80 sm:h-96 sm:w-96 items-center justify-center bg-white/5 rounded-2xl">
                  <Image className="h-20 w-20 text-white/20" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <RevealSection>
        <section id="about" className="px-6 sm:px-10 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-8">
                  <span className="gradient-text">Обо мне</span>
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed whitespace-pre-line text-sm sm:text-base max-w-2xl">
                  {profile.description}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Experience Section */}
      <RevealSection>
        <section id="experience" className="px-6 sm:px-10 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12">
              <span className="gradient-text">Опыт работы</span>
            </h2>
            <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-blue-500/30 before:via-violet-500/30 before:to-pink-500/30">
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-8 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <Briefcase className="h-3 w-3 text-white/40" />
                  </div>
                  <div className="glass-card p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white">{exp.company}</h3>
                      <span className="text-xs text-white/40">— {exp.position}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-cyan-400/60 mb-2">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Skills Section */}
      <RevealSection>
        <section id="skills" className="px-6 sm:px-10 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12">
              <span className="gradient-text">Навыки</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((category) => (
                <div key={category.category} className="glass-card p-6">
                  <h3 className="text-sm uppercase tracking-wider text-white/40 mb-5">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white/70">{skill.name}</span>
                          <span className="text-white/30">{skill.level}%</span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500/60 via-violet-500/60 to-pink-500/60 transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Projects Section */}
      <RevealSection>
        <section className="px-6 sm:px-10 lg:px-16 py-24" id="projects">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12">
              <span className="gradient-text">Портфолио</span>
            </h2>
            <ProjectGallery projects={projects} categories={projectCategories} />
          </div>
        </section>
      </RevealSection>

      {/* Education Section */}
      <RevealSection>
        <section className="px-6 sm:px-10 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-12">
              <span className="gradient-text">Образование</span>
            </h2>
            <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-blue-500/30 before:via-violet-500/30 before:to-pink-500/30">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-8 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <GraduationCap className="h-3 w-3 text-white/40" />
                  </div>
                  <div className="glass-card p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{edu.institution}</h3>
                    <p className="text-xs text-white/40 mb-1">{edu.degree}</p>
                    <div className="flex items-center gap-1 text-xs text-cyan-400/60 mb-2">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </div>
                    <p className="text-sm text-white/50">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
}
