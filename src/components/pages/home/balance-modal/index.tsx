import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "@/components/ui/input";
import { Pencil2Icon, PlusIcon } from "@radix-ui/react-icons";

const BalanceModal = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="focus:outline-none">
        <Button
          variant={"link"}
          size={"icon"}
          type="button"
          className="flex items-center"
        >
          <Pencil2Icon className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <h3 className="text-xl font-medium">Edit Balance</h3>
          </DrawerTitle>
          <DrawerDescription>
            <p className="text-sm text-gray-500">
              Edit your balance for this month.
            </p>
          </DrawerDescription>
        </DrawerHeader>
        <form action="" className="mt-4 flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="0" className="" />
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

export default BalanceModal;
