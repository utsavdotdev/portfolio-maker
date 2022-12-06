import mongoose from "mongoose";
const url = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.brightCyan);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
  }
};
