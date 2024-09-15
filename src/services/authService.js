import bcrypt from "bcryptjs";
import User from "../models/Users.js";
import jwt from "jsonwebtoken";

export const registerUser = async ({ name, email, password }) => {
  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new Error("User already exist");
  }

  const user = await User.create({ name, email, password });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error(`User with this email: ${email} is not registered`);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
};
