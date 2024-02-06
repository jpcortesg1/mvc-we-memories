import mongoose from "mongoose";

const connect = async () => {
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
