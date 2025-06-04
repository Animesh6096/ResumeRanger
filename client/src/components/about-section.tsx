import { Brain, Code, Shield, GraduationCap, Award, Users, BookOpen, Zap } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Research",
    description: "Working on lip reading thesis using computer vision and deep learning"
  },
  {
    icon: Shield,
    title: "Security Focus",
    description: "Passionate about cybersecurity and secure development practices"
  },
  {
    icon: Code,
    title: "Full-Stack Dev",
    description: "Building modern web applications with React, Node.js, and Python"
  },
  {
    icon: Award,
    title: "Quality Leader",
    description: "Former QA Manager at NYNTAX with proven leadership skills"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Get to know me better
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Computer Science student passionate about AI research, security, and creating innovative solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            {/* Enhanced profile section */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-purple-50 to-teal-100 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-teal-900/30 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-xl">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl relative">
                  <span className="z-10">AB</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full animate-pulse opacity-75"></div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">CGPA</p>
                    <p className="text-lg font-bold text-primary">3.60</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Graduation</p>
                    <p className="text-sm font-bold text-accent">Sep 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Computer Science Student & AI Researcher
              </h3>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                I am a Computer Science student at BRAC University, passionate about AI, machine learning, and development. 
                I worked as a QA Manager at Nyntax, focusing on improving user experience and leading quality assurance initiatives 
                across mobile apps and websites.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Currently working on my thesis in lip reading using computer vision and deep learning while developing 
                modern web applications. I am always eager to learn and grow, currently pursuing the Associate Data Scientist 
                Track on DataCamp.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Education Card */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  BRAC University
                </h4>
              </div>
              <p className="text-accent font-medium text-lg mb-2">BSc in Computer Science</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Graduating September 2025 | CGPA: 3.60
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Digital Logic Design", "OOP", "Data Structures", "Algorithms", 
                  "DBMS", "OS", "Image Processing", "Computer Vision", 
                  "Machine Learning", "Cryptography"
                ].map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}