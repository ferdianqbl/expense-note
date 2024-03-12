"use client";
import { Button } from "../ui/button";
import { BarChartIcon, HomeIcon, ActivityLogIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const BottomNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 sm:max-w-md mx-auto grid grid-cols-3 dark:bg-black px-4 py-2 sm:px-0 border-t z-10 dark:border-zinc-600 bg-white items-center">
      <Link href={"/"}>
        <Button
          variant={"ghost"}
          className={`hover:bg-transparent flex justify-center items-center flex-col h-fit gap-1 w-full ${
            pathname === "/"
              ? "text-accent-foreground font-medium"
              : "text-slate-300 font-normal"
          }`}
        >
          <HomeIcon className="sm:w-6 sm:h-6 w-5 h-5" />
          <span className="">Home</span>
        </Button>
      </Link>
      <Link href={"/summary"}>
        <Button
          variant={"ghost"}
          className={`hover:bg-transparent flex justify-center items-center flex-col h-fit gap-1 w-full ${
            pathname === "/summary"
              ? "text-accent-foreground font-medium"
              : "text-slate-300 font-normal"
          }`}
        >
          <BarChartIcon className="sm:w-6 sm:h-6 w-5 h-5" />
          <span className="">Summary</span>
        </Button>
      </Link>
      <Link href={"/logs"}>
        <Button
          variant={"ghost"}
          className={`hover:bg-transparent flex justify-center items-center flex-col h-fit gap-1 w-full ${
            pathname === "/logs"
              ? "text-accent-foreground font-medium"
              : "text-slate-300 font-normal"
          }`}
        >
          <ActivityLogIcon className="sm:w-6 sm:h-6 w-5 h-5" />
          <span className="">Logs</span>
        </Button>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
