"use client";
import { ExitIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const TopNavigation = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="sm:max-w-md mx-auto grid grid-cols-3 px-4 py-2 border-b z-10 dark:border-zinc-600 whitespace-nowrap items-center">
      <Button
        variant={"outline"}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        size={"icon"}
        onClick={() => {
          setTheme("dark");
        }}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <Button
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("light");
        }}
      >
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>

      <div className="w-full text-center font-bold lowercase">Ferdianqbl</div>
      <Button variant={"outline"} className="ms-auto" size={"icon"}>
        <ExitIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </nav>
  );
};

export default TopNavigation;
