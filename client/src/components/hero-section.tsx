import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Shield, Users, Sparkles, Code, Database, Github, Linkedin, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    "AI Researcher",
    "Full-Stack Developer", 
    "Machine Learning Engineer",
    "Security Enthusiast"
  ];

  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        // Wait before starting next role
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

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
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float animate-morph"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-200 animate-morph"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-600 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-400 animate-morph"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-teal-400 rounded-full mix-blend-multiply filter blur-lg animate-bounce animation-delay-100"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-lg animate-bounce animation-delay-300"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-1/4 h-8 w-8 text-primary/20 animate-float animation-delay-100" />
        <Database className="absolute top-1/3 right-1/4 h-6 w-6 text-accent/20 animate-float animation-delay-300" />
        <Brain className="absolute bottom-1/4 left-1/3 h-10 w-10 text-purple-500/20 animate-float animation-delay-500" />
        <Sparkles className="absolute top-1/2 right-1/3 h-7 w-7 text-teal-500/20 animate-bounce animation-delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <div className="inline-block animate-wave text-4xl mb-4">👋</div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">Hello, I'm</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
            <span className="animate-scale-in">ANIMESH</span><br />
            <span className="gradient-text animate-scale-in animation-delay-200">BHATTACHARJEE</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 animate-fade-in font-mono">
              <span className="inline-block font-semibold text-primary dark:text-accent transition-all duration-500">
                {displayedText}
              </span>
              <span className={`text-primary dark:text-accent ml-1 ${isTyping ? 'animate-pulse' : 'animate-pulse'}`}>|</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
            Passionate about machine learning, secure development, and creating innovative solutions that make a difference
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8 animate-slide-up animation-delay-350">
            <a
              href="https://github.com/Animesh6096"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/animesh-bhattacharjee-jhalok"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/animesh.bhattacharjee.6096"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:banimesh2002@gmail.com"
              className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <Button
              size="lg"
              onClick={() => handleNavClick("projects")}
              className="px-8 py-4 rounded-full shadow-lg hover-lift animate-glow"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNavClick("blog")}
              className="px-8 py-4 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white hover-lift"
            >
              Read My Blog
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => handleNavClick("contact")}
              className="px-8 py-4 rounded-full hover-grow"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Enhanced Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover-lift animate-scale-in animation-delay-500 group">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
              AI Research
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Thesis in Visual Speech Recognition
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover-lift animate-scale-in animation-delay-600 group">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Secure Development
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              SecureBlogVault Platform
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover-lift animate-scale-in animation-delay-700 group">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce">
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
