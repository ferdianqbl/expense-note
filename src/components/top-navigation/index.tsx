"use client";
import { ExitIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const TopNavigation = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="sm:max-w-md mx-auto grid grid-cols-3 dark:bg-black px-4 py-2 border-b z-10 dark:border-zinc-600 whitespace-nowrap bg-white items-center">
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
        <MoonIcon className=" h-[1.2rem] w-[1.2rem]" />
      </Button>

      <div className="w-full text-center font-bold">Ferdianqbl</div>
      <ExitIcon className="sm:w-6 sm:h-6 w-5 h-5 ms-auto" />
    </nav>
  );
};

export default TopNavigation;
