import CardBalance from "@/components/pages/home/card/card-balance";
import CardExpense from "@/components/pages/home/card/card-expense";
import ExpenseActivity from "@/components/pages/home/expense-activity";
import { serverTokenVerify } from "@/lib/token/token-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = () => {
  console.log("home");
  // const res = serverTokenVerify(cookies().get("token")?.value || "");
  // if (res.error) {
  //   return redirect("/login");
  // }
  return (
    <>
      <div className="flex flex-col gap-3">
        <CardBalance />
        <CardExpense />
      </div>
      <ExpenseActivity />
    </>
  );
};

export default Page;
