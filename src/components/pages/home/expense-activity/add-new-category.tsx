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

const AddNewCategory = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button
          variant={"ghost"}
          size={"icon"}
          type="button"
          className="flex items-center gap-1 rounded-full border"
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <h3 className="text-xl font-medium">Add New Category</h3>
          </DrawerTitle>
        </DrawerHeader>
        <form action="" className="mt-4 flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="🎇 Icon" className="" />
            <Input type="text" placeholder="Name" />
            {/* <CategoryActivity /> */}
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

export default AddNewCategory;
