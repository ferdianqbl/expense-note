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
      <main className="pt-4 px-4 pb-24">{children}</main>
      <BottomNavigation />
    </>
  );
}
