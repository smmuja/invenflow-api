import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting to database");
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "invenflow",
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};
