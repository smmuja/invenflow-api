import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import UserAccount from "./UserAccount.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Provide a username"],
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
      required: [true, "Provide a username"],
      validate: {
        validator: function (uname) {
          return /^[a-zA-Z0-9_]+$/.test(uname);
        },
        message: "Username must contains only letter, number, and underscore",
      },
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.virtual("user_info", {
  ref: "UserAccount",
  localField: "_id",
  foreignField: "user_id",
  justOne: true,
});

// Cascade delete user account
userSchema.pre("remove", async function (next) {
  try {
    await UserAccount.deleteMany({ user_id: this._id });
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });
const User = mongoose.model("User", userSchema);
export default User;
