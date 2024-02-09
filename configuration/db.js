import mongoose from "mongoose";

const connect = async () => {
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
