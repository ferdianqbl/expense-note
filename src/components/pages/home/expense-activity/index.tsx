import AddNewActivity from "./add-new-activity";
import ExpenseItem from "./expense-item";

const ExpenseActivity = () => {
  return (
    <div className="relative">
      <div className="w-full sticky z-10 top-0 py-4 left-0 right-0 mt-4 text-sm sm:text-base text-slate-500 bg-white dark:bg-black flex items-center justify-between">
        <p className="">Activity Today</p>
        <AddNewActivity />
      </div>
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
    </div>
  );
};

export default ExpenseActivity;
