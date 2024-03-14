import type { Metadata } from "next";
import "./globals.css";
import BottomNavigation from "@/components/bottom-navigation";
import TopNavigation from "@/components/top-navigation";
import { ThemeProvider } from "@/lib/contexts/theme-provider";

export const metadata: Metadata = {
  title: "Expensepedia",
  description: "Expensepedia is a simple expense tracker app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-sans max-w-md mx-auto relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNavigation />
          <main className="pt-4 px-4 pb-24">{children}</main>
          <BottomNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
