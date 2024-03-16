import BottomNavigation from "@/components/bottom-navigation";
import TopNavigation from "@/components/top-navigation";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation />
      <main className="px-4 flex flex-col w-full items-center min-h-screen justify-center">
        {children}
      </main>
    </>
  );
}
