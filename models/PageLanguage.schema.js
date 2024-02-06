import mongoose from "mongoose";

const PageLanguageSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PageLanguage", PageLanguageSchema);