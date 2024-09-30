import UserAccount from "../models/UserAccount.js";
import User from "../models/Users.js";

export const getAllUsers = async () => {
  return await User.find({}, { password: 0 }).populate("user_info");
};

export const getUserByUsername = async (username) => {
  const user = await User.findOne({ username }, { password: 0 }).populate(
    "user_info"
  );

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
