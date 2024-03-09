const ExpenseActivity = () => {
  return (
    <>
      <p className="mt-8 mb-3 text-sm sm:text-base text-slate-500">
        Activity Today
      </p>
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-3">
          <div className="flex gap-1 items-center">
            <p className="text-3xl">🎉</p>
            <div className="flex flex-col gap-1 text-clip">
              <p className="text-sm sm:text-base  whitespace-nowrap">
                Bought a new pair of shoes from Nike
              </p>
              <p className="text-sm sm:text-base text-slate-400">Grocery</p>
            </div>
          </div>
          <p className="text-sm sm:text-base font-bold text-red-500">
            -100,000
          </p>
        </div>
      </div>
    </>
  );
};

export default ExpenseActivity;
