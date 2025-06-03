import { Button } from "@/components/ui/button";
import { Brain, Shield, Users } from "lucide-react";

export function HeroSection() {
  const handleNavClick = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-200"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-600 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
            Animesh<br />
            <span className="text-primary">Bhattacharjee</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI Researcher & Full-Stack Developer passionate about machine learning, secure development, and creating innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              onClick={() => handleNavClick("projects")}
              className="px-8 py-4 rounded-full shadow-lg"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNavClick("blog")}
              className="px-8 py-4 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white"
            >
              Read My Blog
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => handleNavClick("contact")}
              className="px-8 py-4 rounded-full"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
              AI Research
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Thesis in Visual Speech Recognition
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Secure Development
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              SecureBlogVault Platform
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
              QA Leadership
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Team Leadership at Nyntax
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
