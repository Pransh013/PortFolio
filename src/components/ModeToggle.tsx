import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button size="icon" className="hidden dark:flex">
        <SunIcon
          className=" h-[1.2rem] w-[1.2rem] transition-all"
          onClick={() => setTheme("light")}
        />
      </Button>
      <Button size="icon" className="flex dark:hidden">
        <MoonIcon
          className=" h-[1.2rem] w-[1.2rem] transition-all"
          onClick={() => setTheme("dark")}
        />
      </Button>
    </div>
  );
}
