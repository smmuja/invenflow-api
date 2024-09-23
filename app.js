import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import productRoutes from "./src/routes/productRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Invenflow API");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
