import { Button } from "@/components/ui/button";
import { PlusIcon, RocketIcon } from "@radix-ui/react-icons";

const AddNewCategory = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant={"ghost"}
        size={"icon"}
        type="button"
        className="flex items-center gap-1 rounded-full border"
      >
        <PlusIcon className="w-4 h-4" />
      </Button>
      <Button
        variant={"ghost"}
        type="button"
        className="flex items-center gap-1 rounded-full border"
      >
        🎉
        <p className="text-xs sm:text-sm">Food</p>
      </Button>
      <Button
        variant={"ghost"}
        type="button"
        className="flex items-center gap-1 rounded-full border"
      >
        🎉
        <p className="text-xs sm:text-sm">Food</p>
      </Button>
      <Button
        variant={"ghost"}
        type="button"
        className="flex items-center gap-1 rounded-full border"
      >
        🎉
        <p className="text-xs sm:text-sm">Food</p>
      </Button>
      <Button
        variant={"ghost"}
        type="button"
        className="flex items-center gap-1 rounded-full border"
      >
        🎉
        <p className="text-xs sm:text-sm">Food</p>
      </Button>
    </div>
  );
};

export default AddNewCategory;
