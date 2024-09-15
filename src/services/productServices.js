import Product from "../models/Product.js";

export const getAllProducts = async () => {
  return await Product.find({});
};

export const getProductById = async (id) => {
  return await Product.findById(id);
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
