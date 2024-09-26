import {
  deleteUserByUsername,
  getAllUsers,
  getUserByUsername,
  updateUserByUsername,
} from "../services/userServices.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ data: users, message: "Get users" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserDetail = async (req, res) => {
  try {
    const { username } = req.params;

    const userDetail = await getUserByUsername(username);

    res.status(200).json({
      data: userDetail,
      message: "User Detail retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { username } = req.params;
  const user = req.body;

  try {
    const updateUser = await updateUserByUsername(username, user);
    res.status(200).json({
      data: updateUser,
      message: "User updated",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { username } = req.params;

  try {
    const deletedUser = await deleteUserByUsername(username);
    res.status(200).json({
      data: deletedUser,
      message: `User ${username} deleted`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
