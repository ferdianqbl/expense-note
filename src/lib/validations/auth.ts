import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(3).max(255),
  password: z.string().min(6).max(255),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  username: z.string().min(3).max(255),
  password: z.string().min(6).max(255),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
