import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose
      .connect(baseUrl)
      .then(() => console.log("Database is connected successfully"))
      .catch((err) =>
        console.log("Error while connecting the DB", err.message)
      );
  } catch (err) {
    console.log("Error while connecting the database", err.message);
  }
};
