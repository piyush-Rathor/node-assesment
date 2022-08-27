import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const BlogModel = mongoose.model("blog", blogSchema);
