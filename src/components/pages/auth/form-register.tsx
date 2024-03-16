import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FormRegister = () => {
  return (
    <form className="w-full flex flex-col gap-2">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Button type="submit" className="mt-8">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
