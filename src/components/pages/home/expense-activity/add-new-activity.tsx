import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import AddNewCategory from "./add-new-category";

const AddNewActivity = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <PlusIcon className="sm:w-6 sm:h-6 w-5 h-5" />
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
            <AddNewCategory />
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
