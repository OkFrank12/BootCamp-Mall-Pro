import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const registerDispatchAuth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const salted = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salted);
  } catch (error: any) {
    return res.status(404).json({
      message: "error registering dispatcher",
      data: error.message,
    });
  }
};
