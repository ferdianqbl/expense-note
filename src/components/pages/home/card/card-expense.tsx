import React from "react";

const CardExpense = () => {
  return (
    <div className="p-4 rounded-md border dark:border-red-300 border-red-500 w-full text-center">
      <span className="text-sm">Your Expense</span>
      <div className="text-3xl font-bold">$1000</div>
      <span className="text-sm">Today</span>
    </div>
  );
};

export default CardExpense;
