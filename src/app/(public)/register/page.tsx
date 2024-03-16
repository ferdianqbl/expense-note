import FormRegister from "@/components/pages/auth/form-register";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full py-4">
      <h1 className="text-xl font-bold text-center">
        Welcome to Expensepedia.
      </h1>
      <p className="text-sm dark:text-slate-400 text-slate-500 text-center">
        Register for a new account.
      </p>
      <hr className="border-b h-[1px] w-full my-4" />
      <div className="py-4 w-full">
        <FormRegister />
      </div>
      <p className="text-sm dark:text-slate-400 text-slate-500 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Page;
