import { 
  Code, 
  Terminal, 
  Database, 
  Bot, 
  Palette, 
  CheckCircle,
  FileText,
  Server,
  Smartphone,
  Users as UsersIcon,
  Bug,
  Brain,
  BarChart3,
  Leaf,
  Figma
} from "lucide-react";
import { SiPython, SiJavascript, SiReact, SiMongodb, SiFigma, SiAdobe } from "react-icons/si";

const skillCategories = [
  {
    title: "Development",
    icon: Code,
    color: "blue",
    skills: [
      { name: "Django", icon: SiPython },
      { name: "React", icon: SiReact },
      { name: "Flask", icon: FileText },
      { name: "Express (Learning)", icon: Server },
    ],
  },
  {
    title: "Languages",
    icon: Terminal,
    color: "teal",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C", icon: Code },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiJavascript },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "purple",
    skills: [
      { name: "MySQL", icon: Server },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "ML/AI",
    icon: Bot,
    color: "orange",
    skills: [
      { name: "TensorFlow", icon: Brain },
      { name: "MediaPipe", icon: Smartphone },
      { name: "Data Science (Learning)", icon: BarChart3 },
    ],
  },
  {
    title: "Design",
    icon: Palette,
    color: "pink",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Illustrator", icon: SiAdobe },
      { name: "Photoshop", icon: SiAdobe },
    ],
  },
  {
    title: "Quality Assurance",
    icon: CheckCircle,
    color: "green",
    skills: [
      { name: "Bug Testing", icon: Bug },
      { name: "Mobile & Web QA", icon: Smartphone },
      { name: "Team Leadership", icon: UsersIcon },
    ],
  },
];

const colorClasses = {
  blue: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
  teal: "bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400",
  purple: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400",
  pink: "bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400",
  green: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive technical skills across development, design, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover-lift animate-scale-in group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${
                    category.color === 'blue' ? 'from-blue-400 to-blue-600' :
                    category.color === 'teal' ? 'from-teal-400 to-teal-600' :
                    category.color === 'purple' ? 'from-purple-400 to-purple-600' :
                    category.color === 'orange' ? 'from-orange-400 to-orange-600' :
                    category.color === 'pink' ? 'from-pink-400 to-pink-600' :
                    'from-green-400 to-green-600'
                  } animate-morph`}></div>
                </div>

                <div className={`w-16 h-16 ${colorClasses[category.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:animate-bounce transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 group-hover:animate-rotate" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 relative z-10 group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="flex items-center space-x-3 hover-grow cursor-pointer group/skill animate-slide-in-left"
                        style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                      >
                        <SkillIcon className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover/skill:text-primary transition-colors duration-300 group-hover/skill:animate-bounce" />
                        <span className="text-slate-600 dark:text-slate-400 group-hover/skill:text-slate-800 dark:group-hover/skill:text-slate-200 transition-colors duration-300 group-hover/skill:font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
