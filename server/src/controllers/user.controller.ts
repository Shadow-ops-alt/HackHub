import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email required" });
  }

  const user = await prisma.user.create({
    data: { name, email },
  });

  res.status(201).json(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};