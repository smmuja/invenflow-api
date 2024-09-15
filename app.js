import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import productRoutes from "./src/routes/productRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from Bootcamp Day 2");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
