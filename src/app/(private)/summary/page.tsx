import SummaryBalance from "@/components/pages/summary/card/card-balance";
import SummaryExpense from "@/components/pages/summary/card/card-expense";
import SelectMonth from "@/components/pages/summary/select-month";
import ExpenseActivity from "@/components/pages/summary/expense-activity";
import ChartExpense from "@/components/pages/summary/chart/chart-expense";
import { serverTokenVerify } from "@/lib/token/token-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = () => {
  console.log("summary");
  const res = serverTokenVerify(cookies().get("token")?.value || "");
  if (res.error) {
    return redirect("/login");
  }
  return (
    <div className="flex flex-col gap-3">
      <SelectMonth />
      <div className="flex flex-col gap-3">
        <SummaryBalance />
        <SummaryExpense />
      </div>
      <div className="mt-8 h-[120px]">
        <ChartExpense />
      </div>

      <ExpenseActivity />
    </div>
  );
};

export default Page;
