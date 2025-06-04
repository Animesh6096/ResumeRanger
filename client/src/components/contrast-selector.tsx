import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/use-theme";
import { Eye, EyeOff, Contrast } from "lucide-react";

export function ContrastSelector() {
  const { contrast, setContrast } = useTheme();

  const contrastModes = [
    { value: "normal", label: "Normal Contrast", icon: Eye },
    { value: "high", label: "High Contrast", icon: Contrast },
    { value: "extra-high", label: "Extra High Contrast", icon: EyeOff },
  ];

  const currentMode = contrastModes.find(mode => mode.value === contrast);
  const CurrentIcon = currentMode?.icon || Eye;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">Toggle contrast mode (currently {contrast})</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {contrastModes.map((mode) => {
          const Icon = mode.icon;
          return (
            <DropdownMenuItem
              key={mode.value}
              onClick={() => setContrast(mode.value as any)}
              className={`flex items-center space-x-2 cursor-pointer ${
                contrast === mode.value ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{mode.label}</span>
              {contrast === mode.value && (
                <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}