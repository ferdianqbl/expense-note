import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import CategoryActivity from "./category-activity";

const AddNewActivity = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="focus:outline-none">
        <Button variant={"outline"} className="ms-auto" size={"icon"}>
          <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <h3 className="text-xl font-medium">Add Expense</h3>
          </DrawerTitle>
        </DrawerHeader>
        <form action="" className="mt-4 flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="0" className="" />
            <Input type="text" placeholder="Notes" />
            <CategoryActivity />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit" className="w-full">
              Save
            </Button>
            <DrawerClose>
              <Button variant="outline" className="w-full" type="button">
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default AddNewActivity;
