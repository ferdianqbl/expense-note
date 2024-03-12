"use client";
import { ExitIcon, SunIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="sm:max-w-md mx-auto grid grid-cols-3 dark:bg-black px-4 py-2 border-b z-10 dark:border-zinc-600 whitespace-nowrap bg-white items-center">
      <SunIcon className="sm:w-6 sm:h-6 w-5 h-5" />
      <div className="w-full text-center font-bold">Ferdianqbl</div>
      <ExitIcon className="sm:w-6 sm:h-6 w-5 h-5 ms-auto" />
    </nav>
  );
};

export default TopNavigation;
