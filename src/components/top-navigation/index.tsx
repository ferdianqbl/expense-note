"use client";
import { ExitIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const TopNavigation = () => {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const { push } = useRouter();

  if (pathname === "/login" || pathname === "/register")
    return (
      <nav className="sm:max-w-md mx-auto flex justify-between px-4 py-2 border-b dark:border-zinc-600 whitespace-nowrap items-center relative">
        <div className="flex items-center">
          <Button
            variant={"outline"}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            size={"icon"}
            onClick={() => {
              setTheme("dark");
            }}
          >
            <SunIcon className="h-[1.125rem] w-[1.125rem]" />
          </Button>
          <Button
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            variant={"outline"}
            size={"icon"}
            onClick={() => {
              setTheme("light");
            }}
          >
            <MoonIcon className="h-[1.125rem] w-[1.125rem]" />
          </Button>
        </div>
        <div className="w-full text-end font-bold lowercase ">Expenspedia</div>
      </nav>
    );
  return (
    <nav className="sm:max-w-md mx-auto flex justify-between px-4 py-2 border-b dark:border-zinc-600 whitespace-nowrap items-center relative">
      <div className="flex items-center">
        <Button
          variant={"outline"}
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          size={"icon"}
          onClick={() => {
            setTheme("dark");
          }}
        >
          <SunIcon className="h-[1.125rem] w-[1.125rem]" />
        </Button>
        <Button
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          variant={"outline"}
          size={"icon"}
          onClick={() => {
            setTheme("light");
          }}
        >
          <MoonIcon className="h-[1.125rem] w-[1.125rem]" />
        </Button>
      </div>

      <div className="w-full text-center font-bold lowercase">ferdianqbl</div>
      <div className="flex items-center">
        <Button
          variant={"outline"}
          className="ms-auto"
          size={"icon"}
          onClick={() => {
            Cookies.remove("token");
            push("/login");
          }}
        >
          <ExitIcon className="h-[1.125rem] w-[1.125rem]" />
        </Button>
      </div>
    </nav>
  );
};

export default TopNavigation;
