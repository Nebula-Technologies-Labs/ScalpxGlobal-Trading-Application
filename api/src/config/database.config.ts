import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
      console.log("Database Connected...")
  } catch (error) {
    console.error("Error Connecting Database...");
  }
};

export default dbConnect;
