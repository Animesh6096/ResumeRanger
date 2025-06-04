import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ContrastMode = "normal" | "high" | "extra-high";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultContrast?: ContrastMode;
  storageKey?: string;
  contrastStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  contrast: ContrastMode;
  setTheme: (theme: Theme) => void;
  setContrast: (contrast: ContrastMode) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  contrast: "normal",
  setTheme: () => null,
  setContrast: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultContrast = "normal",
  storageKey = "portfolio-theme",
  contrastStorageKey = "portfolio-contrast",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [contrast, setContrast] = useState<ContrastMode>(
    () => (localStorage.getItem(contrastStorageKey) as ContrastMode) || defaultContrast
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("contrast-normal", "contrast-high", "contrast-extra-high");
    root.classList.add(`contrast-${contrast}`);
  }, [contrast]);

  if (!mounted) return null;

  const value = {
    theme,
    contrast,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    setContrast: (newContrast: ContrastMode) => {
      localStorage.setItem(contrastStorageKey, newContrast);
      setContrast(newContrast);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
