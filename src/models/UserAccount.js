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
      default: null,
      trim: true,
    },
    last_name: {
      type: String,
      default: null,
      trim: true,
    },
    bio: {
      type: String,
      default: null,
    },
    phone_number: {
      type: String,
      match: [/^[0-9]+$/, "Phone number should only contain digits"],
      unique: [true, "phone number is already in use"],
      default: null,
    },
    gender: {
      type: String,
      enum: ["male", "female", "rather not say"],
      default: null,
    },
  },
  { timestamps: true }
);

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

export default UserAccount;
