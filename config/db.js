import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://KikoG:KikoG@cluster0.vkuxeqz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
