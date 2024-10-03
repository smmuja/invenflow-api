import UserAccount from "../models/UserAccount.js";
import User from "../models/Users.js";

export const getAllUserAccount = async () => {
  return await UserAccount.find({});
};

export const getUserAccountByUsername = async (username) => {
  const user = await User.findOne({ username }).populate("user_info");

  if (!user || !user.user_info) {
    throw new Error("User or user account not found");
  }

  return await UserAccount.findOne({ user_id: user._id });
};

export const createUserAccount = async (UserAccount) => {
  return await UserAccount.create(UserAccount);
};

export const updateUserAccountByUsername = async (
  username,
  userAccountData
) => {
  const user = await User.findOne({ username }).populate("user_info");

  if (!user || !user.user_info) {
    throw new Error("User or user account not found");
  }
  return await UserAccount.findByIdAndUpdate(
    user.user_info._id,
    userAccountData,
    {
      new: true,
    }
  );
};

export const removeUserAccountById = async (id) => {
  return await UserAccount.findByIdAndDelete(id);
};
