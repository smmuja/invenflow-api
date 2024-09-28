import express from "express";
import {
  getProducts,
  addProduct,
  getProductDetail,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import productOwnershipMiddleware from "../middleware/productOwnershipMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

// router.get("/", authMiddleware,  getProducts);
router.get("/", getProducts);
router.get("/:id", getProductDetail);

router.post("/", addProduct);
router.put("/:id", productOwnershipMiddleware, updateProduct);
router.delete("/:id", productOwnershipMiddleware, deleteProduct);

export default router;
