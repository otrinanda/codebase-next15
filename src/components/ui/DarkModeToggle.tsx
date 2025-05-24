import { Switch } from "@/components/ui/switch";
import { useThemeStore } from "@/lib/stores/themeStore";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <div className="flex items-center gap-2 animate-fade-in duration-300">
      <Sun
        className={`h-5 w-5 ${
          isDarkMode ? "text-muted-foreground" : "text-primary"
        }`}
      />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        className="data-[state=checked]:bg-primary"
        aria-label={
          isDarkMode ? "Nonaktifkan mode gelap" : "Aktifkan mode gelap"
        }
      />
      <Moon
        className={`h-5 w-5 ${
          isDarkMode ? "text-primary" : "text-muted-foreground"
        }`}
      />
    </div>
  );
}
