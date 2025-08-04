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
              <SheetContent 
                side="right" 
                className="w-[320px] max-w-[90vw] bg-white/95 dark:bg-background/95 backdrop-blur-xl border border-gray-200/80 dark:border-border/50 rounded-l-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 mr-2 mt-2 mb-2 h-[calc(100vh-16px)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=open]:duration-300 data-[state=closed]:duration-200"
              >
                {/* Glossy overlay - lighter for light mode */}
                <div className="absolute inset-0 rounded-l-2xl bg-gradient-to-br from-white/20 via-gray-50/10 to-gray-100/10 dark:from-white/10 dark:via-transparent dark:to-black/5 pointer-events-none"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <SheetTitle className="text-left mb-6 mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-bold text-lg">
                    Navigation
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate through different sections of the portfolio
                  </SheetDescription>
                  
                  {/* Mobile Theme Control */}
                  <div className="flex items-center justify-between mb-8 p-4 bg-gray-50/60 dark:bg-background/30 backdrop-blur-sm rounded-xl border border-gray-200/60 dark:border-border/30 shadow-sm shadow-gray-500/5 dark:shadow-black/5">
                    <span className="text-sm font-medium text-gray-700 dark:text-foreground/80">Theme</span>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-gray-600 dark:text-foreground/60 capitalize">{theme}</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-white/80 to-gray-50/60 dark:from-background/60 dark:to-background/40 backdrop-blur-sm border border-gray-200/60 dark:border-border/40 hover:border-gray-300/80 dark:hover:border-border/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 relative"
                        title={`Current theme: ${theme === 'system' ? 'system (auto)' : theme}`}
                      >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
                        {theme === 'system' && (
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse shadow-sm"></div>
                        )}
                        <span className="sr-only">Toggle theme (currently {theme})</span>
                      </Button>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 flex flex-col space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border/30 scrollbar-track-transparent">
                    {navLinks.map((link, index) => (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`relative px-4 py-4 text-sm font-medium rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 w-full text-left group ${
                          activeSection === link.href.replace("#", "")
                            ? "text-primary bg-gradient-to-r from-primary/15 to-primary/5 shadow-lg shadow-primary/10 border border-primary/20"
                            : "text-gray-700 hover:text-gray-900 dark:text-muted-foreground dark:hover:text-foreground"
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="transition-all duration-300 group-hover:translate-x-1">{link.label}</span>
                          {activeSection === link.href.replace("#", "") && (
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-sm"></div>
                          )}
                        </div>
                        
                        {/* Active indicator */}
                        {activeSection === link.href.replace("#", "") && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary via-primary/80 to-primary/40 rounded-r-full shadow-sm animate-pulse"></div>
                        )}
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </button>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-border/30">
                    <div className="text-xs text-gray-500 dark:text-muted-foreground/60 text-center">
                      Animesh Bhattacharjee
                    </div>
                  </div>
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
