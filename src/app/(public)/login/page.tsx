import FormLogin from "@/components/pages/auth/form-login";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col w-full items-center min-h-screen justify-center">
      <h1 className="text-xl font-bold">Welcome to Expensepedia.</h1>
      <p className="text-sm dark:text-slate-400 text-slate-500">
        Start track your expenses with us.
      </p>
      <hr className="border-b h-[1px] w-full my-4" />
      <div className="py-4 w-full">
        <FormLogin />
      </div>
      <p className="text-sm dark:text-slate-400 text-slate-500">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Page;
