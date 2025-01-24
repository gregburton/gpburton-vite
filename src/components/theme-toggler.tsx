import { use } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { ThemeProviderContext } from "@/context/theme-provider-context";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ThemeToggler() {
  const { setTheme, theme } = use(ThemeProviderContext);

  return (
    <>
      <div className="hidden sm:flex">
        <Button
          size="icon"
          variant={theme === "light" ? "secondary" : "outline"}
          className="rounded-r-none"
          onClick={() => setTheme("light")}
        >
          <Sun />
        </Button>
        <Button
          size="icon"
          variant={theme === "dark" ? "secondary" : "outline"}
          className="rounded-l-none rounded-r-none border-x-0"
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </Button>
        <Button
          size="icon"
          variant={theme === "system" ? "secondary" : "outline"}
          className="rounded-l-none"
          onClick={() => setTheme("system")}
        >
          <Monitor />
        </Button>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="sm:hidden">
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
