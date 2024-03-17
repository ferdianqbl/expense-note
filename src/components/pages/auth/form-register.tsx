"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register as registerAction } from "./action-auth";
import { useForm, FieldValues } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const FormRegister = () => {
  const { toast } = useToast();
  const { push } = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const res = await registerAction(data.username, data.password);
    if (res.error) {
      reset();
      return toast({
        title: "Register failed",
        description: res.message,
        variant: "destructive",
      });
    }
    toast({
      title: "Register success",
      description: res.message,
      variant: "success",
    });
    push("/login");
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
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
