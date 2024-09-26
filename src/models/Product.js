import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
