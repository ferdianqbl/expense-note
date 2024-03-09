import CardBalance from "@/components/pages/home/card-balance";
import CardExpense from "@/components/pages/home/card-expense";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <CardBalance />
      <CardExpense />
    </div>
  );
}
