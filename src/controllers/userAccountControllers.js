import {
  getAllUserAccount,
  updateUserAccountByUsername,
} from "../services/userAccountServices.js";
import User from "../models/Users.js";
import UserAccount from "../models/UserAccount.js";

export const getUserAccounts = async (req, res) => {
  try {
    const userAccounts = await getAllUserAccount();
    res.status(200).json({
      data: userAccounts,
      message: "User accounts retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addUserAccount = async (req, res) => {
  try {
    const userId = req.user.id;

    const userAccountData = {
      ...req.body,
      user_id: userId, // Automatically set user_id
    };
    const userAccount = new UserAccount(userAccountData);

    await userAccount.save();

    const user = await User.findById(userId).populate("user_info");
    // user.userDetail.push(userDetail);
    await user.save();

    res.status(200).json({
      data: userAccount,
      message: "User account created",
      user: user, // optionally include user populated with userDetail
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserAccount = async (req, res) => {
  const { username } = req.params;
  const userAccountData = req.body;
  try {
    const updatedUserInfo = await updateUserAccountByUsername(
      username,
      userAccountData
    );
    res.status(200).json({
      data: updatedUserInfo,
      message: "Successfully updated user account",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
