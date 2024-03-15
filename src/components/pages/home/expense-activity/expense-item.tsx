import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ExpenseItem = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-1 items-center w-3/4 overflow-hidden whitespace-nowrap">
            <p className="text-3xl">🎉</p>
            <div className="flex flex-col gap-1">
              <p className="text-sm sm:text-base ">
                Bought a new pair of shoes from Nikesssssssssss
              </p>
              <p className="text-sm sm:text-base text-slate-400">Grocery</p>
            </div>
          </div>
          <p className="text-sm sm:text-base font-bold text-red-500">
            -100,000
          </p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <h3 className="text-xl font-medium">Add New Category</h3>
          </DrawerTitle>
        </DrawerHeader>
        <p>test</p>
      </DrawerContent>
    </Drawer>
  );
};

export default ExpenseItem;
