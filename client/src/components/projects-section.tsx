import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Info, Brain, Shield, Briefcase, Eye, Book } from "lucide-react";
import { projects, getProjectsByCategory } from "@/lib/project-data";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "web-dev", label: "Web Dev" },
  { id: "security", label: "Security" },
];

const iconMap = {
  brain: Brain,
  shield: Shield,
  briefcase: Briefcase,
  eye: Eye,
  book: Book,
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  const getProjectIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Brain;
    return <IconComponent className="h-12 w-12 text-white" />;
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Innovative solutions spanning AI research, secure development, and full-stack applications
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-slate-50 dark:bg-slate-700 border-none shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-full h-48 bg-gradient-to-br ${project.image.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  {project.image.animation === "grid-pulse" && (
                    <div className="grid grid-cols-8 gap-1 h-full">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-white animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  )}
                  {project.image.animation === "border-pulse" && (
                    <div className="w-full h-full border-2 border-white border-dashed animate-pulse" />
                  )}
                  {project.image.animation === "grid-fade" && (
                    <div className="grid grid-cols-3 gap-2 h-full p-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-white rounded" />
                      ))}
                    </div>
                  )}
                  {project.image.animation === "box-detection" && (
                    <>
                      <div className="absolute top-4 left-4 w-16 h-12 border-2 border-white animate-pulse" />
                      <div className="absolute top-8 right-8 w-12 h-16 border-2 border-white animate-pulse animation-delay-500" />
                    </>
                  )}
                  {project.image.animation === "lip-animation" && (
                    <div className="w-20 h-12 bg-white rounded-full mx-auto mt-16 animate-pulse" />
                  )}
                  {project.image.animation === "book-grid" && (
                    <div className="grid grid-cols-4 gap-1 h-full p-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-white rounded h-full" />
                      ))}
                    </div>
                  )}
                </div>
                {getProjectIcon(project.image.icon)}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="text-accent hover:text-accent/80 text-sm font-medium flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  )}
                  {project.links.details && (
                    <a
                      href={project.links.details}
                      className="text-accent hover:text-accent/80 text-sm font-medium flex items-center"
                    >
                      <Info className="h-4 w-4 mr-1" />
                      Details
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
