import Product from "../models/Product.js";
import User from "../models/Users.js";

export const getAllProducts = async () => {
  return await Product.find().populate({
    path: "user_id",
    select: "_id username email",
  });
};

export const getProductsByUsername = async (username) => {
  const user = await User.findOne({ username }).select("_id username");

  if (!user) {
    throw new Error(`User not found with username: ${username}`);
  }

  const products = await Product.find({ user_id: user._id }).populate({
    path: "user_id",
    select: "_id email username",
  });

  if (products.length === 0) {
    return { message: "No products found for this user." };
  }

  return products;
};

export const getProductById = async (id) => {
  return await Product.findById(id).populate({
    path: "user_id",
    select: "_id username email",
  });
};

export const createProduct = async (product) => {
  return await Product.create(product);
};

export const updateProductById = async (id, product) => {
  return await Product.findByIdAndUpdate(id, product, { new: true });
};

export const removeProductById = async (id) => {
  return await Product.findByIdAndDelete(id);
};
