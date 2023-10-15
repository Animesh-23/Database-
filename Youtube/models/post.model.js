import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  description: { type: String, required: true },
  image: { type: Buffer },
  created_on: { type: Date, default: new Date() },
  channel: { type: mongoose.ObjectId, ref: User },
  likes: [{ type: mongoose.ObjectId, ref: User }],
  dislikes: [{ type: mongoose.ObjectId, ref: User }],
  comments: [
    {
      comment: { type: String, required: true },
      user: { type: mongoose.ObjectId, ref: User },
      posted_on: { type: Date, default: new Date() },
      likes: [{ type: mongoose.ObjectId, ref: User }],
      dislikes: [{ type: mongoose.ObjectId, ref: User }],
      replies: [
        {
          user: { type: mongoose.ObjectId, ref: User },
          reply: { type: String },
          replied_on: { type: Date, default: new Date() },
        },
      ],
    },
  ],
});

const Post = new mongoose.model("Post", postSchema);

export default Post;
