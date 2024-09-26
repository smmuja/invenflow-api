import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addUserAccount,
  getUserAccounts,
  updateUserAccount,
} from "../controllers/userAccountControllers.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getUserAccounts);
router.post("/", addUserAccount);
router.put("/:username", updateUserAccount);

export default router;
