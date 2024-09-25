import User from "../models/Users.js";

export const getAllUsers = async () => {
  return await User.find({});
};
