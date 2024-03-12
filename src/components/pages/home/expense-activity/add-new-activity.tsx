import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import AddNewCategory from "./add-new-category";

const AddNewActivity = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <PlusIcon className="sm:w-6 sm:h-6 w-5 h-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h3 className="text-xl font-medium">Add Expense</h3>
          <form action="" className="mt-4 flex flex-col gap-2">
            <Input type="text" placeholder="0" className="" />
            <Input type="text" placeholder="Notes" />
            <AddNewCategory />
            <Button type="submit" className="w-full">
              Save
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewActivity;
