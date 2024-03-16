import CardBalance from "@/components/pages/home/card/card-balance";
import CardExpense from "@/components/pages/home/card/card-expense";
import ExpenseActivity from "@/components/pages/home/expense-activity";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <CardBalance />
        <CardExpense />
      </div>
      <ExpenseActivity />
    </>
  );
}
