import User from "../models/Users.js";

const userOwnershipMiddleware = async (req, res, next) => {
  try {
    const loggedInUserId = req.user.id;
    const requestedUserId = req.params.id;

    const user = await User.findById(loggedInUserId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user._id.toString() !== requestedUserId) {
      return res.status(403).json({ message: "Unauthorized action" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default userOwnershipMiddleware;
