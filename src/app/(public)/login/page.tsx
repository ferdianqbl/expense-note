import FormLogin from "@/components/pages/auth/form-login";
import Link from "next/link";

const Page = () => {
  return (
    <div className="py-4 w-full">
      <h1 className="text-xl font-bold text-center">
        Welcome to Expensepedia.
      </h1>
      <p className="text-sm dark:text-slate-400 text-slate-500 text-center">
        Start track your expenses with us.
      </p>
      <hr className="border-b h-[1px] w-full my-4" />
      <div className="py-4 w-full">
        <FormLogin />
      </div>
      <p className="text-sm dark:text-slate-400 text-slate-500 text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Page;
