
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-1">
      <ToggleGroup type="single" value={theme} onValueChange={(value) => {
        if (value) setTheme(value as "light" | "dark" | "system");
      }}>
        <ToggleGroupItem value="light" aria-label="Light mode" title="Light mode">
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark mode" title="Dark mode">
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
