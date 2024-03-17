"use server";

import prisma from "@/lib/prisma";
import { APIResponseType } from "@/lib/types/api";
import bcrypt from "bcrypt";

export const register = async (username: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      return {
        error: true,
        status: "error",
        message: "Username already exists",
      } as APIResponseType;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return {
      error: false,
      status: "success",
      message: "User created",
      data: res,
    } as APIResponseType;
  } catch (error: any) {
    return {
      error: true,
      status: "error",
      message: error.message || "Something went wrong",
    } as APIResponseType;
  }
};
