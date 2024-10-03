import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addUserAccount,
  getUserAccountDetail,
  getUserAccounts,
  updateUserAccount,
} from "../controllers/userAccountControllers.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getUserAccounts);
router.get("/:username", getUserAccountDetail);
router.post("/", addUserAccount);
router.put("/:username", updateUserAccount);

export default router;
