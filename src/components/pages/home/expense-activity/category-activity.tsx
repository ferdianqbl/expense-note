import { Button } from "@/components/ui/button";
import AddNewCategory from "./add-new-category";

const CategoryActivity = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <AddNewCategory />
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

export default CategoryActivity;
