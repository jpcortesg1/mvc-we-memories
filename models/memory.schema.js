// Import dependences
// External
import mongoose from "mongoose";

// Model for memories
const MemorySchema = new mongoose.Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    urlImage: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Memory", MemorySchema);
