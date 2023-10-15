import mongoose from "mongoose";
import User from "./user.model";

const postSchema = new mongoose.Schema({
  user: { type: mongoose.ObjectId, ref: User },
  image: { type: Buffer, required: true },
  posted_on: { type: Date, default: new Date() },
  like: [{ type: mongoose.ObjectId, ref: User }],
  comment: [
    {
      comment: { type: moongoose.Mixed, required: true },
      user: { type: mongoose.ObjectId, ref: User },
    },
  ],
});

const Post = new mongoose.model("Post", postSchema);

export default Post;
