import express from "express";

import {
  deleteUser,
  getUserDetail,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:username", getUserDetail);
router.put("/:username/edit", updateUser);
router.delete("/:username", deleteUser);

export default router;
