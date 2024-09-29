import bcrypt from "bcryptjs";
import User from "../models/Users.js";
import jwt from "jsonwebtoken";

export const registerUser = async ({ username, email, password }) => {
  const userExist = await User.findOne({ email });

  if (userExist) {
    throw new Error(`User already exist with ${email} email`);
  }
  const usernameExist = await User.findOne({ username });

  if (usernameExist) {
    throw new Error(`User already exist with ${username} username`);
  }

  const user = await User.create({ username, email, password });

  return {
    id: user._id,
    username: user.username,
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

  const tokenPayload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { token, user: tokenPayload };
};
