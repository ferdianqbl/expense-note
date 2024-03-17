"use server";
import { cookies } from "next/headers";

export const serverSaveToken = (token: string) => {
  cookies().set("token", token);
};
