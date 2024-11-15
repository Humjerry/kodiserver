import mongoose from "mongoose";
import { User } from "./models/User.js";

export const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongo db");
    
  } catch (error) {
    console.log(error);
  }
};
