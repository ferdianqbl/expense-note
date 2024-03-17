"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginSchemaType, RegisterSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { loginAction } from "./action-auth";
import { useToast } from "@/components/ui/use-toast";

const FormLogin = () => {
  const { toast } = useToast();
  const { push } = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const res = await loginAction(data.username, data.password);
    if (res.error) {
      reset();
      return toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
    toast({
      title: "Login success",
      description: "You have successfully logged in",
      variant: "success",
    });
    console.log(res.data);
  };
  return (
    <form
      className="w-full flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <Input type="text" placeholder="username" {...register("username")} />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <Button type="submit" className="mt-8" disabled={isSubmitting}>
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
