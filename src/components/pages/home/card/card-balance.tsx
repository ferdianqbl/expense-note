import BalanceModal from "../balance-modal";

const CardBalance = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <BalanceModal />
      </div>
      <div className="p-4 rounded-md border dark:border-green-300 border-green-500 w-full text-center">
        <p className="text-sm">Your Balance</p>
        <h3 className="text-3xl font-bold">$1000</h3>
        <p className="text-sm">This month</p>
      </div>
    </div>
  );
};

export default CardBalance;
