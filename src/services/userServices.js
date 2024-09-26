import UserAccount from "../models/UserAccount.js";
import User from "../models/Users.js";

export const getAllUsers = async () => {
  return await User.find().populate("user_info");

  // const users = await User.find().populate("userDetail");
  // return users.map(user => {
  //   user.userDetail = user.userDetail ? user.userDetail[0] : null; // Extract the first userDetail or set it to null
  //   return user;
  // });
};

export const getUserByUsername = async (username) => {
  const user = await User.findOne({ username }).populate("user_info");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const updateUserByUsername = async (username, user) => {
  return await User.findOneAndUpdate({ username }, user, { new: true });
};

export const deleteUserByUsername = async (username) => {
  const user = await User.findOneAndDelete({ username });

  if (!user) {
    throw new Error(`User not found with ${username} username`);
  }
  await UserAccount.deleteMany({ user_id: user._id });
  // await user.remove();
  return user;
};
