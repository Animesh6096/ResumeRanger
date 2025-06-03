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

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 animate-slide-in-left">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover-grow">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg hover:animate-bounce transition-all">
              AB
            </div>
            <span className="text-xl font-semibold text-slate-800 dark:text-slate-100 gradient-text">
              Animesh
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-slate-600 dark:text-slate-400 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg hover-grow relative"
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
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Navigate through different sections of the portfolio
                </SheetDescription>
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-left text-lg font-medium transition-colors ${
                        activeSection === link.href.replace("#", "")
                          ? "text-primary"
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
