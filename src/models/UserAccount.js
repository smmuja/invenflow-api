import mongoose, { Schema } from "mongoose";

const UserAccountSchema = new mongoose.Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
    },
    phone_number: {
      type: Number,
    },
  },
  { timestamps: true }
);

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

export default UserAccount;
