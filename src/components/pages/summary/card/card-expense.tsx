import React from "react";

const SummaryExpense = () => {
  return (
    <div className="p-4 rounded-md border dark:border-red-300 border-red-500 w-full text-center">
      <p className="text-sm">Your Expense</p>
      <p className="text-3xl font-bold">$1000</p>
      <p className="text-sm">This month</p>
    </div>
  );
};

export default SummaryExpense;
