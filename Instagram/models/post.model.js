import mongoose from "mongoose";
import User from "./user.model";

const postSchema = new mongoose.Schema({
  image: { type: Buffer, required: true },
  caption: { type: String },
  user: { type: mongoose.ObjectId, ref: User },
  likes: [{ type: mongoose.ObjectId, ref: User }],
  dislikes: [{ type: mongoose.ObjectId, ref: User }],
  comments: [{ body: String, user: mongoose.ObjectId, ref: User }],
  createdAt: { type: Date, default: new Date() },
});

const Post = new mongoose.model("Post", postSchema);

export default Post;
