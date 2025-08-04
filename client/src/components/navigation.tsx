import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon, Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#activities", label: "Activities" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  // Auto scroll to top when navigating between pages
  useEffect(() => {
    if (location !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(nextTheme);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 animate-slide-in-left">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover-grow">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center relative overflow-hidden">
              <svg width="18" height="18" viewBox="0 0 18 18" className="text-white">
                <polygon points="9,1 15,5 15,13 9,17 3,13 3,5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
                <circle cx="9" cy="9" r="2" fill="currentColor" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-none gradient-text">
                Animesh
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                AI • Security • Innovation
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs xl:text-sm font-medium transition-all duration-300 px-2 xl:px-3 py-1.5 xl:py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-slate-600 dark:text-slate-400 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg hover:scale-105 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 relative"
              title={`Current theme: ${theme === 'system' ? 'system (auto)' : theme}`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              {theme === 'system' && (
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              )}
              <span className="sr-only">Toggle theme (currently {theme})</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Navigate through different sections of the portfolio
                </SheetDescription>
                
                {/* Mobile Theme Control */}
                <div className="flex items-center justify-center space-x-2 mt-6 mb-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Theme</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-lg hover:scale-105 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-600 relative"
                    title={`Current theme: ${theme === 'system' ? 'system (auto)' : theme}`}
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    {theme === 'system' && (
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    )}
                    <span className="sr-only">Toggle theme (currently {theme})</span>
                  </Button>
                </div>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-left text-lg font-medium transition-all duration-300 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 hover:scale-105 w-full ${
                        activeSection === link.href.replace("#", "")
                          ? "text-primary bg-primary/10"
                          : "text-slate-600 dark:text-slate-400 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
