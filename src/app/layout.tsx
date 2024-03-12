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
      <body className="text-sans max-w-md mx-auto relative">
        <TopNavigation />
        <main className="pt-4 px-4 pb-24">{children}</main>
        <BottomNavigation />
      </body>
    </html>
  );
}
