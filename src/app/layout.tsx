import type { Metadata } from "next";
import "./globals.css";
import BottomNavigation from "@/components/bottom-navigation";
import TopNavigation from "@/components/top-navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-sans sm:max-w-lg mx-auto sm:border relative">
        <TopNavigation />
        <main className="py-10 px-4">{children}</main>
        <BottomNavigation />
      </body>
    </html>
  );
}
