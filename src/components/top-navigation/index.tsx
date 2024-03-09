"use client";
import { ExitIcon, SunIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 sm:max-w-lg mx-auto grid grid-cols-3 dark:bg-black px-4 py-2 border-b z-10 dark:border-zinc-600 whitespace-nowrap">
      <SunIcon className="sm:w-5 sm:h-5 w-4 h-4" />
      <div className="w-full text-center font-bold">Expense Note</div>
      <ExitIcon className="sm:w-5 sm:h-5 w-4 h-4 ms-auto" />
    </nav>
  );
};

export default TopNavigation;
