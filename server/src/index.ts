import express from "express";
import "dotenv/config";

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



