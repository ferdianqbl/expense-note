"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { TokenResponseType } from "../types/token";

export const serverSaveToken = (token: string) => {
  cookies().set("token", token);
};

export const serverTokenVerify = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    return {
      error: false,
      status: "success",
      message: "Token verified",
      data: decoded,
    } as TokenResponseType;
  } catch (err) {
    return {
      error: true,
      status: "error",
      message: "Token not verified",
    } as TokenResponseType;
  }
};
