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
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SideMenu } from "@/components/side-menu";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SideMenu />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-950 px-4 pb-0 pt-16 sm:pt-20">
        <div className="pattern-grid absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:gap-12">
            {/* Left: Text */}
            <div className="flex-1 pt-8 text-center md:text-left md:pt-12">
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mb-2 text-xl text-blue-200 sm:text-2xl">
                {profile.title}
              </p>
              <p className="mb-6 text-lg font-medium text-blue-300 sm:text-xl">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-100 transition-all hover:scale-105 hover:bg-blue-800/50"
                  >
                    {social.label}
                  </a>
                ))}
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-100 transition-all hover:scale-105 hover:bg-blue-800/50"
                >
                  <Phone className="h-4 w-4" />
                  {profile.phone}
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-100 transition-all hover:scale-105 hover:bg-blue-800/50"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1n1yExstearYnEaTfkah6Hmr6ZPMj8LS4?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 md:w-auto"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Скачать резюме и портфолио PDF
              </a>
            </div>

            {/* Right: Photo */}
            <div className="relative shrink-0 -mb-1">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
className="h-120 w-120 object-contain sm:h-144 sm:w-144"
                />
              ) : (
                <div className="flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">
                  <Image className="h-20 w-20 text-blue-300/30" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-b border-border/40 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-6 text-3xl font-bold">Обо мне</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                {profile.description}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gradient-border rounded-xl p-4 text-center"
                >
                  <div className="gradient-text text-3xl font-bold">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-b border-border/40 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Опыт работы</h2>
          <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-indigo-500">
            {experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute -left-8 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                  <Briefcase className="h-3 w-3 text-blue-400" />
                </div>
                <div className="gradient-border rounded-xl p-5">
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">
                      — {exp.position}
                    </span>
                  </div>
                  <div className="mb-2 flex items-center gap-1 text-sm text-blue-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-b border-border/40 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Навыки и технологии</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((category) => (
              <div
                key={category.category}
                className="gradient-border rounded-xl p-6"
              >
                <h3 className="mb-4 text-lg font-semibold">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transition-all duration-500"
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

      {/* Projects Section */}
      <section className="border-b border-border/40 px-4 py-16" id="projects">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Портфолио проектов</h2>
          <ProjectGallery
            projects={projects}
            categories={projectCategories}
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b border-border/40 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Образование</h2>
          <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-indigo-500">
            {education.map((edu) => (
              <div key={edu.id} className="relative">
                <div className="absolute -left-8 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
                  <GraduationCap className="h-3 w-3 text-purple-400" />
                </div>
                <div className="gradient-border rounded-xl p-5">
                  <h3 className="mb-1 text-lg font-semibold">
                    {edu.institution}
                  </h3>
                  <p className="mb-1 text-sm text-muted-foreground">
                    {edu.degree}
                  </p>
                  <div className="mb-2 flex items-center gap-1 text-sm text-purple-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {edu.period}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16" id="contact">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold">Свяжитесь со мной</h2>
          <p className="mb-10 text-center text-muted-foreground">
            Заполните форму, и я отвечу вам в ближайшее время
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
