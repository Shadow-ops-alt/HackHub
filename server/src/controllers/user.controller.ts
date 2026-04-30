import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma.js";
import { createUserSchema } from "../validators/user.validator.js";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsed = createUserSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.errors,
      });
    }

    const { name, email } = parsed.data;

    const user = await prisma.user.create({
      data: { name, email },
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    next(error);
  }
};