import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  deleteUser,
  getUserDetail,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { getUserProducts } from "../controllers/productController.js";
import userOwnershipMiddleware from "../middleware/userOwnershipMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getUsers);
router.get("/:username", getUserDetail);
router.put("/:username/edit", userOwnershipMiddleware, updateUser);
router.delete("/:username", userOwnershipMiddleware, deleteUser);

router.get("/:username/products", getUserProducts);

export default router;
