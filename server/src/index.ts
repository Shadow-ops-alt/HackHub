import express from "express";
import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running!");
});

app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  res.status(500).json({ error: "Something went wrong"});
});

