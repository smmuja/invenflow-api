import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import productRoutes from "./src/routes/productRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

connectDB();

const originLocal = process.env.ORIGIN_DEV;
const originProd = process.env.ORIGIN_PROD;

const corsOptions = [
  {
    origin: `${originLocal}`,
    optionsSuccessStatus: 200,
  },
  {
    origin: `${originProd}`,
    optionsSuccessStatus: 200,
  },
];
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Invenflow API");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
