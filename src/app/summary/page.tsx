import SummaryBalance from "@/components/pages/summary/card/card-balance";
import SummaryExpense from "@/components/pages/summary/card/card-expense";
import SelectMonth from "@/components/pages/summary/select-month";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <SelectMonth />
      <div className="flex flex-col gap-3">
        <SummaryBalance />
        <SummaryExpense />
      </div>
    </div>
  );
};

export default Page;
