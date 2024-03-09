import ExpenseItem from "./expense-item";

const ExpenseActivity = () => {
  return (
    <>
      <p className="mt-8 mb-4 text-sm sm:text-base text-slate-500">
        Activity Today
      </p>
      <div className="flex flex-col gap-3">
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
      </div>
    </>
  );
};

export default ExpenseActivity;
