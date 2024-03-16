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
      <main className="p-4">{children}</main>
    </>
  );
}
