import Product from "../models/Product.js";

const productOwnershipMiddleware = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.user_id.toString() !== userId) {
      return res.status(403).json({ message: "Unauthorized action" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default productOwnershipMiddleware;
