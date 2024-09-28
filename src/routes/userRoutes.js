import express from "express";

import {
  deleteUser,
  getUserDetail,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { getUserProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:username", getUserDetail);
router.put("/:username/edit", updateUser);
router.delete("/:username", deleteUser);

router.get("/:username/products", getUserProducts);

export default router;
