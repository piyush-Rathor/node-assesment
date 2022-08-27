import { BlogModel } from "../models/blog.model.js";
import mongoose from "mongoose";

export const getPosts = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find().lean().exec();
    return res.success("get Posts Successfully", blogs);
  } catch (error) {
    return res.error(error.message);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const blog = await BlogModel.findById(
      new mongoose.Types.ObjectId(req.params.id)
    )
      .lean()
      .exec();
    return res.success("get Posts Successfully", blog);
  } catch (error) {
    return res.error(error.message);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const blog = new BlogModel({
      title,
      description,
    });
    await blog.save();
    return res.successfullyCreated("create Post Successfully", blog);
  } catch (error) {
    return res.error(error.message);
  }
};
