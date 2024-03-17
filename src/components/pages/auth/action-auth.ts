"use server";

import prisma from "@/lib/prisma";
import { serverSaveToken } from "@/lib/token/token-server";
import { APIResponseType } from "@/lib/types/api";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerAction = async (username: string, password: string) => {
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
        token: "",
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

export const loginAction = async (username: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return {
        error: true,
        status: "error",
        message: "Invalid username or password",
      } as APIResponseType;
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return {
        error: true,
        status: "error",
        message: "Invalid username or password",
      } as APIResponseType;
    }

    const userData = {
      id: user?.id,
      userId: user?.userId,
      username: user?.username,
      photo: user?.photo || "",
    };

    const token = jwt.sign(
      {
        data: userData,
      },
      process.env.JWT_SECRET || "",
      {
        expiresIn: 60 * 60,
      }
    );

    serverSaveToken(token);

    return {
      error: false,
      status: "success",
      message: "Login success",
      data: token,
    } as APIResponseType;
  } catch (error: any) {
    return {
      error: true,
      status: "error",
      message: error.message || "Something went wrong",
    } as APIResponseType;
  }
};
