import { getAllUsers } from "../services/userServices.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({ data: users, message: "Get users" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
