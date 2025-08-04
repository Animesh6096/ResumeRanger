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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      const scrollTop = window.pageYOffset;

      // Update scrolled state for navbar styling
      setScrolled(scrollTop > 20);

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        if (scrollTop >= sectionTop - 200) {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-black/5 dark:shadow-black/20" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/#home" className="group flex items-center space-x-2">
            <div className={`relative transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 dark:from-primary/30 dark:to-primary/60 flex items-center justify-center backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary transition-all duration-300 group-hover:text-primary/90"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.8"/>
                  <polygon points="12,8 8,10 12,12 16,10" className="animate-pulse" opacity="0.6"/>
                  <circle cx="12" cy="12" r="2" className="animate-ping" opacity="0.4"/>
                </svg>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <span className={`font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-300 ${scrolled ? 'text-base' : 'text-xl'}`}>
              Animesh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 -z-10 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`relative w-10 h-10 rounded-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${scrolled ? 'bg-background/70' : 'bg-background/30'}`}
              title={`Current theme: ${theme === 'system' ? 'system (auto)' : theme}`}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              {theme === 'system' && (
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              )}
              <span className="sr-only">Toggle theme (currently {theme})</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${scrolled ? 'bg-background/70' : 'bg-background/30'}`}
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl border-l border-border/50">
                <SheetTitle className="text-left mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Navigation
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate through different sections of the portfolio
                </SheetDescription>
                
                {/* Mobile Theme Control */}
                <div className="flex items-center justify-center space-x-2 mb-8 p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                  <span className="text-xs font-medium text-muted-foreground">Theme</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 relative"
                    title={`Current theme: ${theme === 'system' ? 'system (auto)' : theme}`}
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    {theme === 'system' && (
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    )}
                    <span className="sr-only">Toggle theme (currently {theme})</span>
                  </Button>
                </div>

                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105 w-full text-left ${
                        activeSection === link.href.replace("#", "")
                          ? "text-primary bg-primary/10 shadow-sm border border-primary/20"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      {activeSection === link.href.replace("#", "") && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-r-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Glossy bottom border */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
      )}
    </nav>
  );
}
